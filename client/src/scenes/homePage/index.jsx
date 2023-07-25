import { Box, useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";
import { useSelector } from "react-redux";
import UserInfo from "scenes/widgets/UserInfo";

const HomePage = () => {
  const isNotMobileScreen = useMediaQuery("min-width:1000px");
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNotMobileScreen ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNotMobileScreen ? "25%" : undefined}>
          <UserInfo userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNotMobileScreen ? "40%" : undefined}
          marginTop={isNotMobileScreen ? undefined : "2rem"}
        ></Box>
        {isNotMobileScreen && <Box flexBasis="25%"></Box>}
      </Box>
    </Box>
  );
};

export default HomePage;
