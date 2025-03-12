import React, { useState } from "react";
import "./Middle.css";

export default function Middle() {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function messagesToggleDropDown() {
    setIsOpen1(!isOpen1);
  }

  function secureToggleDropDown() {
    setIsOpen2(!isOpen2);
  }

  function personalizeToggleDropDown() {
    setIsOpen3(!isOpen3);
  }

  function groupToggleDropDown() {
    setIsOpen4(!isOpen4);
  }

  return (
    <div>
      <section className="middle-body">
        <div className="address">
          <div className="map-div"></div>
          <div className="middle-text">
            <p style={{ fontSize: "28px" }}>Our Location</p>
            <h2 style={{ fontSize: "35px" }}>Connecting Near and Far</h2>
            <h3>Headquarters</h3>
            <p>Snappy Inc.</p>
            <p>San Francisco, USA</p>
            <p>123 Tech Boulevard, Suite 456</p>
            <p>San Francisco, CA 12345</p>
            <p>United States </p>
          </div>
        </div>
        <div className="questions">
          <div className="faqs">
            <p style={{ fontSize: "20px" }}>FAQ</p>
            <h3 style={{ fontSize: "33px", width: "20vw", marginTop: "-2vh" }}>
              Do you have any questions for us
            </h3>
            <p style={{ width: "33vw", marginTop: "-2vh", color: "#333" }}>
              If there are questions you want to ask us. We will answer all your
              questions.
            </p>
            <form className="middle-form">
              <input type="email" placeholder="✉ Enter your email" />
              <button>Submit</button>
            </form>
          </div>
          <div className="drop-downs">
            <div className="different-messages">
              <p
                onClick={messagesToggleDropDown}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  fontSize: "20px",
                  display: "inline-flex",
                  gap: "10vw",
                }}
              >
                What makes Snappy different from other messsaging
                apps?&nbsp;&nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                  style={{
                    transform: isOpen1 ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.5s ease",
                  }}
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </p>
              {isOpen1 && (
                <div>
                  <p>Reliable Messages.</p>
                  <p>Good emojis.</p>
                  <p>Fast Replies.</p>
                </div>
              )}
            </div>

            <div className="secure">
              <p
                onClick={secureToggleDropDown}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  fontSize: "20px",
                  display: "inline-flex",
                  gap: "19.8vw",
                }}
              >
                How Secure are my conversations on Snappy?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                  style={{
                    transform: isOpen2 ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.5s ease",
                  }}
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </p>
              {isOpen2 && (
                <div>
                  <p>Very Secure.</p>
                  <p>Moderately Secure.</p>
                  <p>Not so Secure.</p>
                </div>
              )}
            </div>

            <div className="personalize">
              <p
                onClick={personalizeToggleDropDown}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  fontSize: "20px",
                  display: "inline-flex",
                  gap: "23vw",
                }}
              >
                Can I personalize my Snappy experience?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                  style={{
                    transform: isOpen3 ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.5s ease",
                  }}
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </p>
              {isOpen3 && (
                <div>
                  <p>Sure, why not?</p>
                  <p>No you Cannot.</p>
                  <p>You can try.</p>
                </div>
              )}
            </div>

            <div className="group">
              <p
                onClick={groupToggleDropDown}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  fontSize: "20px",
                  display: "inline-flex",
                  gap: "23.6vw",
                }}
              >
                What group features does Snappy offer?
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-chevron-down"
                  viewBox="0 0 16 16"
                  style={{
                    transform: isOpen4 ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.5s ease",
                  }}
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </p>
              {isOpen4 && (
                <div>
                  <p>FEATURE 1</p>
                  <p>FEATURE 2</p>
                  <p>FEATURE 3</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
