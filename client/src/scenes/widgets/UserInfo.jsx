import UserPic from "components/UserPic";
import FlexBoxBetween from "components/FlexBoxBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import {
  ManageAccountsOutlined,
  EditOutlined,
  WorkOutlineOutlined,
  LocalActivityOutlined,
} from "@mui/icons-material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserInfo = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null);
  const { palette } = useTheme();
  const navigate = useNavigate();
  const token = useSelector((state) => state.token);
  const dark = palette.neutral.dark;
  const medium = palette.neutral.medium;
  const main = palette.neutral.main;

  //API call
  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };
  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!user) {
    return null;
  }
  const {
    firstName,
    lastName,
    location,
    occupation,
    viewedProfile,
    impressions,
    friends,
  } = user;

  return (
    <WidgetWrapper>
      {/* First line */}
      <FlexBoxBetween
        gap="0.5rem"
        paddingBottom="1.1rem"
        onClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBoxBetween gap="1rem">
          <UserPic image={picturePath} />
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer",
                },
              }}
            >
              {firstName} {lastName}
            </Typography>
            <Typography color={medium}> {friends.length}</Typography>
          </Box>
        </FlexBoxBetween>
        <ManageAccountsOutlined />
      </FlexBoxBetween>

      <Divider />
      {/* Second line */}
      <Box p="1rem 0">
        <Box
          display="flex"
          alignItems="center"
          gap="1rem"
          marginBottom="0.5rem"
        >
          <LocalActivityOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{location}</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap="1rem">
          <WorkOutlineOutlined fontSize="large" sx={{ color: main }} />
          <Typography color={medium}>{occupation}</Typography>
        </Box>
      </Box>
      <Divider />

      {/* third line */}
      <Box padding="1rem 0">
        <FlexBoxBetween marginBottom="0.5rem">
          <Typography color={medium}> Who's watching you?👀</Typography>
          <Typography color={main} fontWeight="500">
            {viewedProfile}
          </Typography>
        </FlexBoxBetween>
        <FlexBoxBetween>
          <Typography color={medium}> Post interactions 🚩</Typography>
          <Typography color={main} fontWeight="500">
            {impressions}
          </Typography>
        </FlexBoxBetween>
      </Box>
      <Divider />

      {/* fourth line */}
      <Box p="1rem 0">
        <Typography
          fontSize="1rem"
          color={main}
          fontWeight="500"
          marginBottom="1rem"
        >
          {" "}
          Other Profiles 👥
        </Typography>

        <FlexBoxBetween gap="1rem" marginBottom="0.5rem">
          <FlexBoxBetween gap="1rem">
            <img src="../assets/twitter.png" alt="twitter" />
            <Box>
              <Typography color={main} fontWeight="500">
                Twitter
              </Typography>
              <Typography color={medium}> Social Network</Typography>
            </Box>
          </FlexBoxBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBoxBetween>

        <FlexBoxBetween gap="1rem">
          <FlexBoxBetween gap="1rem">
            <img src="../assets/linkedin.png" alt="linkedin"></img>
            <Box>
              <Typography color={main} fontWeight="500">
                Linkedin
              </Typography>
              <Typography color={medium}> Network Platform</Typography>
            </Box>
          </FlexBoxBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBoxBetween>
      </Box>
    </WidgetWrapper>
  );
};

export default UserInfo;
