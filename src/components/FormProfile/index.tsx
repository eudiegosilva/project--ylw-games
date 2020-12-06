import { MailIcon, UserIcon, LockIcon } from 'assets/icons';
import Button from 'components/Button';

import Heading from 'components/Heading';
import TextField from 'components/TextField';

import * as s from './styles';

const FormProfile = () => (
  <s.Wrapper>
    <Heading size="small" color="secondary" lineBottom lineColor="alternative">
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
      <Button colorStyle="alternative">save</Button>
    </s.Form>
  </s.Wrapper>
);

export default FormProfile;
