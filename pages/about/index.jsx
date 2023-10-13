function About() {
  return (
 <div className="flex h-full ">
    <div className="flex-1  flex items-center justify-center">
      <img
        className="h-full"
        src="https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXN0cm9uYXV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
      />
    </div>
    <div className="flex-[3]  pl-6 bg-[#f0f9ff] gap-3 p-10">
       <div className="grid gap-8 ">
       <h1 className="font-bold text-3xl">About Me</h1>
        <div className=" bg-gray-600 w-[600px] h-0.5 rounded-xl"></div>
        <div className="w-72 ">
        <p>Hello there! My name is Amarsnaa. i'm programm developer and i'm very passionate in field of space industry.</p>
        <p>A year ago i graduated a highschool and i took gap year during this time i'm volunteering and learning english and javascript. </p>
        </div>
        </div>
  <div className="flex items-center justify-around mt-8">
      <div className="grid gap-4">
      <p className="font-bold">STUDY</p>
      <div className="w-64 h-0.5 bg-gray-600 rounded"></div>
      <li>English</li>
      <li>Korean</li>
      <li>Javascript</li>
      <li>Networking</li>
    </div>
    <div className="grid gap-4">
    <p className="font-bold">INTERESTS</p>
      <hr className="w-64 bg-gray-600 h-0.5 rounded"></hr>
      <li>Traveling</li>
      <li>Violin</li>
      <li>Piano</li>
      <li>Dancing</li>
    </div>
      
      
  </div>
    </div>
    
    
    
    
  </div>
  );
}
export default About;
