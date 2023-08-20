import {FaPhone} from "react-icons/fa";
import {IoMdMail} from "react-icons/io";
import {BsFillSendFill} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import "./KONTAKT.scss";


const Kontakt = () => {
  return (
    <section className="contact">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <div className="about">
                      <h4 className="name">rama gazawi</h4>
                      <p className="title">Certifierad Redovisningskonsult och ägare</p>
                      <img src="../images/about-me.jpg" alt="my-image" />
                      <p className="description">Jag driver Vinst Redovisning sedan 2017 och har sedan tidigare lång erfarenhet av redovisning och företagsekonomi. Varmt välkommen att kontakta mig!</p>
                    </div>
                  </div>
                  <div className="col-6">
                               
           <section className="contact-section">
      <div className="container">
        <div className="parent-contact">
          <div className="row">
            <div className="col-12">
              <div className="serviecs-contact">
                <div className="icon">
                  <FaPhone/>
                </div>
                <div className="title">
                <a href="#">072-370 6616</a>
                </div>
              </div>
            </div>
            <div className="col-12">
            <div className="serviecs-contact">
                <div className="icon">
                  <IoMdMail/>
                </div>
                <div className="title">
                <a href="#">info@vinstredovisning.se</a>
                </div>
              </div>
            </div>
            <div className="col-12">
            <div className="serviecs-contact">
                <div className="icon">
                <BsFillSendFill/>
                </div>
                <div className="title">
                  <a href="#">Gjuterigatan 9, 553 18 Jönköping</a>
                </div>
              </div>
            </div>
          </div>
          <p className="about-time">Öppettider: Mån-Fre, 9-16 <a href="https://www.facebook.com/vinstredovisning"> <BsFacebook/> </a> </p>
        </div>
      </div>
    </section>
                  </div>
                </div>
              </div>
    </section>
  )
}

export default Kontakt
