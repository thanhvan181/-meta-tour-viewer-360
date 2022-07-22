import Layout from '@/components/Layout';
import store from '@/store/configureStore';
import {AppPropsWithLayout} from '@/models/layout';
import {Provider as ReduxProvider} from 'react-redux';
import '@/styles/globals.css';

function MyApp({Component, pageProps}: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (
    <ReduxProvider store={store}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ReduxProvider>
  );
}

export default MyApp;
