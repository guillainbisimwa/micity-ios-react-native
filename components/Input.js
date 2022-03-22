import React, { Component } from "react";
import { StyleSheet, TextInput } from "react-native";
import * as Icon from "@expo/vector-icons";

import Block from "./Block";
import Button from "./Button";
import { Colors, Layout } from "../constants";

export default class Input extends Component {
  state = {
    toggleSecure: false,
    searchState: false
  };

  renderLeft() {
    const { search, icon, leftLabel } = this.props;

    if (!search) return null;

    return (
      <Button
        style={styles.search}
        
      >
        {leftLabel ? (
          leftLabel
        ) : (
          <Icon.Ionicons
            color={Colors.gray}
            size={Layout.sizes.font * 1.35}
            name={!icon? 'search': icon}
          />
        )}
      </Button>
    );
  }

  renderToggle() {
    const { secure, rightLabel } = this.props;
    const { toggleSecure } = this.state;

    if (!secure) return null;

    return (
      <Button
        style={styles.toggle}
        onPress={() => this.setState({ toggleSecure: !toggleSecure })}
      >
        {rightLabel ? (
          rightLabel
        ) : (
          <Icon.Ionicons
            color={Colors.gray}
            size={Layout.sizes.font * 1.35}
            name={!toggleSecure ? "md-eye" : "md-eye-off"}
          />
        )}
      </Button>
    );
  }

  renderRight() {
    const { rightLabel, rightStyle, onRightPress } = this.props;

    if (!rightLabel) return null;

    return (
      <Button
        style={[styles.toggle, rightStyle]}
        onPress={() => onRightPress && onRightPress()}
      >
        {rightLabel}
      </Button>
    );
  }

  render() {
    const { email, phone, number, secure, error, style, search, ...props } = this.props;

    const { toggleSecure } = this.state;
    const isSecure = toggleSecure ? false : secure;

    const inputStyles = [
      styles.input,
      error && { borderColor: Colors.danger, borderWidth: 1 },
      style
    ];

    const inputType = email
      ? "email-address"
      : number
      ? "numeric"
      : phone
      ? "phone-pad"
      : "default";

    return (
      <Block style={{flex: 0, marginTop:Layout.sizes.base, 
      marginBottom:Layout.sizes.base/2, marginRight:0, marginLeft:0}} >

        <TextInput
          style={[inputStyles, search? {paddingLeft: 40}:{}]}
          secureTextEntry={isSecure}
          autoComplete="off"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType={inputType}
          {...props}
        />
        {this.renderToggle()}
        {this.renderRight()}
        {this.renderLeft()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.grey,
    borderRadius: Layout.sizes.radius,
    fontSize: Layout.sizes.base,
    fontWeight: "600",
    color: Colors.black,
    backgroundColor: Colors.grey,
    height: Layout.sizes.base * 3,
    paddingLeft: 15,
  },
  toggle: {
    position: "absolute",
    alignItems: "flex-end",
    width: Layout.sizes.base * 2,
    height: Layout.sizes.base * 2,
    top: Layout.sizes.base,
    right: 15
  },
  search: {
    position: "absolute",
    alignItems: "flex-start",
    width: Layout.sizes.base * 2,
    height: Layout.sizes.base * 2,
    top: Layout.sizes.base,
    left: 15
  }
});
