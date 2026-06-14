import { StyleSheet, View, Text, Button, TextInput, Pressable } from 'react-native';
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
    const [isEditing, setIsEditing] = useState(false);
    const [editValue, setEditValue] = useState(name);
    return (
        <View>
            {!isEditing ?
                <View key={id} style={styles.todoitem}>
                    <Text style={[styles.namestyle, isDone && styles.doneNameStyle]}>{name}</Text>
                    <Pressable
                        style={styles.checkbox}
                        onPress={() => onToggle(id)}>
                        <Text style={{ color: "blue", fontSize: 20, fontWeight: '700' }}>
                            {isDone ? "X" : " "}
                        </Text>
                    </Pressable>
                    {/* <Button title={"Edit"} onPress={() => setIsEditing(true)} /> */}
                    <Pressable onPress={() => setIsEditing(true)} style={styles.editButton}>
                        <Text style={{ fontWeight: 700, padding: 5, color: "#50371c" }}>
                            Edit
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => onDelete(id)} style={styles.deleteStyle}>
                        <Text style={{ color: "#511b1b", fontSize: 13, fontWeight: '700', margin: 2 }}>Xóa</Text>
                    </Pressable>
                </View>
                :
                <View key={id} style={styles.todoitem}>
                    <TextInput
                        onChangeText={(value) => setEditValue(value)}
                        value={editValue}
                        style={styles.editInput}
                        placeholder={editValue}
                        multiline
                    />
                    <Button
                        title={"Xong"}
                        onPress={() => {
                            if (!editValue) return;
                            onEdit(id, editValue);
                            setEditValue(editValue);
                            setIsEditing(false);
                        }}
                    />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    todoitem: {
        padding: 10,
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#6cb6db",
        marginBottom: 5,
        borderRadius: 6,
        alignItems: "center",
    },
    namestyle: {
        flex: 1,
    },
    doneNameStyle: {
        flex: 1,
        textDecorationLine: "line-through",
        color: "blue",
    },
    checkbox: {
        width: 30,
        height: 30,
        borderWidth: 2,
        borderColor: "blue",
        alignItems: "center",
        backgroundColor: "#319eec",
        borderRadius: 5,
        marginHorizontal: 5,
    },
    editButton: {
        backgroundColor: "#e4c334",
        alignItems: "center",
        borderRadius: 5,
        height: 30,
        width: 30,
    },
    editInput: {
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#9bd7fd",
        flex: 1,
        padding: 7,
        marginRight: 4,
    },
    deleteStyle: {
        width: 30,
        height: 30,
        borderWidth: 2,
        borderColor: "red",
        alignItems: "center",
        backgroundColor: "#fe0808",
        borderRadius: 5,
        marginHorizontal: 5,
    },
})

