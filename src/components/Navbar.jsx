import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
} from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon } from "@mui/icons-material";
import { useState } from "react";

function Navbar({ toggleTheme, theme, setToggleHambergur }) {
  const [showInput, setShowInput] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSearchClick = () => {
    setShowInput(true);
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleInputBlur = () => {
    setShowInput(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>setToggleHambergur && setToggleHambergur((prev) => !prev)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Telegram
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="search"
            onClick={handleSearchClick}
          >
            <SearchIcon />
          </IconButton>
          {showInput && (
            <InputBase
              sx={{ ml: 1, flex: 1, color: "white" }}
              placeholder="Search..."
              value={searchValue}
              onChange={handleInputChange}
              onBlur={handleInputBlur}
            />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
