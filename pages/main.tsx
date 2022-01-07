import type { NextPage } from "next";
import { GetStaticProps } from "next";

const Main: NextPage = (props: any) => {
  console.log(props);
  return (
    <div>
      <h4>This is the main page</h4>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  console.log("getting props!");
  const res = await fetch(
    "https://api-football-v1.p.rapidapi.com/v3/teams?name=chelsea",
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
    props: response[0],
  };
};

export default Main;
