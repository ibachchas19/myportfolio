import React, { useState, useEffect, useRef } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import "./PopupForm.css";

export const PopupForm = () => {
  const [show, setShow] = useState(false);
  const [popupCount, setPopupCount] = useState(0); 
  const formRef = useRef();

  // Timer logic for multiple popups
  useEffect(() => {
    const popupTimers = [
      setTimeout(() => setShow(true), 5000), // Show popup after 5 seconds
      setTimeout(() => {
        if (popupCount === 1) setShow(true); // Show second popup after 20 seconds
      }, 25000),
      setTimeout(() => {
        if (popupCount === 2) setShow(true); // Show third popup after 30 seconds
      }, 55000),
    ];

    return () => {
      popupTimers.forEach((timer) => clearTimeout(timer)); // Cleanup on unmount
    };
  }, [popupCount]);

  const handleClose = () => {
    setShow(false);
    setPopupCount((prevCount) => prevCount + 1); // Increment popup count when closed
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
