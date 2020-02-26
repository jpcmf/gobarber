import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Routes from '~/routes';

import './config/ReactotronConfig';

console.tron.log('opa');

const App: () => React$Node = () => {
  return <Routes />;
};

export default App;
