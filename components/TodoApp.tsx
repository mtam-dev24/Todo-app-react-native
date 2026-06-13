import { StyleSheet, View } from 'react-native';
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
    const [todos, setTodos] = useState<TodoType[]>([
        {
            id: 'oppp',
            name: 'qooppo',
            isDone: false,
            isDeleted: false,
        }
    ]);

    const addTodo = (name: string) => {
        const newTodo: TodoType = {
            id: crypto.randomUUID(),
            name: name,
            isDone: false,
            isDeleted: false,
        }
        setTodos([...todos, newTodo]);
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
        alignContent: "center"
    }
})