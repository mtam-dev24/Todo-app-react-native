import TodoApp from './components/TodoApp'
import { TouchableWithoutFeedback, View, Keyboard } from 'react-native'
export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{ flex: 1 }}>
        <TodoApp />
      </View>
    </TouchableWithoutFeedback>
  );
}
