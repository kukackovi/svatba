import React from "react";
import {Row, Col} from "react-bootstrap"


const SecondPage = () => {
    return <>
    <hr />
    <Row className="info-section">
       <Col sm={12} md={6}>
           <h3>Program</h3>
           <p><strong>11:00 - 12:00:</strong> Příjezd hostů</p>
           <p><strong>13:00:</strong> Obřad</p>
           <p><strong>13:30:</strong> Oběd</p>
           <p><strong>15:00:</strong> Focení</p>
           <p><strong>16:30:</strong> Dort</p>
           <p><strong>18:30:</strong> Večerní grilování</p>
           <p>Následně očekáváme, že se oslava protáhne do ranních hodin. Ve středu odevzdáváme areál až ve 4 hodiny, nemusíte tedy spěchat domů a můžete středu strávit s námi na čerstvém vzduchu.</p>
       </Col>
       <Col sm={12} md={6}>
           <h3>Ubytování</h3>
           <p>Většinu hostů jsme schopni ubytovat v pokojích přímo v areálu, nicméně dost postelí zde není. S vytipovanými dobrodružnými dušemi se předem domluvíme, zda by si s sebou vzali karimatku / spacák. </p>
           <h3>Domácí mazlíčci</h3>
           <p>Můžete si s sebou vzít řádně vychovaného mazlíčka, avšak předem jej upozorněte, že nemá přístup na nábytek.</p>
           <h3>Dětské radovánky</h3>
            <p>V areálu máme i dětský pokoj s hračkami a knížkami, venku dětské hřiště s pískovištěm.</p>
            <p>Nejsme si jisti, kolik báboviček a dalších potřebných propriet tam bude, proto pokud má váš prcek nějaké oblíbené kousky, budou tam určitě využity (věříme, že si je i v pořádku odvezete domů).</p>
       </Col>
   </Row>
      
   </>
}

export default SecondPage;