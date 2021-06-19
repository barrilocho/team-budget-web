import { useDispatch } from 'react-redux';
import Button from '../../components/button/ButtonComponent';
import LoginForm from './forms/LoginForm';
import { Container, Row, Col } from '../../components/grid';
import { startLoginEmailPassword } from '../../../application/actions/authActions';
import Box from '../../components/box';
import styles from './styles/LoginScreen.module.scss';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const handleLogin = (values) => {
    dispatch(startLoginEmailPassword(values.username, values.password));
  };
  return (
    <div className={styles.login}>
      <Box className={styles.login__box}>
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
        </Container>
      </Box>
    </div>
  );
};

export default LoginScreen;
