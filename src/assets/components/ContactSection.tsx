import "./ContactSection.css";

import Telephon from "../icons/telefon.png";
import Email from "../icons/email.png";
import Standort from "../icons/platzhalter.png";

function ContactSection() {
  return (
    <section className="contactSection">
      <div className="sectionHeadInfo">Contact</div>

      <form
        action="https://formsubmit.co/kambach.moritz@gmail.com"
        method="POST"
      >
        <div className="containerWrapper">
          <div className="containerLeft">
            <div className="hook">
              <span>Let's build </span> <br></br>
              <span>
                something <em>great</em>.
              </span>
            </div>

            <div className="contactItem">
              <img src={Telephon} />
              <div>
                <p>Phone</p>
                <span>+49 176 55556010</span>
              </div>
            </div>

            <div className="contactItemSpacer" />

            <div className="contactItem">
              <img src={Email} />
              <div>
                <p>Email</p>
                <span>kambach.moritz@gmail.com</span>
              </div>
            </div>

            <div className="contactItemSpacer" />

            <div className="contactItem">
              <img src={Standort} />
              <div>
                <p>Location</p>
                <span>Mittweida, Germany</span>
              </div>
            </div>
          </div>

          <div className="containerSpacer" />

          <div className="containerRight">
            <div>
              <span className="inputGroupSpan">Your Name</span>
              <div className="inputGroup">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name Surname"
                />
              </div>
            </div>

            <div>
              <span className="inputGroupSpan">Your Email</span>
              <div className="inputGroup">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@email.com"
                />
              </div>
            </div>

            <div>
              <span className="inputGroupSpan">Your Message</span>
              <div className="inputGroup">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Hello, nice to meet you!"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <button type="submit" className="contactFormularSubmitButton">
          Submit Message
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" fill="none" />
            <path
              d="M6 12H18M18 12L13 7M18 12L13 17"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>{" "}
        </button>
      </form>
    </section>
  );
}
export default ContactSection;
