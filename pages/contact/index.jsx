function Contact() {
  return (
    <div className="flex h-full">
      <div className="flex-1  flex items-center justify-center">
        <img
          className="h-full"
          src="https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXN0cm9uYXV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
        />
      </div>
      <div className="flex-[3] pl-6 bg-[#f0f9ff] p-8">
        <div className="flex gap-4 mb-4">
          <div className="h-16 border-2 border-[#0369a1] rounded-xl grid items-center">Ulaanbaatar, Ochir Khoroolol, Mongolia</div>
          <div className="h-16 border-2 rounded-xl border-[#0369a1] grid items-center">amarsanaa.tumurbaatar26@gmail.com</div>
          <div className="h-16 border-2 rounded-xl border-[#0369a1] w-64 grid items-center justify-center">86870550</div>
        </div>
        <div className="gap-4 grid"> 
          <div><input placeholder="Name" className="w-[1000px] rounded-xl h-12 p-4 border-[3px] border-[#0369a1]" ></input></div>
          <div><input placeholder="Email"className="w-[1000px] rounded-xl h-12 p-4 border-[3px] border-[#0369a1]" ></input></div>
          <div> <input placeholder="Message" className="w-[1000px] rounded-xl h-72 p-4 border-[3px] border-[#0369a1]" ></input></div>
        </div>
        
        <button className="bg-black rounded-xl w-32 h-10 text-white hover: bg-slate-950 mt-6">Send Message</button>
        
      </div>
    </div>
  );
}
export default Contact;
