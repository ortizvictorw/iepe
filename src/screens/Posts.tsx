import React, {useEffect} from 'react';

import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const Posts = () => {
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen effect');
  }, []);

  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop: top + 10,
      }}>
      <Text style={styles.title}> En construccion </Text>

      <Text>Muro con posts navegacionApp</Text>
    </View>
  );
};
