import { useState } from "react"
import { Container, Row ,Col} from "react-bootstrap";
import contactImg from '../img/contact-img.svg'
import './Contact.css'

export const Contact =() =>{
    const formInitialDetail={
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const[formDetails, setFormDetails]=useState(formInitialDetail);
    const [buttonText, setButtonText]=useState('send');
    const [status, setStatus]=useState({});


    const onFormUpdate =(category,value)=>{
        setFormDetails({
             formDetails,
            [category]:value
        })
    }

    const handleOnSubmit = async(e)=>{
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("http://localhost:5000/contact",{
            method: 'POST',
            header: {
                "content-Type":"Application/json;charset=utf-8",
            },
            body:JSON.stringify(formDetails),
        });
        setButtonText('Send');
        let result = response.json();
        setFormDetails(formInitialDetail);
        if (result.code === 200){
            setStatus({sucsess: true,message:'Message Send successfully'});
        }else{
            setStatus({success:false,message:'Something Went Wrong,Try Again'})
        }

    }

    return(
        <section className="contact" id="contact">
            <Container>
                <Row className="align-item-center">
                    <Col md={6} >
                    <img src={contactImg} alt="contactImg" />
                    </Col>
                    <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleOnSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                            <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e)=> onFormUpdate('firstName',e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-2">
                            <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e)=> onFormUpdate('lastName',e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-3">
                            <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e)=> onFormUpdate('email',e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-4">
                            <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e)=> onFormUpdate('phone',e.target.value)}/>
                            </Col>
                            <Col>
                            <textarea row='6' value={formDetails.message} placeholder="Message" onChange={(e)=> onFormUpdate('message',e.target.value)}></textarea>
                            <button type="submit"><span>{buttonText}</span></button>
                            </Col>
                            {status.message &&
                            <Col>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                            </Col>}
                        </Row>
                    </form>
                    </Col>
                </Row>
            </Container>

        </section>

    )
}