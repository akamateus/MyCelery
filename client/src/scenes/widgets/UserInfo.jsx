import UserPic from "components/UserPic";
import FlexBoxBetween from "components/FlexBoxBetween";
import WidgetWrapper from "components/WidgetWrapper";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import {
  ManageAccountsOutlined,
  EditOutlined,
  LocationCityOutlined,
  WorkOutlineOutlined,
} from "@mui/icons-material";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
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
  }, []);
};
