import { node } from 'prop-types';
import styles from './styles/AuthLayout.module.scss';
import Box from '../../components/box';

const AuthLayout = ({ children }) => {
  return (
    <div className={styles.login}>
      <Box className={styles.login__box}>{children}</Box>
    </div>
  );
};

AuthLayout.propTypes = {
  children: node,
};

export default AuthLayout;
