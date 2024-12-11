import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './CTA.css';

export const CTA = () => {
  return (
    <section className="cta">
      <Container>
        <Row className="align-items-center">
          <Col md={8}>
            <h2 className="cta-title">
              Ready to take your <span className="highlight">next step?</span>
            </h2>
            <p className="cta-text">
              Let us help you build your dream project. Get in touch with our experts and see how we can assist you.
            </p>
          </Col>
          <Col md={4} className="text-center">
            <Button href="#contact" className="cta-button">
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
