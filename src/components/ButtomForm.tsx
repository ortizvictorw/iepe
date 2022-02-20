import {View, Button} from 'react-native';
import React from 'react';

export const ButtomForm = (prop: any) => {
  const {textButon, onSubmit, loading, disabled} = prop;
  return (
    <View style={{marginHorizontal: 50, marginVertical: 20}}>
      {loading ? (
        <Button onPress={() => {}} disabled={disabled} title="Enviando..." />
      ) : (
        <Button
          onPress={onSubmit}
          disabled={disabled}
          title={disabled ? 'Falta nombre' : textButon}
        />
      )}
    </View>
  );
};
