import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import './config/ReactotronConfig';

import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  engine: {
    position: 'absolute',
    right: 0,
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

console.tron.log('opa');

const App: () => React$Node = () => {
  return (
    <View>
      <Text>Engine: Hermes</Text>
    </View>
  );
};

export default App;
