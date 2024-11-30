import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

function ToDoForm({ addTask }) {
    const [taskText, setTaskText] = useState('');

    const handleAddTask = () => {
        addTask(taskText);
        setTaskText('');
    }
    return (
        <View style={styles.form}>
        <TextInput 
            style={styles.input}
            placeholder="Add a new task..."
            onChangeText={setTaskText}
            value={taskText}/>
        <Button title="Add Task" onPress={handleAddTask} />
        </View>
);
};

export default ToDoForm;

const styles = StyleSheet.create({
    form:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input:{
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    }
});