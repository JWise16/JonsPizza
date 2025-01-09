import Button from "@/components/Button";
import { useState } from "react";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";
import { View, Text, TextInput, StyleSheet } from "react-native";



export default function SignUpScreen() {

    const router = useRouter();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    return (
        <View style={styles.container}>

            <Text style={styles.label}>Email</Text>
            <TextInput placeholder="jon@gmail.com" value={email} onChangeText={setEmail} style={styles.input}/>

            <Text style={styles.label}>Password</Text>
            <TextInput placeholder="" value={password} onChangeText={setPassword} style={styles.input} />

            <Text style={{color:'red',}}>{error}</Text>
            <Button text='Create Account' />
            <Text onPress={() => router.back()} style={styles.textButton}>Sign in</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        padding:10
    },
    label:{
        color:'gray',
        fontSize:16,
    },
    input:{
        backgroundColor:'white',
        padding:10,
        borderRadius:5,
        marginTop:5,
        marginBottom:20
    },
    textButton:{
        color:Colors.light.tint,
        textAlign:'center',
        fontWeight:'bold',
        marginVertical:10,
    }
});