import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
    </RecoilRoot>
  );
}

export default MyApp;
