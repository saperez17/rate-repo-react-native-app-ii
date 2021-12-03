import React from "react";
import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import { StatusBar } from 'expo-status-bar';

export default function App() {
  console.log("hello world!");
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar/>
    </>
  );
}
