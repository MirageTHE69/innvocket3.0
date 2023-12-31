import React, { useRef } from "react";
import Layout from "../components/layout";
import HeaderSection from "../components/HeaderSection";
import StackCard from "../components/stackCard";
import FacebookIcon from "../images/facebook.png";
import InstagramIcon from "../images/instagram.png";
import LinkdinIcon from "../images/linkdin.png";
import emailjs from 'emailjs-com';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_7660lyv',
      'template_mfzjuwn',
      form.current,
      'jJU6SHbboQUiNMMMI'
    )
    .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
    }, (error) => {
        console.error(error.text);
        alert('Error sending email. Please try again.');
    });
  }

  return (
    <Layout>
      <HeaderSection
        title="Contact"
        subtext="contact us any time"
        className={"slide-in-right-bounce delay-2"}
      />

      <div className="flex flex-col md:flex-col lg:flex-row w-full p-6 space-y-3 md:space-y-0 md:space-x-3 items-start">
        <div className="w-full md:w-[60%] contact-section flex-grow md:mr-4 pt-4">
          <div>
            <div className="text-3xl text-white font-leagueGothic mb-4">
              Send A Message
            </div>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4">
              <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
                <input
                  type="text"
                  name="firstName"  // Add name attribute
                  placeholder="First Name"
                  className="h-15 w-full md:w-[48%] rounded-xl bg-[#181c20] text-white p-4"
                  required  // Add required attribute
                />
                <input
                  type="email"
                  name="email"  // Add name attribute
                  placeholder="Email"
                  className="h-15 w-full md:w-[48%] rounded-xl bg-[#181c20] text-white p-4"
                  required  // Add required attribute
                />
              </div>
              <textarea
                name="message"  // Add name attribute
                placeholder="Message"
                className="h-48 w-full rounded-xl bg-[#181c20] text-white p-4"
                required  // Add required attribute
              ></textarea>
              <button type="submit" className="h-14 w-full rounded-xl bg-white text-[#181c20] font-bold text-center">
                Send Message
              </button>
            </form>
          </div>
        </div>
        <div className="w-full md:w-[40%] space-y-2 stack-section pt-8">
          <div className="flex justify-between items-center justify-items-center mb-4">
            <h2 className="font-leagueGothic text-3xl ml-3 text-white">
              SOCIALS
            </h2>
            <button className="flex items-center text-white">
              {/* ... rest of the button code */}
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <StackCard
              title="Facebook"
              icon={FacebookIcon}
              className="slide-in-right delay-1 "
            />
            <StackCard
              title="Linkedin"
              icon={LinkdinIcon}
              className="slide-in-right delay-2 "
            />
            <StackCard
              title="Instagram"
              icon={InstagramIcon}
              className="slide-in-right delay-3 "
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact;
