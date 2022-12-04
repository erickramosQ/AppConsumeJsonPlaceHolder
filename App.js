import React, { Component} from 'react';
import {
    StyleSheet,
    View,
    Alert,
    Text,
    TouchableOpacity,
    TextInput,

} from 'react-native';

import {getUsers}  from './src/components/consumoApi';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';


export default class VerticalStackLayout extends Component {
  
  constructor(props) { 
    super(props);  
    this.state = {text: '',titleok:''};  
  }   

  render() {
    return (
      <NavigationContainer>
        <View style={styles.container}>
            <AppTitle
              title="Search User"
            />
            <AppInput
              onChangeText={(text) => this.setState({text})} 
        />
        
            <AppButton
              title="Buscar"

              onPress={() => this.LoadUsers()}
            /> 
            
        </View>
      </NavigationContainer>
    );
  }
  
  LoadUsers = async () => {
    
    const res = await getUsers();
    var valorinput=this.state.text
    var myBoolean = false;
    var iduser = 0;
    res.forEach(index => {
      if (index.email.toUpperCase() == valorinput.toUpperCase()) {
        iduser = index.id;//encuentra y almacena el id del usuario
        myBoolean = true;//correo encontrado
        Alert.alert(
          //title
          'Bienvenid@:\n'+index.name,
          //body
          'Usuario: ' + index.username + "\nTelefono: " + index.phone + "\nWebsite: " + index.website
          + "\nEmail: " + index.email + "\nDireccion: " + index.address.street + " " + index.address.suite + " " + index.address.city
          + "\nCodigo Postal: " + index.address.zipcode + "\nCompañia: " + index.company.name + "\nSlogan: " + index.company.catchPhrase
          + "\nbs: " + index.company.bs,

          [
            { text: 'Ingresar', onPress: () => null},
          ],

        );
      }
      
    });
    if (myBoolean == true) {
      
    } else { 

      Alert.alert(
        //title
        'Usuario no encontrado',
        //body
        'Por favor verifique su correo electronico',
        [
          { text: 'Ok', onPress: () => null},
          
        ],
      );
    }
    console.log(myBoolean)
    console.log("id:"+iduser)
    console.log("correo:"+valorinput)
    
  };
}

//objetos personalizados
const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer} activeOpacity={0.8}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
);

const AppTitle = ({title }) => (
      <Text style={styles.appTitleText}>{title}</Text>
);

const AppInput = ({ onChangeText, text }) => (
    <TextInput
        style={styles.input}
        placeholder="Buscar por Correo Electronico"
        onChangeText={onChangeText}
        value={text}
    cursorColor='black'
      
      />
);

//estilos personalizados
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
        
    
    },
    box: {
        height: 65,
        marginBottom: 10,
        borderRadius:10
    },
    
    appButtonContainer: {
        marginBottom: 5,
        elevation: 2,
        backgroundColor: "#F53B1B",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12
  },
  appButtonContainerLogin: {
    borderWidth: 1.5,
    borderColor:"#F53B1B",
    marginBottom: 5,
    elevation: 2,
    backgroundColor: "white",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        //textTransform: "uppercase"
  },
  appButtonText1: {
    fontSize: 18,
    color: "#F53B1B",
    fontWeight: "bold",
    alignSelf: "center",
    //textTransform: "uppercase"
},
    appTitleText: {
        marginBottom:15,
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
        //textTransform: "uppercase"
    },
  input: {
        fontSize:17,
        height: 50,
        marginBottom:10,
        borderWidth: 1,
        padding: 15,
        borderRadius: 10
    },
      
});