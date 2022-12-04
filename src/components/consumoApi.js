import React from 'react';
import {
    Child,
    Text,
    FlatList
} from 'react-native';


export const getUsers = async() => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await data.json()
  return users
  };

