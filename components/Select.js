import React, { useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import PropTypes from "prop-types";

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState(props.items);
  return (
    <DropDownPicker
        placeholder={props.placeholder}
        open={open}
        placeholderStyle={{
          color: props.error? "#a11": "#aaa",
        }}
        searchable={props.searchable}
        multiple={props.multiple}
        items={items}
        setOpen={setOpen}
        setItems={setItems}
        {...props}
    />
  );
};

Dropdown.propTypes = {
    search: PropTypes.bool,
    placeholder: PropTypes.string,
    multiple: PropTypes.bool,
    items: PropTypes.array,
};

Dropdown.defaultProps = {
    multiple: false,
    searchable: false
};

export default Dropdown;
