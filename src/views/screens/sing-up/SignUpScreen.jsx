import { useDispatch } from 'react-redux';
import Link from 'next/link';
import Head from 'next/head';
import Button from '../../components/button/ButtonComponent';
import LoginForm from './forms/SignUpForm';
import { Container, Row, Col } from '../../components/grid';
import { SignUpWithEmailPasswordRequest } from '../../../application/actions/authActions';
import AuthLayout from '../../layouts/auth';
import styles from './styles/SignUpScreen.module.scss';
import Hyperlink from '../../components/hyperlink';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const handleSignUp = (values) => {
    dispatch(SignUpWithEmailPasswordRequest(values.name, values.email, values.password));
  };
  return (
    <AuthLayout>
      <Head>
        <title>Registrarme</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container isFluid>
        <Row>
          <Col>
            <LoginForm
              onSubmit={handleSignUp}
              initialValues={{
                password: '',
                email: '',
                name: '',
                confirmPassword: '',
                hasFamily: '',
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button formId="signUpForm" text="Registrarme" type="submit" />
          </Col>
        </Row>
        <Row>
          <Col className={styles['sign-up__hyperlink']}>
            <Link href="/login">
              <Hyperlink text="¿Ya tienes cuenta? Inicia sesión" passHref />
            </Link>
          </Col>
        </Row>
      </Container>
    </AuthLayout>
  );
};

export default LoginScreen;
