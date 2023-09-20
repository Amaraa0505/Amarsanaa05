function Work() {
  const works = [
    {
      name: "mars-v",
      passage:
        "when i was 16 years old i firstly enrolled like volunteer this project that build camp to prepare astronauts who is going to mars and i sometimes used to work. After december in 2023, i recieved suggest to work at mars-v project as a full-time in team of module development",
    },
    {
      name: "start-up",
      passage:
        "our project member who is graphic designer suggested to me to work and practice in graphic designer",
    },
    {
      name: "space week",
      passage:
        "last year i worked for a week as a volunteer and then i leared so many ability by communicating people. It was so memorable and useful to me",
    },
    {
      name: "dudu",
      passage:
        "sometimes i work in team work lesson that improve team atmosphere playing together some games and it is so fun",
    },
    {
      name: "hot festival",
      passage:
        " for 2 years i work like volunteer doing this i always collect experience and it is useful to me because if i would do festival, it could use my experience in the future",
    },
    {
      name: "nepko",
      passage:
        "if i have  possible time to purchase book, i work at nepko. it gives me some communicate skill and gives me possible to express myself",
    },
  ];
  return (
    <div>
      <div className="">
        {works.map((el) => (
          <div className="h-96 w-72 rounded-2xl p-12">
            <h3>{el.name}</h3>
            <p className="">{el.passage}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
