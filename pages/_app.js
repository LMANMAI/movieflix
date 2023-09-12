import "../styles/globals.css";
import { AuthProvider } from "../context/auth";
import { MenuListProvider } from "../context/MenuListContext";
import { Layout } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <MenuListProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </MenuListProvider>
    </AuthProvider>
  );
}

export default MyApp;
