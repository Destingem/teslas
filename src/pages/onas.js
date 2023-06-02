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
} from "@mantine/core";

export default function Onas() {
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
          O nás
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
          Jiří Sedláček
        </Text>
        <Text align="left" size={mobile ? "5vw" : "xl"}>
          Jiří Sedláček je automobilový fanoušek, který je zároveň zakladatelem
          a majitelem naší společnosti. <br />
          Jeho vášeň pro automobily začala už v jeho dětství, kdy strávil
          nekonečné hodiny zkoumáním a sestavováním modelů aut. Tyto zkušenosti
          ho později inspirovaly k tomu, aby se ponořil do světa skutečných vozů
          a zkoumal jejich neomezené možnosti, včetně dosažení maximálních
          rychlostí. <br />
          Jeho fascinace se posunula ještě dál, když objevil značku Tesla, která
          se rychle stala jeho nejoblíbenější značkou. Tesla není pro něj pouhým
          automobilem, je to zhmotnění budoucnosti mobility a inovace. Svou
          Teslu si nejen vlastní, ale také se s ní pravidelně účastní závodů a
          dává dohromady komunitu stejně smýšlejících fanoušků značky. Jiří
          pevně věří, že elektromobilita je budoucností a že právě tato
          budoucnost je tady a teď. S touto vírou se zasazuje o to, aby
          elektromobilitu přiblížil ostatním.
          <br /> Chce ukázat, jak přináší elektromobilita nejen udržitelnost a
          ekologickou přátelskost, ale také bezkonkurenční výkon a skvělé jízdní
          zážitky. Jiří se neustále snaží zlepšovat a rozšiřovat své služby v
          oblasti pronájmu aut, aby mohl svým zákazníkům nabídnout to nejlepší.
          Jeho cílem je, aby každý zákazník odjížděl s úsměvem na tváři a s
          pocitem, že se stal součástí revolučního pohybu směrem k lepší a
          udržitelnější budoucnosti. Přijďte se seznámit s Jiřím a naší
          společností a zjistěte, proč je naše nabídka pronájmu aut výjimečná.{" "}
          <Mark color={"red"}>Zažijte budoucnost mobility dnes.</Mark>
        </Text>
        <div style={{display: "flex", justifyContent: "space-between"}}>
        <div>
            <Text size={mobile ? "5vw" : "1.5vw"}>Ing. Jíří Sedláček</Text>
            <Text size={mobile ? "5vw" : "1.5vw"}>tel: +420 607 970 155</Text>
            <Text size={mobile ? "5vw" : "1.5vw"}>email: jjiirkas@gmail.com</Text>
            <Text size={mobile ? "5vw" : "1.5vw"}>adresa: Lipská 2444/4, 616 00, Brno</Text>
            <Text size={mobile ? "5vw" : "1.5vw"}>IČ: 19169027</Text>
        </div>
          <div style={{width: "50%"}}>
            <iframe
              width="100%"
              height="600"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lipsk%C3%A1%202444/4,%20616%2000,%20Brno+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.maps.ie/distance-area-calculator.html">
                distance maps
              </a>
            </iframe>
          </div>
        </div>
      </Container>
    </div>
  );
}
