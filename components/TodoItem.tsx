import { StyleSheet, View, Text, Button, TextInput } from 'react-native';
import { useState } from 'react';
//import { TodoType } from './TodoApp';

interface TodoItemProps {
    id: string,
    name: string,
    isDone: boolean,
    onToggle: (id: string) => void,
    onDelete: (id: string) => void,
    onEdit: (id: string, newName: string) => void,
}

export default function TodoItem({ id, name, isDone, onToggle, onDelete, onEdit }: TodoItemProps) {
    return (
        <View key={id} style={styles.todoitem}>
            <Text style={styles.namestyle}>{name}</Text>
            <Button title={(isDone) ? "Done" : "unDone"} onPress={() => onToggle(id)} />
            <Button title={"Edit"} />
            <Button title={"Delete"} onPress={() => onDelete(id)} />
        </View>
    )
}

const styles = StyleSheet.create({
    todoitem: {
        padding: 10,
        alignContent: "center",
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#6cb6db",
        marginBottom: 10,
    },
    namestyle: {
        flex: 1,
    },
})

