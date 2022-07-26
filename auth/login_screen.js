import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { passwordTuggle } from './pasword_vis'
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { passwordVis, icon, handlePasswordVis } = passwordTuggle()

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Home");
            }
        })

        return unsubscribe
    }, [])

    const handleSignUp = () =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCerdentials => {
            const user = userCerdentials.user
            console.log(user.email)
        })
        .catch(error => alert(error.message))
    };

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then(userCerdentials => {
            const user = userCerdentials.user
            console.log(user.email)
        })
        .catch(error => alert(error.message))
    };

    return (
        <KeyboardAvoidingView 
            style={styles.layout}
            behavior="padding">
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={email => setEmail(email)}
                    enablesReturnKeyAutomatically
                />
                    <TextInput 
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={password => setPassword(password)}
                        autoCorrect={false}
                        secureTextEntry={passwordVis}
                        enablesReturnKeyAutomatically
                    />
                    <Pressable onPress={handlePasswordVis}>
                        <MaterialCommunityIcons name={icon} size={22} color="#232323" />
                    </Pressable>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                onPress={handleLogin}
                style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity> 
                <TouchableOpacity
                onPress={handleSignUp}
                style={[styles.button, styles.buttonOutline]}>
                    <Text style={[styles.buttonText, styles.buttonOutlineText]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: '#e1e3e3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        width: '100%'
    },
    passwordContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    input: {
        backgroundColor: 'white',
        width: '65%',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    buttonContainer: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    button: {
        marginVertical: 5,
        backgroundColor: '#4ba5f0',
        width: '60%',
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 7,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#4ba5f0',
        borderWidth: 1.5
    },
    buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 14
    },
    buttonOutlineText: {
        color: '#4ba5f0',
        fontWeight: '700',
        fontSize: 14
    },
    
});