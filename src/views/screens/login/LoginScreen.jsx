import { useDispatch } from 'react-redux';
import Link from 'next/link';
import Button from '../../components/button/ButtonComponent';
import LoginForm from './forms/LoginForm';
import { Container, Row, Col } from '../../components/grid';
import { startLoginEmailPassword } from '../../../application/actions/authActions';
import AuthLayout from '../../layouts/auth';
import Hyperlink from '../../components/hyperlink';
import styles from './styles/LoginScreen.module.scss';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const handleLogin = (values) => {
    dispatch(startLoginEmailPassword(values.username, values.password));
  };
  return (
    <AuthLayout>
      <Container isFluid>
        <Row>
          <Col>
            <LoginForm onSubmit={handleLogin} initialValues={{ password: '', username: '' }} />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button formId="loginForm" text="Iniciar Sesión" type="submit" />
          </Col>
        </Row>
        <Row>
          <Col className={styles.login__hyperlink}>
            <Link href="/signup">
              <Hyperlink text="¿No tienes cuenta? Registrate" passHref />
            </Link>
          </Col>
        </Row>
      </Container>
    </AuthLayout>
  );
};

export default LoginScreen;
