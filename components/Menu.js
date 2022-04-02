import React from "react";
import { Image, StyleSheet, TouchableOpacity, Alert } from "react-native";
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

const Menu = (props) => {
    const min = props.listMin.filter((obj) => obj.parent === props.province);
    return <TouchableOpacity
        onPress={()=> {
            if(props.name == "Service Provider"){
                props.navigation.navigate('Providers',  { province: props.province, listCat: props.listCat })
            }else if(props.name == "Report a problem"){
                props.navigation.navigate('Report', { min: props.listMin.filter((obj) => (obj.parent === props.province) || (obj.value === props.province) )})
            }
            else {
                info(props.name)
            }
        }
            
            }>
            <Block row margin={Layout.base}>
                <Block style={styles.card} animated
                    {...props}
                    >
                    <Block flex={1} center>
                        <Block flex={3} center row  >
                            <Image style={styles.img} source={props.img} />
                        </Block>
                        <Block flex={1} >
                            <Text bold numberOfLines={1} center h3 primary transform="capitalize">{props.name}</Text>
                        </Block>
                    </Block>
                </Block>
            </Block>
        </TouchableOpacity>
};

const styles = StyleSheet.create({
    card: {
        width: Layout.window.width/2 - (Layout.base*(2)*2),
        height: Layout.window.width/3,
        backgroundColor: Colors.light.background,
        borderRadius: Layout.radius * 2,
        //elevation: 0.5
    },
    img: {
        justifyContent: "flex-end",
        height: 40,
        width: 40
    }
});

export default Menu;
