import { Link } from 'react-router-dom';
import { IconButton, Flex, Box, Image } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaYoutube } from 'react-icons/fa';
import XLogo from '/x-logo.png';

function Footer() {
  return (
    <Box>
      <footer className="footer">
        <div className="footer-content">
          <Flex
            justify="space-between"
            direction={['column', 'row']}
            alignItems="center"
            gap="1rem"
            mt="1"
          >
            <div className="footer-logo">©2024 Logan Gonzalez</div>
            <Flex alignItems="center" justifyContent="center" flexDirection={['row', 'row']} gap="1rem">
              <IconButton
                as={Link}
                to="https://facebook.com"
                aria-label="Facebook"
                icon={<FaFacebookF />}
                variant="ghost"
                color="#000000"
                fontSize="24px"
                _hover={{ color: 'blue.500' }}
              />
              <IconButton
                as={Link}
                to="https://www.instagram.com/_logangonz/"
                aria-label="Instagram"
                icon={<FaInstagram />}
                variant="ghost"
                color="#000000"
                fontSize="24px"
                _hover={{ color: 'pink.500' }}
              />
              <IconButton
                as={Link}
                to="https://snapchat.com"
                aria-label="Snapchat"
                icon={<FaSnapchatGhost />}
                variant="ghost"
                color="#000000"
                fontSize="24px"
                _hover={{ color: 'yellow' }}
              />
              <IconButton
                as={Link}
                to="https://x.com/logangonzalez0"
                aria-label="X"
                icon={<Image src={XLogo} alt="X Logo" boxSize="24px" />}
                variant="ghost"
                color="#000000"
                _hover={{ color: '#000000' }}
              />
              <IconButton
                as={Link}
                to="https://www.youtube.com/@samgonzalez8333"
                aria-label="YouTube"
                icon={<FaYoutube />}
                variant="ghost"
                color="#000000"
                fontSize="24px"
                _hover={{ color: 'red.500' }}
              />
            </Flex>
            <Flex alignItems="center" justifyContent="center">
              <div>
                <a href="https://athletexelite.com" target="_blank" rel="noopener noreferrer" className="tilt-prism-footer">
                  Athlete X Elite | 1/1
                </a>
              </div>
            </Flex>
          </Flex>
        </div>
      </footer>
    </Box>
  );
}

export default Footer;
