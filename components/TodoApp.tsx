import { StyleSheet, View, Text } from 'react-native';
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
            id: crypto.randomUUID(),
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
        </View>
    )
}


const styles = StyleSheet.create({
    app: {
        margin: 20,
        flex: 1,
        alignContent: "center",
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
    }
})