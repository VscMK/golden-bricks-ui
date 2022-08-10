import React, { useState, useEffect } from 'react';

import { Container,Form,Row, Col } from 'react-bootstrap';

const Calculation = () => {

const [stockingDate, setStockingDate] = useState(new Date());

const current = new Date();
const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

const [age, setAge] = useState(0);

const changeHandler = (e)=>{
    setStockingDate(e.target.value);
}

    useEffect(()=>{
    let newAge = (date - stockingDate)
    setAge(newAge)
},[date,stockingDate])


return (
    <div>
        <Container>
            <Row>
                <Form>
                    <Row className="mb-3">
                    <Form.Group as={Col} controlId="formStockingDate">
                    <Form.Control type="date" placeholder="Stocking Date" onChange={changeHandler}/>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formAge">
                    <Form.Control type = "number" placeholder = "Age"
                    value = {age}/>
                    </Form.Group>                        
                </Row>
                </Form>
            </Row>
        </Container>
    </div>
);
}
export default Calculation;