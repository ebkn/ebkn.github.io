import React from 'react';
import Container from '../atoms/container';
import ProfileIcon from '../atoms/profileIcon';
import Title from '../atoms/title';
import SocialIcons from '../molecules/socialIcons';
import CenteredText from '../molecules/centeredText';
import info from '../../info';

const Home = () => (
  <Container>
    <ProfileIcon />
    <Title title={info.name} />
    <SocialIcons />
    <CenteredText text={info.shortProfile} />
  </Container>
);
export default Home;
