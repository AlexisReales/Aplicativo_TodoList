import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';


export default function AddTodo({submitHandler}){
    const [text, setText] = useState('')    

    const changeHandler = (val) =>{
        setText(val)
    }

    return(
        <View>
            <TextInput 
                placeholder='Nova Tarefa...'
                onChangeText={changeHandler}
                style={styles.input}
            />
            <Button onPress={() =>{
                submitHandler(text)
            }} title='Adicionar' color='#32CD32' />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
})