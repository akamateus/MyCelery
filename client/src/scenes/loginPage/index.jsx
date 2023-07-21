import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNotMobileScreens = useMediaQuery("min-width:1000px");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        padding="1rem 6%"
        textAlign="center"
      >
        <Typography fontSize="32px" color="primary">
          MyCrew 🏴‍☠️
        </Typography>
      </Box>
      <Box
        width={isNotMobileScreens ? "50%" : "93%"}
        padding="2rem"
        margin="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography font fontWeight="500" variant="h5" sx={{ mb: "1.5rem" }}>
          {" "}
          Nothing to do? Let's gossip 💅🏽{" "}
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
