import Image from "next/image";

const FixtureCard = ({ fixture }: any) => {
  return (
    <div className="shadow-md flex justify-evenly justify-items-center items-center rounded-xl  w-[500px] bg-lightblue ml-auto mr-auto mt-3 mb-3 pt-4 pb-4">
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
