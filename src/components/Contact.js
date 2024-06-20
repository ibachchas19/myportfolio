import { useState ,useRef} from "react"
import { Container, Row ,Col} from "react-bootstrap";
import contactImg from '../img/contact-img.svg'
import './Contact.css'
import emailjs from '@emailjs/browser';


export const Contact =() =>{

    const form =useRef()

    const formInitialDetail={
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    };

    const[formDetails, setFormDetails]=useState(formInitialDetail);
    const [buttonText, setButtonText]=useState('send');
    const [status, setStatus]=useState({});


    const onFormUpdate =(category,value)=>{
        setFormDetails({
             ...formDetails,
            [category]:value
        });
    };

    const handleOnSubmit = async(e)=>{
        e.preventDefault();
        setButtonText('Sending...');
      try {
        await emailjs.sendForm('service_ofyyv6c', 'template_tc7gd2h', form.current, 'tRyNcYCCyVLV8qTg4');
        setStatus({ success: true, message: 'Message sent successfully' });
    } catch (error) {
        console.error('EmailJS send error:', error.text);
        setStatus({ success: false, message: 'Something went wrong. Try again' });
    }

    setButtonText('Send');
    setFormDetails(formInitialDetail);
};

    return(
        <section className="contact" id="contact">
            <Container>
                <Row className="align-item-center">
                    <Col md={6} >
                    <img src={contactImg} alt="contactImg" />
                    </Col>
                    <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form ref={form} onSubmit={handleOnSubmit}>
                        <Row>
                            <Col sm={6} className="px-1">
                            <input type="text" value={formDetails.firstName} name="firstName" placeholder="First Name" onChange={(e)=> onFormUpdate('firstName',e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-2">
                            <input type="text" value={formDetails.lastName} name="lastName" placeholder="Last Name" onChange={(e)=> onFormUpdate('lastName',e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-3">
                            <input type="email" value={formDetails.email} name="email" placeholder="Email Address" onChange={(e)=> onFormUpdate('email',e.target.value)}/>
                            </Col>
                            <Col sm={6} className="px-4">
                            <input type="tel" value={formDetails.phone} name="phone" placeholder="Phone No." onChange={(e)=> onFormUpdate('phone',e.target.value)}/>
                            </Col>
                            <Col>
                            <textarea rows='6' value={formDetails.message} name="message" placeholder="Message" onChange={(e)=> onFormUpdate('message',e.target.value)}></textarea>
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
};
