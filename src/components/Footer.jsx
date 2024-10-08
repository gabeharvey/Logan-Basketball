import { Link } from 'react-router-dom';
import { IconButton, Flex } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaSnapchatGhost } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Flex direction="column" alignItems="center" justifyContent="center">
          <Flex gap="1rem" mb="1rem"> 
            <IconButton 
              as={Link}
              to="https://facebook.com" 
              aria-label="Facebook"
              icon={<FaFacebookF />}
              variant="ghost"
              color="#F8F8F8"
              fontSize="24px"
              _hover={{ color: 'blue.500' }} 
            />
            <IconButton 
              as={Link}
              to="https://instagram.com" 
              aria-label="Instagram"
              icon={<FaInstagram />}
              variant="ghost"
              color="#F8F8F8"
              fontSize="24px"
              _hover={{ color: 'pink.500' }} 
            />
            <IconButton 
              as={Link}
              to="https://snapchat.com" 
              aria-label="Snapchat"
              icon={<FaSnapchatGhost />}
              variant="ghost"
              color="#F8F8F8"
              fontSize="24px"
              _hover={{ color: 'yellow.400' }} 
            />
          </Flex>
          <div className="footer-logo">©2024 Logan Gonzalez</div>
          <div><span className="tilt-prism-footer">Athlete X Elite</span></div>
        </Flex>
      </div>
    </footer>
  );
}

export default Footer;
