import { Carousel } from '@mantine/carousel';
import { Blockquote, Text, useMantineTheme } from '@mantine/core';
import Link from 'next/link';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
const reviews = [
    {
      text: "Nikdy jsem nezažil takový zážitek z jízdy jako s Tesla Model S. Pronájem byl jednoduchý a obsluha velmi přátelská. Toto auto je opravdu budoucnost.",
      name: "Jan Novák",
      service: "Zážitková jízda"
    },
    {
      text: "Pronajali jsme si Tesla Model S pro naši firemní akci a byla to senzace. Všichni byli nadšeni a auto udělalo obrovský dojem. Rozhodně doporučuji.",
      name: "Martina Svobodová",
      service: "Firemní akce"
    },
    {
      text: "Tesla Model S byla úžasný doplněk naší svatby. Vypadala skvěle na fotografiích a jízda do kostela byla nezapomenutelná. Děkujeme za skvělý servis.",
      name: "Petra a Tomáš Dvořáci",
      service: "Společenská událost"
    },
    {
      text: "Cestuji hodně kvůli práci a objevil jsem vaše elektro-taxi. Je to naprosto jiný zážitek cesty. Tesla je tichá, rychlá a pohodlná. A navíc je to ekologické!",
      name: "Pavel Jirsa",
      service: "Taxi"
    },
    {
      text: "Skvělá komunikace, skvělé auto. Tesla Model S je opravdu auto budoucnosti a stojí za to ji vyzkoušet. Doporučuji každému, kdo chce zažít něco nového.",
      name: "Michaela Kopecká",
      service: "Zážitková jízda"
    },
  ];
  

export default function Reference({mobile}){

    function ReferenceSlide({text, name, service}){
        const theme = useMantineTheme()
        return(
            <Carousel.Slide>
            <Blockquote color="red" cite={<div><Text size={"xl"}>{name}</Text><Text sx={{fontStyle: "normal"}} weight={700} color={theme.colors.redM}>{service}</Text></div>}>
                <Text component="p"  color={theme.colors.dark[8]} size={mobile ? "xl": "2vw"}>{text}</Text>
            </Blockquote>
            </Carousel.Slide>
        )
    }
    const autoplay = useRef(Autoplay({ delay: 5000 }));
    return(
        <Carousel
         plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
         sx={{maxWidth: "80%", marginTop: "5vh"}} slideSize={mobile ? "90%" : "100%"} height="30vh" slideGap="xl" loop withIndicators>
            {reviews.map((review) => {
                return <ReferenceSlide {...review} mobile={mobile}/>
            })}
        </Carousel>
    )
}