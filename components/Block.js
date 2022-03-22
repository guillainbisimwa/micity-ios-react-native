import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Animated } from "react-native";
import { Colors, Layout } from "../constants";

const handleMargins = (margin) =>{
    if (typeof margin === "number") {
      return {
        marginTop: margin,
        marginRight: margin,
        marginBottom: margin,
        marginLeft: margin
      };
    }

    if (typeof margin === "object") {
      const marginSize = Object.keys(margin).length;
      switch (marginSize) {
        case 1:
          return {
            marginTop: margin[0],
            marginRight: margin[0],
            marginBottom: margin[0],
            marginLeft: margin[0],
          };
        case 2:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[0],
            marginLeft: margin[1],
          };
        case 3:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[1],
          };
        default:
          return {
            marginTop: margin[0],
            marginRight: margin[1],
            marginBottom: margin[2],
            marginLeft: margin[3],
          };
      }
    }
  }

const handlePaddings = (padding) => {
    if (typeof padding === "number") {
      return {
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding,
        paddingLeft: padding
      };
    }

    if (typeof padding === "object") {
        const paddingSize = Object.keys(padding).length;
        switch (paddingSize) {
            case 1:
                return {
                    paddingTop: padding[0],
                    paddingRight: padding[0],
                    paddingBottom: padding[0],
                    paddingLeft: padding[0]
                };
            case 2:
                return {
                    paddingTop: padding[0],
                    paddingRight: padding[1],
                    paddingBottom: padding[0],
                    paddingLeft: padding[1],
                };
            case 3:
                return {
                    paddingTop: padding[0],
                    paddingRight: padding[1],
                    paddingBottom: padding[2],
                    paddingLeft: padding[1],
                };
            default:
                return {
                    paddingTop: padding[0],
                    paddingRight: padding[1],
                    paddingBottom: padding[2],
                    paddingLeft: padding[3],
                };
        }
    }
}

const Block = (props) => {
  const blockStyles = [
    styles.block,
    props.flex && { flex: props.flex },
    props.row && styles.row,
    props.column && styles.column,
    props.center && styles.center,
    props.middle && styles.middle,
    props.left && styles.left,
    props.right && styles.right,
    props.top && styles.top,
    props.bottom && styles.bottom,
    props.margin && { ...handleMargins(props.margin) },
    props.padding && { ...handlePaddings(props.padding) },
    props.card && styles.card,
    props.shadow && styles.shadow,
    props.space && { justifyContent: `space-${props.space}` },
    props.wrap && { flexWrap: "wrap" },
    props.color && styles[props.color], // predefined styles colors for backgroundColor
    props.color && !styles[props.color] && { backgroundColor: props.color }, // custom backgroundColor
    props.style, // rewrite predefined styles
  ];

  if (props.animated) {
    return (
      <Animated.View style={blockStyles} {...props}>
        {props.children}
      </Animated.View>
    );
  }

  return (
    <View style={blockStyles} {...props}>
      {props.children}
    </View>
  );
};

export const styles = StyleSheet.create({
  block: {
    //flex: 1,
    //width: '100%'
  },
  row: {
    flexDirection: "row"
  },
  column: {
    flexDirection: "column"
  },
  card: {
    borderRadius: Layout.radius
  },
  center: {
    alignItems: "center"
  },
  middle: {
    justifyContent: "center"
  },
  left: {
    justifyContent: "flex-start"
  },
  right: {
    justifyContent: "flex-end"
  },
  top: {
    justifyContent: "flex-start"
  },
  bottom: {
    justifyContent: "flex-end"
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 13,
    elevation: 2
  },
  tint: { backgroundColor: Colors.light.tint },
  grey: { backgroundColor: Colors.light.background },
  primary: { backgroundColor: Colors.light.primary },
  white: { backgroundColor: Colors.dark.text },
});

Block.propTypes = {
    flex:PropTypes.number,
    row:PropTypes.bool,
    column:PropTypes.bool,
    center:PropTypes.bool,
    middle:PropTypes.bool,
    left:PropTypes.bool,
    right:PropTypes.bool,
    top:PropTypes.bool,
    bottom:PropTypes.bool,
    card:PropTypes.bool,
    shadow:PropTypes.bool,
    color:PropTypes.any,
    space:PropTypes.string,
    padding: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object,
    ]),
    margin: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.object,
    ]),
    animated:PropTypes.bool,
    wrap:PropTypes.bool,
    style:PropTypes.any,
    children:PropTypes.any,
};

export default Block;
