import Link from 'next/link';

import Heading from 'components/Heading';
import Logo from 'components/Logo';

import * as s from './styles';

const Footer = () => (
  <s.Wrapper>
    <Logo color="secondary" />
    <s.ContentWrapper>
      <s.Column>
        <Heading
          color="secondary"
          size="small"
          lineBottom
          lineColor="secondary"
        >
          Contact us
        </Heading>
        <a href="mailto:yellowspacestone@gmail.com">sac@ylwgames.com</a>
      </s.Column>

      <s.Column>
        <Heading
          color="secondary"
          size="small"
          lineBottom
          lineColor="secondary"
        >
          Follow Us
        </Heading>
        <nav aria-labelledby="social media">
          <a
            href="http://github.com/yellowspacestone"
            target="_blank"
            rel="noopener noreferrer"
          >
            github
          </a>
          <a
            href="https://www.linkedin.com/company/yellowspacestone"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
          <a
            href="https://twitter.com/yellowspaceston"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitter
          </a>
        </nav>
      </s.Column>

      <s.Column>
        <Heading
          color="secondary"
          size="small"
          lineBottom
          lineColor="secondary"
        >
          Links
        </Heading>
        <nav aria-labelledby="footer resources">
          <Link href="/">
            <a>home</a>
          </Link>
          <Link href="/games">
            <a>store</a>
          </Link>
          <Link href="/search">
            <a>search</a>
          </Link>
        </nav>
      </s.Column>

      <s.Column aria-labelledby="footer contact">
        <Heading
          color="secondary"
          lineBottom
          lineColor="secondary"
          size="small"
        >
          Location
        </Heading>
        <span>Lorem ipsum dolor sit amet.</span>
        <span>Lorem ipsum.</span>
        <span>Lorem ipsum dolor sit.</span>
      </s.Column>
    </s.ContentWrapper>

    <s.CopyrightWrapper>
      YLW games 2020 &copy; All rights reserved.
    </s.CopyrightWrapper>
  </s.Wrapper>
);

export default Footer;
