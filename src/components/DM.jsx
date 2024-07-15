import React, { useState, useEffect } from "react";
import {
  Avatar,
  Typography,
  Grid,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const DmPage = ({ chatId }) => {
  const [chats, setChats] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    fetch(
      `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888`
    )
      .then((response) => response.json())
      .then((data) => {
        setChats(data.data);
        console.log(data.data);
      });
  }, [chatId]);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Box sx={{ display: "flex", alignItems: "center",py: 2, px: 4 }} gap={4}>
        <Grid item xs={2}>
          <Avatar src={""} alt={chats[0]?.sender?.name} />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h6">{chats[0]?.sender?.name}</Typography>
        </Grid>
      </Box>
      <Divider />
      <Box sx={{ flex: 1, overflowY: "auto", py: 2, px: 4 }}>
        {chats.map((chat, index) => (
          <Box key={index} sx={{ display: "flex", mb: 2 }}>
            {chat.senderId === chats[0].sender.id ? (
              <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
                <Typography variant="body1" sx={{ ml: 2 }}>
                  {chat.message}
                </Typography>
                <Avatar
                  src={chats[0]?.sender?.profilePic}
                  alt={chats[0]?.sender?.name}
                  sx={{ width: 24, height: 24 }}
                />
              </Box>
            ) : (
              <Box sx={{ display: "flex" }}>
                <Avatar
                  src={chats[0]?.sender?.profilePic}
                  alt={chats[0]?.sender?.name}
                  sx={{ width: 24, height: 24 }}
                />
                <Typography variant="body1" sx={{ ml: 2 }}>
                  {chat.message}
                </Typography>
              </Box>
            )}
          </Box>
        ))}
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", py: 2, px: 4 }}>
        <Grid item xs={10}>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
          />
        </Grid>
        <Grid item xs={2}>
          <IconButton>
            <SendIcon />
          </IconButton>
        </Grid>
      </Box>
    </Box>
  );
};

export default DmPage;
