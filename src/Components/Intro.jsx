import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react';
import styles from "../Styles/Intro.module.css";
import shape from "../Images/Shape.png";
import img from "../Images/img-png.png"
import { Typewriter } from 'react-simple-typewriter';
import Aos from 'aos';
import 'aos/dist/aos.css'; 

const Intro = () => {
  React.useEffect(()=> {
    Aos.init({duration: 1000})
},[])

  return (
    <div>
    <Flex className={styles.intro} flexDirection={{base:"column-reverse",sm:"column-reverse", md:"row", lg:"row"}} boxShadow="rgba(33, 35, 38, 0.1) 0px 10px 10px -10px" >
        <Box w={{base:"100%",sm:"100%",md:"60%",lg:"55%"}} h={{base:"300px",sm:"300px",md:"350px",lg:"400px"}} textAlign="left" paddingLeft="10vw" paddingTop="4vh" position="relative">
          <Image zIndex={1} src="https://auricoe.com/img/bg/splat-yellow.svg" position="absolute" left={{base:"-15vw",sm:"-15vw",md:"-14vw",lg:"-10vw"}} objectFit="cover" w="100%" h="100%" top="0" />
          <Text position="relative" fontSize={{base:"25px",sm:"25x",md:"30px",lg:"40px"}} fontWeight="bold" zIndex={2}>Hello 👋,</Text>
          <Text as="span" position="relative" fontSize={{base:"25px",sm:"25x",md:"30px",lg:"40px"}} fontWeight="bold" zIndex={2}>I'm  
            <Text as="span" color='orange.500'>   Himanku Gogoi</Text>
          </Text>
          <Text fontSize={{base:"25px",sm:"25x",md:"30px",lg:"40px"}} fontWeight="bold" position="relative" zIndex={2} >
            <Text as="span" color='orange.500'>a</Text>
              <Text as="span" >
              {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={['  Full Stack Web Developer.', '  Programmer.', '  Problem Solver.', '  Quick Learner.']}
                  loop={0}
                  cursor
                  cursorStyle='|'
                  cursorBlinking={false}
                  typeSpeed={50}
                  deleteSpeed={10}
                  delaySpeed={1000}
                />
            </Text>
          </Text>
          <Text mt="50px" position="relative" fontSize={{base:"15px",sm:"15x",md:"18px",lg:"18px"}} color="#1e2125" fontWeight="600" zIndex="2">FIND ME ON</Text>
          <Flex className={styles.hover} gap="20px" position="relative" zIndex="2">
            <Flex borderRadius="8px" boxShadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px" justifyContent="center" alignItems="center" h="60px" w="60px" background="linear-gradient(145deg, #e2e8ec, #ffffff">
              <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/himankugogoi/"><Image src="https://cdn-icons-png.flaticon.com/512/174/174857.png" w="75%" display="block" m="auto"/></a>
            </Flex>
            <Box borderRadius="8px" position="relative" zIndex="2" h="60px" w="60px" boxShadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px" background="linear-gradient(145deg, #e2e8ec, #ffffff">
              <a target="_blank" rel="noreferrer" href="https://github.com/himanku"><Image src="https://pngimg.com/uploads/github/github_PNG58.png" m="auto"/></a>
            </Box>
            <Box borderRadius="8px" boxShadow="rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px" h="60px" w="60px" background="linear-gradient(145deg, #e2e8ec, #ffffff">
              <a target="_blank" rel="noreferrer" href="https://www.hackerrank.com/himankugogoi5"><Image src="https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png" m="auto"/></a>
            </Box>
          </Flex>
        </Box>
        <Box w={{base:"100%",sm:"100%",md:"40%",lg:"50%"}} h={{base:"300px",sm:"300px",md:"400px",lg:"400px"}} className={styles.bg}>
          <Image src={shape} position="absolute" left="0" objectFit="cover" w="100%" h="100%" zIndex={1} />
          <Image data-aos="fade-right" position="absolute" src={img} objectFit="contain" w="100%" h="100%" zIndex={2} display="block"/>
          <Box className={styles.blend}>
          <Image objectFit="cover" src="https://tailwindcss.com/_next/static/media/docs-dark@tinypng.1bbe175e.png"/>
        </Box>
        </Box>
    </Flex>
    </div>
  )
}

export default Intro