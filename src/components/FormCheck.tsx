import {View, Text} from 'react-native';
import React from 'react';
import InputForm from './InputForm';
import CheckBoxForm from './CheckBoxForm';
import TextAreaForm from './TextAreaForm';
import {styles} from '../theme/appTheme';

export const FormCheck = (props: any) => {
  const {formData, setForm} = props;
  return (
    <View>
      <View style={{marginBottom: 30, backgroundColor: '#c9d3fd47'}}>
        <Text style={styles.tituloSeccion}>ANTES DE COMENZAR A TRANSMITIR</Text>
        <InputForm
          value={formData.encargado}
          onChangeText={(text: any) => setForm({...formData, encargado: text})}
          label={'Encargado de Transmisión'}
          type={'text'}
          placeholder={'Juancito...'}
        />
        <InputForm
          value={formData.titulo}
          onChangeText={(text: any) => setForm({...formData, titulo: text})}
          label={'Titulo de la predica'}
          type={'text'}
          placeholder={'Jesus es...'}
        />
        <View style={{marginVertical: 20}}>
          <InputForm
            value={formData.obs}
            onChangeText={(text: any) => setForm({...formData, obs: text})}
            label={'Quien maneja OBS ?'}
            type={'text'}
            placeholder={'Juancito...'}
          />
          <CheckBoxForm
            checked={formData.esTitutlarObs}
            text={'Es el Titular ?'}
            onChange={() =>
              setForm({...formData, esTitutlarObs: !formData.esTitutlarObs})
            }
          />
        </View>
        <View style={{marginBottom: 20}}>
          <InputForm
            value={formData.camaras}
            onChangeText={(text: any) => setForm({...formData, camaras: text})}
            label={'Quien maneja las Camaras ? '}
            type={'text'}
            placeholder={'Juancito...'}
          />
          <CheckBoxForm
            checked={formData.esTitutlarCam}
            text={'Es el Titular ?'}
            onChange={() =>
              setForm({...formData, esTitutlarCam: !formData.esTitutlarCam})
            }
          />
        </View>
      </View>
      <View style={{marginBottom: 30, backgroundColor: '#c9d3fd47'}}>
        <CheckBoxForm
          checked={formData.hayIternet}
          text={'Hay internet ?'}
          onChange={() => setForm({...formData, hayIternet: !formData.camaras})}
        />
        <CheckBoxForm
          checked={formData.haySonido}
          onChange={() =>
            setForm({...formData, haySonido: !formData.haySonido})
          }
          text={'Llega sondido al OBS'}
        />
        <CheckBoxForm
          checked={formData.hayEscenas}
          text={'Estan preparadas las escenas en OBS? '}
          onChange={() =>
            setForm({...formData, hayEscenas: !formData.hayEscenas})
          }
        />
        <CheckBoxForm
          checked={formData.hayAuriculares}
          onChange={() =>
            setForm({...formData, hayAuriculares: !formData.hayAuriculares})
          }
          text={'Esta conectado los Auriculares para monitorizar ? '}
        />
        <CheckBoxForm
          checked={formData.hayOffline}
          text={'Probaste el offline ? '}
          onChange={() =>
            setForm({...formData, hayOffline: !formData.hayOffline})
          }
        />
        <CheckBoxForm
          checked={formData.hayYoutube}
          text={'Verificamos que este publico en Youtube ?'}
          onChange={() =>
            setForm({...formData, hayYoutube: !formData.hayYoutube})
          }
        />
        <CheckBoxForm
          checked={formData.hayMiniaturaYoutube}
          text={'Verificamos la miniatura de Youtube ?'}
          onChange={() =>
            setForm({
              ...formData,
              hayMiniaturaYoutube: !formData.hayMiniaturaYoutube,
            })
          }
        />
        <CheckBoxForm
          checked={formData.hayFacebook}
          text={'Apretamos Transmitir en Facebook ?'}
          onChange={() =>
            setForm({...formData, hayFacebook: !formData.hayFacebook})
          }
        />
      </View>

      <View style={{marginBottom: 30, backgroundColor: '#48bcf340'}}>
        <Text style={styles.tituloSeccion}>DURANTE LA TRANSMISION</Text>
        <CheckBoxForm
          checked={formData.hayTituloPredica}
          text={'Tenemos titulo de la predica ?'}
          onChange={() =>
            setForm({...formData, hayTituloPredica: !formData.hayTituloPredica})
          }
        />
        <CheckBoxForm
          checked={formData.cambioTituloYoutube}
          text={'Cambiamos el titulo de Youtube ?'}
          onChange={() =>
            setForm({
              ...formData,
              cambioTituloYoutube: !formData.cambioTituloYoutube,
            })
          }
        />
        <CheckBoxForm
          checked={formData.cambioTituloFacebook}
          text={'Cambiamos el titulo de Facebook ?'}
          onChange={() =>
            setForm({
              ...formData,
              cambioTituloFacebook: !formData.cambioTituloFacebook,
            })
          }
        />
        <CheckBoxForm
          checked={formData.monitorYoutube}
          text={'Sale bien audio y video desde Youtube ?'}
          onChange={() =>
            setForm({...formData, monitorYoutube: !formData.monitorYoutube})
          }
        />
        <CheckBoxForm
          checked={formData.monitorFacebook}
          text={'Sale bien audio y video desde Facebook ?'}
          onChange={() =>
            setForm({...formData, monitorFacebook: !formData.monitorFacebook})
          }
        />
      </View>
      <View style={{marginBottom: 30, backgroundColor: '#a763ca40'}}>
        <Text style={styles.tituloSeccion}>AL FINALIZAR LA TRANSMISION</Text>
        <CheckBoxForm
          checked={formData.camarasOff}
          text={'Apagamos las camaras ?'}
          onChange={() =>
            setForm({...formData, camarasOff: !formData.camarasOff})
          }
        />
        <CheckBoxForm
          checked={formData.swichOff}
          text={'Apagamos el Swich ?'}
          onChange={() => setForm({...formData, swichOff: !formData.swichOff})}
        />
        <CheckBoxForm
          checked={formData.ventilarOff}
          text={'Apagamos Ventilador ?'}
          onChange={() =>
            setForm({...formData, ventilarOff: !formData.ventilarOff})
          }
        />
        <CheckBoxForm
          checked={formData.celularOff}
          text={'Dejamos cargando el celular ?'}
          onChange={() =>
            setForm({...formData, celularOff: !formData.celularOff})
          }
        />
        <CheckBoxForm
          checked={formData.orden}
          text={'Dejamos ordenada la sala ?'}
          onChange={() => setForm({...formData, orden: !formData.orden})}
        />
      </View>

      <TextAreaForm
        value={formData.observaciones}
        onChangeText={(text: any) =>
          setForm({...formData, observaciones: text})
        }
        placeholder={'Paso esto...'}
        label={'OBSERVACIONES'}
      />
    </View>
  );
};
