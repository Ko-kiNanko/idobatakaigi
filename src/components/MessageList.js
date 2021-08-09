import React,{ useEffect, useState } from 'react';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import MessageItem from './MessageItem';
import { messagesRef } from '../firebase';

const useStyles = makeStyles({
  root: { 
    gridRow: 1,
    overflow: 'auto',
    width: '100%',
  },
});

// key: MgBiyHiJXNI98U76fZv, value: {name: "ハムさん", text: "こんにちは"}
// {key: MgBiyHiJXNI98U76fZv, name: "ハムさん", text: "こんにちは"}

const MessageList = () => {
  const [messages, setMessages] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    messagesRef
    .orderByKey()
    .limitToLast(15)
    .on('value', (snapshot) => {
      const messages = snapshot.val();
      if (messages === null) return;
      const entries = Object.entries(messages);
      const newMessages = entries.map((entry) => {
        const [key, nameAndText] = entry;
        // const key = entry[0]
        // const nameAndText = entry[1]
        return { key, ...nameAndText };
      });
      setMessages(newMessages);
    });
  }, [])
  return (
    <List className={classes.root}>
      {messages.map(({ key, name, text }) => {
        return <MessageItem key={key} name={name} text={text}>item</MessageItem>;
      })}
    </List>
  );
};

export default MessageList;