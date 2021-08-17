import React, { useState } from "react";
import classes from "./Form.module.css";
import { MdMail } from "react-icons/md";
import { db } from "./Firebase";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message has been sent");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <h2>
        Feel free to get in touch <MdMail />
      </h2>
      <div className={classes.control}>
        <label htmlFor="full name">Full Name</label>
        <input
          required
          id="full name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input
          required
          id="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={classes.control}>
        <label htmlFor="message">Message</label>
        <textarea
          required
          id="message"
          placeholder="Message"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className={classes.actions}>
        <button
          type="submit"
          style={{ background: loader ? "#ccc" : "#f1c6d3" }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
