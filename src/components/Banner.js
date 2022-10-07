import {useState, useEffect} from "react";
import { Row, Col, Container } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);  //Random returns a number between 0 and 1.
    const toRotate =  ["Game Developer", "Web-Designer", "UI/UX Designer"];
    const period = 2000;

    const tick = () => {
        let i = loopNum % toRotate.length; // if more than 3 come back.
        let fullText = toRotate[i];        // The element to display
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) :fullText.substring(0, text.length + 1);

        setText(updatedText);   // Update text to the new one.

        if(isDeleting){
            setDelta(prevDelta => prevDelta/2); // Divides the prevDelta by 2.
        }
        
        // While updating if found full text, then start deleting.
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker)};
    }, [text])

    
    return (
        <section className="banner" id ="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}> 
                    <span className="tagline">Welcome to my portfolio</span>
                    <h1>{`Hi I'm Yashwith `} </h1>
                    <h4 className="wrap">{text}<span className="wrap2">|</span></h4>
                    <p className="My-Intro"> 
                        Passionate, Enthusiastic, responsible and hardworking IT person. Being worked on 
                        different projects quickly helped me to adopt changes quickly and made me a mature 
                        worker. I am able to work well both in a team environment as well as using my own 
                        initiative. I am able to work well under pressure and adhere to strict deadlines. 
                        My interest for programming came from games and it paved a path for my coding and
                        development journey.
                    </p>
                    <button onCanPlay={() => console.log('connect')} className="text-button"> Let's Connect <ArrowRightCircle size={25} color={'aquamarine'}/></button>
                    </Col>

                    <Col xs = {12} md ={6} xl={5}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}