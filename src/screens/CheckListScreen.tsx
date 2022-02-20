import {StackScreenProps} from '@react-navigation/stack';
import React, {useState} from 'react';
import {View, SafeAreaView, ScrollView} from 'react-native';
import {addDoc, collection} from 'firebase/firestore';

import {RootStackParams} from '../navigator/TransmisionStack';
import {styles} from '../theme/appTheme';
import {FormCheck} from '../components/FormCheck';
import {ButtomForm} from '../components/ButtomForm';
import db from '../../database/firebase';

export const initialState = {
  fecha: new Date().toString(),
  encargado: '',
  titulo: '',
  obs: '',
  esTitutlarObs: false,
  esTitutlarCam: false,
  camaras: '',
  hayIternet: false,
  haySonido: false,
  hayEscenas: false,
  hayAuriculares: false,
  hayOffline: false,
  hayYoutube: false,
  hayMiniaturaYoutube: false,
  hayFacebook: false,
  hayTituloPredica: false,
  cambioTituloYoutube: false,
  cambioTituloFacebook: false,
  monitorYoutube: false,
  monitorFacebook: false,
  camarasOff: false,
  swichOff: false,
  ventilarOff: false,
  celularOff: false,
  orden: false,
  observaciones: '',
};
interface Props extends StackScreenProps<RootStackParams, 'CheckListScreen'> {}
export const CheckListScreen = ({navigation}: Props) => {
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  // MARK: CRUD Functions
  const create = async () => {
    setLoading(true);
    await addDoc(collection(db, 'permisos'), form);
    setLoading(false);
    setForm(initialState);
    navigation.navigate('InformeScreen');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.globalMargin}>
          <FormCheck formData={form} setForm={setForm} />
          <ButtomForm
            onSubmit={create}
            loading={loading}
            textButon={'Enviar'}
            disabled={form.encargado === ''}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
