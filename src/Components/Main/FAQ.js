import {
  Container,
  Title,
  Accordion,
  createStyles,
  rem,
  useMantineTheme,
  Text,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: 650,
    width: "100%",
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  item: {
    backgroundColor: theme.colors.red[0],
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${theme.colors.red[0]}`,
  },
}));

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

export function FAQ({ mobile }) {
  const { classes } = useStyles();
  const theme = useMantineTheme();
  return (
    <Container size={mobile ? "95%" : "60%"} className={classes.wrapper}>
      <Text
        component="h2"
        color={theme.colors.grayM[2]}
        align="center"
        size={mobile ? "10vw" : "3vw"}
        weight={700}
        sx={{ transition: "all 0.3s ease-in-out", marginBottom: "3vh" }}
      >
        Často kladené dotazy (FAQ)
      </Text>

      <Accordion variant="separated">
        <Accordion.Item className={classes.item} value="reset-password">
          <Accordion.Control>
            Jak si mohu rezervovat Tesla Model S?
          </Accordion.Control>
          <Accordion.Panel>
            Rezervace vozu je možná online přímo na našem webu. Stačí si vybrat
            termín, který vám vyhovuje, a sledovat pokyny pro dokončení
            rezervace.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="another-account">
          <Accordion.Control>
            Jaké jsou podmínky pro pronájem vozu?
          </Accordion.Control>
          <Accordion.Panel>
            Pro pronájem vozu musíte být starší 21 let a vlastnit platný
            řidičský průkaz. Také budete muset poskytnout platnou kreditní kartu
            pro záruku.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="newsletter">
          <Accordion.Control>
            Jak dlouho mohu auto pronajmout?
          </Accordion.Control>
          <Accordion.Panel>
            Auto si můžete pronajmout na jakoukoli dobu, od jedné hodiny až po
            několik dní. Pro delší období nás prosím kontaktujte. Jak rychle
            může Tesla Model S jet? - Tesla Model S je jedním z nejrychlejších
            elektrických vozů na světě a může zrychlit z 0 na 100 km/h během
            několika sekund. Nicméně, doporučujeme dodržovat platné dopravní
            předpisy a bezpečnostní rady.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="credit-card">
          <Accordion.Control>
          Kde můžu Tesla Model S nabít?
          </Accordion.Control>
          <Accordion.Panel>
          Vůz můžete nabíjet na jakékoli veřejné nabíjecí stanici pro elektrické vozy. K vozu také poskytujeme domácí nabíjecí kabel, který můžete použít v běžné elektrické zásuvce.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item className={classes.item} value="payment">
          <Accordion.Control>
          Je Tesla Model S bezpečná?
          </Accordion.Control>
          <Accordion.Panel>
          Ano, Tesla Model S je jedno z nejbezpečnějších vozů na silnici. Je vybavena mnoha bezpečnostními funkcemi, včetně pokročilých asistenčních systémů pro řidiče.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
