import { useDispatch } from 'react-redux';
import Button from '../../components/button/ButtonComponent';
import LoginForm from './forms/SignUpForm';
import { Container, Row, Col } from '../../components/grid';
import { SignUpWithEmailPasswordRequest } from '../../../application/actions/authActions';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const handleSignUp = (values) => {
    console.log('🚀 ~ file: SignUpScreen.jsx ~ line 9 ~ handleSignUp ~ values', values);
    dispatch(SignUpWithEmailPasswordRequest(values.name, values.email, values.password));
  };
  return (
    <Container isFluid>
      <Row>
        <Col>
          <LoginForm
            onSubmit={handleSignUp}
            initialValues={{ password: '', email: '', name: '', confirmPassword: '' }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button formId="signUpForm" text="Iniciar Sesión" type="submit" />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginScreen;
