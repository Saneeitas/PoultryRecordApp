import axios from "axios";
axios.defaults;
import React, { useState, useEffect} from 'react';
import { StyleSheet, TextInput, View, Alert,Button} from 'react-native';

function AddUserScreen({navigation}) {
    const [qtyproduced, setQtyproduced] = useState("")
    const [qtysold, setQtysold] = useState("")
    const [qtyspoiled, setQtyspoiled] = useState("")

    const handleSubmit = () => {
      
       axios.post('http://192.168.39.23:3000/egg/add-egg', {
           qty_produced: qtyproduced,
           qty_sold: qtysold,
           qty_spoiled: qtyspoiled,
        })
        .then(function (response) {
            console.log(response.status);
            if (response.status === 200) {
                Alert.alert("Success!", "Record Added!")
                setQtyproduced("")
                setQtysold("")
                setQtyspoiled("")
                navigation.navigate("EggRecord")
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
                placeholder='Enter Qty Spoiled'
                onChangeText={ setQtyspoiled }
                    value={ qtyspoiled }
                    keyboardType="phone-pad" 
            />
          
        <View style={styles.buttonContainer}>
         <View style={styles.Btn}>
            <Button title="Add Record"  color="green" onPress={() => handleSubmit()}/>
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