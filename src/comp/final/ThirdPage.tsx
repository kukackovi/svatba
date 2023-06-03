import Lottie from "lottie-react";
import React from "react";
import {Row, Col} from "react-bootstrap"
import birds from "./birds.json";
import bird from "../temporary/bird.json";

const ThirdPage = () => {
    return <>
    <hr />
    <Row className="info-section">
       <Col sm={12} md={6}>
           <h3>Dary</h3>
           <p>Dary vítáme pokud se nejedná o zvířata z porcelánu, prostěradla, záclony a podobné vybavení domácnosti. Pokud si nebudete jistí, drobný finančí obnos nás jistě neurazí.</p>
       </Col>
       <Col sm={12} md={6}>
            <h3>Kontaktní informace</h3>
            <p>4.7. nechceme řešit ideálně nic. Proto jsme nominovali následující kontaktní osoby, které s vámi vše vyřeší.</p>
            <p>Lucie Satoriová: <a href="tel:778490940">778 490 940</a></p>
            <p>Jan Kukačka: <a href="tel:721315213">721 315 213</a></p>
       </Col>
   </Row>
   <Row>
        <div className="kuku">
            <Lottie animationData={bird} loop={true} />
        </div>
        <h2>Budoucí Kukačky se na vás těší!</h2>
   </Row>
    </>
}

export default ThirdPage;