import Header from "../components/Header";
import Photo from "../components/Home";

export default function Home() {
  return (
    <div className="flex h-full">
      <div className="flex-1  flex items-center justify-center">
        <img
          className="h-96 w-68"
          src="https://www.infront.co/adobe/dynamicmedia/deliver/dm-aid--7e905512-25a1-4972-afeb-a02b15665c9d/portfolio-woman-image.jpg?preferwebp=true&quality=80"
        />
      </div>
      <div className="flex-[3] flex items-center pl-6 bg-slate-300">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold">Amarsanaa</h1>
          <hr className="border-y-2 bg-black w-12"></hr>
          <p>creative developer</p>
          <button className="bg-black text-white h-12 w-32">Learn more</button>
        </div>
      </div>
    </div>
  );
}
