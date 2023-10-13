function Work() {
  const works = [
    {
      name: "MARS-V",
      passage:
        "3 years ago when i used to work like volunteer this project that build camp to prepare astronauts and .in 2023, i recieved suggest to work at as a full-time in team of module development",
    },

    {
      name: "SPACE WEEK",
      passage:
        "last year i worked for a week as a volunteer and then i leared so many ability by communicating people. It was so memorable and useful to me",
    },

    {
      name: "HOT FESTIVAL",
      passage:
        " for 2 years i work like volunteer doing this i always collect experience and it is useful to me because if i would do festival, it could use my experience in the future",
    },
    {
      name: "NEPKO",
      passage:
        "if i have  possible time to purchase book, i work at nepko. it gives me some communicate skill and gives me possible to express myself",
    },
  ];
  return (
    <div className="grid grid-cols-4 h-full bg-[#f0f9ff]">
      <div className="col-span-1">
        <img
          className="h-full"
          src="https://images.unsplash.com/photo-1541873676-a18131494184?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXN0cm9uYXV0fGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60"
        />
      </div>
      <div className="col-span-3 items-center">
        <div className="grid grid-cols-2">
          {works.map((el) => (
            <div className="rounded-2xl grid gap-8 p-8 bg-[#f0f9ff]">
              <h3 className="font-bold">{el.name}</h3>
              <div className="h-0.5 bg-gray-600 rounded-xl"></div>
              <p className="w-64">{el.passage}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Work;
