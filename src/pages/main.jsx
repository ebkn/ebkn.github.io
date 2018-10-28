import React from "react";
import ProfileIcon from "../atoms/profileIcon";
import Title from "../atoms/title";
import Text from "../atoms/text";
import Container from "../atoms/container";

const Main = () => (
  <Container>
    <ProfileIcon />
    <Title title="Ebinuma Kenichi" />
    <Text text="This is a text" />
  </Container>
);
export default Main;
