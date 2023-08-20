import {BsCheckAll} from "react-icons/bs";
import "./TJÄNSTER.scss";
const TJÄNSTER = () => {
  return (
    <section className="wrapper-single-services">
    <div className="container">
      <div className="parent-single-content">
        <div className="row">
          <div className="col-4">
            <div className="serviecs-single-content">
              <div className="icon">
              <BsCheckAll/>
              </div>
              <div className="title">
                <h4>Redovisning</h4>
              </div>
              <div className="description">
                <p>Vi sköter hela eller delar av ditt företags ekonomihantering med fokus på kvalitet, kostnad och tid. Det innefattar bland annat bokföring, bokslut, årsredovisning, lönehantering och bolagsregistrering. Du kan fokusera på det du kan bäst – ditt företag!</p>
              </div>
            </div>
          </div>
          <div className="col-4">
          <div className="serviecs-single-content">
              <div className="icon">
                <BsCheckAll/>
              </div>
              <div className="title">
                <h4>Rådgivning</h4>
              </div>
              <div className="description">
                <p>Vill du utveckla ditt företag inom företagsekonomi och behöver stöd eller rådgivning? Då kan våra redovisningskonsulter vara en nyttig samarbetspartner att ”bolla” idéer med kring budget och försäljning.</p>
              </div>
            </div>
          </div>
          <div className="col-4">
          <div className="serviecs-single-content">
              <div className="icon">
              <BsCheckAll/>
                
              </div>
              <div className="title">
                <h4>Konsultation</h4>
              </div>
              <div className="description">
                <p>En konsult med erfarenhet och kunskap kan hjälpa till med varierande uppdrag i olika företag och branscher inom ekonomi. Behöver ditt företag hel- eller deltidskonsulter för en viss period löser vi det.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default TJÄNSTER
