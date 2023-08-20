import {FaChartBar,FaCommentDots} from "react-icons/fa"
import {TbCircleDot} from "react-icons/tb";
import { Link } from "react-router-dom";
import "./Start.scss";
const Start = () => {
  return (
    <>
           {/* testimonial */}

<section className="wrapper-testimonial">
  <div className="container">
    <div className="testimonial-content">
      <h2>Trygga lösningar för er ekonomi.</h2>
      <p>Vinst Redovisning i Jönköping AB erbjuder helhetslösningar och enskilda tjänster inom bokföring, redovisning, rådgivning, lön och konsultationer. </p>
      <Link to="/Kontakt" className="custom-btn btn-12" href="#"> <span>Click!</span><span>KONTAKTA OSS</span></Link>
    </div>
  </div>
</section>

           {/* services */}
           <section className="wrapper-services">
      <div className="container">
        <div className="parent-content">
          <div className="row">
            <div className="col-4">
              <div className="serviecs-content">
                <div className="icon">
                  <FaChartBar/>
                </div>
                <div className="title">
                  <h4>Helhetslösningar</h4>
                </div>
                <div className="description">
                  <p>Vi tar hand om hela företagets ekonomi – från lönehantering och löpande bokföring till bokslut och årsredovisning.</p>
                </div>
              </div>
            </div>
            <div className="col-4">
            <div className="serviecs-content">
                <div className="icon">
                  <TbCircleDot/>
                </div>
                <div className="title">
                  <h4>Enskilda tjänster</h4>
                </div>
                <div className="description">
                  <p>Vill ni ha hjälp med någon specifik del i er ekonomihantering erbjuder vi en rad olika enskilda tjänster och lösningar.</p>
                </div>
              </div>
            </div>
            <div className="col-4">
            <div className="serviecs-content">
                <div className="icon">
                <FaCommentDots/>
                  
                </div>
                <div className="title">
                  <h4>Rådgivning</h4>
                </div>
                <div className="description">
                  <p>Med lång erfarenhet kan Vinst Redovisning vara rådgivare och bollplank i olika frågor som gäller er ekonomi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Start
