import Header from "../components/Header";
import Photo from "../components/Home";
import Footer from "../components/Footer";
import "./style.module.css";

export default function Home() {
  return (
    <div className="Home">
      <div className=" h-screen w-full bg-violet-300 relative">
        <img
          className="h-full w-68"
          src="https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=900&q=60"
        />
        <div className="absolute top-0 w-full h-full flex items-center justify-center">
          <div className="flex items-start">
            <h4 className=" w-74">Amarsanaa</h4>
            <p>creative developer</p>
          </div>
          <button className="bg-black text-white h-12 w-32">Learn more</button>
        </div>
      </div>
      <Photo />
      <Footer />
    </div>
  );
}
