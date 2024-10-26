import React from "react";
import AppBar from "../components/Landingpage/AppBar";

import HeroSection from "../components/Landingpage/HeroSection";
import AbboutTeleHealths from "../components/Landingpage/aboutTelelhealth";
import WhyOwlDoc from "../components/Landingpage/whyOwlDoc";
import ExploreOurIdea from "../components/Landingpage/exploeouridea";
import AboutUs from "../components/Landingpage/aboutus";
import MeetTeam from "../components/Landingpage/ourTeam";
import BlogSection from "../components/Landingpage/blogs";
import Footer from "../components/Landingpage/footer";

function LandingPage() {
  return (
    <div className="">
      <AppBar />
      <HeroSection />
      <AbboutTeleHealths
        bg="#EAE2F3"
        title={" Beyond Tele Health"}
        deatil={
          " The Owldoc Converge platform moves beyond traditional telehealth tocreate a powerful, connected digital care ecosystem that interweavesin-person, automated, and virtual care. Together with our clients, weare transforming and simplifying the care experience, enabling better outcomes for all."
        }
        text={"Request Demo"}
        textcolor="#5300BC"
      />
      <WhyOwlDoc />
      <ExploreOurIdea />
      <MeetTeam />
      <AboutUs />
      <MeetTeam />
      <AbboutTeleHealths
        bg={"#0512EC"}
        title={" Subscribe to better mental health"}
        deatil={
          " For a monthly fee, you can access the world’s largest network of therapists to help with all of life’s challenges. Does not include medication support"
        }
        text={"Join Waitlist"}
      />{" "}
      <BlogSection />
      <Footer />
    </div>
  );
}

export default LandingPage;
