import Link from 'next/link';

import Button from 'components/Button';
import TextField from 'components/TextField';
import { FormWrapper, FormLink } from 'components/Form';

import { Lock, Mail } from '@styled-icons/feather';

import * as s from './styles';

const FormSignIn = () => (
  <FormWrapper>
    <form>
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
      <s.ForgotPassword href="#">forgot your password?</s.ForgotPassword>
      <Button size="large" fullWidth>
        sign in now
      </Button>

      <FormLink>
        don&apos;t have an account?{' '}
        <Link href="/sign-up">
          <a>sign up</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
);

export default FormSignIn;
