import { Avatar, Grid, Stack, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import moment from "moment";
import { GetInitials } from "../utils/GetInitials";
import EditIcon from '@mui/icons-material/Edit';

const Main = ({ setDmPageToggle }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response = await axios.get(
          "https://devapi.beyondchats.com/api/get_all_chats?page=1"
        );
        setChats(response.data.data.data);
      } catch (error) {
        return
      }
    };
    fetchChats();
  }, []);

  const ChatItem = ({ item }) => {
    const lastMessage = "Thank you for the opportunity";
    const dateTimeString = item.updated_at;
    const momentDateTime = moment(dateTimeString);
    const currentDate = moment();
    const timeString = useMemo(() => {
      const diffHours = currentDate.diff(momentDateTime, "hours");
      if (diffHours > 24) {
        return `${momentDateTime.format("DD/MM")}`;
      } else {
        return momentDateTime.format("hh:mm A");
      }
    });
    return (
      <Grid
        container
        spacing={2}
        alignItems="center"
        onClick={()=>setDmPageToggle(true)}
      >
        <Grid item>
          <Avatar
            src={item.profilePic || `/avatar/${GetInitials(item.creator.name)}`}
            alt={item.name}
          />
        </Grid>
        <Grid item xs>
          <Typography variant="body1" component="h2">
            {item.creator.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {lastMessage}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="caption" color="textSecondary" align="right">
            {timeString}
          </Typography>
        </Grid>
      </Grid>
    );
  };
  const ChatList = ({ chats }) => {
    return (
      <div>
        <div
          style={{
            backgroundColor: "skyblue",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            position: "fixed",
            bottom: 30,
            right: 30,
            zIndex: "2",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        ><EditIcon/></div>
        <Stack
          container
          spacing={2}
          sx={{
            px: 2,
            pt: 2,
            boxSizing: "border-box",
          }}
        >
          {chats.map((item, index) => (
            <Grid item key={index}>
              <ChatItem item={item}  />
            </Grid>
          ))}
        </Stack>
      </div>
    );
  };

  return <ChatList chats={chats} />;
};

export default Main;
