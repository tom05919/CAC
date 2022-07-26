import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native';



const HomeScreen = () => {
  const navigation = useNavigation()
  const [todo, setTodo] = useState("")
  const [confirm, setConfirm] = useState(false)


  const signOut = () => {
    auth
    .signOut()
    .then(() => {
      navigation.replace("Login")
    });
  };

  return (
    <View style={styles.layout}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TextInput
        style={styles.todo}
        placeholder="enter your todo here"
        onChangeText={todo => setTodo(todo)}
        onEndEditing={confirm => setConfirm(confirm)}
        clearButtonMode="always"
      />
      
      {confirm && <Text>{todo}</Text>}
      <TouchableOpacity 
      onPress={signOut}
      style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#e1e3e3',
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 14,
  },
  todo: {
    width: '50%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderBottomWidth : 4,
    alignItems: 'center',
  },
  todobox: {
    backgroundColor: "#7bcce3",
    padding: 5
  },
})