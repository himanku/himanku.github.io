import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react';
import styles from "../Styles/Aboutme.module.css";
import Aos from 'aos';
import "aos/dist/aos.css";

const AboutMe = () => {
    React.useEffect(()=> {
        Aos.init({duration: 1000})
    },[])
  return (
    <Box className={styles.aboutme} id="about" >
      <Center data-aos="zoom-in" m="auto" mt={{base:"0",md:"10vh"}} fontSize={{base:"25px",sm:"25x",md:"30px",lg:"40px"}} fontWeight="bold" borderBottom="solid 4px rgba(255, 115, 0, 0.801)" paddingBottom="0px" w={{base:"130px",sm:"130px",md:"180px",lg:"220px"}}>ABOUT ME</Center>
      <Box display={{lg:"flex"}} m="auto" w="90%" justifyContent={"space-between"} mt="30px">
        <Box p="30px" w={{base:"100%",lg:"65%"}}>
            <Text textAlign={"justify"} data-aos="zoom-in" fontSize={{base:"16px",sm:"16x",md:"20px",lg:"20px"}} m="auto" mt="30px" color="#3c3e41" lineHeight={{base:7, md:10}}>I am a highly determined, passionate and an enthusiastic Full Stack Developer. I focus on writing clean, elegant and effecient codes. I love combining the worlds of logic and creative design to make eye-catching, accessible, and user-friendly websites and applications. Apart from coding, I'm also a music enthusiast who listens to all genres of music and a passionate traveller who loves to explore new places and learn about the people and culture of that place. Excited and eagerly looking forward to kickstart my career and continue refining my skills with the right organization.</Text>
        </Box>
        <Flex display={{base: "none", lg:"flex"}} justifyContent={"flex-end"} alignItems="center" w="35%">
          <Image h={{lg:"80%"}} src="https://user-images.githubusercontent.com/62322907/109534565-79863180-7ae1-11eb-97a9-3c7b68163b14.gif"/>
        </Flex>
      </Box>
    </Box>
  )
}

export default AboutMe