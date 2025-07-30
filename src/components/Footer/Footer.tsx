import Container from "../ui/Container/Container";
import './Footer.scss';
import Socials from "./Socials";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__wrapper">
          <Socials />
        </div>
      </Container>
    </footer>
  )
}

export default Footer;