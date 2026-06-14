import { StyleSheet, View, Text, Pressable, FlatList } from 'react-native';
import TodoItem from './TodoItem';
import { TodoType } from './TodoApp';
import { useState } from 'react';

interface TodoListProps {
    todos: TodoType[],
    onToggle: (id: string) => void,
    onDelete: (id: string) => void,
    onEdit: (id: string, newName: string) => void,
}

type Filter = "all" | "done" | "todo";

export default function TodoList({ todos, onToggle, onDelete, onEdit }: TodoListProps) {
    const [filterStatus, setFilterStatus] = useState<Filter>("all");

    const filteredList = todos
        .filter((todo) => (!todo.isDeleted))
        .filter((todo) => {
            if (filterStatus === "all") return true;
            if (filterStatus === "done") return (todo.isDone);
            else return (!todo.isDone)
        })

    return (
        <View style={{ height: "60%" }}>
            <View style={styles.todoFilter}>
                <Pressable style={[styles.filterButton, (filterStatus === "all") && styles.isActiveFilter]} onPress={() => setFilterStatus("all")}>
                    <Text>
                        ALL
                    </Text>
                </Pressable>
                <Pressable style={[styles.filterButton, (filterStatus === "done") && styles.isActiveFilter]} onPress={() => setFilterStatus("done")}>
                    <Text>
                        DONE
                    </Text>
                </Pressable>
                <Pressable style={[styles.filterButton, (filterStatus === "todo") && styles.isActiveFilter]} onPress={() => setFilterStatus("todo")}>
                    <Text>
                        TODO
                    </Text>
                </Pressable>
            </View>
            <FlatList
                data={filteredList}
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
        </View>
    )
}

const styles = StyleSheet.create({
    todolist: {
        //marginTop: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: "blue",
        backgroundColor: "#b4dde0",
    },
    todoFilter: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#6f86d8",
        borderWidth: 1,
        marginTop: 20,
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },
    filterButton: {
        //padding: 5,
        //paddingHorizontal: 20,
        marginTop: 10,
        //marginHorizontal: 20,
        backgroundColor: "#6f86d8",
        //borderWidth: 1,
        //borderColor: "blue",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        width: 90,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
    },
    isActiveFilter: {
        backgroundColor: "#9ac9d2"
    }
})