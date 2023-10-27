import FeatureCard from "./FeatureCard";
import academic from "/academics.png";
import connect from "/connect.png";
import guide from "/guide.png";
const Hero = () => {
  const displayData = {
    connect:
      "Connect with your college and university peers and communicate with people with knowledge and skills.",
    guide:
      "Guide other students or learn from other students with the skills you need to learn.",
    academic:
      "Help other students to apply for academic benefits from your educational institute.",
  };
  return (
    <section className="w-full">
      <h1 className="text-[3rem] text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#652BF7] via-[#A076F9] to-[#D7BBF5] mt-3">
        Empower Your Education <br /> Connect, Collaborate, Succeed!
      </h1>
      <p className="m-12 mx-auto text-center w-[70%] text-xl text-[#652BF7]">
        PeerNet is a platform for students to connect with their peers. Seek
        academic help from your batch mates or seniors, or help other students
        to qualify for academic benefits from your university or college.{" "}
      </p>
      <div className="mx-12 w-[full] flex flex-col sm:flex-row sm:justify-evenly align-middle gap-6">
        <FeatureCard image={connect} description={displayData.connect} />
        <FeatureCard image={guide} description={displayData.guide} />
        <FeatureCard image={academic} description={displayData.academic} />
      </div>
    </section>
  );
};

export default Hero;
