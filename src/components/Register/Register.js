import React from "react";
import { Link } from "react-router-dom";

function Register(props) {
  var telInput = $("#phone"),
    errorMsg = $("#error-msg"),
    validMsg = $("#valid-msg");

  // initialise plugin
  telInput.intlTelInput({
    allowExtensions: true,
    formatOnDisplay: true,
    autoFormat: true,
    autoHideDialCode: true,
    autoPlaceholder: true,
    defaultCountry: "auto",
    ipinfoToken: "yolo",

    nationalMode: false,
    numberType: "MOBILE",
    //onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
    preferredCountries: ["sa", "ae", "qa", "om", "bh", "kw", "ma"],
    preventInvalidNumbers: true,
    separateDialCode: true,
    initialCountry: "auto",
    geoIpLookup: function (callback) {
      $.get("http://ipinfo.io", function () {}, "jsonp").always(function (
        resp
      ) {
        var countryCode = resp && resp.country ? resp.country : "";
        callback(countryCode);
      });
    },
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/js/utils.js",
  });

  var reset = function () {
    telInput.removeClass("error");
    errorMsg.addClass("hide");
    validMsg.addClass("hide");
  };

  // on blur: validate
  telInput.blur(function () {
    reset();
    if ($.trim(telInput.val())) {
      if (telInput.intlTelInput("isValidNumber")) {
        validMsg.removeClass("hide");
      } else {
        telInput.addClass("error");
        errorMsg.removeClass("hide");
      }
    }
  });

  // on keyup / change flag: reset
  telInput.on("keyup change", reset);

  return (
    <div>
      <div id="register-content">
        <div className="content">
          <div className="container">
            <div className="row d-flex justify-content-center">
              <div className="">
                <h6>Register with...</h6>
                <div className="row ml-0">
                  <Link className="box" to="">
                    <img className="register-icon1" src={Images.image43svg} />
                  </Link>
                  <Link className="box" to="">
                    <img className="register-icon2" src={Images.vectorfbsvg} />
                  </Link>
                  <Link className="box" to="">
                    <img className="register-icon3" src={Images.image44svg} />
                  </Link>
                </div>

                <div className="row">
                  <hr className="line7"></hr>
                  <p>or</p>
                  <hr className="line7"></hr>
                </div>
                <h6>Register with email</h6>
                <Form>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Username"
                    />
                    <label for="username" className="form-label">
                      Username
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                    <label for="email" className="form-label">
                      Email
                    </label>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Password"
                    />
                    <label for="password" className="form-label">
                      Password
                    </label>
                  </div>
                  <div id=""></div>
                  <div id="intlTelInput" className="form-group">
                    <input
                      name="phone"
                      id="phone"
                      type="number"
                      placeholder="Phone number"
                    />
                  </div>
                  <div className="form-check">
                    <input
                      className="active form-check-input"
                      type="checkbox"
                      name="check1"
                      id="check1"
                      value="option1"
                      checked
                    />
                    <label className="form-check-label" for="check1">
                      I accept the terms and conditions, cookie policy and
                      privacy policy.
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="check2"
                      id="check2"
                      value="option2"
                    />
                    <label className="form-check-label" for="check2">
                      Send me vouchers and news on great promotions.
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="check3"
                      id="check3"
                      value="option3"
                    />
                    <label className="form-check-label" for="check3">
                      Send me the latest updates, competitions and news from the
                      Community.
                    </label>
                  </div>
                  <div className="row d-flex justify-content-center">
                    <Link
                      to=""
                      type="button"
                      className="sign-in-btn btn btn-link"
                    >
                      Sign in
                    </Link>
                    <Link type="button" className="register-btn btn btn-link">
                      Register
                    </Link>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
