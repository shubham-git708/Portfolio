import Heading from "@/components/Heading";
import SkillsFooter from "@/components/SkillsFotter";
import { Badge } from "@/components/ui/badge";
import { LightbulbIcon } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const skillPage = () => {
  return (
    // SKILLS PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5">
      <div className="absolute inset-0 bg-[radial-gradient(circle,_var(--primary-sky)_1px,_transparent_1px)] bg-[size:20px_20px] opacity-10 z-0 pointer-events-none" />
      <div className="flex flex-col gap-3 w-full relative z-10">
        <div className="relative z-10">
          <Badge variant="secondary" className="gap-1.5 py-1 ">
            <LightbulbIcon className="w-4 h-4" />
            My Skills
          </Badge>
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
          <div className="flex flex-col lg:flex-row gap-8 w-full">
            <div className="flex-1">
              <FramerWrapper y={100} delay={0.31} className="block w-full">
                <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                  Tech Stack
                </h1>
                <div className="w-full flex flex-wrap gap-4">
                  <SkillsFooter items={portfolioConfig.skills.techStack} />
                </div>
              </FramerWrapper>
            </div>
            <div className="flex-1">
              <FramerWrapper y={100} delay={0.32} className="block w-full">
                <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                  Analytics Tools
                </h1>
                <div className="w-full flex flex-wrap gap-4">
                  <SkillsFooter items={portfolioConfig.skills.analyticsTools} />
                </div>
              </FramerWrapper>
            </div>
            <div className="flex-1">
              <FramerWrapper y={100} delay={0.33} className="block w-full">
                <h1 className="gap-2 text-2xl font-poppins text-primary font-semibold flex text_underline relative max-sm:text-xl mb-4">
                  Soft Skills
                </h1>
                <div className="w-full flex flex-row gap-4 justify-center items-center flex-nowrap">
                  <SkillsFooter items={portfolioConfig.skills.softSkills} />
                </div>
              </FramerWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skillPage;
