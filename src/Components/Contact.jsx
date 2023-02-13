import { Box, Button, Center, Flex, Image, Input, Text, Textarea, useToast } from '@chakra-ui/react'
import React,{useRef} from 'react';
import styles from "../Styles/Contact.module.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const toast = useToast();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7e064gf', 'template_0gvba42', form.current, 'yIpGtfn_XXx-16huZ')
      .then((result) => {
        toast({
          title: 'Success',
          description: "Message sent successfully",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      }, (error) => {
        toast({
          title: 'Failed',
          description: "Message not sent. Please fill all the inputs",
          status: 'success',
          duration: 2000,
          isClosable: true,
        })
      });
      e.target.reset();
  };
  
  return (
    <div id="contact" className={styles.contact}>
      <Center data-aos="zoom-in" m="auto"  fontSize={{base:"25px",sm:"25x",md:"30px",lg:"40px"}} fontWeight="bold" borderBottom="solid 4px rgba(255, 115, 0, 0.801)" paddingBottom="0px" w={{base:"180px",sm:"180px",md:"200px",lg:"270px"}}>CONTACT ME</Center>
      {/* <Image src="https://www.sardonyx.in/themes/images/software-development/sardonyx-softwaredevelopment001.gif"/> */}
      <div className={styles.Contact} >
          <div className={styles.Flex} data-aos="zoom-in">
            <form ref={form} onSubmit={sendEmail} className={styles.ContactDetails} data-aos="zoom-in">
                <Input variant='filled' focusBorderColor='orange.500' placeholder='Enter your name' name="user_name" />
                <Input variant='filled' focusBorderColor='orange.500' mt="40px" placeholder='Enter your email' name="user_email" />
                <Input variant='filled' focusBorderColor='orange.500' mt="40px" placeholder='Subject'  name="subject"/>
                <Textarea size='lg' variant='filled' focusBorderColor='orange.500' placeholder='Type your message...' name="message" />
                <Button type="submit" m="auto" colorScheme='orange'>SEND</Button>
            </form>
            <div className={styles.ContactIcon} >
                <Box textAlign="left" paddingLeft='20px'>
                    <img src="https://i.pinimg.com/originals/80/28/36/802836ac68385132474a8839e7f654f6.gif" alt="img" />
                    <Text fontSize="25px" fontWeight="bold">Himanku Gogoi</Text>
                    <Text fontSize="20px" fontWeight="bold" color="orange.500">(Full Stack Web Developer)</Text>
                    <Text fontSize="18px">I am available for Full Stack Development</Text>
                    <Text fontSize="18px">Connect with me via email or whatsapp</Text>
                    <Box mt="10px">
                      <Text as="span" fontSize="18px" fontWeight="bold">Contact: </Text><Text as="span">+919101087403</Text>
                    </Box>
                    <Box>
                      <Text as="span" fontSize="18px" fontWeight="bold">Email: </Text><Text as="span">himankugogoi5@gmail.com</Text>
                    </Box>
                    <Text mt="20px" position="relative" fontSize={{base:"15px",sm:"15x",md:"18px",lg:"18px"}} color="#1e2125" fontWeight="600" zIndex="2">FIND ME ON</Text>
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
            </div>
          </div>
            <h4 className={styles.footer}>Designed & Built by Himanku Gogoi, © 2023 All rights reserved</h4>
        </div>
    </div>
  )
}

export default Contact