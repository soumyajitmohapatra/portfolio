import React from "react";
import { CommonPageTemplate } from "../common/components/CommonPageTemplate";

import data from "../data/portfolio.json";
import { PortfolioCard } from "../common/components/PortfolioCard";

const Portfolio = () => {
  return (
    <CommonPageTemplate
      articleTitle="Projects"
      articleClassName="Projects"
      isActive={true}
    >
      <section className="portfolio-posts">
        <ul className="portfolio-posts-list">
          {data.portfolio.map((ele) => (
            <PortfolioCard {...ele} key={ele.id} />
          ))}
        </ul>
      </section>
    </CommonPageTemplate>
  );
};

export default Portfolio;
