import { Formik } from 'formik';
import * as Yup from 'yup';
import { func, shape, string } from 'prop-types';

import Input from '../../../components/input';

const LoginForm = ({ onSubmit, initialValues }) => {
  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Nombre de usuario es requerido'),
    password: Yup.string().required('Contraseña es requerido'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={LoginSchema}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ values, errors, handleChange, submitCount, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit} id="loginForm">
            <Input
              placeholder="Nombre de usuario"
              label="Correo Electronico"
              value={values.username}
              onChange={handleChange}
              name="username"
              id="username"
              prefixIcon="user"
              error={submitCount ? errors.username : ''}
            />
            <Input
              placeholder="Escriba la contraseña"
              label="Contraseña"
              name="password"
              value={values.password}
              onChange={handleChange}
              id="password"
              type="password"
              prefixIcon="lock"
              error={submitCount ? errors.password : ''}
            />
          </form>
        );
      }}
    </Formik>
  );
};

LoginForm.propTypes = {
  onSubmit: func,
  initialValues: shape({
    email: string,
    password: string,
  }),
};

export default LoginForm;
