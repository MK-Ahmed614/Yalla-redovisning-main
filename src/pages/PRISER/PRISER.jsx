import {BsCheckAll} from "react-icons/bs";
import "./PRISER.scss";
const Priser = () => {
  return (
    <section className="wrapper-priser">
          <div className="container">
            <div className="title-top"> <h3>priser</h3> </div>
            <div className="priser-content">
              <ul>
                <li>
                <BsCheckAll/> <p>Löpande redovisning från 595 kr/h</p>
                </li>
                <li>
                <BsCheckAll/> <p>Konsultarvode, kundbesök 995 kr/h</p>
                </li>
                <li>
                  <BsCheckAll/> <p>Bokslut 795 kr/h</p>
                </li>
                <li>
                  <BsCheckAll/> <p>Företag – Inkomstdeklaration från 1500 kr/st</p>
                </li>
              </ul>
              <ul>
                <li>
                  <BsCheckAll/> <p>Årsredovisning 2500 kr/st</p>
                </li>
                <li>
                  <BsCheckAll/> <p>K10 1000 kr/st</p>
                </li>
                <li>
                  <BsCheckAll/> <p>Bolagsregistrering från 750 kr/h</p>
                </li>
                <li>
                  <BsCheckAll/> <p>Rådgivning 695 kr/h</p>
                </li>
              </ul>
            </div>
            <div className="fasta-priser">
              <h5>fasta priser</h5>
              <p>Vi kan även erbjuda fasta månadspriser efter en överenskommelse.</p>
            </div>
          </div>
    </section>
  )
}

export default Priser
