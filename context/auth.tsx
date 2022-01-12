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
  registerFirebase: (email, password, username) => void;
  login: (email, password) => void;
  logout: () => void;
}
const auth = getAuth(app);

const AuthContext = createContext<IAuth>({
  user: null,
  registerFirebase: (email, password) => {},
  login: (email, password) => {},
  logout: () => {},
});

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState("");
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
    console.log(user);
    return unsubscribe;
  }, [user]);

  const registerFirebase = async (email, password, username) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          setUser(userCredential.user);
          setName(username);
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  const login = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          setUser(userCredential.user);
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
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
