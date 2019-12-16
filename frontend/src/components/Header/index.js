import React from 'react';
import { Link } from 'react-router-dom';

import Notifications from '../Notifications';

import { ReactComponent as LogoGoBarber } from '../../assets/logo-roxa.svg';
import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <LogoGoBarber className="logo-gobarber" />
          <Link to="/dashboard">Dashboard</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>João Paulo Fricks</strong>
              <Link to="/profile">Meu perfil </Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="João Paulo Fricks"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
