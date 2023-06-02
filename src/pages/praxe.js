import useMobile from "@/Components/UI/useMobile";
import {
  Text,
  Title,
  Paper,
  Col,
  Container,
  Image,
  useMantineTheme,
  Mark,
  SimpleGrid,
} from "@mantine/core";
import Link from "next/link";

export default function Praxe() {
  const theme = useMantineTheme();
  const mobile = useMobile();
  return (
    <div style={{ minHeight: "100vh", paddingTop: "8vh" }}>
      <Container
        size={"70%"}
        sx={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          gap: "5vh",
        }}
      >
        <Text
          component="h1"
          color={theme.colors.grayM[2]}
          align="center"
          size={mobile ? "10vw" : "4vw"}
          weight={700}
          sx={{ transition: "all 0.3s ease-in-out", marginBottom: "3vh" }}
        >
          Praxe Ondřeje Zaplatílka
        </Text>
        <Text align="left" size={mobile ? "5vw" : "2vw"}>
          Vítejte v naší sekci 'O nás', kde si můžete blíže představit náš tým a
          naše služby. Jako váš spolehlivý partner v oblasti pronájmu vozů se
          zvláštním zaměřením na vozy{" "}
          <Text weight={500} component="span" color={theme.colors.redM}>
            Tesla Model S
          </Text>
          , jsme tu, abychom vám poskytli jedinečný zážitek z jízdy elektrickým
          vozem.
        </Text>
        <Text
          component="h2"
          color={theme.colors.grayM[2]}
          align="left"
          size={mobile ? "8vw" : "3vw"}
          weight={700}
          sx={{ transition: "all 0.3s ease-in-out", marginBottom: "3vh" }}
        >
          Krátké představení firmy
        </Text>
        <Text align="left" size={mobile ? "5vw" : "xl"}>
          Ing. Jiří Sedláček je odborníkem v oblasti kybernetiky a začínajícím
          podnikatelem ve světě technologických inovací. Pan Sedláček je
          vystudovaný kybernetik s širokým záběrem do oblasti umělé inteligence
          a dalších technologických disciplín. Spolupracovali jsme na široké
          škále projektů, které zahrnují různé technologické oblasti, od vývoje
          webových stránek a aplikací, přes kybernetickou bezpečnost až po
          Electron aplikaci pro management sportovních událostí. Během mé praxe
          u něj jsem zastával roli front-end vývojáře, avšak v electronu jsem
          pracoval i na backendové komunikaci s mongoDB a file systémem.
        </Text>
        <Text
          component="h2"
          color={theme.colors.grayM[2]}
          align="left"
          size={mobile ? "8vw" : "3vw"}
          weight={700}
          sx={{ transition: "all 0.3s ease-in-out", marginBottom: "3vh" }}
        >
          Průběh praxe
        </Text>
        <Text align="left" size={mobile ? "5vw" : "xl"}>
          Můj hlavní úkol spočíval v návrhu a vývoji uživatelských rozhraní pro
          různé webové projekty. Spolupracoval jsem při vývoji webové stránky
          pro pronájem automobilů Tesla model S a také na vývoji e-shopu a
          managementové aplikace pro sportovní střelbu. Moje role nebyla omezena
          pouze na vývoj – byl jsem také zapojen do plánování a konceptualizace
          projektů, komunikace s klientem a stanovování funkcionalit webu. Tato
          zkušenost mi umožnila pochopit celý proces vývoje od definování
          požadavků až po výslednou implementaci. Po ukončení stáže jsem
          pokračoval ve spolupráci s firmou Ing. Jiří Sedláček a zapojil se do
          dalších projektů, jako je vývoj backendu pro webovou stránku a
          dokončení celkového vyhotovení webu. Během této další fáze jsem měl
          možnost rozšířit své technické dovednosti a zkušenosti v oblasti
          back-end vývoje a přijít na kontakt s dalšími technologiemi a
          nástroji, které se běžně využívají v moderním vývoji softwaru.
        </Text>
        <Text
          component="h2"
          color={theme.colors.grayM[1]}
          align="left"
          size={mobile ? "8vw" : "2vw"}
          weight={700}
          sx={{ transition: "all 0.3s ease-in-out", marginBottom: "3vh" }}
        >
          Web pro pronájem vozů
        </Text>
        <Text align="left" size={mobile ? "5vw" : "xl"}>
Tento projekt byl vyvíjen s využitím různých technologií a nástrojů, včetně:
Next.js: Výkonný React framework pro vývoj server-side vykreslených webových aplikací.
Mantine: Kvalitní a přizpůsobitelná knihovna UI komponent pro React.
Yarn: Bezpečný a rychlý správce balíčků JavaScript, který pomáhá automatizovat instalaci, konfiguraci, aktualizaci a odstraňování balíčků.
Plesk: Platforma pro správu webových hostingu, která umožňuje snadné spravování a bezpečné provozování webových stránek a aplikací.
Ubuntu: Spolehlivý a široce používaný open-source operační systém pro nasazení webu.
Nginx: Vysoko výkonný, reverzní proxy server, který se používá pro zajištění rychlejšího načítání webových stránek a pro zlepšení bezpečnosti serveru.
PM2: Pokročilý správce procesů pro Node.js aplikace, který pomáhá udržet aplikace v chodu a usnadňuje jejich správu.
</Text>
<Text
          component="h2"
          color={theme.colors.grayM[1]}
          align="left"
          size={mobile ? "8vw" : "2vw"}
          weight={700}
          sx={{ transition: "all 0.3s ease-in-out", marginBottom: "3vh" }}
        >
          Artilea Counter
        </Text>
        <Text align="left" size={mobile ? "5vw" : "xl"}>
Tento projekt byl již započat a při jeho dokončení jsem použil:
Electron.js: Framework pro tvorbu nativních aplikací s webovými technologiemi jako je JavaScript, HTML a CSS v našem případě jsme ho ale poupravily na používání Reactu.
Mantine UI: UI knihovna pro tvorbu uživatelských rozhraní v Reactu.
Date.js: Rozšířená knihovna pro manipulaci s daty v JavaScriptu.
Redux: Prezentace stavu aplikace, která pomáhá spravovat stav aplikace v předvídatelným způsobem.
MongoDB: Dokumentově orientovaná databáze, kterou jsem hostil lokálně.
React: JavaScriptová knihovna pro tvorbu uživatelských rozhraní.
</Text>
<Text
          component="h2"
          color={theme.colors.grayM[1]}
          align="left"
          size={mobile ? "8vw" : "2vw"}
          weight={700}
          sx={{ transition: "all 0.3s ease-in-out", marginBottom: "3vh" }}
        >
         Eshop Artilea
        </Text>
        <Text align="left" size={mobile ? "5vw" : "xl"}>
Tento projekt vyžadoval rychlý vývoj, a proto jsem použil:
EditorX: Výkonný webový designový nástroj, který umožňuje vytvářet responzivní webové stránky a eshopy bez nutnosti kódování.
BaseLinker: Integrátor platforem
</Text>
 <Text
          component="h2"
          color={theme.colors.grayM[2]}
          align="left"
          size={mobile ? "8vw" : "3vw"}
          weight={700}
          sx={{ transition: "all 0.3s ease-in-out", marginBottom: "3vh" }}
        >
          Fotodokumentace
        </Text>
<SimpleGrid cols={3}>
<Image src="/images/praxe1.png" alt="praxe1" />
<Image src="/images/praxe2.png" alt="praxe2" />
<Image src="/images/praxe3.png" alt="praxe3" />
<Image src="/images/praxe4.png" alt="praxe4" />
<Image src="/images/praxe5.png" alt="praxe5" />
<Image src="/images/praxe6.png" alt="praxe6" />
<Image src="/images/praxe7.png" alt="praxe7" />
<Image src="/images/praxe8.png" alt="praxe8" />
<Image src="/images/praxe9.png" alt="praxe9" />
</SimpleGrid>
 <Text
          component="h2"
          color={theme.colors.grayM[2]}
          align="left"
          size={mobile ? "8vw" : "3vw"}
          weight={700}
          sx={{ transition: "all 0.3s ease-in-out", marginBottom: "3vh" }}
        >
          Odkazy
        </Text>
        <Link href="/Stáže.pdf" passHref>
            <Text align="left"   size={mobile ? "5vw" : "1vw"} color={theme.colors.red} weight={500}>Ročníková práce z praxe</Text>
            
        </Link>
        <Link href="https://drive.google.com/file/d/1s2YNFbYntBw59aFMD34lJ921XmdmV53o/view?usp=drive_link" passHref>
            <Text align="left"   size={mobile ? "5vw" : "1vw"} color={theme.colors.red} weight={500}>Artilea Counter</Text>
            
        </Link>
        <Link href="www.artilea.eu" passHref>
            <Text align="left"   size={mobile ? "5vw" : "1vw"} color={theme.colors.red} weight={500}>Artilea Eshop</Text>
            
        </Link>
        <div>
          <Text></Text>
        </div>
      </Container>
    </div>
  );
}
