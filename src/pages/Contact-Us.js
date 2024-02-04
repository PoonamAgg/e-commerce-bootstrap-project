import React, { useRef } from 'react'
import Button from 'react-bootstrap/Button';
import { Form, Row, Col } from 'react-bootstrap';

const Contact = (props) => {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const phoneRef = useRef('');

    async function submithandler(e) {
        e.preventDefault();
        try {
            let validPhone ;
            if(phoneRef.current.value){
                const isValidPhoneNumber = /^\d{10}$/.test(phoneRef.current.value);
                if(!isValidPhoneNumber)
                {
                    alert('Enter 10 Digit number')
                    phoneRef.current.value = '';
                    return;
                }
                validPhone = isValidPhoneNumber
            }
            const contactPage = {
                name: nameRef.current.value,
                email: emailRef.current.value,
                phone: validPhone,
            };
            const response = await fetch("https://e-commerce-project-208ea-default-rtdb.firebaseio.com/contactUs.json", {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                },
                body: JSON.stringify(contactPage)
            })
            if (!response.ok) {
                throw new Error("Something went Wrong")
            }
            const data = response.json();
            data && alert("Data Successfully Submitted");
            nameRef.current.value = ''
            emailRef.current.value = ''
           phoneRef.current.value = ''
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h2>Connect with us today!</h2>
            <hr />
            <Form onSubmit={submithandler}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Name *
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="text" placeholder="Enter Full Name.." ref={nameRef} required />
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>
                        Email *
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="email" placeholder="Enter Valid Email ID..." ref={emailRef} required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>
                        Phone Number
                    </Form.Label>
                    <Col sm={5}>
                        <Form.Control type="number" placeholder="Enter 10 digit number.." ref={phoneRef} required/>
                    </Col>
                </Form.Group>
                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit">Submit</Button>
                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Contact;