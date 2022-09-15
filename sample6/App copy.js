import {View, Text, Button, TextInput} from 'react-native';

import {useState} from 'react';
import {SERVER_URL} from './src/endpoint';
export default function App() {
  const [data, setData] = useState();
  const [enteredInput, setEnteredInput] = useState();
  const handleChange = text => {
    setEnteredInput(text);
  };

  const handlePress = () => {
    console.log('clicked');
    console.log(new Date());
    fetch(SERVER_URL + 'hello')
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err=>console.log(err))
  };

    return (
    <View testID="welcome">
    <Text testID="welcome1">Open up App.js to start working on your app!</Text>
      <Text>{SERVER_URL}</Text>
      <Text testID="hi">Hi</Text>
      <TextInput
        testID="entername"
        placeholder="Enter ur name "
        onChangeText={handleChange}></TextInput>
      <Text testID="enteredname">{enteredInput}</Text>
      <Button title="click" testID="click" onPress={handlePress}>
        Click
      </Button>
      
      <Text testID="email">{data ? JSON.stringify(data['success']) : ''}</Text>

    </View>
  );
}
