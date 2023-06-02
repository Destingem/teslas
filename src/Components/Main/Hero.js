import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";
import image from "../../../public/images/tesla.png";
import useMobile from "../UI/useMobile";
const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.colors.gray[0],
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
    color: theme.colors.redM
  },
}));

export default function Hero() {
  const { classes } = useStyles();
  const theme = useMantineTheme();
    const mobile = useMobile();
  return (
    <div>
      <Container size={mobile ? "95%" : "80%"}>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title} size={mobile ? "10vw !important" : ""}>
              Poznejte rychlost{" "}
              <span className={classes.highlight}>budoucnosti</span>
            </Title>
            <Text color={theme.colors.grayM[2]} mt="md" size={"lg"}>
              S naší Tesla Model S můžete oživit vaše zážitkové jízdy, firemní
              akce, cestování či jakoukoli společenskou událost, jako je svatba.
              Pronájem tohoto luxusního a inovativního vozu přináší nejen
              exkluzivitu, ale také vzrušení a radost z jízdy, které překonává
              všechna očekávání. Nechte nás převést vaše události na nový level.
              S naší Tesla Model S je každá cesta nejen cílem, ale také
              nezapomenutelným zážitkem. Poznejte rychlost budoucnosti s námi.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon color={theme.colors.redM} size={20} radius="xl">
                  <IconCheck size={rem(12)} stroke={3} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Pojištěno</b> – naše Tesla S je pojistěna do výše 10 milionů. Nemusíte se tedy bát, že byste museli platit za případné škody.
              </List.Item>
              <List.Item>
                <b>Energie zdarma</b> – Teslu vám poskytujeme jako službu
              </List.Item>
              <List.Item>
                <b>Zkušení řidiči</b> – focus ring will appear only when
                user navigates with keyboard
              </List.Item>
              <List.Item>
                <b>Asistence</b> – Pokud jedete sami, například na společensklou událost, máme smluvenou asistenční službu s přistavením náhradního vozu v případě poruchy.
              </List.Item>
            </List>

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
          <Image src={image.src} className={classes.image} />
        </div>
      </Container>
    </div>
  );
}
