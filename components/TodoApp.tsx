import { StyleSheet, View, Text, Pressable, Alert } from 'react-native';
import { useState } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput'

export type TodoType = {
    id: string,
    name: string,
    isDone: boolean,
    isDeleted: boolean,
}

export default function TodoApp() {
    const [todos, setTodos] = useState<TodoType[]>([]);

    const addTodo = (name: string) => {
        const newTodo: TodoType = {
            id: `${Date.now()}-${Math.random()}`,
            name: name,
            isDone: false,
            isDeleted: false,
        }
        setTodos([newTodo, ...todos]);
    };

    const toggleTodo = (id: string) => {
        setTodos(todos.map(
            (todo) => (todo.id === id) ? { ...todo, isDone: !todo.isDone } : todo)
        );
    };

    const deleteTodo = (id: string) => {
        setTodos(todos.map(
            (todo) => (todo.id === id) ? { ...todo, isDeleted: true } : todo)
        );
    };

    const editTodo = (id: string, newName: string) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, name: newName } : todo)));
    };

    const deleteDoneTodo = () => {
        const newTodoDeleted: TodoType[] = todos.filter(todo => !todo.isDone);
        setTodos(newTodoDeleted);
    }

    const deleteAllTodo = () => {
        setTodos([]);
    }

    return (
        <View style={styles.app}>
            <Text style={styles.title}>TODO APP</Text>
            <TodoInput onAdd={addTodo} />
            <TodoList
                todos={todos}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
                onEdit={editTodo}
            />
            <View style={styles.deleteView}>
                <Pressable
                    style={[styles.deleteButton, { borderBottomLeftRadius: 10 }]}
                    onPress={() => {
                        Alert.alert(
                            "Xóa tất cả các to do?", "Xóa tất cả dù đã hoàn thành hay chưa",
                            [
                                {
                                    text: "Hủy"
                                },
                                {
                                    text: "Xác nhận",
                                    onPress: () => deleteAllTodo()
                                }
                            ]
                        );
                    }}>
                    <Text style={{ padding: 5, color: "#ff0000", fontWeight: 500 }}>
                        Xóa tất cả todo
                    </Text>
                </Pressable>
                <Pressable
                    style={[styles.deleteButton, { borderBottomRightRadius: 10 }]}
                    onPress={() => {
                        Alert.alert(
                            "Xóa tất cả todo đã hoàn thành?", "Chỉ xóa todo đã hoàn thành",
                            [
                                {
                                    text: "Hủy"
                                },
                                {
                                    text: "Xác nhận",
                                    onPress: () => deleteDoneTodo()
                                }
                            ]
                        );

                    }}>
                    <Text style={{ padding: 5, color: "#3d25f5", fontWeight: 500 }}>
                        Xóa todo đã xong
                    </Text>
                </Pressable>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    app: {
        marginTop: 40,
        marginBottom: 40,
        marginHorizontal: 5,
        flex: 1,
        backgroundColor: "#dcf4e0",
        padding: 20,
        borderRadius: 10,
    },
    title: {
        textAlign: "center",
        fontSize: 36,
        fontWeight: '600',
        marginBottom: 20,
        color: "blue"
    },
    deleteView: {
        flexDirection: "row",
        justifyContent: "center",
        height: 30,
        marginTop: 10,
    },
    deleteButton: {
        backgroundColor: "#fff12f",
        //borderBottomRightRadius: 10,
        //borderBottomLeftRadius: 10,
        flex: 1,
        alignItems: "center",
        borderWidth: 1,
    }
})