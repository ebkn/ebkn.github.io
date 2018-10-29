import React from 'react';
import styled from 'styled-components';
import SocialIcon from '../atoms/socialIcon';
import info from '../../info';

const SocialIcons = () => (
  <IconsWrapper>
    {info.links.map(link => (
      <SocialIcon
        url={link.url}
        name={link.name}
        iconUrl={link.iconUrl}
      />
    ))}
  </IconsWrapper>
);
const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
`;
export default SocialIcons;
