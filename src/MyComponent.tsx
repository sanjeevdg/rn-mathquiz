import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
};

const MyComponent: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#eee",
    borderRadius: 8
  },
  text: {
    fontSize: 18,
    color: "#333"
  }
});

export default MyComponent;

