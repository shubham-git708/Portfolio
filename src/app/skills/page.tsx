import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { LightbulbIcon } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const skillPage = () => {
  return (
    // SKILLS PAGE
    <div className="relative w-full min-h-screen flex flex-col items-start gap-5">
      {/* Top half background */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-repeat bg-[url('/dots.png')] pointer-events-none z-0" />
      {/* Bottom half background */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-repeat bg-[url('/dots.png')] pointer-events-none z-0" />
      <div className="flex flex-col gap-3 w-full relative z-10">
        <div className="relative z-10">
          <Heading>My Technical Experience/Skills.</Heading>
          <FramerWrapper y={0} x={200}>
            <p className="font-poppins text-xl w-full text-primary max-sm:text-lg">
            Product-driven and entrepreneurial-minded, I blend technical expertise with market insight to build user-centric digital products. With hands-on experience leading cross-functional teams and launching innovative solutions, I thrive in fast-paced, data-driven environments. Passionate about solving real-world problems through scalable product strategies..
            </p>
          </FramerWrapper>
          <FramerWrapper y={100} delay={0.3} className="block w-full">
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
              Product Business
            </h1>
            <div className="w-full flex flex-wrap gap-4">
              <SkillsFooter items={portfolioConfig.skills.productBusiness} />
            </div>
          </FramerWrapper>
          <FramerWrapper y={100} delay={0.31} className="block w-full">
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
              Tech Stack
            </h1>
            <div className="w-full flex flex-wrap gap-4">
              <SkillsFooter items={portfolioConfig.skills.techStack} />
            </div>
          </FramerWrapper>
          <FramerWrapper y={100} delay={0.32} className="block w-full">
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
              Analytics Tools
            </h1>
            <div className="w-full flex flex-wrap gap-4">
              <SkillsFooter items={portfolioConfig.skills.analyticsTools} />
            </div>
          </FramerWrapper>
          <FramerWrapper y={100} delay={0.33} className="block w-full">
            <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
              Soft Skills
            </h1>
            <div className="w-full flex flex-wrap gap-4">
              <SkillsFooter items={portfolioConfig.skills.softSkills} />
            </div>
          </FramerWrapper>
        </div>
      </div>
    </div>
  );
};

export default skillPage;
