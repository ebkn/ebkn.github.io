import React from 'react';
import ProfileIcon from '../atoms/profileIcon';
import Title from '../atoms/title';
import Text from '../atoms/text';
import Container from '../atoms/container';
import info from '../../info';

const Main = () => (
  <Container>
    <ProfileIcon />
    <Title title={info.name} />
    <Text text={info.shortProfile} />
  </Container>
);
export default Main;
