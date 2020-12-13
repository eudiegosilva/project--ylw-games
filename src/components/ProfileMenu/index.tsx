import Link from 'next/link';

import { UserIcon, CreditCardIcon, ListIcon, LogOutIcon } from 'assets/icons';

import * as s from './styles';

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string;
};

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <s.Nav>
    <Link href="/profile/me" passHref>
      <s.NavLink isActive={activeLink === '/profile/me'} title="my profile">
        <UserIcon />
        <span>my profile</span>
      </s.NavLink>
    </Link>

    <Link href="/profile/cards" passHref>
      <s.NavLink isActive={activeLink === '/profile/cards'} title="my cards">
        <CreditCardIcon />
        <span>my cards</span>
      </s.NavLink>
    </Link>

    <Link href="/profile/orders" passHref>
      <s.NavLink isActive={activeLink === '/profile/orders'} title="my orders">
        <ListIcon />
        <span>my orders</span>
      </s.NavLink>
    </Link>

    <Link href="/logout" passHref>
      <s.NavLink title="sign out">
        <LogOutIcon />
        <span>sign out</span>
      </s.NavLink>
    </Link>
  </s.Nav>
);

export default ProfileMenu;
