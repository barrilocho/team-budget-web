import { useDispatch } from 'react-redux';
import Button from '../../components/button/ButtonComponent';
import LoginForm from './forms/LoginForm';
import { Container, Row, Col } from '../../components/grid';
import { startLoginEmailPassword } from '../../../application/actions/authAction';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const handleLogin = (values) => {
    dispatch(startLoginEmailPassword(values.email, values.password));
  };
  return (
    <Container isFluid>
      <Row>
        <Col>
          <LoginForm onSubmit={handleLogin} initialValues={{ password: '', email: '' }} />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button formId="loginForm" text="Iniciar Sesión" type="submit" />
        </Col>
      </Row>
    </Container>
  );
};

export default LoginScreen;
