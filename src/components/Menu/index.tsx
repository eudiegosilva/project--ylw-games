import { useState } from 'react';
import Link from 'next/link';

import Logo from 'components/Logo';
import Button from 'components/Button';
import MediaMatch from 'components/MediaMatch';

import { Search as SearchIcon } from '@styled-icons/feather/Search';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/feather/ShoppingCart';
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2';
import { Close as CloseIcon } from '@styled-icons/evil/Close';

import * as s from './styles';

export type MenuProps = {
  username?: string;
};

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <s.Wrapper>
      <MediaMatch lessThan="medium">
        <s.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="open menu" />
        </s.IconWrapper>
      </MediaMatch>

      <s.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo hideTextOnMobile />
          </a>
        </Link>
      </s.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <s.MenuFullScreenNav>
          <Link href="/" passHref>
            <s.MenuFullScreenLink>Home</s.MenuFullScreenLink>
          </Link>
          <Link href="/explore" passHref>
            <s.MenuFullScreenLink>Explore</s.MenuFullScreenLink>
          </Link>
        </s.MenuFullScreenNav>
      </MediaMatch>

      <s.RightGroupWrapper>
        <s.IconWrapper>
          <SearchIcon aria-label="search" />
        </s.IconWrapper>

        <s.IconWrapper>
          <Link href="/cart" passHref>
            <a>
              <ShoppingCartIcon aria-label="open shopping cart" />
            </a>
          </Link>
        </s.IconWrapper>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Link href="/sign-in" passHref>
              <Button as="a">sign in</Button>
            </Link>
          </MediaMatch>
        )}
      </s.RightGroupWrapper>

      <s.MenuFullScreen aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="close menu" onClick={() => setIsOpen(false)} />
        <s.MenuFullScreenNav>
          <Link href="/" passHref>
            <s.MenuFullScreenLink>home</s.MenuFullScreenLink>
          </Link>
          <Link href="/explore" passHref>
            <s.MenuFullScreenLink>explore</s.MenuFullScreenLink>
          </Link>

          {!!username && (
            <s.LoggedContentWrapper>
              <s.MenuFullScreenLink aria-label="my account" href="#">
                my account
              </s.MenuFullScreenLink>
              <s.MenuFullScreenLink aria-label="wishlist" href="#">
                wishlist
              </s.MenuFullScreenLink>
            </s.LoggedContentWrapper>
          )}
        </s.MenuFullScreenNav>

        {!username && (
          <s.RegisterWrapper>
            <Link href="/sign-in" passHref>
              <Button as="a" fullWidth aria-label="login now">
                sign in
              </Button>
            </Link>
            <s.Text>or</s.Text>
            <Link href="/sign-up" passHref>
              <s.CreateAccountLink
                title="create account"
                aria-label="create account"
              >
                sign up
              </s.CreateAccountLink>
            </Link>
          </s.RegisterWrapper>
        )}
      </s.MenuFullScreen>
    </s.Wrapper>
  );
};

export default Menu;
