function Experience() {
  return (
    <div className="flex h-full">
      <div className="flex-1  flex items-center justify-center">
        <img
          className="h-full"
          src="https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXN0cm9uYXV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
        />
      </div>
      <div className="flex-[3] items-center pl-6 bg-[#f0f9ff] p-16">
        <div className="flex items-center gap-4 mb-10 font-bold text-xl">
        <h1>VOLUNTEER</h1>
        <div className="w-96 h-0.5 bg-gray-600 rounded-xl"></div>
        </div>
        
        <div className="grid gap-10 ">
          <div className="flex gap-16">
          <button className=" w-14 h-14 rounded-full bg-green-700  font-bold">01</button>
        <p className="text-2xl">MARS-V</p>
          </div>
        <div className="flex gap-16">
        <button className=" w-14 h-14 rounded-full bg-green-700 font-bold">02</button>
        <p className="text-2xl">WORLD SPACE WEEK</p>
        </div>
        <div className="flex gap-16">
        <button className=" w-14 h-14 rounded-full bg-green-700 font-bold">03</button>
        <p className="text-2xl">FESTIVAL</p>
        </div>
        <div className="flex gap-16">
        <button className=" w-14 h-14 rounded-full bg-green-700 font-bold">04</button>
        <p className="text-2xl">NEPKO</p>
        </div>
        <div className="flex gap-16">
        <button className=" w-14 h-14 rounded-full bg-green-700 font">05</button>
        <p className="text-2xl">RESEARCH</p>
        </div>
        
        </div>
        
      </div>
    </div>
  )
}
export default Experience;
