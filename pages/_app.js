import { MyProvider } from "@/context/context";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <MyProvider>
      <Component {...pageProps} />;
    </MyProvider>
  );
}
