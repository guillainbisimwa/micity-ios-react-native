import React from "react";
import { StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Colors, Layout } from "../constants";
import Block  from "./Block";
import Text from "./Text";

const info = (name) => (
    Alert.alert(
      `${name}`,
      `Not Implemented yet!`,
      [
        {
          text: "Okay",
          style: "cancel"
        }
      ]
    )
  );

const ServiceCategory = (props) => {
    return <TouchableOpacity
        onPress={()=> (
            !props.status? props.navigation.navigate('Provider', {
              label: props.label, cat: props.cat, province: props.province, listCat: props.listCat
            }) :  info(props.label)
            ) }>
            <Block row style={styles.card} >
                <Block color="grey" style={styles.card} animated
                    {...props}
                    >
                    <Block flex={1} middle padding={Layout.base}>
                        <Text bold h2 primary>{props.label}</Text>
                    </Block>
                </Block>
            </Block>
        </TouchableOpacity>
};

const styles = StyleSheet.create({
    card: {
        width: Layout.window.width - (Layout.base*(2.5)*2),
        height: Layout.window.width/7,
        backgroundColor: Colors.light.tint,
        borderRadius: Layout.radius,
        elevation: 0.5,
        marginBottom: Layout.base,
    },
});

export default ServiceCategory;
