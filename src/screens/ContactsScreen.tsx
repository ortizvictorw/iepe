import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import {AuthContext} from '../context/AuthContext';

export const ContactsScreen = () => {
  const {
    signIn,
    authState: {isLoggedIn},
  } = useContext(AuthContext);
  return (
    <View>
      <Text>En construccion</Text>
      {!isLoggedIn && <Button title="SingIn" onPress={signIn} />}
    </View>
  );
};
