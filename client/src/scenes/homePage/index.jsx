import { Box, useMediaQuery } from "@mui/material";
import Navbar from "scenes/navbar";
import { useSelector } from "react-redux";
import UserInfo from "scenes/widgets/UserInfo";
import MyPostWidget from "scenes/widgets/MyPostWidget";

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
        <Box flexBasis={isNotMobileScreen ? "26%" : undefined}>
          <UserInfo userId={_id} picturePath={picturePath} />
        </Box>
        <Box
          flexBasis={isNotMobileScreen ? "42%" : undefined}
          marginTop={isNotMobileScreen ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
        </Box>
        {isNotMobileScreen && <Box flexBasis="25%"></Box>}
      </Box>
    </Box>
  );
};

export default HomePage;
