import {collection, onSnapshot} from 'firebase/firestore';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import db from '../../database/firebase';
import {styles} from '../theme/appTheme';
import { initialState } from './CheckListScreen';

export const InformeScreen = () => {
  const [dataPermisos, setdataPermisos] = useState([initialState]);
  //const colRef = collection(db, 'permisos');

  /* const loadPermissions = () => {
    onSnapshot(colRef, (snapshot: any) => {
      let permissions: any = [];
      snapshot.docs.forEach((doc: any) => {
        permissions.push({...doc.data(), id: doc.id});
      });

      console.log(dataPermisos);
      setdataPermisos(permissions);
    });
  };
 
  useEffect(() => {
    loadPermissions();
  }, []);*/

  return (
    <View style={styles.globalMargin}>
      {dataPermisos.map((permission: any) => {
        return <Text style={styles.title}> {JSON.stringify(permission, null,3)} </Text>;
      })}
      <Text style={styles.title}> Informes </Text>
    </View>
  );
};
