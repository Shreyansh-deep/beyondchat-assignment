import Navbar from "./components/Navbar";
import {
  Avatar,
  Box,
  IconButton,
  Stack,
  ThemeProvider,
  Typography,
} from "@mui/material";
import useThemeToggle from "./theme/themeToggle";
import HorizontalScrollBar from "./components/HorizontalScrollBar";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import GroupIcon from "@mui/icons-material/Group";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import Main from "./components/Main";
import DmPage from "./components/DM";
import { useState } from "react";
import {
  Brightness4,
  Brightness7,
  Send,
} from "@mui/icons-material";

function App() {
  const { theme, toggleTheme } = useThemeToggle();
  const [dmPageToggle, setDmPageToggle] = useState(false);
  const [chatId, setChatId] = useState();
  const [toggleHamburger, setToggleHambergur] = useState(false);


  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {window.innerWidth > 750 ? (
          <div>
            {dmPageToggle ? (
              <div className="container">
                <div className="left-sidebar">
                  <Navbar
                    toggleTheme={toggleTheme}
                    setToggleHambergur={setToggleHambergur}
                  />
                  <HorizontalScrollBar />
                  <Main
                    setDmPageToggle={setDmPageToggle}
                    setChatId={setChatId}
                  />
                </div>
                <div className="right-content" style={{ marginTop: "50px" }}>
                  <DmPage chatId={chatId} />
                </div>
              </div>
            ) : (
              <div>
                <Navbar toggleTheme={toggleTheme} setToggleHambergur={setToggleHambergur}/>
                <HorizontalScrollBar />
                <Main setDmPageToggle={setDmPageToggle} setChatId={setChatId} />
              </div>
            )}
          </div>
        ) : 
        (
          <div>
            {dmPageToggle ? (
              <div>
                <DmPage chatId={chatId} />
              </div>
            ) : (
              <div>
                <Navbar toggleTheme={toggleTheme} setToggleHambergur={setToggleHambergur}/>
                <HorizontalScrollBar />
                <Main setDmPageToggle={setDmPageToggle} setChatId={setChatId} />
              </div>
            )}
          </div>
        )}
        {toggleHamburger ? (
          <div style={{ position: "fixed", top: "50px", left: "0" }}>
            <Box
              sx={{
                width: 250,
                height: "100vh",
                backgroundColor: "primary.main",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", py: 2, px: 3 }}>
                <Stack gap={3}>
                  <Avatar src="https://example.com/avatar" alt="Avatar" />
                  <Box>
                    <Typography variant="body1">John Doe</Typography>
                    <Typography variant="body2">+1 123 456 7890</Typography>
                  </Box>
                </Stack>
                <IconButton onClick={toggleTheme} sx={{ ml: "auto" }}>
                  {theme === "lightTheme" ? <Brightness4 /> : <Brightness7 />}
                </IconButton>
              </Box>
              <br style={{ border: "1px", width: "full" }} />
              <Box sx={{ py: 2, px: 3 }}>
                <Typography variant="body1" sx={{ mb: 1, display: 'flex', alignItems: "start" }}>
                  <AccountCircleIcon />
                  My Profile
                </Typography>
                <Typography variant="body1" sx={{ mb: 1, display: 'flex', alignItems: "start" }}>
                  <PeopleAltIcon /> New Group
                </Typography>
                <Typography variant="body1" sx={{ mb: 1, display: 'flex', alignItems: "start" }}>
                  <GroupIcon /> Contacts
                </Typography>
                <Typography variant="body1" sx={{ mb: 1, display: 'flex', alignItems: "start" }}>
                  <Send /> Calls
                </Typography>
                <Typography variant="body1" sx={{ mb: 1, display: 'flex', alignItems: "start" }}>
                  <EmojiPeopleIcon /> People Nearby
                </Typography>
                <Typography variant="body1" sx={{ mb: 1, display: 'flex', alignItems: "start" }}>
                  <BookmarkBorderIcon />
                  Saved Message
                </Typography>
                <Typography variant="body1" sx={{ mb: 1, display: 'flex', alignItems: "start" }}>
                  <SettingsIcon />
                  Settings
                </Typography>
                <Typography variant="body1" sx={{ mb: 1, display: 'flex', alignItems: "start" }}>
                  <PersonAddIcon />
                  Invite Friends
                </Typography>
                <Typography variant="body1" sx={{ mb: 1, display: 'flex', alignItems: "start" }}>
                  <QuestionMarkIcon />
                  Telegram Features
                </Typography>
              </Box>
            </Box>
          </div>
        ) : (
          <></>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
