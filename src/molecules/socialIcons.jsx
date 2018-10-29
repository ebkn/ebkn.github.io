import React from 'react';
import styled from 'styled-components';
import SocialIcon from '../atoms/socialIcon';
import info from '../../info';

const SocialIcons = () => (
  <IconsWrapper>
    {info.links.map(({
      url,
      name,
      iconUrl,
    }) => (
      <SocialIcon
        url={url}
        name={name}
        iconUrl={iconUrl}
        key={name}
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
