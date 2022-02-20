import {Text, TextInput, View} from 'react-native';
import React from 'react';
import {styles} from '../theme/appTheme';

const TextAreaForm = (prop: any) => {
  const {placeholder, label, onChangeText, value} = prop;
  return (
    <View>
      <Text style={{textAlign: 'center'}}>{label}</Text>
      <TextInput
        style={styles.inputArea}
        value={value}
        onChangeText={onChangeText}
        underlineColorAndroid="transparent"
        placeholder={placeholder}
        placeholderTextColor="grey"
        numberOfLines={5}
        multiline={true}
      />
    </View>
  );
};
export default TextAreaForm;
