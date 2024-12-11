import { useState, useEffect, useCallback, useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../img/header-img.svg';
import './Banner.css';
import 'animate.css';
import TrackVisibility from "react-on-screen";

export const Banner = () => {
    const [loopnum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    // Use useMemo to prevent the array from being re-created on every render
    const toRotate = useMemo(() => ["Web Developer", "Frontend Developer", "Full-stack Developer"], []);

    const tick = useCallback(() => {
        let i = loopnum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopnum + 1);
            setDelta(500);
        }
    }, [isDeleting, loopnum, text, toRotate, period]);

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [delta, tick]);

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <span className="tagline">Welcome to My Portfolio!</span>
                                    <h1>{`I am Ishant `}<span className="wrap">{ text}</span></h1>
                                    <p>Highly motivated developer with a passion for full-stack development and hands-on experience in collaborative environments. With over a year of experience, I am seeking an entry-level position as a Full Stack Developer to contribute to impactful projects and further enhance my skills in HTML, CSS, JavaScript, React.js, and Python. Open to freelance opportunities and challenging projects to expand my expertise and deliver value-driven solutions.</p>
                                    <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                                        Let's Connect<ArrowRightCircle size={25} />
                                    </button>
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img" className="img-fluid" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
