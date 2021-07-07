import '../styles/global.scss';
import { func, shape } from 'prop-types';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from '../src/application/store/store';

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component pageProps={pageProps} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
    </Provider>
  );
}

App.propTypes = {
  Component: func,
  pageProps: shape(),
};

export default App;
