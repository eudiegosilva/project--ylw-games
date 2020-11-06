import Heading from 'components/Heading';
import Logo from 'components/Logo';
import * as s from './styles';

type AuthProps = {
  title: string;
  children: React.ReactNode;
};

const Auth = ({ children, title }: AuthProps) => (
  <s.AuthWrapper>
    <s.BannerBlock>
      <Logo />

      <Heading>All your favorite games in one place</Heading>
      <s.BannerSubtitle>
        <strong>YLW</strong> is the best and most complete gaming platform
      </s.BannerSubtitle>

      <s.BannerFooter>YLW GAMES 2020 © All rights reserved</s.BannerFooter>
    </s.BannerBlock>

    <s.ContentBlock>
      <Logo color="secondary" size="large" />
      <Heading color="secondary" lineLeft>
        {title}
      </Heading>

      {children}
    </s.ContentBlock>
  </s.AuthWrapper>
);

export default Auth;
