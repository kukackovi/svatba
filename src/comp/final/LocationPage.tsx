import React from "react";
import {Row, Col} from "react-bootstrap"

const LocationPage = () => {

    return <>
     <hr />
     <Row className="info-section">
        <Col sm={12} md={6}>
            <h3>Termín</h3>
            <p>Svatba se koná 4.7. (<strong>pracovní úterý</strong>) a na místě je možné přespat.</p>
            <p>Přijeďte mezi 11:00 a 12:00, ať máte čas si v klidu dát pivo. Ve 13:00 začíná obřad.</p>
        </Col>
        <Col sm={12} md={6}>
            <h3>Místo</h3>
            <p>Statek Hojšín poblíž Votic.</p>
            <p>GPS: 49.5833339N, 14.7145836E</p>
        </Col>

    </Row>
       
    </>

}

export default LocationPage;