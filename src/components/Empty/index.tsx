import Button from 'components/Button';
import Link from 'next/link';

import { ColorStyleProps } from 'types/global';

import * as s from './styles';

export type EmptyProps = {
  title: string;
  description: string;
  hasLink?: boolean;
  contentStyle?: ColorStyleProps;
};

const Empty = ({
  title,
  description,
  hasLink,
  contentStyle = 'primary'
}: EmptyProps) => (
  <s.Wrapper>
    <s.Image src="/img/empty.png" alt="hanging joysticks" role="image" />
    <s.Title>{title}</s.Title>
    <s.Description>{description}</s.Description>
    {hasLink && (
      <Link href="/" passHref>
        <Button as="a" colorStyle={contentStyle}>
          go back to store
        </Button>
      </Link>
    )}
  </s.Wrapper>
);

export default Empty;
