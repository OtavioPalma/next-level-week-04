import { NextPage } from 'next';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import '../styles/global.scss';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />;
    </ChallengesProvider>
  );
};

export default MyApp;
