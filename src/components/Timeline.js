import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Card, Container, Row, Col } from "react-bootstrap";

const styles = {
  circle: {
    width: "1rem",
    height: "1rem",
    backgroundColor: "#8e44ad"
  },
  pillar: {
    width: "0.5rem",
    height: "100%",
    backgroundColor: "#8e44ad"
  },
  card: {
    backgroundColor: "#1c1c1c", // Dark background
    color: "#fff" 
  },
  cardHeader: {
    backgroundColor: "#1c1c1c",
    borderBottom: "none"
  },
  cardTitle: {
    color: "#8e44ad" 
  }
};

export const Timeline = ({ experiences }) => {
  const Circle = () => {
    return <div className="rounded-circle bg-primary mx-auto" style={styles.circle}></div>;
  };

  const Pillar = () => {
    return <div className="mx-auto" style={styles.pillar}></div>;
  };

  const ExperienceCard = ({ jobTitle, company, duration, description }) => {
    return (
      <Card className="border shadow rounded p-3" style={styles.cards}>
        <Card.Header style={styles.cardHeader}>
         <Card.Title style={styles.cardTitle} className="mb-0">{jobTitle}</Card.Title>
          <Card.Subtitle className="text-muted">{company}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
          <Card.Text className="text-muted">{duration}</Card.Text>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>
    );
  };

  return (
    <Container className="my-4">
      <Circle />
      {experiences.map((experience, index) => (
        <Fragment key={index}>
          <Row className="align-items-center my-4">
            {experience.direction === "left" && (
              <>
                <Col xs={5}>
                  <ExperienceCard
                    jobTitle={experience.jobTitle}
                    company={experience.company}
                    duration={experience.duration}
                    description={experience.description}
                  />
                </Col>
                <Col xs={2}>
                  <Pillar />
                </Col>
                <Col xs={5}></Col>
              </>
            )}
            {experience.direction === "right" && (
              <>
                <Col xs={5}></Col>
                <Col xs={2}>
                  <Pillar />
                </Col>
                <Col xs={5}>
                  <ExperienceCard
                    jobTitle={experience.jobTitle}
                    company={experience.company}
                    duration={experience.duration}
                    description={experience.description}
                  />
                </Col>
              </>
            )}
          </Row>
          <Circle key={`circle-${index}`} />
        </Fragment>
      ))}
      <Circle />
    </Container>
  );
};

Timeline.propTypes = {
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      direction: PropTypes.oneOf(["left", "right"]).isRequired,
      jobTitle: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
};

Timeline.defaultProps = {
  experiences: []
};

export default Timeline;
