import { Formik } from 'formik';
import * as Yup from 'yup';
import { func, shape, string } from 'prop-types';

import Input from '../../../components/input';

const SignUpForm = ({ onSubmit, initialValues }) => {
  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email('Email no valido').required('Email es requerido'),
    password: Yup.string().required('Contraseña es requerido'),
    name: Yup.string().required('El nombre es requerido'),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignUpSchema}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ values, errors, handleChange, submitCount, handleSubmit }) => {
        return (
          <form onSubmit={handleSubmit} id="signUpForm">
            <Input
              placeholder="Escriba la contraseña"
              label="Nombre"
              name="name"
              value={values.name}
              onChange={handleChange}
              id="name"
              type="text"
              prefixIcon="user"
              error={submitCount ? errors.name : ''}
            />
            <Input
              placeholder="Escriba el correo"
              label="Correo Electronico"
              value={values.email}
              onChange={handleChange}
              name="email"
              id="email"
              prefixIcon="email"
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
            <Input
              placeholder="Escriba la contraseña"
              label="Confirmar contraseña"
              name="confirmPassword"
              value={values.password}
              onChange={handleChange}
              id="confirmPassword"
              type="password"
              prefixIcon="lock"
              error={submitCount ? errors.confirmPassword : ''}
            />
          </form>
        );
      }}
    </Formik>
  );
};

SignUpForm.propTypes = {
  onSubmit: func,
  initialValues: shape({
    email: string,
    password: string,
  }),
};

export default SignUpForm;
