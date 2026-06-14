import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useState } from 'react'

interface TodoInputProps {
    onAdd: (name: string) => void,
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
                        Alert.alert("Lỗi nhập vào todo mới", "Todo mới đang rỗng, hãy nhập vào giá trị!")
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
        fontWeight: '500',
        textAlign: "center",
        paddingVertical: 10,
        backgroundColor: "#e1a35d",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    textinput: {
        height: 90,
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 0,
        padding: 20,
        backgroundColor: "#edd4a4",
    }
})