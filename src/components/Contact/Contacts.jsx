import "./contacts.css";
import { CgMediaPodcast } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareUpwork } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
const Contacts = () => {
  return (
    <div>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <span>Contact Me</span>
            <h2>Contact Me</h2>
            <p>
              You can find me on LinkedIn and Twitter. Please feel free to reach
              out to me on any of these platforms. I'm eager to connect with you
              and discuss how I can be of assistance.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="info-box">
                    <CgMediaPodcast size={45} />
                    <h3>Social Profiles</h3>
                    <div className="social-links">
                      <a
                        href="https://linkedin.com/in/gelila-fassil"
                        className="linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="bi bi-twitter">
                          <FaLinkedin color="#ffb727" size={20} />
                        </i>
                      </a>

                      <a href="#" className="instagram">
                        <FaTwitter color="#ffb727" size={20} />
                      </a>

                      <a href="#" className="linkedin">
                        <FaSquareUpwork color="#ffb727" size={20} />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <MdAttachEmail color="#ffb727" size={30} />
                    <h3>Email Me</h3>
                    <p>gelilafassil659@gmail.com</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="info-box mt-4">
                    <IoCall color="#ffb727" size={30} />
                    <h3>Call Me</h3>
                    <p>+251962464070</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <form
                action="forms/contact.php"
                method="post"
                role="form"
                className="php-email-form"
              >
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="6"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="my-3">
                  <div className="loading">Loading</div>
                  <div className="error-message"></div>
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                </div>
                <div className="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
