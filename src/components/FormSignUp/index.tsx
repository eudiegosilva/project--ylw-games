import Link from 'next/link';

import Button from 'components/Button';
import TextField from 'components/TextField';
import { User, Lock, Mail } from '@styled-icons/feather';

import * as s from './styles';

const FormSignUp = () => (
  <s.Wrapper>
    <form>
      <TextField name="name" placeholder="name" type="name" icon={<User />} />

      <TextField
        name="email"
        placeholder="email"
        type="email"
        icon={<Mail />}
      />

      <TextField
        name="password"
        placeholder="password"
        type="password"
        icon={<Lock />}
      />

      <TextField
        name="confirm-password"
        placeholder="confirm password"
        type="password"
        icon={<Lock />}
      />

      <Button size="large" fullWidth>
        sign up now
      </Button>

      <s.FormLink>
        already have an account?{' '}
        <Link href="/sign-in">
          <a>sign in</a>
        </Link>
      </s.FormLink>
    </form>
  </s.Wrapper>
);

export default FormSignUp;
