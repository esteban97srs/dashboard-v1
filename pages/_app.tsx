import '../styles/globals.css';
import theme from '../styles/theme';
import type { AppProps } from 'next/app';
import Layout from '../components/layout/Layout';
import { ThemeProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';

const MyApp = ({ Component, pageProps }: AppProps) => {

  const queryClient = new QueryClient();

  return(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />;
        </Layout>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default MyApp;