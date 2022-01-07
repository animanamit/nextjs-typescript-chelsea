import Image from "next/image";

const FixtureCard = ({ fixture }: any) => {
  console.log("props from fixture card", fixture);
  return (
    <div className="flex justify-evenly m-3 p-3 rounded-xl w-fit bg-slate-200 hover:bg-blue-400">
      <div className="flex flex-col justify-evenly justify-items-center items-center">
        <Image
          src={fixture.teams.home.logo}
          height={128}
          width={128}
          alt="team-logo"
        />
        <span className="mt-2">{fixture.teams.home.name}</span>
      </div>

      <div className="flex flex-col items-center justify-center m-3">
        <span>vs</span>
      </div>
      <div className="flex flex-col justify-evenly justify-items-center items-center">
        <Image
          src={fixture.teams.away.logo}
          height={128}
          width={128}
          alt="team-logo"
        />
        <span className="mt-2">{fixture.teams.away.name}</span>
      </div>
    </div>
  );
};

export default FixtureCard;
