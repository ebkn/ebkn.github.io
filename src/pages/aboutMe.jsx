import React from 'react';
import Container from '../atoms/container';
import Title from '../atoms/title';
import Text from '../atoms/text';
import info from '../../info';

const AboutMe = () => (
  <Container>
    <Title title="ABOUT ME" />
    <Text text={info.aboutme} />
  </Container>
);
export default AboutMe;
