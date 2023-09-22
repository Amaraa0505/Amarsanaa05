import "@/styles/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function App({ Component, pageProps }) {
  return (
    <div className=" h-screen">
      <Header />
      <div className="h-[calc(100%-5.5rem)]">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
