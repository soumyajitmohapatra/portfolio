import React from "react";
import { CommonPageTemplate } from "../common/components/CommonPageTemplate";
import { IoIosSend } from "react-icons/io";
import { useForm, ValidationError } from "@formspree/react";
import { Header } from "../common/components/Header";
import { FaCheckCircle } from "react-icons/fa";
import { Spinner } from "../common/components/Spinner";

const Contact = () => {
  const [state, handleSubmit] = useForm(`${process.env.REACT_APP_FORM_SPREE}`);

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
        {state.succeeded ? (
          <div className="d-flex align-center width-100 flex-direction-column">
            <FaCheckCircle size={44} />
            <Header headerTitle="Message Sent! I'll revert you ASAP." />
          </div>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <input
                type="text"
                name="fullName"
                className="form-input"
                placeholder="Full name"
              />
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="Email address"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <textarea
              name="message"
              className="form-input"
              placeholder="Your Message"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              className="form-btn"
              type="submit"
              disabled={state.submitting}
            >
              {state.submitting ? <Spinner size={20} /> : <IoIosSend />}
              <span>Send Message</span>
            </button>
          </form>
        )}
      </section>
    </CommonPageTemplate>
  );
};

export default Contact;
