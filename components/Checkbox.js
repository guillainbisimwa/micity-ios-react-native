import React, { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import Text  from "./Text";
import * as Icon from "@expo/vector-icons";
import { Colors, Layout } from "../constants";

const  Checkbox =(props)=> {

  const [checked, setChecked] = useState(props.check || false);

    return (
       <TouchableWithoutFeedback
        key={props.id}
        onPress={() => {
          setChecked(!checked)
          console.log()
        }}
      >
        <View
          style={styles.checkboxContainer}
        >

          <Icon.Ionicons
            color={Colors.gray}
            size={Layout.sizes.font * 1.35}
            name={!checked ? "checkbox-outline" : "square-outline"}
          />
          
          <View
            style={{ marginLeft: 5 }}
          >
            <Text style={{...props.textStyle}}>{'' + props.label}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
}


Checkbox.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  iconColor: PropTypes.string,
  checked: PropTypes.bool,
  onChecked: PropTypes.func,
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection:  'row' ,
    alignItems: 'center'
  },
});

export default Checkbox;
