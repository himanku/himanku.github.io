import { Box, Button, Flex, Link, IconButton, Image, Menu, MenuButton, MenuItem, MenuList, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, DrawerBody, useDisclosure, DrawerCloseButton, List, ListItem, Text } from '@chakra-ui/react';
import React from 'react';
import img from "../../src/Images/img.png";
import "../Styles/Navbar.css";
import { DownloadIcon, HamburgerIcon, ViewIcon } from '@chakra-ui/icons';
import { Link as Links } from 'react-scroll';
import Resume from "../Images/Himanku_Gogoi_Resume.pdf";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [click, setClick] = React.useState(true);
  const closeMenu = () => {
    setClick(true);
  }
  return (
    <Flex className="box_shadow" justifyContent="space-around" >
        <Box>
            <Image src={img} w={{base:"40%",sm:"40%",md:"35%",lg:"40%"}}/>
        </Box>
        <Flex className={click? "nav-menu active" : "nav-menu"} w={{md:"100%",lg:"65%"}} fontSize={{md:"14px",lg:"19px"}} fontWeight="bold" display={{base:"none", sm:"none", md:"flex", lg:"flex"}}>
            <Flex onClick={closeMenu} classname="nav-item"><Links to='about' spy={true} smooth={true} offset={-100} duration={500}>About Me</Links></Flex>
            <Flex onClick={closeMenu} classname="nav-item"><Links to='skills' spy={true} smooth={true} offset={-100} duration={500}>Skills</Links></Flex>
            <Flex onClick={closeMenu} classname="nav-item"><Links to='projects' spy={true} smooth={true} offset={-100} duration={500}>Projects</Links></Flex>
            <Flex onClick={closeMenu} classname="nav-item"><Links to='github' spy={true} smooth={true} offset={-100} duration={500}>GitHub Stats</Links></Flex>
            <Flex onClick={closeMenu} classname="nav-item"><Links to='contact' spy={true} smooth={true} offset={-100} duration={500}>Contact Me</Links></Flex>
            <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton colorScheme='orange' size={"sm"} isActive={isOpen} as={Button} rightIcon={<DownloadIcon />}>
                Resume
                </MenuButton>
                <MenuList>
                <a target="_blank" rel="noreferrer" href="https://onedrive.live.com/?cid=14EBED8FED6B752E&id=14EBED8FED6B752E%21122&parId=14EBED8FED6B752E%21121&o=OneUp"><MenuItem><Text>View Resume  <ViewIcon/></Text></MenuItem></a>
                  <MenuItem><Link textDecoration="none" href={Resume} download="Himanku_Gogoi_Resume.pdf">Download Resume <DownloadIcon/></Link></MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
          {/* <Button>
            <a target="_blank" rel="noreferrer" href="https://onedrive.live.com/?cid=14EBED8FED6B752E&id=14EBED8FED6B752E%21122&parId=14EBED8FED6B752E%21121&o=OneUp">
            <Link textDecoration="none" href={Resume} download="Himanku_Gogoi_Resume.pdf"></Link>
          </a>
          </Button> */}
           
        </Flex>
          {/* <Menu>
              <MenuButton
                  display={{base:"block", sm:"block", md:"none", lg:"none"}}
                  as={IconButton}
                  aria-label='Options'
                  icon={<HamburgerIcon />}
                  variant='outline'
              />
              <MenuList >
                  <MenuItem>
                    <Links to='about' spy={true} smooth={true} offset={-50} duration={500}>About Me</Links>
                  </MenuItem>
                  <MenuItem >
                    <Links to='skills' spy={true} smooth={true} offset={-50} duration={500}>Skills</Links>
                  </MenuItem>
                  <MenuItem >
                    <Links to='projects' spy={true} smooth={true} offset={-50} duration={500}>Projects</Links>
                  </MenuItem>
                  <MenuItem >
                  <Links to='github' spy={true} smooth={true} offset={-100} duration={500}>GitHub Stats</Links>
                  </MenuItem>
                  <MenuItem >
                  <Links to='contact' spy={true} smooth={true} offset={-50} duration={500}>Contact Me</Links>
                  </MenuItem>
                  <MenuItem color="rgba(219, 101, 5, 0.801)" fontWeight={600}>
                    <Link textDecoration="none" href={Resume} download="Himanku_Gogoi_Resume.pdf">Download Resume <DownloadIcon/></Link>
                  </MenuItem>
              </MenuList>
          </Menu> */}
          <Button onClick={onOpen} onClose={onClose}  display={{base:"block", sm:"block", md:"none", lg:"none"}}
                  as={IconButton}
                  icon={<HamburgerIcon />}
                    color="orange.500"
                    margin="auto"
                  />
          <Drawer placement={"right"} onClose={onClose} isOpen={isOpen} size="xs" display={{base: "block", md:"none" }}>
            <DrawerOverlay />
              <DrawerContent>
              <DrawerCloseButton/>
                <DrawerHeader >
                <Box>
                  <Image src={img} w={{base:"40%",sm:"40%",md:"35%",lg:"40%"}}/>
                </Box>
                </DrawerHeader>
                <DrawerBody>
                  <List spacing={5}>
                    <ListItem>
                      <Links to='about' onClick={onClose} spy={true} smooth={true} offset={-50} duration={500}>About Me</Links>
                    </ListItem>
                    <ListItem >
                      <Links to='skills' onClick={onClose} spy={true} smooth={true} offset={-50} duration={500}>Skills</Links>
                    </ListItem>
                    <ListItem >
                      <Links to='projects' onClick={onClose} spy={true} smooth={true} offset={-50} duration={500}>Projects</Links>
                    </ListItem>
                    <ListItem >
                      <Links to='github' onClick={onClose} spy={true} smooth={true} offset={-100} duration={500}>GitHub Stats</Links>
                    </ListItem>
                    <ListItem >
                      <Links to='contact' onClick={onClose} spy={true} smooth={true} offset={-50} duration={500}>Contact Me</Links>
                    </ListItem>
                    <ListItem>
                      <a target="_blank" rel="noreferrer" href="https://onedrive.live.com/?cid=14EBED8FED6B752E&id=14EBED8FED6B752E%21122&parId=14EBED8FED6B752E%21121&o=OneUp"><Text onClick={onClose}>View Resume  <ViewIcon/></Text></a>
                    </ListItem>
                    <ListItem color="rgba(219, 101, 5, 0.801)" fontWeight={600}>
                      <Link onClick={onClose} textDecoration="none" href={Resume} download="Himanku_Gogoi_Resume.pdf">Download Resume <DownloadIcon/></Link>
                    </ListItem>
                </List>
                </DrawerBody>
              </DrawerContent>
          </Drawer>
    </Flex>
  )
}

export default Navbar