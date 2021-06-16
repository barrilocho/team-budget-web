import Button from '../../components/button/ButtonComponent';
import Input from '../../components/input/InputComponent';

const LoginScreen = () => {
  return (
    <div>
      <Input
        prefixIcon="user"
        id="username"
        name="username"
        placeholder="Escriba el usuario"
        label="Nombre de usuario"
      />
      <Input
        prefixIcon="lock"
        id="password"
        name="password"
        type="password"
        placeholder="Escriba la contraseña"
        label="Contraseña"
      />
      <Button text="Iniciar Sesión" type="button" />
    </div>
  );
};

export default LoginScreen;
