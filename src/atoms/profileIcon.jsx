import React from 'react';
import styled from 'styled-components';

const ProfileIcon = () => (
  <StyledWrapper>
    <StyledImg src="https://s3.amazonaws.com/ebkn/bb8avatar.jpg" alt="avatar" />
  </StyledWrapper>
);
const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 50px 0;
`;
const StyledImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
`;
export default ProfileIcon;
