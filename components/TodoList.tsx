import { StyleSheet, View, Text, Pressable, FlatList, ScrollView } from 'react-native';
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
        <View style={{ flex: 1 }}>
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
                        id={item.id}
                        name={item.name}
                        isDone={item.isDone}
                        onToggle={onToggle}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                }
                keyExtractor={item => item.id}
                scrollEnabled={true}
                style={[styles.todolist, { flex: 1 }]}
            />
            {/* <ScrollView style={styles.todolist}>
                {
                    filteredList.map(todo =>
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            name={todo.name}
                            isDone={todo.isDone}
                            onToggle={onToggle}
                            onDelete={onDelete}
                            onEdit={onEdit}
                        />)
                }
            </ScrollView> */}
        </View>
    )
}

const styles = StyleSheet.create({
    todolist: {
        //marginTop: 20,
        flex: 1,
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
        height: 60,
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
        flex: 1,
        maxWidth: '29%',
        maxHeight: '90%',
        alignItems: "center",
        justifyContent: "center",
    },
    isActiveFilter: {
        backgroundColor: "#9ac9d2"
    }
})