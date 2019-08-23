import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

class Bridges extends Component {
  render() {
    return (
      <View>
        <Text style={styles.itemPick}>Bridges</Text>
        <View style={{ padding: 15 }}>
          <Image
            style={styles.imgSizer}
            resizeMode="contain"
            source={{
              uri:
                "https://westcoastinternational.com/wp-content/uploads/2018/05/dental-bridges.jpg"
            }}
          />
          <Text style={styles.itemPickText}>
            Dental bridges lliterally bridge the gap created by one or more
            missing teeth.{"\n\n"}A bridge is made up of two or more crowns for
            the teeth on either side of the gap. The two or more anchoring teeth
            are called abutment teeth and contain a false tooth/teeth in
            between. These false teeth are called pontics and can be made from
            gold, alloys, porcelain, or a combination of these materials. Dental
            bridges are supported by natural teeth or implants.
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemPickText: {
    color: "#000",
    fontSize: 20
  },
  itemPick: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    color: "#114260",
    marginTop: 20,
    backgroundColor: "#fcec01",
    marginBottom: 10
  },
  imgSizer: {
    width: "100%",
    height: hp("45%"),
    marginTop: 15
  }
});

export default Bridges;
