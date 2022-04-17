import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import { Colors, Layout, mocks } from "../constants";
import Block from "./Block";
import Text from "./Text";
import * as Icon from "@expo/vector-icons";


const Service = (props) => {
    return <TouchableOpacity
            onPress={() => props.navigation.navigate('ProviderDetails', { label: props.label, cat: props.cat, details: props.services, province: props.province, listCat: props.listCat} )}
        >
        <Block style={styles.border}>
            <Block row>
                <Image style={styles.circle} source={ mocks.services[0].logo }/>
                <Text primary bold h2  >{props.services.name}</Text>
            </Block>
            <Block style={styles.details}>
                <Text numberOfLines={2} darkGrey >{props.services.desc}</Text>
            </Block>
            <Block row space="between">
                <Block row>
                    <Icon.Ionicons
                        style={styles.icons}
                        color={Colors.primary}
                        size={Layout.base}
                        name={"call"}
                    />
                    <Text>{props.services.phone}</Text>
                </Block>
                <Block row>
                    <Icon.Ionicons
                        style={styles.icons}
                        color={Colors.primary}
                        size={Layout.base}
                        name={"globe"}
                    />
                    <Text>{props.services.website}</Text>
                </Block>
            </Block>
        </Block>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    border: {
        borderWidth: 2,
        borderColor: Colors.light.tint,
        borderRadius: Layout.radius,
        padding: 20,
        marginBottom: 15,
        width: Layout.window.width - (Layout.base*(2.5)*2),
    },
    circle: {
        width: Layout.base * 2,
        height: Layout.base * 2,
        borderRadius:  Layout.base * 2,
        borderWidth: 1,
        borderColor: Colors.light.primary,
        marginRight: 15
    },
    details: {
        marginVertical: Layout.base/2,
    },
    icons: {
        marginRight : Layout.base/2,
    }
});


export default Service;
