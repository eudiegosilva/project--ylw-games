import AuthTemplate from 'templates/Auth';
import FormSignIn from 'components/FormSignIn';

export default function SignInPage() {
  return (
    <AuthTemplate title="sign in">
      <FormSignIn />
    </AuthTemplate>
  );
}
