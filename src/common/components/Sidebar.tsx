import React from "react";
import {
  MdEmail,
  MdCall,
  MdCalendarMonth,
  MdLocationOn,
  MdExpandMore,
} from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/image/profile.png";
import about from "../../data/about.json";
import { Link } from "./Link";
import { Header } from "./Header";
import { Button } from "./Button";

export const Sidebar = () => {
  const [sideBarActive, setSideBarActive] = React.useState(false);

  const contactIcons = [MdEmail, MdCall, MdCalendarMonth, MdLocationOn];
  const socialIcons = [FaGithub, FaLinkedin];

  const toggleSideBar = () => setSideBarActive((prevState) => !prevState);

  const sideBarClassName = sideBarActive ? "sidebar active" : "sidebar";

  return (
    <aside className={sideBarClassName}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={profile} alt="Soumyajit Mohapatra" width={80} />
        </figure>
        <div className="info-content">
          <Header
            headerTitle={about.name}
            headerElementName="h1"
            headerClassName="name"
          />
          <p className="title">{about.title}</p>
        </div>
        <Button
          className="info_more-btn"
          onClick={toggleSideBar}
          aria-labelledby="Expand More"
          title="expand"
        >
          <>
            <span>Show Contacts</span>
            <MdExpandMore size={28} />
          </>
        </Button>
      </div>
      <div className="sidebar-info_more">
        <div className="separator" />
        <ul className="contacts-list">
          {about.contact.map((item, i) => {
            const Icon = contactIcons[i];
            const htmlContent = `<p class="contact-title">${item.label}</p>${item.value}`;
            return (
              <li className="contact-item" key={item.label}>
                <div className="icon-box">
                  <Icon />
                </div>
                <div
                  className="contact-info"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                ></div>
              </li>
            );
          })}
        </ul>
        <div className="separator" />
        <ul className="social-list">
          {about.social.map((item, i) => {
            const Icon = socialIcons[i];
            return (
              <li className="social-item" key={item.label}>
                <Link
                  link={item.url}
                  className="social-link"
                  hoverEffect={false}
                  title={item.label}
                >
                  <Icon color="var(--light-gray-70)" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
