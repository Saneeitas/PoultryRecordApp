import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';



export default function Home({navigation}) {

  return (

     <View style={styles.container}>
      <Image source={require('../assets/po.png')} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Login')} >
        <Text style={styles.buttonText}>Sign in  <Entypo name="login" size={16} color="white" /></Text>
      </TouchableOpacity>
    </View>

      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#E0E0E0',
    backgroundColor: "#fff",
  },
  image: {
    marginTop: -100,
    width: 300,
    height: 300,
   
    
  },
  button: {
    backgroundColor: 'green',
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginTop: 100,
    width: '60%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});