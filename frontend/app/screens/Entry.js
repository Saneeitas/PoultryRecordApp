import React from 'react';
import { Button } from 'react-native';
import axios from "axios";
import { Image, TouchableOpacity , StyleSheet, Text, TextInput, View } from 'react-native';

function Login({navigation}) {

    return (
         <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.navigate("PoultryRecord")}  style={styles.button}><Text style={styles.text}>Manage Poultry</Text>
              <Image source={require('../assets/ch.png')} style={styles.buttonImage} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=> navigation.navigate("EggRecord")}  style={styles.button}><Text style={styles.text}>Manage Eggs</Text>
              <Image source={require('../assets/egg.png')} style={styles.buttonImage} />
            </TouchableOpacity>

            <View style={styles.Btn}>
            <Button title="Logout"  color="red" onPress={()=> navigation.navigate("Home")}/>
          </View>
          </View>
            
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
      },
      text:{
          fontSize: 24,
          fontWeight: 'bold',
      },
      button: {
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        width: 250,
        alignItems: 'center',
      },
      buttonImage: {
        width: 200,
        height: 150,
        resizeMode: 'cover',
      },
      Btn: {
        marginTop: 20
      }
    
})

export default Login;