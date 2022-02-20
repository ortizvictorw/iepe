import {Text, View} from 'react-native';
import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import {styles} from '../theme/appTheme';

const CheckBoxForm = (prop: any) => {
  const {text, onChange, checked} = prop;
  return (
    <View style={styles.viewCheckBox}>
      <Text style={styles.inputLabel}>{text}</Text>
      <CheckBox
        style={styles.checkbox}
        disabled={checked}
        value={checked}
        onValueChange={onChange}
      />
    </View>
  );
};

export default CheckBoxForm;
