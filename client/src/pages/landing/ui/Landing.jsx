import { useNavigate } from "react-router";

import { Header } from "@/widgets/header";
import { LandingHero } from "@/widgets/landing-hero";

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient relative flex h-screen flex-col overflow-hidden p-4">
      <Header>
        <button
          onClick={() => navigate("/auth")}
          className="btn-primary hidden sm:block"
        >
          Get started
        </button>
      </Header>
      <LandingHero />
    </div>
  );
}

export default Landing;
