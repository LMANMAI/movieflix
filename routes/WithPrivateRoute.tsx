import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/auth";

const WithPrivateRoute = ({ children }) => {
  const router = useRouter();
  const auth = getAuth();
  const { user } = useAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/Login");
      }
    });
  }, [user]);

  return <>{children}</>;
};

export default WithPrivateRoute;
