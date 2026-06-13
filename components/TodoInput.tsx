import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react'

interface TodoInputProps {
    onAdd: (id: string) => void,
}

export default function TodoInput({ onAdd }: TodoInputProps) {
    const [newTodo, setNewTodo] = useState("")

    return (
        <View style={{ alignContent: "center" }}>
            <Text style={styles.title}>New Todo</Text>
            <TextInput
                style={styles.textinput}
                multiline
                onChangeText={(value) => setNewTodo(value)}
                value={newTodo}
            />
            <Button
                onPress={() => {
                    if (newTodo.trim() !== "") {
                        onAdd(newTodo);
                        setNewTodo("");
                    }
                }
                }
                title={"Thêm todo"}
            />
        </View>
    )


}
const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 500,
        alignContent: "center"
    },
    textinput: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 5,
        padding: 20,
    }
})