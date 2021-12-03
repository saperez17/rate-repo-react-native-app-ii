import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import AppBarTab from "./AppBarTab";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    // justifyContent: 'flex-end',
    height: Constants.statusBarHeight * 4,
    backgroundColor: theme.colors.backgroundDark,
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/">
          <AppBarTab>Repositories</AppBarTab>
        </Link>
        <Link to="/signin">
          <AppBarTab>Sign in</AppBarTab>
        </Link>
        
      </ScrollView>
    </View>
  );
};

export default AppBar;
