import React from "react";
import {Row, Col} from "react-bootstrap"
import Lottie from "lottie-react";
import bird from "../temporary/bird.json";

const FourthPage = () => {
    return <>
    <hr />
    <Row className="info-section">
       <Col sm={12} md={6}>
           <h3>Dress Code</h3>
           <p>Žádná specifické barvy nepreferujeme, vemte si, co se vám líbí.</p>
           <p>Na obřad, oběd a následné focení poprosíme přeci jen něco slušnějšího.</p>
           <p>Na odpolední část si neváhejte vzít něco méně formálního, kde nehrozí bod varu a v čem se budete cítit pohodlně.</p>
       </Col>
       <Col sm={12} md={6}>
       <h3>Co s sebou</h3>
           <p><strong>Plavky:</strong> V rámci areálu máme k dispozici i malý rybníček, který můžete během odpoledne a večera využít pro schlazení a seznámení se s rybami (ale ne, ty budou v rybníku vedle).</p>
           <p><strong>Sportovní oblečení:</strong> Pokud se najdou nadšenci do volejbalu či badmintonu, máme hřiště, síť, míč i rakety. Neváhejte se tedy pustit do krvelačných matchů.</p>
       </Col>
   </Row>
   </>
}

export default FourthPage;