import { Box, Center, Flex } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import styles from "../Styles/Github.module.css";
import ReactTooltip from "react-tooltip";

const Github = () => {
  // const selectLastHalfYear = (contribution) => {
  //   const currentYear = new Date().getFullYear();
  //   const currentMonth = new Date().getMonth();
  //   const showMonths = 7;

  //   return contribution.filter((day) => {
  //     const date = new Date(day.date);
  //     const monthOfDay = date.getMonth();

  //     return (
  //       date.getFullYear() === currentYear &&
  //       monthOfDay > currentMonth - showMonths &&
  //       monthOfDay <= currentMonth
  //     );
  //   });
  // };
  return (
    <div className={styles.github}>
      <div className={styles.calender} id="github">
        <Center
          m="auto"
          data-aos="zoom-in"
          fontSize={{ base: "25px", sm: "25px", md: "30px", lg: "35px" }}
          fontWeight="bold"
          borderBottom="solid 4px rgba(255, 115, 0, 0.801)"
          paddingBottom="0px"
          w={{ base: "260px", sm: "260px", md: "330px", lg: "330px" }}
        >
          GITHUB STATISTICS
        </Center>
        <div className={styles.calenderChild}>
          <GitHubCalendar
            username="himanku"
            
            blockSize={20}
            fontSize={15}
            blockRadius={2}
          >
            <ReactTooltip delayShow={20} html />
          </GitHubCalendar>
        </div>
      </div>

      <div className={styles.Stats} data-aos="fade-up">
        <Flex className={styles.statics} flexDirection={{base:"column", sm:"column", md:"column", lg: "row"}} m="auto" gap={4}>
          <Box m="auto" w={{base:"100%", sm:"100%", md:"70%", lg:"50%"}}>
            <img
              align="left"
              src="https://github-readme-streak-stats.herokuapp.com?user=himanku&theme=flag-india"
              alt="streak"
            />
          </Box>
          <Box m="auto" w={{base:"100%", sm:"100%", md:"70%", lg:"50%"}}>
            <img
              align="left"
              src="https://github-readme-himanku.vercel.app/api?username=himanku&theme=flag-india&count_private=true&show_icons=true" //stats
              alt="stats"
            />
          </Box>
        </Flex>
      </div>
    </div>
  );
};

export default Github;
