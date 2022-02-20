import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
// import { StackScreenProps } from '@react-navigation/stack'
import {DrawerScreenProps} from '@react-navigation/drawer';
import {styles, colores} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any> {}

export const TransmisionScreen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{
            marginLeft: 10,
          }}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" color={colores.primary} size={35} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#5856D6',
          }}
          onPress={() => navigation.navigate('CheckListScreen')}>
          <Icon name="list-outline" color="white" size={35} />
          <Text style={styles.botonGrandeTexto}>CheckList</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#FF9427',
          }}
          onPress={() => navigation.navigate('InformeScreen')}>
          <Icon name="clipboard-outline" color="white" size={35} />
          <Text style={styles.botonGrandeTexto}>Informes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
