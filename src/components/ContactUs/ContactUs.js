import React from "react";

function ContactUs(props) {

  const form = document.getElementById("form");
  const username = document.getElementById("username1");
  const email = document.getElementById("email1");
  const phone = document.getElementById("phone1");
  const message = document.getElementById("message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
  });

  function checkInputs() {
    // trim to remove the whitespaces
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const phoneValue = phone.value.trim();
    const messageValue = message.value.trim();

    if (usernameValue === "") {
      setErrorFor(username, "Username cannot be blank");
    } else {
      setSuccessFor(username);
    }

    if (emailValue === "") {
      setErrorFor(email, "Email cannot be blank");
    } else if (!isEmail(emailValue)) {
      setErrorFor(email, "Not a valid email");
    } else {
      setSuccessFor(email);
    }

    if (phoneValue === "") {
      setErrorFor(phone, "Phone cannot be blank");
    } else {
      setSuccessFor(phone);
    }
    if (messageValue === "") {
      setErrorFor(message, "Message cannot be blank");
    } else {
      setSuccessFor(message);
    }
  }

  function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "formControl error";
    small.innerText = message;
  }

  function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "formControl success";
  }

  function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  }

  return (
    <div>
      <div id="contactUs">
        <div className="container">
          <h3>CONTACT US</h3>
          <hr className="line9 ml-0" />
          <div className="row">
            <div className="col-md-5 order-2 order-md-1">
              <Form id="form" className="form">
                <div className="formControl">
                  <input
                    type="text"
                    placeholder="Name ,Surname"
                    id="username1"
                  />
                  <i className="fas fa-check-circle"></i>
                  <i className="fas fa-exclamation-circle"></i>
                  <small>Error message</small>
                </div>
                <div className="formControl">
                  <input type="email" placeholder="E-mail" id="email1" />
                  <i className="fas fa-check-circle"></i>
                  <i className="fas fa-exclamation-circle"></i>
                  <small>Error message</small>
                </div>
                <div className="formControl">
                  <input type="number" placeholder="Phone" id="phone1" />
                  <i className="fas fa-check-circle"></i>
                  <i className="fas fa-exclamation-circle"></i>
                  <small>Error message</small>
                </div>
                <div className="formControl">
                  <input type="text" placeholder="Message" id="message" />
                  <i className="fas fa-check-circle"></i>
                  <i className="fas fa-exclamation-circle"></i>
                  <small>Error message</small>
                </div>
                <div className="d-flex justify-content-end">
                  <button id="send-btn">Send</button>
                </div>
              </Form>
            </div>
            <div className="col-md-7 order-1 order-md-2">
              <div className="justify-content-end d-flex">
                <div className="white-circle">
                  <span>!</span>
                </div>
                <p>
                  You can send us your questions, opinions, suggestions and
                  complaints via the form here. Apart from the contact form, you
                  can reach us from our e-mail address and support phone line
                  between 10:00 - 01:00. Your views are important and valuable
                  to us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactUs;
