import { AuthProvider } from "./AuthContext";
import { MenuProvider } from "./MenuContext";
import { RadioProvider } from "./RadioPlayerProvider";

export default function Providers({ children, initialAuthData }) {


  return (
    <AuthProvider initialUser={initialAuthData?.user} initialToken={initialAuthData?.token}>
      <MenuProvider>
        <RadioProvider>
          {children}
        </RadioProvider>
      </MenuProvider>
    </AuthProvider>
  );
}