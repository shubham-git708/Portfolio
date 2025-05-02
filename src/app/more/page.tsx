import Heading from "@/components/Heading";
import { Badge } from "@/components/ui/badge";
import { PackagePlus } from "lucide-react";
import FramerWrapper from "@/components/animation/FramerWrapper";
import { portfolioConfig } from "@/config/portfolio.config";

const morePage = () => {
  return (
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge variant="secondary" className="gap-1.5 py-1 ">
        <PackagePlus className="h-4 w-4" />
        Experience
      </Badge>
      <div className="flex flex-col gap-3 w-full">
        <Heading>Experience</Heading>
        {portfolioConfig.experience.map((exp, idx) => (
          <FramerWrapper key={idx} y={0} x={0} className="mb-4">
            <div className="font-bold text-lg text-primary">{exp.title} <span className="font-normal text-base text-muted-foreground">@ {exp.company} ({exp.period}, {exp.location})</span></div>
            <ul className="list-disc ml-6 mt-1 text-base text-gray-700">
              {exp.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </FramerWrapper>
        ))}
        <Heading>Internships</Heading>
        {portfolioConfig.internships.map((intern, idx) => (
          <FramerWrapper key={idx} y={0} x={0} className="mb-4">
            <div className="font-bold text-lg text-primary">{intern.title} <span className="font-normal text-base text-muted-foreground">@ {intern.company} ({intern.period}, {intern.location})</span></div>
            <ul className="list-disc ml-6 mt-1 text-base text-gray-700">
              {intern.details.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </FramerWrapper>
        ))}
        <Heading>Courses Completed</Heading>
        {portfolioConfig.courses.length === 0 ? <div className="text-gray-700 ml-2">(Add your courses in config)</div> : (
          <ul className="list-disc ml-6 mt-1 text-base text-gray-700">
            {portfolioConfig.courses.map((course, idx) => (
              <li key={idx}>{course.title} {course.provider ? `- ${course.provider}` : ""} {course.year ? `(${course.year})` : ""}</li>
            ))}
          </ul>
        )}
        <Heading>Achievements</Heading>
        <ul className="list-disc ml-6 mt-1 text-base text-gray-700">
          {portfolioConfig.achievements.map((ach, idx) => <li key={idx} dangerouslySetInnerHTML={{__html: ach}} />)}
        </ul>
        <Heading>Co-curricular</Heading>
        {portfolioConfig.coCurricular.length === 0 ? <div className="text-gray-700 ml-2">(Add your co-curricular activities in config)</div> : (
          <ul className="list-disc ml-6 mt-1 text-base text-gray-700">
            {portfolioConfig.coCurricular.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
};

export default morePage;
