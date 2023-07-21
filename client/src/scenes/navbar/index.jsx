import { useState } from "react";
import {
  Box,
  IconButton,
  ImputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  PersonSearchIcon,
  TextsmsIcon,
  EmojiObjectsTwoToneIcon,
  EmojiObjectsRoundedIcon,
  NotificationsIcon,
  InfoIcon,
  WidgetsIcon,
  CloseIcon,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBoxBetween from "components/FlexBoxBetween";

const Navbar = () => {
  const [isMobileMenuToggled, setIsmobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonmobileScreens = useMediaQuery("(min-width:1000px)");
  return <div>Navbar</div>;
};

export default Navbar;
