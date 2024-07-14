import React from "react";
import { CommonPageTemplate } from "../common/components/CommonPageTemplate";
import { IoIosSend } from "react-icons/io";
import { Button } from "../common/components/Button";

interface ContactForm {
  fullName: string;
  email: string;
  message: string;
}
export const Contact = () => {
  const [formData, setFormData] = React.useState<ContactForm>({
    fullName: "",
    email: "",
    message: "",
  });

  const handleOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    console.table(formData);
  };
  return (
    <CommonPageTemplate
      articleTitle="Contact"
      articleClassName="contact"
      isActive={true}
    >
      <section className="mapbox" data-mapbox="">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194451.66588206223!2d77.4661255!3d12.9539456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sus!4v1647608789441!5m2!1sen!2sus"
            width={400}
            height={300}
            loading="lazy"
            title="my location"
          ></iframe>
        </figure>
      </section>
      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>
        <div className="form">
          <div className="input-wrapper">
            <input
              type="text"
              name="fullName"
              className="form-input"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleOnChange}
            />
            <input
              type="email"
              name="email"
              className="form-input"
              placeholder="Email address"
              value={formData.email}
              onChange={handleOnChange}
            />
          </div>
          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleOnChange}
          />
          <Button className="form-btn" onClick={handleSubmit}>
            <IoIosSend />
            <span>Send Message</span>
          </Button>
        </div>
      </section>
    </CommonPageTemplate>
  );
};
