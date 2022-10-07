import { Container, Row, Col, Tab, Nav, TabContent } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

    const projects = [
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg1,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg2,
        },
        {
          title: "Business Startup",
          description: "Design & Development",
          imgUrl: projImg3,
        },
      ];
    

    return(
        <section className="project" id = "project">
            <Container>
                <Row>
                    <Col>
                        <h2>Properties</h2>
                        <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        <br></br> 
                        Lorem Ipsum has been the industry's standard dummy text.
                        </p>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Web Designs</Nav.Link>
                                </Nav.Item>
                                
                                <Nav.Item>
                                    <Nav.Link eventKey="Second">Cpp Projects</Nav.Link>
                                </Nav.Item>
                                
                                <Nav.Item>
                                    <Nav.Link eventKey="Third">Game Projects</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <TabContent>
                                <Tab.Pane eventKey="first">
                                  <Row>
                                    {
                                      projects.map((project, index) => {
                                        return (
                                          <ProjectCard key={index} {...project}/>
                                          )
                                      })
                                    }
                                  </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="Second">Yashwith D Alva Tab2</Tab.Pane>
                                <Tab.Pane eventKey="Third">Yashwith D Alva Tab3</Tab.Pane>
                            </TabContent>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}/>
        </section>
    )
}