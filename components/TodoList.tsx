import { StyleSheet, View, Text, Button, TextInput, ScrollView } from 'react-native';
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
        <ScrollView>
            {todos.filter(todo => (!todo.isDeleted))
                .map(todo => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        isDone={todo.isDone}
                        onToggle={onToggle}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))}
        </ScrollView>
    )
}