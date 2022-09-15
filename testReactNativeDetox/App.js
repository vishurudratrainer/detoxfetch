/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {startNetworkLogging} from 'react-native-network-logger';

import NetworkLogger from 'react-native-network-logger';

import {useState} from 'react';
import axios from 'axios';
import {Button, View, Text} from 'react-native';
export default function App() {
  const [data, setData] = useState([]);
  const handlePress = () => {
    startNetworkLogging();

    axios
      .get('https://reqres.in/api/users?page=2')
      .then(res => setData(res.data));
  };
  const handleClean = () => setData([]);

  return (
    <View>
      <Button title="Click"testID='click' onPress={handlePress}>
        Click
      </Button>
      <Button title="Clean" testID='clean' onPress={handleClean}>
        Click
      </Button>
      <View>
        <NetworkLogger />
      </View>
      <View>
        <Text>
          {'\n\n\n\n\n'}
          {JSON.stringify(data)}
        </Text>
      </View>
    </View>
  );
}
