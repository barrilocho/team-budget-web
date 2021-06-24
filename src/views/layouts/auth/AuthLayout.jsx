import { node } from 'prop-types';
import styles from './styles/AuthLayout.module.scss';
import Box from '../../components/box';

const AuthLayout = ({ children }) => {
  return (
    <div className={styles['auth-layout']}>
      <Box className={styles['auth-layout__box']}>{children}</Box>
    </div>
  );
};

AuthLayout.propTypes = {
  children: node,
};

export default AuthLayout;
