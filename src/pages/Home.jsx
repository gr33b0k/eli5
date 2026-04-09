import ContentCard from "../components/explanation/card/ContentCard";
import ExplanationInput from "../components/explanation/ExplanationInput";
import LevelSelector from "../components/explanation/LevelSelector";

function Home() {
  return (
    <>
      <ExplanationInput />
      <LevelSelector />
      <ContentCard />
    </>
  );
}

export default Home;
