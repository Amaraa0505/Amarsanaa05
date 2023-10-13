import Header from "../components/Header";


export default function Home() {
  return (
    <div className="flex h-full">
      <div className="flex-1  flex items-center justify-center">
        <img
          className="h-full"
          src="https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXN0cm9uYXV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
        />
      </div>
      <div className="flex-[3] flex items-center pl-6 bg-[#f0f9ff] gap-4">
        <div className="space-y-4 gap-4 ">
          <h1 className="text-7xl font-bold">Marsanaa</h1>
          <hr className="border-y-2 bg-black w-12"></hr>
          <p>creative developer</p>
        <button className="bg-purple-600 text-white h-12 w-32 rounded-xl hover: bg-purple-800">Learn more</button>
        </div>
      </div>
    </div>
  );
}
