import Link from 'next/link';

import Button from 'components/Button';
import TextField from 'components/TextField';
import { FormWrapper, FormLink } from 'components/Form';

import { UserIcon, LockIcon, MailIcon } from 'assets/icons';

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField
        name="name"
        placeholder="name"
        type="name"
        icon={<UserIcon />}
      />

      <TextField
        name="email"
        placeholder="email"
        type="email"
        icon={<MailIcon />}
      />

      <TextField
        name="password"
        placeholder="password"
        type="password"
        icon={<LockIcon />}
      />

      <TextField
        name="confirm-password"
        placeholder="confirm password"
        type="password"
        icon={<LockIcon />}
      />

      <Button size="large" fullWidth>
        sign up now
      </Button>

      <FormLink>
        already have an account?{' '}
        <Link href="/sign-in">
          <a>sign in</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
);

export default FormSignUp;
