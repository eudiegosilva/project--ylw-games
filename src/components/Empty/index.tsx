import Button from 'components/Button';
import Link from 'next/link';

import * as s from './styles';

export type EmptyProps = {
  title: string;
  description: string;
  hasLink?: boolean;
};

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <s.Wrapper>
    <s.Image src="/img/empty.png" alt="hanging joysticks" role="image" />
    <s.Title>{title}</s.Title>
    <s.Description>{description}</s.Description>
    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">go back to store</Button>
      </Link>
    )}
  </s.Wrapper>
);

export default Empty;
