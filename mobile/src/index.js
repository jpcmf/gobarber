import React from 'react';
import { StatusBar } from 'react-native';

import Routes from '~/routes';

import './config/ReactotronConfig';

console.tron.log('opa');

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <Routes />
    </>
  );
};

export default App;
