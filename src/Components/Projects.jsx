import { Box, Button, Center, Flex, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react';
import styles from "../Styles/Project.module.css";
import hindugif from "../Images/hindu.gif"
import fitfreakgif from "../Images/fitfreak.gif";
import cricketgif from "../Images/cricket.gif";
import sephoragif from "../Images/sephora.gif";
import { ExternalLinkIcon } from '@chakra-ui/icons';

const Projects = () => {
  return (
    <div className={styles.proj} id="projects" style={{paddingTop: "50px"}}>
        <Center m="auto" data-aos="zoom-in" fontSize={{base:"25px",sm:"25x",md:"30px",lg:"35px"}} fontWeight="bold" borderBottom="solid 4px rgba(255, 115, 0, 0.801)" paddingBottom="0px" w={{base:"180px",sm:"180px",md:"200px",lg:"270px"}}>MY PROJECTS</Center>
        <Grid className={styles.project} w="80%" gap="50px" templateColumns={{base:"repeat(1,1fr)",sm:"repeat(1,1fr)",md:"repeat(2,1fr)",lg:"repeat(2,1fr)"}} margin="auto" mt="30px">
            <Box m="auto" p="20px" data-aos="zoom-in-up">
                <Image src={cricketgif}/>
                <Text className={styles.name} mt="20px" fontSize={{lg:"30px",sm:"25px", md:"25px",base:"25px"}} fontWeight="bold">Wefit Website</Text>
                <Text fontSize={{base:"16px",sm:"16x",md:"16px",lg:"18px"}} fontWeight="600" m="auto" mt="10px" mb="10px" color="#3c3e41" lineHeight={6}>WEFIT is a body fitness website where users can choose from hundreds of professionally built workout plans and, track and log their workouts</Text>
                <Text className={styles.tech} as="span">Tech Stack: </Text><Text className={styles.stack} as="span">React.js | Redux | Chakra UI</Text>
                <Flex mt="30px" mb="20px" justifyContent="center" gap="40px">
                    <a target="_blank" rel="noreferrer"  href='https://wefit-jefit.netlify.app'><Button colorScheme="orange" variant="outline">Live <ExternalLinkIcon/></Button></a>
                    <a target="_blank" rel="noreferrer"  href='https://github.com/himanku/Wefit.com-website'><Button colorScheme="orange" variant="outline">Github <ExternalLinkIcon/></Button></a>
                </Flex>
            </Box>
            <Box m="auto" p="20px" data-aos="zoom-in-up">
                <Image src={fitfreakgif}/>
                <Text className={styles.name} mt="20px" fontSize={{lg:"30px",sm:"25px", md:"25px",base:"25px"}} fontWeight="bold">Fitfreak Website</Text>
                <Text fontSize={{base:"16px",sm:"16x",md:"16px",lg:"18px"}} fontWeight="600" m="auto" mt="10px" mb="10px" color="#3c3e41" lineHeight={6}>It is a website where the users can locate its gyms, buy various fitness equipment and accessories, and connect to its community online</Text>
                <Text className={styles.tech} as="span">Tech Stack: </Text><Text className={styles.stack} as="span">React.js | Json Server | Chakra UI</Text>
                <Flex mt="30px" mb="20px" justifyContent="center" gap="40px">
                    <a target="_blank" rel="noreferrer"  href="https://cult-fit-freak.netlify.app/"><Button colorScheme="orange" variant="outline">Live <ExternalLinkIcon/></Button></a>
                    <a target="_blank" rel="noreferrer"  href="https://github.com/himanku/short-rod-3165"><Button colorScheme="orange" variant="outline">Github <ExternalLinkIcon/></Button></a>
                </Flex>
            </Box>
            <Box m="auto" p="20px" data-aos="zoom-in-up">
                <Image src={hindugif}/>
                <Text className={styles.name} mt="20px" fontSize={{lg:"30px",sm:"25px", md:"25px",base:"25px"}} fontWeight="bold">Folklore Website</Text>
                <Text fontSize={{base:"16px",sm:"16x",md:"16px",lg:"18px"}} fontWeight="600" m="auto" mt="10px" mb="10px" color="#3c3e41" lineHeight={6}>It is an e-commerce website that sells clothing, jewelry, home furniture, decorations, beauty products, and gifts</Text>
                <Text className={styles.tech} as="span">Tech Stack: </Text><Text className={styles.stack} as="span">React.js | Node.js | Express.js | MongoDB</Text>
                <Flex mt="30px" mb="20px" justifyContent="center" gap="40px">
                    <a target="_blank" rel="noreferrer"  href='https://folkl0re.netlify.app/'><Button colorScheme="orange" variant="outline">Live <ExternalLinkIcon/></Button></a>
                    <a target="_blank" rel="noreferrer"  href='https://github.com/himanku/Folklore-website'><Button colorScheme="orange" variant="outline">Github <ExternalLinkIcon/></Button></a>
                </Flex>
            </Box>
            <Box m="auto" p="20px" data-aos="zoom-in-up">
                <Image src={sephoragif}/>
                <Text className={styles.name} mt="20px" fontSize={{lg:"30px",sm:"25px", md:"25px",base:"25px"}} fontWeight="bold">Sephora.nnnow Clone</Text>
                <Text fontSize={{base:"16px",sm:"16x",md:"16px",lg:"18px"}} fontWeight="600" m="auto" mt="10px" mb="10px" color="#3c3e41" lineHeight={6}>It is an ecommerce website for luxury beauty and skincare products with a wide variety of makeup, skincare, haircare, bath and body and fragrances</Text>
                <Text className={styles.tech} as="span">Tech Stack: </Text><Text className={styles.stack} as="span">HTML | CSS | JavaScript</Text>
                <Flex mt="30px" mb="20px" justifyContent="center" gap="40px">
                    <a target="_blank" rel="noreferrer"  href='https://vocal-sundae-82d994.netlify.app/'><Button colorScheme="orange" variant="outline">Live <ExternalLinkIcon/></Button></a>
                    <a target="_blank" rel="noreferrer"  href="https://github.com/himanku/nutty-way-5713"><Button colorScheme="orange" variant="outline">Github <ExternalLinkIcon/></Button></a>
                </Flex>

            </Box>
        </Grid>
    </div>
  )
}

export default Projects