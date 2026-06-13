import { StyleSheet, View, Text, Button, TextInput, ScrollView, FlatList } from 'react-native';
import TodoItem from './TodoItem';
import { TodoType } from './TodoApp';


interface TodoListProps {
    todos: TodoType[],
    onToggle: (id: string) => void,
    onDelete: (id: string) => void,
    onEdit: (id: string, newName: string) => void,
}

export default function TodoList({ todos, onToggle, onDelete, onEdit }: TodoListProps) {
    return (
        <FlatList
            data={todos.filter(todo => !todo.isDeleted)}
            renderItem={({ item }) =>
                <TodoItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    isDone={item.isDone}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            }
            keyExtractor={item => item.id}
            style={styles.todolist}
        />
    )
}

const styles = StyleSheet.create({
    todolist: {
        marginTop: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: "blue",
        borderRadius: 10,
        backgroundColor: "#b4dde0"
    }
})