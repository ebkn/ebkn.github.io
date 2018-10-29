import React from 'react';
import styled from 'styled-components';

const SocialIcon = ({ url, name, iconUrl }) => (
  <IconWrapper>
    <StyledLink href={url} target="_blank">
      <StyledImg src={iconUrl} alt={name} />
    </StyledLink>
  </IconWrapper>
);
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
`;
const StyledLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;
const StyledImg = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 30px;
`;
export default SocialIcon;
