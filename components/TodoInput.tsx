import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react'

interface TodoInputProps {
    onAdd: (id: string) => void,
}

export default function TodoInput({ onAdd }: TodoInputProps) {
    const [newTodo, setNewTodo] = useState("")

    return (
        <View style={{ alignContent: "center" }}>
            <Text style={styles.title}>Thêm todo mới</Text>
            <TextInput
                style={styles.textinput}
                multiline
                onChangeText={(value) => setNewTodo(value)}
                value={newTodo}
                placeholder="Nhập vào todo mới..."
                placeholderTextColor={"#9e9696"}
            />
            <Button
                onPress={() => {
                    if (newTodo.trim() == "") {
                        alert("Todo đang rỗng!")
                        return;
                    };
                    onAdd(newTodo);
                    setNewTodo("");
                }
                }
                title={"+ Thêm todo"}
            />
        </View>
    )


}
const styles = StyleSheet.create({
    title: {
        fontSize: 19,
        fontWeight: 500,
        textAlign: "center",
        paddingVertical: 10,
        backgroundColor: "#e1a35d",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    textinput: {
        flex: 1,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 0,
        padding: 20,
        backgroundColor: "#edd4a4",
    }
})