import { Container, Grid, SimpleGrid, Skeleton, useMantineTheme, rem, Card, createStyles, Text } from '@mantine/core';
import useMobile from '../UI/useMobile';
import { BsChevronRight } from 'react-icons/bs';
import Link from 'next/link';
const PRIMARY_COL_HEIGHT = rem(450);

export default function Sluzby() {
    const useStyles = createStyles((theme) => ({
        card: {
            backgroundColor: theme.colors.gray[0],
            ":hover": {
                div: {
                    backgroundColor: theme.colors.gray[0],
                }
            },
            div: {
                transition: "background-color 0.3s ease-in-out",
            }
        },
    }));
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - ${theme.spacing.md} / 2)`;
  const {classes} = useStyles();
const mobile = useMobile();
  return (
    <Container sx={{width: "80%"}} size={"80%"}>
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Card className={classes.card} shadow='lg' sx={{height: PRIMARY_COL_HEIGHT, backgroundImage: "url(/images/racing.webp)", display: "flex", flexDirection: "column", justifyContent: "flex-end"}} radius="md" animate={false}>
       <Card.Section component='div' sx={{backgroundColor: "rgb(248, 249, 250, 0.8)", padding: "1vh 1vw", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
       <Text size={mobile ? "xl" : "2.5vw"} component='h2' color={theme.colors.redM}>
            Zážitkové jízdy
        </Text>
      <Link href="/sluzby/zazitkove-jizdy" style={{cursor: "pointer"}}>
      <BsChevronRight style={{fontSize: "3vw", fontWeight: 800, color: theme.colors.redM, }} />
      </Link>
       </Card.Section>
        </Card>
        <Grid gutter="md">
          <Grid.Col>
            <Card className={classes.card} shadow='lg' sx={{height: SECONDARY_COL_HEIGHT, backgroundImage: "url(/images/bussiness.jpg)",  display: "flex", flexDirection: "column", justifyContent: "flex-end"}} radius="md" animate={false}>
            <Card.Section component='div' sx={{backgroundColor: "rgb(248, 249, 250, 0.8)", padding: "1vh 1vw", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
       <Text size={mobile ? "xl" : "2.5vw"} component='h2' color={theme.colors.redM}>
            Firemní akce
        </Text>
      <Link href="/sluzby/zazitkove-jizdy" style={{cursor: "pointer"}}>
      <BsChevronRight style={{fontSize: "3vw", fontWeight: 800, color: theme.colors.redM, }} />
      </Link>
       </Card.Section>
            </Card>
          </Grid.Col>
          <Grid.Col span={6}>
            <Card className={classes.card} shadow='lg' sx={{height: SECONDARY_COL_HEIGHT,  backgroundImage: "url(/images/svatba.jpeg)",  display: "flex", flexDirection: "column", justifyContent: "flex-end"}}  radius="md" animate={false}>
            <Card.Section component='div' sx={{backgroundColor: "rgb(248, 249, 250, 0.8)", padding: "1vh 1vw", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
       <Text size={mobile ? "xl" : "2.5vw"} component='h2' color={theme.colors.redM}>
           Svatby
        </Text>
      <Link href="/sluzby/zazitkove-jizdy" style={{cursor: "pointer"}}>
      <BsChevronRight style={{fontSize: "3vw", fontWeight: 800, color: theme.colors.redM, }} />
      </Link>
       </Card.Section>
            </Card>
          </Grid.Col>
          <Grid.Col span={6}>
            <Card className={classes.card} shadow='lg' sx={{height: SECONDARY_COL_HEIGHT,  backgroundImage: "url(/images/odvoz.webp)",  display: "flex", flexDirection: "column", justifyContent: "flex-end"}}  radius="md" animate={false}>
            <Card.Section component='div' sx={{backgroundColor: "rgb(248, 249, 250, 0.8)", padding: "1vh 1vw", display: "flex", alignItems: "center", justifyContent: "space-between"}}>
       <Text size={mobile ? "xl" : "2.5vw"} component='h2' color={theme.colors.redM}>
           Taxi
        </Text>
      <Link href="/sluzby/zazitkove-jizdy" style={{cursor: "pointer"}}>
      <BsChevronRight style={{fontSize: "3vw", fontWeight: 800, color: theme.colors.redM, }} />
      </Link>
       </Card.Section>
            </Card>
          </Grid.Col>
        </Grid>
      </SimpleGrid>
    </Container>
  );
}