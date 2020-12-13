import { MailIcon, UserIcon, LockIcon } from 'assets/icons';
import Button from 'components/Button';

import Heading from 'components/Heading';
import TextField from 'components/TextField';

import { ColorStyleProps } from 'types/global';

import * as s from './styles';

export type FormProfileProps = {
  contentStyle?: ColorStyleProps;
};

const FormProfile = ({ contentStyle = 'primary' }: FormProfileProps) => (
  <s.Wrapper>
    <Heading size="small" color="secondary" lineBottom lineColor={contentStyle}>
      my profile
    </Heading>

    <s.Form>
      <TextField
        icon={<UserIcon />}
        initialValue="John Doe"
        label="name"
        name="name"
        placeholder="name"
      />
      <TextField
        disabled
        icon={<MailIcon />}
        initialValue="john@doe.com"
        label="email"
        name="email"
        placeholder="email"
        type="email"
      />
      <TextField
        icon={<LockIcon />}
        label="password"
        name="password"
        placeholder="password"
        type="password"
      />
      <TextField
        icon={<LockIcon />}
        label="new password"
        name="new-password"
        placeholder="new password"
        type="password"
      />
      <Button colorStyle={contentStyle}>save</Button>
    </s.Form>
  </s.Wrapper>
);

export default FormProfile;
