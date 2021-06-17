import { Formik } from 'formik';
import * as Yup from 'yup';
import { func, shape, string } from 'prop-types';

import Input from '../../components/input';

const LoginForm = ({ onSubmit, initialValues }) => {
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email no valido').required('Email es requerido'),
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
              placeholder="Escriba el correo"
              label="Correo Electronico"
              value={values.email}
              onChange={handleChange}
              name="email"
              id="email"
              prefixIcon="user"
              error={submitCount ? errors.email : ''}
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
