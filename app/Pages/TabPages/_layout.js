import { StyleSheet, Text, View } from "react-native";
import { Tabs } from "expo-router";
import React from "react";

const TabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="HomePage"/>
    </Tabs>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
