import React from "react";
import { Text, View, ImageBackground } from "react-native";
import styles from "./styles";

const CardItem = (props) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelX.jpeg")}
        style={styles.image}
      />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle}>Starting at $86,000</Text>
      </View>
    </View>
  );
};

export default CardItem;
