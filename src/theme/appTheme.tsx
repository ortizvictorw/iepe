import {StyleSheet} from 'react-native';

export const colores = {
  primary: '#5856D6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  botonGrande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  botonGrandeTexto: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 50,
  },
  tituloSeccion: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
    color: colores.primary,
  },
  menuBoton: {
    marginVertical: 10,
  },
  menuTexto: {
    fontSize: 20,
  },
  input: {
    fontSize: 30,
    backgroundColor: '#6e82d73d',
    borderRadius: 4,
    marginBottom: 10,
  },
  inputLabel: {
    color: '#04145ac7',
    fontSize: 15,
    marginBottom: 5,
    marginTop: 10,
  },
  viewCheckBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  checkbox: {
    backgroundColor: 'transparent',
  },
  inputArea: {
    borderColor: '#a763ca',
    borderRadius: 5,
    backgroundColor: '#a763ca40',
    marginBottom: 10,
  },
});
