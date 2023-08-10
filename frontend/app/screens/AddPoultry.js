import axios from "axios";
axios.defaults;
import React, { useState, useEffect} from 'react';
import { StyleSheet, TextInput, View, Alert,Button} from 'react-native';

function AddUserScreen({navigation}) {
    const [qtyproduced, setQtyproduced] = useState("")
    const [qtysold, setQtysold] = useState("")
    const [qtydead, setQtydead] = useState("")
    const [breed, setBreed] = useState("")

    const handleSubmit = () => {
      
       axios.post('http://192.168.39.23:3000/poultry/add-poultry', {
           qtyproduced: qtyproduced,
           qtysold: qtysold,
           qtydead: qtydead,
           breed: breed,
        })
        .then(function (response) {
            console.log(response.status);
            if (response.status === 200) {
                Alert.alert("Success!", "Record Added!")
                setQtyproduced("")
                setQtysold("")
                setQtydead("")
                setBreed("")
                navigation.navigate("PoultryRecord")
            }
        })
        .catch(function (error) {
            console.log(error.response.status);
             if (error.response.status === 400) {
                Alert.alert("Error!", "Inputs cannot be empty")
            }
        });    
    }


    return (
    <>     
         <View style={ styles.container }>
            
            <TextInput
                style={styles.input}
                placeholder='Enter Qty Produced'
                onChangeText={ setQtyproduced }
                    value={ qtyproduced }
                    keyboardType="phone-pad"
                
            />
             <TextInput
                style={styles.input}
                placeholder='Enter Qty Sold'
                onChangeText={ setQtysold }
                    value={ qtysold }
                    keyboardType="phone-pad" 
            />
             <TextInput
                style={styles.input}
                placeholder='Enter Qty Dead'
                onChangeText={ setQtydead }
                    value={ qtydead }
                    keyboardType="phone-pad" 
            />
             <TextInput
                style={styles.input}
                placeholder='Enter Breed Type'
                onChangeText={ setBreed }
                    value={ breed }
                    keyboardType="default" 
            />
          
        <View style={styles.buttonContainer}>
         <View style={styles.Btn}>
            <Button title="Add Poultry"  color="green" onPress={() => handleSubmit()}/>
          </View> 
         </View>
        </View> 
            
       </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 100,
        
    },
    input: {
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius: 10,
        width: "70%",
        padding: 12,
        marginBottom: 12
    },
    buttonContainer: {
    flexDirection: "row",
    marginTop: 16
  },

  Btn: {
    width: "70%",
    marginHorizontal: 8
  }
    
})

export default AddUserScreen;