import "../styles/globals.css";
import { AuthProvider } from "../context/auth";
import { Layout } from "../components";
function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
