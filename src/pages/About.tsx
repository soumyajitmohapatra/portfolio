import React from "react";
import { Header } from "../common/components/Header";
import { Card } from "../common/components/Card";
import { CommonPageTemplate } from "../common/components/CommonPageTemplate";
import { BsFileEarmarkCode } from "react-icons/bs";
import { MdOutlineVideogameAsset, MdOutlineHiking } from "react-icons/md";
import { LiaLaptopCodeSolid } from "react-icons/lia";

import about from "../data/about.json";

export const About = () => {
  const icon = [
    BsFileEarmarkCode,
    LiaLaptopCodeSolid,
    MdOutlineHiking,
    MdOutlineVideogameAsset,
  ];
  return (
    <CommonPageTemplate
      articleTitle="About me"
      articleClassName="about"
      isActive={true}
    >
      <section className="about-text">
        <p>{about.aboutMeOne}</p>
        <p>{about.aboutMeTwo}</p>
      </section>

      <section className="service">
        <Header
          headerTitle="What i'm doing"
          headerElementName="h3"
          headerClassName="service-title"
        />
        <ul className="service-list">
          {about.whatIDo.map((item, i) => {
            const Icon = icon[i];
            return (
              <li className="service-item" key={item.uId}>
                <Card
                  description={item.description}
                  icon={<Icon size="42" />}
                  cardTitle={item.title}
                  headerClassName="service-item-title"
                  headerElementName="h4"
                />
              </li>
            );
          })}
        </ul>
      </section>
    </CommonPageTemplate>
  );
};
