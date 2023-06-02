import { createStyles, Text, Title, TextInput, Button, Image, rem, Group } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: `calc(${theme.spacing.xl} * 2)`,
    paddingTop: "0",
    paddingBottom: "0",
    paddingRight: "0",
    borderRadius: theme.radius.md,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: '40%',
    borderRadius: theme.radius.md,

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan('sm')]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },

  inputWrapper: {
    width: '100%',
    flex: '1',
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
   
  },
}));

export default function CTA() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title component="h2" className={classes.title}>Od vaší jízdy vás dělí jen jeden krok</Title>
        <Text fw={500} fz="lg" mb={5}>
          Pokud si nejste jisti nebo se na něco chtete zeptat, stačí nám zavolat na <Link href="tel:685554325">+420 685 554 325</Link>, napsat nám mail na <Link href="mailto:ondrej@ondrejzaplatilek.cz">ondrej@ondrejzaplatilek.cz</Link> nebo jen napsat vaše telefonní číslo zde.
        </Text>
        <Text component="h3" fz="sm" c="dimmed">
         Během 48 hodin se vám ozveme a domluvíme si vše potřebné. Rezervaci můžete zrušit kdykoliv až do 24 hodin předem.
        </Text>

        <div className={classes.controls}>
          <TextInput
            placeholder="Vaše telefonní číslo"
            classNames={{ input: classes.input, root: classes.inputWrapper }}
          />
          <Button color='red' className={classes.control}>Jdu do toho!</Button>
        </div>
        <Group mt={30}>
              <Button color={"red"} radius="xl" size="md" className={classes.control}>
                Rezervovat jízdu
              </Button>
              <Button
                variant="default"
                radius="xl"
                size="md"
                className={classes.control}
              >
                Nabídka služeb
              </Button>
            </Group>
      </div>
      <Image src={"/images/carDriving.jpg"} className={classes.image} />
    </div>
  );
}