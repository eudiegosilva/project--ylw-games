import { useState } from 'react';
import { Search as SearchIcon } from '@styled-icons/feather/Search';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/feather/ShoppingCart';
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2';
import { Close as CloseIcon } from '@styled-icons/evil/Close';

import Logo from 'components/Logo';
import * as s from './styles';
import Button from 'components/Button';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <s.Container>
      <s.IconWrapper onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="open menu" />
      </s.IconWrapper>
      <s.LogoWrapper>
        <Logo hideTextOnMobile color="white" />
      </s.LogoWrapper>
      <s.RightGroup>
        <s.IconWrapper>
          <SearchIcon aria-label="search" />
        </s.IconWrapper>
        <s.IconWrapper>
          <ShoppingCartIcon aria-label="open shopping cart" />
        </s.IconWrapper>
      </s.RightGroup>

      <s.MenuFullScreen aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="close menu" onClick={() => setIsOpen(false)} />
        <s.MenuFullScreenNav>
          <s.MenuFullScreenLink href="#">home</s.MenuFullScreenLink>
          <s.MenuFullScreenLink href="#">explore</s.MenuFullScreenLink>
        </s.MenuFullScreenNav>

        <s.RegisterBox>
          <Button fullWidth>log in now</Button>
          <s.TextWrapper>or</s.TextWrapper>
          <s.CreateAccount href="#" title="sign up">
            create account
          </s.CreateAccount>
        </s.RegisterBox>
      </s.MenuFullScreen>
    </s.Container>
  );
};

export default Menu;
