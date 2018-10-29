import React from 'react';
import Container from '../atoms/container';
import ProfileIcon from '../atoms/profileIcon';
import Title from '../atoms/title';
import SocialIcons from '../molecules/socialIcons';
import Text from '../atoms/text';
import info from '../../info';

const Top = () => (
  <Container>
    <ProfileIcon />
    <Title title={info.name} />
    <SocialIcons />
    <Text text={info.shortProfile} />
  </Container>
);
export default Top;
