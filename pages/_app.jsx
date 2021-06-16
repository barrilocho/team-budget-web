import '../styles/global.scss';
import { func, shape } from 'prop-types';

function App({ Component, pageProps }) {
  return <Component pageProps={pageProps} />;
}

App.propTypes = {
  Component: func,
  pageProps: shape(),
};

export default App;
