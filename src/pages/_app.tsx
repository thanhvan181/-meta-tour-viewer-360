import Layout from '@/components/Layout';
import { AppPropsWithLayout } from '@/models/layout';
import '@/styles/globals.css'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return (<LayoutWrapper><Component {...pageProps} /></LayoutWrapper>)
}

export default MyApp