import { Box, Center } from "@chakra-ui/react";
import React from "react";
import styles from "../Styles/Skills.module.css";
import Aos from 'aos';
import 'aos/dist/aos.css';                                                          

const Tools = () => {
    React.useEffect(()=> {
        Aos.init({duration: 1000})
    },[])

  return (
    <div className={styles.skill}>
      <Center m="auto" mt="30px" data-aos="zoom-in" fontSize={{base:"25px",sm:"25x",md:"30px",lg:"40px"}} fontWeight="bold" borderBottom="solid 4px rgba(255, 115, 0, 0.801)" paddingBottom="0px" w={{base:"130px",sm:"130px",md:"180px",lg:"220px"}}>TOOLS</Center>
      <div className={styles.SkillGrid}>
        <Box data-aos="zoom-in-right">
          <img alt="img" src="https://chiranjeev-thapliyal.vercel.app/svg/git.svg" />
          <h1>GIT</h1>
        </Box>
        <Box data-aos="zoom-in-left">
          <img alt="img" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
          <h1>GitHub</h1>
        </Box>
        <Box data-aos="zoom-in-left">
          <img alt="img" src="https://cdn.iconscout.com/icon/free/png-256/npm-3521612-2945056.png" />
          <h1>NPM</h1>
        </Box>
        <Box data-aos="zoom-in-right">
          <img alt="img"
            style={{ borderRadius: "50%" }}
            src="https://cdn.sanity.io/images/o0o2tn5x/production/13b9c8412093e2f0cdb5495e1f59144967fa1664-512x512.jpg"
          />
          <h1>Cypress</h1>
        </Box>
        <Box data-aos="zoom-in-right">
          <img alt="img"
            style={{ borderRadius: "50%" }}
            src="https://avatars.githubusercontent.com/u/22632046?s=280&v=4"
          />
          <h1>StoryBook</h1>
        </Box>
        <Box data-aos="zoom-in-right">
          <img alt="img"
            style={{ borderRadius: "50%" }}
            src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png"
          />
          <h1>Swagger</h1>
        </Box>
        <Box data-aos="zoom-in-right">
          <img alt="img"
            style={{ borderRadius: "50%" }}
            src="https://www.netlify.com/v3/img/components/logomark.png"
          />
          <h1>Netlify</h1>
        </Box>
        <Box data-aos="zoom-in-right">
          <img alt="img"
            style={{ borderRadius: "50%" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png"
          />
          <h1>VS Code</h1>
        </Box>
      </div>
    </div>
  );
};

export default Tools;
