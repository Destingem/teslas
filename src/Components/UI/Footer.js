
import React from "react";
import {
  Container,
  Grid,
  Col,
  Paper,
  Text,
  createStyles,
  useMantineTheme,
  Group,
  Button,
  Space,
} from "@mantine/core";
import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { motion } from "framer-motion";

export default function Footer() {
  const theme = useMantineTheme();
  const useStyles = createStyles((theme) => ({
    main: {
      borderRadius: "60px 60px 0 0",
      backgroundColor: "#232323",
      position: "sticky",
      bottom: 0,
      left: 0,
      width: "100%",
      minHeight: "50vh",
      height: "max-content",
      overflow: "hidden",
    },
    text: {
      padding: "0 1vw",
      zIndex: 1,
      textDecoration: "none",
      "::after": {
        content: '""',
        zIndex: -1,
        position:" absolute",
        left: 0,
        bottom: "0%",
        width: 0,
        height:"100%",
        backgroundColor: "#22b8cf",
        transition: "width 0.3s ease-in-out",
        
      },
      ":hover": {":after": {width: "85%"}}
    },
    cta: {
      cursor: "pointer",
      ":hover": {
        
      },
    },
    root: {
      flexGrow: 1,
      paddingTop: "0",
      paddingBottom: "5vh",
      marginTop: theme.spacing.xl,
    },
    footerText: {
      fontWeight: 500,
      whiteSpace: "nowrap",
    },
    bigScreen: {
      '@media (max-width: 768px)': {
        display: 'none',
      },
    },
    smallScreen: {
      display: 'none',
      '@media (max-width: 768px)': {
        display: 'block',
      },
    },
  }));

  const { classes } = useStyles();
  const renderContent = (delay) => {
    const [isHovered, setIsHovered] = React.useState(false);
    return(
      <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
          initial={{ x: "90%" }}
        animate={{ x: "-80%" }}
        transition={{
          duration: 10,
          delay,
          ease: "linear",
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{ display: "flex", marginRight: "4vw" }}
      >
        <Link href="/about" passHref>
          
       
        <div
        className={classes.cta}
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
            fontSize: "5rem",
           
           
            color: "#d2d2d2",
            
          }}
        >
        <Text className={classes.text} sx={{ whiteSpace: "nowrap",  textDecoration: "none" }} component="a" weight={600} size={"3rem"}>
            Chci vědět více
          </Text>
          <MdOutlineKeyboardArrowRight style={{ transform: isHovered ? "scale(1.2)" : "scale(1)",  transition: "all 0.2s ease", color: isHovered ? "#22b8cf" : "#fff"}} />
        </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <div className={classes.main}>
   {/*
      <Paper
        sx={{
          backgroundColor: "#393939",
          margin: "0 0vw",
          minHeight: "10vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
          padding: "0",
          overflow: "hidden",
          position: "relative",
        }}
      >
        
          {Array.from({ length: 5 }).map((_, index) => {
            return renderContent(index * 1.5);
          })}
        </Paper>*/}
      <Container size="90%" className={classes.root}>
    
        <Space h="xl" />
        <div style={{ display: "flex" }}>
         
          <Grid className={`${classes.bigScreen}`} sx={{ width: "70%", margin: "0 auto 0 auto", padding: "0 5vw" }}>
          <Grid.Col span={12}>
            <Text  size={"5rem"} sx={{marginBottom: "-5vh"}} className={classes.footerText} color={"#d2d2d2"}>
              608 270 754
             
            </Text>
          </Grid.Col>
          <Grid.Col span={12}>
            <Text size={"6vw"} className={classes.footerText}  variant="gradient"  gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>
              
              Ondřej Zaplatílek
            
            </Text>
          </Grid.Col>
          <Grid.Col span={12}>
            <Link href="mailto:ondrej@ondrejzaplatilek.eu?subject=Chci si nechat vytvořit web">
            <Text align="right"  sx={{marginTop: "-3vh"}} size={"3rem"} className={classes.footerText} color={theme.colors.cyan[9]}>
           
           ondrej@ondrejzaplatilek.eu
         </Text>
            </Link>
          </Grid.Col>
          </Grid>
          <Grid className={`${classes.smallScreen}`} sx={{ width: "100%", margin: "0 auto", padding: "0 0vw" }}>
          <Grid.Col span={12}>
            <Text align="center"  size={"12vw"} sx={{}} className={classes.footerText} color={"#d2d2d2"}>
              608 270 754
             
            </Text>
          </Grid.Col>
          <Grid.Col span={12}>
            <Text align="center" size={"10vw"} className={classes.footerText}  variant="gradient"  gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}>
              
              Ondřej Zaplatílek
            
            </Text>
          </Grid.Col>
          <Grid.Col span={12}>
            <Link href="mailto:ondrej@ondrejzaplatilek.eu?subject=Chci si nechat vytvořit web">
            <Text align="center"  sx={{}} size={"6vw"} className={classes.footerText} color={theme.colors.cyan[9]}>
           
           ondrej@ondrejzaplatilek.eu
         </Text>
            </Link>
          </Grid.Col>
          <Grid.Col span={12}>
       
          </Grid.Col>
          </Grid>
          
        </div>
      </Container>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Text weight={500} color="#e9e9e9 " component="p">
          Ondřej Zaplatílek 2023
        </Text>
      </div>
    </div>
  );
}
