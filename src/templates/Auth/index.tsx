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
      <s.BannerContent>
        <Logo id="banner" />

        <s.BannerContentWrapper>
          <Heading size="huge">All your favorite games in one place</Heading>
          <s.BannerSubtitle>
            The <strong>YLW</strong> is the best and most complete gaming
            platform
          </s.BannerSubtitle>
        </s.BannerContentWrapper>

        <s.BannerFooter>YLW GAMES 2020 © All rights reserved</s.BannerFooter>
      </s.BannerContent>
    </s.BannerBlock>

    <s.ContentBlock>
      <s.ContentWrapper>
        <Logo id="content" color="secondary" size="large" />
        <Heading color="secondary" lineLeft>
          {title}
        </Heading>

        {children}
      </s.ContentWrapper>
    </s.ContentBlock>
  </s.AuthWrapper>
);

export default Auth;
