import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contactSection">
      <div className="sectionHeadInfo">Contact</div>
      <div className="hook">
        <span>Let's build </span>
        <span>
          something <em>great</em>.
        </span>
      </div>
      <div className="containerWrapper">
        <div className="containerLeft">
          <div className="contactInfo"></div>
        </div>
        <div className="containerRight">
          <span className="inputGroupSpan">Your Name</span>
          <div className="inputGroup">
            <input type="text" id="name" placeholder="Name Surname" />
          </div>

          <span className="inputGroupSpan">Your Email</span>
          <div className="inputGroup">
            <input type="email" id="email" placeholder="example@email.com" />
          </div>

          <span className="inputGroupSpan">Your Message</span>
          <div className="inputGroup">
            <textarea
              id="message"
              placeholder="Hello, nice to meet you!"
            ></textarea>
          </div>
        </div>
      </div>
      <button className="contactFormularSubmitButton">Submit Message</button>
    </section>
  );
}
export default ContactSection;
