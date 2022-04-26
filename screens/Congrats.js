import React from "react";
import { Block, Button, Text } from "../components";
import { ActivityIndicator, Image, StyleSheet } from "react-native";
import { Colors, Layout, mocks } from "../constants";

const Congrats = ({navigation}) => {
    
    return <Block flex={1} padding={20} color="primary" animated>
            <Block flex={1} >
                <Block style={styles.bottom} >
                    <Image  style={styles.logo} source={mocks.appConfig.logo} />
                    <Text white h2 center>Welcome</Text>
                </Block>  
            </Block>
          
            <Block flex={1} middle>
                <Button color="white" onPress={() => navigation.navigate("Login")}>
                    <Text primary center h2 bold>Login</Text>
                </Button>
               
            </Block>
        </Block>
};


const styles = StyleSheet.create({
    logo: {
        height: Layout.window.width / 2.5,
        width: Layout.window.width / 2.5
    },
    bottom: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});

export default Congrats;
