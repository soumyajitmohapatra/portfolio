import React, { ReactNode } from "react";
import { Header } from "./Header";
import { Link } from "./Link";

interface TimelineItem {
  uId: string;
  title: string;
  subTitle: string;
  companyUrl?: string;
  companyLogo?: string;
  location: string;
  startDate: string;
  endDate: string;
  isPresent: boolean;
  description: string[];
  skillsUsed?: string[];
}

interface TimelineSectionProps {
  sectionTitle: string;
  timelineItems: TimelineItem[];
  icon: ReactNode;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({
  sectionTitle,
  timelineItems,
  icon,
}) => {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">{icon}</div>
        <Header headerTitle={sectionTitle} headerElementName="h3" />
      </div>
      <ol className="timeline-list">
        {timelineItems.map((item) => (
          <li className="timeline-item" key={item.uId}>
            <h4 className="h4 timeline-item-title">{item.title}</h4>
            {item?.companyUrl ? (
              <Link link={item?.companyUrl || ""} hoverEffect>
                {item.subTitle}, {item.location}
              </Link>
            ) : (
              <span>
                {item.subTitle}, {item.location}
              </span>
            )}
            <span>
              {item.startDate} - {item.isPresent ? "Present" : item.endDate}
            </span>
            {item.description.length > 0 && (
              <ul className="timeline-desc">
                {item.description.map((desc) => (
                  <li className="timeline-text" key={desc.split(" ").join("-")}>
                    {desc}
                  </li>
                ))}
              </ul>
            )}
            {item?.skillsUsed && (
              <span aria-hidden="true">
                <strong>Skills used:</strong>&nbsp;
                <small>
                  {item?.skillsUsed.map((skill) => (
                    <React.Fragment key={skill}>{skill}</React.Fragment>
                  ))}
                  .
                </small>
              </span>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
};
