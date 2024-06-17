import styles from "./ContactStyles.module.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_uiws61g", "template_stwdu8f", form.current, {
        publicKey: "zCmzUFqG5aLtcrsBs",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );

    e.target.reset();
    alert("Message sent!");
  };

  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Let's Connect!</h1>

      <form ref={form} onSubmit={sendEmail}>
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="name"
            placeholder="Name"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
            type="text"
            name="user_email"
            id="email"
            placeholder="Email"
            required
          />
        </div>

        <div className="formGroup">
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Drop a hi :)"
            required
          ></textarea>
        </div>

        <input className="hover btn" type="submit" value="Send" />
      </form>
    </section>
  );
}

export default Contact;
