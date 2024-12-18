import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./PopupForm.css";

export const PopupForm = () => {
  const [show, setShow] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false); // To track if the popup has been shown
  const formRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Vertical scroll position
      const windowHeight = window.innerHeight; // Height of the visible window
      const documentHeight = document.documentElement.scrollHeight; // Total height of the document

      // Calculate scroll percentage
      const scrollPercentage = (scrollPosition + windowHeight) / documentHeight;

      // Show popup if user has scrolled 50% and it hasn't been shown yet
      if (scrollPercentage >= 0.5 && !hasScrolled) {
        setShow(true);
        setHasScrolled(true); // Ensure popup is shown only once
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); 
    };
  }, [hasScrolled]);

  const handleClose = () => {
    setShow(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        "service_ofyyv6c", 
        "template_tc7gd2h", 
        formRef.current,
        "tRyNcYCCyVLV8qTg4" 
      );
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send message. Please try again.");
    }

    handleClose(); 
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Get In Touch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Row>
              <Col sm={6} className="px-1">
                <Form.Group controlId="formFirstName">
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                  />
                </Form.Group>
              </Col>
              <Col sm={6} className="px-1">
                <Form.Group controlId="formLastName">
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col sm={6} className="px-1">
                <Form.Group controlId="formEmail">
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                </Form.Group>
              </Col>
              <Col sm={6} className="px-1">
                <Form.Group controlId="formPhone">
                  <Form.Control type="tel" name="phone" placeholder="Phone Number" />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId="formMessage">
              <Form.Control
                as="textarea"
                name="message"
                rows={4}
                placeholder="Your Message"
                required
              />
            </Form.Group>
            <Button type="submit" className="popup-submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};
