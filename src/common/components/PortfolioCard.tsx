import React from "react";
import { Header } from "./Header";

interface portfolioPostProps {
  id: string;
  title: string;
  category: string;
  date: string;
  image: string;
  altText: string;
  description: string;
  link: string;
  type: string;
}

export const PortfolioCard: React.FC<portfolioPostProps> = ({
  title,
  category,
  date,
  image,
  altText,
  description,
  link,
  type,
}) => {
  return (
    <li className="portfolio-post-item">
      <a href={link} target="_blank" rel="noreferrer">
        <figure className="portfolio-banner-box">
          <img src={image} alt={altText} loading="lazy" />
        </figure>

        <div className="portfolio-content">
          <div>
            <div
              className={`d-flex align-center portfolio-category ${
                type === "c" ? "case-study" : "project"
              }`}
            >
              <p>{category}</p>
            </div>
            <div className="portfolio-meta">
              <time dateTime={date}>
                Published on{" "}
                {new Date(date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </div>

            <h3 className="h3 portfolio-item-title">{title}</h3>
            <p className="portfolio-text">{description}</p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "2rem",
            }}
          >
            <Header
              headerElementName="h5"
              headerClassName="custom-link"
              headerTitle="Read More"
            />
          </div>
        </div>
      </a>
    </li>
  );
};
