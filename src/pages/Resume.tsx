import React from "react";
import { CommonPageTemplate } from "../common/components/CommonPageTemplate";
import { TimelineSection } from "../common/components/TimelineSection";
import resumeData from "../data/resume.json";
import { MdWork, MdSchool } from "react-icons/md";
import { Link } from "../common/components/Link";
import { FaFileDownload } from "react-icons/fa";
import { Button } from "../common/components/Button";

export const Resume = () => {
  return (
    <CommonPageTemplate
      articleTitle="Resume"
      articleClassName="resume"
      isActive={true}
      icon={
        <Button
          aria-label="Download raw content"
          title="Download Resume"
          onClick={() => window.open(resumeData.resumeUrl)}
        >
          <FaFileDownload />
        </Button>
      }
    >
      <TimelineSection
        icon={<MdWork size={20} />}
        sectionTitle="Experience"
        timelineItems={resumeData.experience}
      />
      <TimelineSection
        icon={<MdSchool size={20} />}
        sectionTitle="Education"
        timelineItems={resumeData.education}
      />
      <section className="skill">
        <h3 className="h3 skills-title">My skills</h3>
        <div className="skills-box">
          {resumeData.skills.map((skill) => (
            <Link
              link={skill.URL}
              newTab
              rel="noreferrer"
              key={skill.title}
              hoverEffect={false}
              title={skill.title}
            >
              <img
                src={skill.imgSrc}
                width="48"
                height="48"
                alt={skill.title}
              />
            </Link>
          ))}
        </div>
      </section>
    </CommonPageTemplate>
  );
};
