import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Block, Button, Text, } from '../components';
import { Colors, Layout } from '../constants';
import * as Icon from "@expo/vector-icons";

const Reset = ({navigation}) =>{

    return (
        <KeyboardAvoidingView style={{ flex: 1}} >
        <Block flex={1}  color="white" animated>
            <Block style={{ paddingTop: Layout.base*1.9, paddingRight: Layout.base*1.5, paddingLeft: Layout.base*1.5, flexDirection: 'row', justifyContent: 'space-between'  }}>
                <TouchableOpacity >
                    <Icon.Ionicons
                        color={Colors.primary}
                        size={Layout.base*2}
                        name={"arrow-back"}
                        onPress={()=> navigation.navigate("Login")}
                    />
                </TouchableOpacity>
              
                <Block padding={1}>
                    <Text numberOfLines={1} bold h1 primary></Text>
                </Block>
                <Block >
                </Block>
            </Block>
            <Block flex={1}>
                <View style={styles.container}>
                    <Image style={styles.icon} source={{uri: "https://img.icons8.com/color/70/000000/password.png"}} />
                    <Text style={styles.title}>Reset your password</Text>
                    <Text style={styles.description}>Please check your inbox and click in tle received link to reset your password</Text>
                </View>
                <Block style={{padding: 50}} >
                    <Block style={styles.mt} >
                        <Button onPress={()=> (navigation.navigate("Login") )}>
                            <Text white bold h2 center>Login</Text>
                        </Button>
                    </Block>
                </Block>

            </Block>
        </Block>
    </KeyboardAvoidingView> 
    )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop:50,
  },
  icon:{
    width:120,
    height:120,
  },
  title:{
    fontSize:24,
    textAlign: 'center',
    marginTop:22,
    color: "#5F6D7A"
  },
  description: {
    marginTop:20,
    textAlign: 'center',
    color: "#A9A9A9",
    fontSize:16,
    margin:40,
  },
  buttonContainer: {
    height:45,
    textAlign: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },

});

export default Reset;
