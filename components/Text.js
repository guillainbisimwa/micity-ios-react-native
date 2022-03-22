// just copy this code from the driving repo :)
import React from "react";
import { Text, StyleSheet } from "react-native";
import { Colors, fonts, Layout, TextProps } from "../constants";
import PropTypes from "prop-types";

const Typography = (props) => {
  const textStyles = [
    styles.text,
    props.h1 && styles.h1,
    props.h2 && styles.h2,
    props.h3 && styles.h3,
    props.title && styles.title,
    props.body && styles.body,
    props.caption && styles.caption,
    props.small && styles.small,
    props.size && { fontSize: props.size },
    props.transform && { textTransform: props.transform },
    props.align && { textAlign: props.align },
    props.height && { lineHeight: props.height },
    props.spacing && { letterSpacing: props.spacing },
    props.weight && { fontWeight: props.weight },
    props.regular && styles.regular,
    props.bold && styles.bold,
    props.semibold && styles.semibold,
    props.medium && styles.medium,
    props.light && styles.light,
    props.center && styles.center,
    props.right && styles.right,
    props.color && styles.color,
    props.color && !styles.color && { color: props.color },
    // color shortcuts
    props.accent && styles.accent,
    props.primary && styles.primary,
    props.black && styles.black,
    props.white && styles.white,
    props.grey && styles.grey,
    props.darkGrey && styles.darkGrey,
    props.style // rewrite predefined styles
  ];

  return (
    <Text style={textStyles} {...props}>
      {props.children}
    </Text>
  );
};

const styles = StyleSheet.create({
  // default style
  text: {
    fontSize: Layout.sizes.font,
    color: Colors.black
  },
  color: {
    color: Colors.black
  },
  // variations
  regular: {
    fontWeight: "normal"
  },
  bold: {
    fontWeight: "bold"
  },
  semibold: {
    fontWeight: "900"
  },
  medium: {
    fontWeight: "500"
  },
  light: {
    fontWeight: "200"
  },
  // position
  center: { textAlign: "center" },
  right: { textAlign: "right" },
  // colors
  accent: { color: Colors.danger },
  primary: { color: Colors.primary },
  black: { color: Colors.black },
  white: { color: Colors.dark.text },
  grey: { color: Colors.grey },
  grey: { color: Colors.grey },
  darkGrey: { color: Colors.light.tabIconDefault },
  // fonts
  h1: fonts.h1,
  h2: fonts.h2,
  h3: fonts.h3,
  title: fonts.title,
  body: fonts.body,
  caption: fonts.caption,
  small: fonts.small
});


Typography.propTypes = {
  h1: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
  title: PropTypes.bool,
  body: PropTypes.bool,
  caption: PropTypes.bool,
  small: PropTypes.bool,
  size: PropTypes.number,
  transform: PropTypes.string, // capitalize, uppercase, lowercase, 
  align: PropTypes.string,
  // styling
  regular: PropTypes.bool,
  bold: PropTypes.bool,
  semibold: PropTypes.bool,
  medium: PropTypes.bool,
  weight: PropTypes.bool,
  light: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
  spacing: PropTypes.bool, // letter-spacing
  height: PropTypes.bool, // line-height
  // colors
  color: PropTypes.any,
  accent: PropTypes.bool,
  primary: PropTypes.bool,
  black: PropTypes.bool,
  white: PropTypes.bool,
  grey: PropTypes.bool,
  darkGrey: PropTypes.bool,
  style: PropTypes.any,
  children: PropTypes.any,
};

export default Typography;
