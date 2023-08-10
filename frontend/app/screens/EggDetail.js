import axios from "axios";
axios.default;
import React, { useState, useEffect} from 'react';
import { StyleSheet,TextInput, View, Alert, Button, Text} from 'react-native';

function EggDetail({ navigation, route }) {
    const id = route.params.userId;
    const [qtyproduced, setQtyproduced] = useState("")
    const [qtysold, setQtysold] = useState("")
    const [qtyspoiled, setQtydead] = useState("")
    const [date, setDate] = useState("")
 

    useEffect(() => {
        getEggById();
    }, []);

    const getEggById = () => {
        axios.get(`http://192.168.39.23:3000/egg/get-eggs/${id}`)
        .then(function (response) {
            // handle success
            setQtyproduced(response.data.qty_produced)
            setQtysold(response.data.qty_sold)
            setQtydead(response.data.qty_spoiled)
            setDate(response.data.createdAt)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
    }

    const updateEgg = (id) => {
     axios
        .put(`http://192.168.39.23:3000/egg/update-eggs/${id}`, {
            qty_produced: qtyproduced,
            qty_sold: qtysold,
            qty_spoiled: qtyspoiled,  
        })
        .then((response) => {
            console.log(response.data)
            Alert.alert("Success!", "Updated Successfully")
            navigation.navigate("EggRecord");
        })
        .catch((error) => console.log(`Error: ${error}`));
    }
    const deleteEgg = (id) => {
     axios
        .delete(`http://192.168.39.23:3000/egg/delete-eggs/${id}`)
        .then(() => {
            Alert.alert("Success!", "Deleted Successfully")
            navigation.navigate("EggRecord");
        })
        .catch((error) => console.log(`Error: ${error}`));
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        return formattedDate;
      }

return (
    <> 
         <View style={ styles.container }> 
         <Text style={styles.date}>Date:{formatDate(date)}</Text>
         <Text>Quantity Produced</Text>
            <TextInput
                style={styles.input}
                placeholder='Qty Produced'
                onChangeText={ setQtyproduced }
                value={qtyproduced.toString()}
                keyboardType="phone-pad"
                
            />
            <Text>Quantity Sold</Text>
             <TextInput
                style={styles.input}
                placeholder='Qty Sold'
                onChangeText={ setQtysold }
                value={ qtysold.toString() }
                keyboardType="phone-pad"
                
            />
            <Text>Quantity Spoiled</Text>
             <TextInput
                style={styles.input}
                placeholder='Qty Spoiled'
                onChangeText={ setQtydead }
                value={ qtyspoiled.toString() }
                keyboardType="phone-pad"
                
            />

        <View style={styles.buttonContainer}>
          <View style={styles.Btn}>
            <Button title="Update Record"  color="green" onPress={() => updateEgg(id)}/>
          </View>
          <View style={styles.Btn}>
            <Button title="Delete Record"  color="red" onPress={() => deleteEgg(id)}/>
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
        width: "35%",
        marginHorizontal: 8
    },
    date:{
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
        textDecorationLine: "underline"
 
     }
    
})

export default EggDetail;