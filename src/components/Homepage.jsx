import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Homepage = () => {
  const [name, setname] = useState("");
  const [lastname, setlastname] = useState("");
  const [contact, setcontact] = useState("");
  const [email, setemail] = useState("");
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(name + lastname, email, contact);
    emailjs
      .sendForm(
        "service_nlvjld9",
        "template_l7jjvqj",
        form.current,
        "qxtBsAqACVCOH2sxs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className=" container">
      <form ref={form} onSubmit={sendEmail}>
        <label> Name</label>
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
          name="user_name"
          className="w-100"
        />
        <label>Last Name</label>
        <input
          value={lastname}
          className="w-100"
          type="text"
          name="user_lastname"
          onChange={(e) => setlastname(e.target.value)}
        />
        <label> Contact no.</label>
        <input
          className="w-100"
          type="text"
          value={contact}
          name="user_number"
          onChange={(e) => setcontact(e.target.value)}
        />
        <label>Email</label>
        <input
          className="w-100"
          value={email}
          type="text"
          name="user_email"
          onChange={(e) => setemail(e.target.value)}
        />
        <label>Message</label>
        <textarea name="message" className="w-100" />
        <input
          type="submit"
          value="send"
          className=" bg-danger text-white py-2 px-3 rounded-2 border-0"
        />
      </form>
    </div>
  );
};

export default Homepage;
