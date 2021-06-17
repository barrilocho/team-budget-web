import Button from '../../components/button/ButtonComponent';
import LoginForm from '../forms/LoginForm';
import { Container, Row, Col } from '../../components/grid';

const LoginScreen = () => {
  const handleLogin = (values) => {
    console.log('🚀 ~ file: LoginScreen.jsx ~ line 7 ~ onSubmit ~ values', values);
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
