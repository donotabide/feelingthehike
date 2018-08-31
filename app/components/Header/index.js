import React from 'react';
import { FormattedMessage } from 'react-intl';

import A from './A';
import Img from './Img';
import NavBar from './NavBar';
import HeaderLink from './HeaderLink';
import Banner from './banner.jpg';


import LogoImg from './LogoImg'
import Logo from './logo.png';
import SocialImg from './SocialImg';
import Instagram from './instagram.png';
import Tumblr from './tumblr.png';


import messages from './messages';
import ThoughtsTab from './ThoughtsTab';
import MemoriesTab from './MemoriesTab';
import ActionsTab from './ActionsTab';
import BeingsTab from './BeingsTab';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <NavBar>
          {/* <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink> */}
          
          <MemoriesTab to="/memories">
            <FormattedMessage {...messages.memories} />
          </MemoriesTab>
          <ThoughtsTab to="/thoughts">
            <FormattedMessage {...messages.thoughts} />
          </ThoughtsTab>
          
          <ActionsTab to="/actions">
            <FormattedMessage {...messages.actions} />
          </ActionsTab>
          <BeingsTab to="/beings">
            <FormattedMessage {...messages.beings} />
          </BeingsTab>
        
          <A href="/">
            <LogoImg src={Logo} alt="feeling the hike - Logo" />
          </A>

          <A href="https://www.instagram.com/donotabide/" >
            <SocialImg src={Instagram} />
          </A>
          <A href="https://www.instagram.com/donotabide/" >
            <SocialImg src={Tumblr} />
          </A>
          
        </NavBar>
      </div>
    );
  }
}

export default Header;
