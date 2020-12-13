import { Container } from 'components/Container';
import Heading from 'components/Heading';
import ProfileMenu from 'components/ProfileMenu';
import BaseTemplate from 'templates/Base';

import * as s from './styles';

export type ProfileTemplateProps = {
  children: React.ReactNode;
};

const ProfileTemplate = ({ children }: ProfileTemplateProps) => (
  <BaseTemplate>
    <Container>
      <Heading lineLeft>my profile</Heading>
      <s.Main>
        <ProfileMenu />
        <s.Content>{children}</s.Content>
      </s.Main>
    </Container>
  </BaseTemplate>
);

export default ProfileTemplate;
