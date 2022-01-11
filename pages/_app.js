import "../styles/globals.css";
import { AuthProvider } from "../context/auth";
const Noop = ({ children }) => <>{children}</>;
function MyApp({ Component, pageProps }) {
  const Auth = Component.Auth || Noop;
  return (
    <AuthProvider>
      <Auth>
        <Component {...pageProps} />
      </Auth>
    </AuthProvider>
  );
}

export default MyApp;
