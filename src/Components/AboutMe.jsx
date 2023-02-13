import { Box, Center, Text } from '@chakra-ui/react'
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
        <Center data-aos="zoom-in" m="auto"  fontSize={{base:"25px",sm:"25x",md:"30px",lg:"40px"}} fontWeight="bold" borderBottom="solid 4px rgba(255, 115, 0, 0.801)" paddingBottom="0px" w={{base:"130px",sm:"130px",md:"180px",lg:"220px"}}>ABOUT ME</Center>
        <Text data-aos="zoom-in" fontSize={{base:"16px",sm:"16x",md:"16px",lg:"18px"}} textAlign="center" w="70%" m="auto" mt="30px" color="#3c3e41" lineHeight={7}>I am a highly determined, passionate and an enthusiastic Full Stack Developer. I focus on writing clean, elegant and effecient codes. I love combining the worlds of logic and creative design to make eye-catching, accessible, and user-friendly websites and applications. Apart from coding, I'm also a music enthusiast who listens to all genres of music and a passionate traveller who loves to explore new places and learn about the people and culture of that place. Excited and eagerly looking forward to kickstart my career and continue refining my skills with the right organization.</Text>
    </Box>
  )
}

export default AboutMe