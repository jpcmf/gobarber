import React from 'react';
import { Text } from 'react-native';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Background from '~/components/Background';
// import { Container } from './styles';

export default function SignIn() {
  return (
    <Background>
      <Text>Hellow</Text>
      <Input
        style={{ marginTop: 50 }}
        icon="call"
        placeholder="Digite seu nome"
      />
      <Button>Teste 123</Button>
    </Background>
  );
}
