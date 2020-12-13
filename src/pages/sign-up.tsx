import AuthTemplate from 'templates/Auth';
import FormSignUp from 'components/FormSignUp';

export default function SignUpPage() {
  return (
    <AuthTemplate title="sign up">
      <FormSignUp />
    </AuthTemplate>
  );
}
