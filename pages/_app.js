import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { DarkProvider } from "../components/context/dark-context";

function MyApp({ Component, pageProps }) {
  return (
    <DarkProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DarkProvider>
  );
}

export default MyApp;
