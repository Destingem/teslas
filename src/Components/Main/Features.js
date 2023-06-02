import { ThemeIcon, Text, Title, Container, SimpleGrid, createStyles, rem, useMantineTheme } from '@mantine/core';
import { IconGauge, IconCookie, IconUser, IconMessage2, IconLock } from '@tabler/icons-react';
import { GiSteeringWheel } from 'react-icons/gi';
import { FaUserAlt, FaTaxi } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import useMobile from '../UI/useMobile';
//import {MdsOutlinedAssistantNavigation } from 'react-icons/mds';

export const SERVICES_DATA = [
    {
      icon: GiSteeringWheel,
      title: 'Neuvěřitelný zážitek jízdy',
      description:
        'Zážitek jízdy v naší Tesla Model S překoná vaše očekávání. Prožijte adrenalinovou jízdu s autem, které zvládne zrychlení z 0 na 100 km/h během několika sekund.',
    },
    {
      icon: FaUserAlt,
      title: 'Exkluzivita pro vaše firemní akce',
      description:
        'Dodáme šmrnc vašim firemním akcím. Naše Tesla Model S zaujme všechny účastníky a zároveň podpoří image vaší firmy jako moderní a inovativní.',
    },
    {
      icon: AiFillHeart,
      title: 'Unikátní doplněk k společenským akcím',
      description:
        'Ať už je to svatba, oslava narozenin nebo jiná speciální příležitost, naše Tesla Model S přidá ten správný lesk a vytvoří nezapomenutelné momenty.',
    },
    {
      icon: FaTaxi,
      title: 'Komfort a styl v našem "elektro-taxi"',
      description:
        'Poskytujeme prvotřídní taxi služby s naší Tesla Model S. Užijte si pohodlí, tichost a rychlost elektrického vozu na cestách po městě nebo na delší trasy.',
    },
    {
      icon: FaTaxi,
      title: 'Podpora 24/7',
      description:
        'Jsme vám k dispozici 24 hodin denně, 7 dní v týdnu. Ať už máte jakékoli otázky nebo potřebujete pomoc, naše tým je připraven vám pomoci.',
    },
  ];
  



export function Feature({ icon: Icon, title, description }) {
    const theme = useMantineTheme();
    const mobile = useMobile();
  return (
    <div>
      <ThemeIcon variant="light" color='red' size={75} radius={40}>
        <Icon size="2rem" stroke={1.5} />
      </ThemeIcon>
      <Text size={mobile ? "lg" : "1vw"} mt="sm" mb={7} weight={600} color={theme.colors.grayM[2]}>
        {title}
      </Text>
      <Text size={mobile ? "md" : "0.8vw"} color="dimmed" sx={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  );
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    marginBottom: theme.spacing.md,
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      fontSize: rem(28),
      textAlign: 'left',
    },
  },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}));



export default function Features({ title, description, data = SERVICES_DATA }) {
  const { classes } = useStyles();
  const features = data.map((feature, index) => <Feature {...feature} key={index} />);
const theme = useMantineTheme();
const mobile = useMobile();
  return (
    <Container className={classes.wrapper} size={"80%"}>
       <Text component="h2" color={theme.colors.grayM[2]} align={mobile ? "center" : "left"} size={mobile ? "10vw" : "3vw"} weight={700} sx={{   transition: "all 0.3s ease-in-out", marginBottom: "3vh" }}>
        Proč my?
            </Text>

      <Container size={560} p={0}>
        <Text size="sm" className={classes.description}>
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={3}
        spacing={50}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}