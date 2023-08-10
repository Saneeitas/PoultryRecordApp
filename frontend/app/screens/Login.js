import React, {useState} from 'react';
import { Button } from 'react-native';
import { Image, StyleSheet,TextInput, View, Alert } from 'react-native';
import axios from 'axios';


function Login({navigation}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        axios.post('http://192.168.39.23:3000/user/signin', {
            username: email,
            password: password,
         })
         .then(function (response) {
             console.log(response.status);
             if (response.status === 200) {
                 /* Alert.alert("Success!", "Login Sucessfully")
                 setEmail("")
                 setPassword("") */
 
                 navigation.navigate("Entry")
             }
         })
         .catch(function (error) {
             console.log(error.response.status);
              if (error.response.status === 400) {
                 Alert.alert("Error!", "Inputs cannot be empty")
                 setEmail("")
                 setPassword("")
             }else if(error.response.status === 401){
                Alert.alert("Error!", "Incorrect Username or Password")
                setEmail("")
                setPassword("")
             } else{
                Alert.alert("Error!", "Please Try again")
                setEmail("")
                setPassword("")
             }
         });    
    }

    return (
            <View style={styles.container}>
                <Image style={ styles.image } source={ require("../assets/po.png") } />
            <TextInput
                style={styles.input}
                placeholder='Email'
                value={ email }
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={ true }
                value={ password }
                onChangeText={setPassword}/>
            
            <Button color={"green"} style={ styles.button } title='Login' onPress={handleLogin}/>
            
            </View>
            
        
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        alignItems: "center",
        justifyContent: "center",
        width: 80,
        height: 80,
        marginBottom: 12
    },
    input: {
        borderWidth: 1,
        borderColor: "#cccccc",
        borderRadius: 10,
        width: "70%",
        padding: 12,
        marginBottom: 12
    },
    button: {
        width: "100%",
        margin: 12,
       
    },
    text: {
        marginTop: 100
    }

    
})

export default Login;