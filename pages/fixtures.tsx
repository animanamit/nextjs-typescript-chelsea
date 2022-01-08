import type { NextPage, GetStaticProps } from "next";
import Logo from "../components/chelsea-logo-svg.component";
import FixtureCard from "../components/fixture-card.component";

const Fixtures: NextPage = ({ response }: any) => {
  return (
    <div className="bg-blue-50 m-auto w-auto">
      <div className="m-auto">
        {response.map((item: any, index: number) => (
          <FixtureCard fixture={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://api-football-v1.p.rapidapi.com/v3/fixtures?team=49&next=20",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
        "x-rapidapi-key": "fb74f474d9msh1f5afea74c166d2p1bc742jsn0bc9e7e2cef7",
      },
    }
  );
  const { response } = await res.json();

  if (!response) {
    return {
      notFound: true,
    };
  }

  return {
    props: { response },
  };
};

export default Fixtures;
