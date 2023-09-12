import { createContext, FC, useState, useContext, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
} from "firebase/auth";
import app from "../services/firebase";
import { useRouter } from "next/router";

interface IAuth {
  user: User | null;
  disabled: boolean;
  loading: boolean;
  errormsg: string;
  registerFirebase: (email, password, username) => void;
  login: (email, password) => void;
  logout: () => void;
  setDisabled: (disabled: boolean) => void;
  setLoading: (disabled: boolean) => void;
}
const auth = getAuth(app);

const AuthContext = createContext<IAuth>({
  user: null,
  disabled: false,
  loading: false,
  errormsg: "",
  registerFirebase: (email, password) => {},
  login: (email, password) => {},
  logout: () => {},
  setDisabled: () => {},
  setLoading: () => {},
});

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState("");
  const [disabled, setDisabled] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errormsg, setErrorMsg] = useState<string>("");

  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        router.push("/Home");
        if (user.displayName === null || user.photoURL === null) {
          updateProfile(user, {
            displayName: name,
            photoURL:
              "https://firebasestorage.googleapis.com/v0/b/movieflix-d2afa.appspot.com/o/366be133850498.56ba69ac36858.png?alt=media&token=e68c0f3f-4016-43e3-b7c2-26b438628285",
          });
        }
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, [user]);

  const registerFirebase = async (email, password, username) => {
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          setUser(userCredential.user);
          setName(username);
          setLoading(false);
        }
      );
    } catch (error) {
      setLoading(false);
      if (error.code) {
        setErrorMsg(error.message);
      }
    }
  };
  const login = async (email, password) => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          setUser(userCredential.user);
          router.push("/Home");
          setLoading(false);
        }
      );
    } catch (error) {
      setLoading(false);

      if (error.code) {
        setErrorMsg(error.message);
      }
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setErrorMsg("");
    } catch (error) {}
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        disabled,
        loading,
        errormsg,
        setLoading,
        setDisabled,
        registerFirebase,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };
