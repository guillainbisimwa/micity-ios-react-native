import React from "react";
import PropTypes from "prop-types";
import { Colors, Layout } from "../constants";
import { TouchableOpacity, StyleSheet } from "react-native";


const Button = (props) => {
    const buttonStyles = [
        styles.button,
        props.shadow && styles.shadow,
        props.border && styles.border,
        props.line && styles.line,
        props.color && styles[props.color], // predefined styles colors for backgroundColor
        props.color && !styles[props.color] && { backgroundColor: props.color }, // custom backgroundColor
        props.style
    ];
    return (
        <TouchableOpacity
          style={buttonStyles}
          activeOpacity={props.opacity || 0.8} 
          {...props}
        >  
            {props.children}
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    button: {
        backgroundColor: Colors.light.primary,
        borderRadius: Layout.radius,
        height: Layout.sizes.base * 3,
        justifyContent: "center",
        marginVertical: Layout.sizes.padding / 3
    },
    shadow: {
        shadowColor: Colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 2
    },
    line:{
        backgroundColor: Colors.dark.tint
    },
    border:{
        borderColor: Colors.dark.tint,
        borderWidth: 3,
    },
    tint: { backgroundColor: Colors.light.tint },
    bg: { backgroundColor: Colors.light.primary },
    white: { backgroundColor: Colors.dark.text },
});


Button.propTypes = {
    style: PropTypes.any,
    opacity: PropTypes.number,
    color: PropTypes.string,
    line: PropTypes.bool,
    shadow: PropTypes.bool,
    children: PropTypes.any,
};

Button.defaultProps = {
    opacity: 0.8,
};

export default Button;
