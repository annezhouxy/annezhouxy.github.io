import { Container, Row, Col } from "react-bootstrap";
import linkedInLogo from '../assets/img/linkedinLogo.svg';
import githubLogo from '../assets/img/githubLogo.svg';
import logo from "../assets/img/header.svg";
import navIcon1 from "../assets/img/header.svg";
import navIcon2 from "../assets/img/header.svg";
import navIcon3 from "../assets/img/header.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
        
          <Col size={12} sm={12} className="text-center text-sm-end">
            <div className="social-icon">
                  <a href="http://linkedin.com/in/annezhouxy"><img src={linkedInLogo} alt="" /></a>
                  <a href="http://github.com/annezhouxy"><img src={githubLogo} alt="" /></a>
                </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}