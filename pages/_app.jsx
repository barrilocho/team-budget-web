import '../styles/global.scss';
import { func, shape } from 'prop-types';
import { Provider } from 'react-redux';
import store from '../src/application/store/store';

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component pageProps={pageProps} />
    </Provider>
  );
}

App.propTypes = {
  Component: func,
  pageProps: shape(),
};

export default App;
