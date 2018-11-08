import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

class MobileSideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  onClickButton(e) {
    e.preventDefault();
    this.setState(prevState => ({ open: !prevState.open }));
  }

  render() {
    const { open } = this.state;
    return (
      <StyledPcMenu open={open}>
        <IconWrapper onClick={e => this.onClickButton(e)}>
          <ToggleIcon type="button">{open ? '<' : '>'}</ToggleIcon>
        </IconWrapper>
        {open ? (
          <div>
            <PcStyledLink to="/">Home</PcStyledLink>
            <PcStyledLink to="/skills">Skills</PcStyledLink>
            <PcStyledLink to="/works">Works</PcStyledLink>
            <PcStyledLink to="/jobs">Jobs</PcStyledLink>
          </div>
        ) : null}
      </StyledPcMenu>
    );
  }
}
const StyledPcMenu = styled.div.attrs({
  style: (props => (
    props.open ? ({
      position: 'static',
      borderRight: '2px dashed #9E9E9E',
    }) : ({
      position: 'absolute',
    })
  )),
})`
  width: 30%;
  height: 100vh;
  box-sizing: border-box;
  padding: 30px 10px;
`;
const IconWrapper = styled.div`
  width: 100%;
  height: 20px;
  padding: 25px 0;
  display: flex;
  align-items: center;
`;
const ToggleIcon = styled.button`
  font-size: 26px;
  line-height: 40px;
`;
const PcStyledLink = styled(Link)`
  display: block;
  padding: 15px 0;
  color: #424242;
  text-decoration: none;
`;
export default MobileSideBar;
