import {
    Box,
    Flex,
    Heading,
    Spacer,
    Link,
    IconButton,
    useDisclosure,
    Divider,
    Text,
  } from '@chakra-ui/react';
  import { CloseIcon } from '@chakra-ui/icons';
  import { Link as RouterLink } from 'react-router-dom';
  import { motion } from 'framer-motion';
  import { CgMenuGridO } from 'react-icons/cg';
  import { useState, useEffect, useRef } from 'react'; // add useContext
  // import { AuthContext } from '../context/AuthContext';
  import '../App.css';
  
  const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [showCloseIcon, setShowCloseIcon] = useState(false);
    // const { isAuthenticated, user, logout } = useContext(AuthContext);
    const menuRef = useRef();
  
    useEffect(() => {
      if (isOpen) {
        setTimeout(() => setShowCloseIcon(false), 200);
      } else {
        setShowCloseIcon(false);
      }
    }, [isOpen]);
  
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          onClose();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [onClose]);
  
    const menuVariants = {
      hidden: { opacity: 0, x: '100%' },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          delayChildren: 0.5,
          staggerChildren: 0.5,
          duration: 0.5,
          ease: 'easeInOut',
        },
      },
      exit: { opacity: 0, x: '100%' },
    };
  
    const itemVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };
  
    return (
      <Box
        bgColor="#B0E0E6"
        bgImage="linear-gradient(-45deg, #001f3f 25%, transparent 25%, transparent 50%, #001f3f 50%, #001f3f 75%, transparent 75%, transparent)"
        bgSize="5px 5px;"
        py="2.5rem"
        px="2rem"
        position="relative"
        boxShadow="lg"
        mb="10px"
        fontFamily="'Audiowide', sans-serif"
      >
        <Flex alignItems="center" justifyContent="space-between" wrap="wrap">
          <Heading
            as={RouterLink}
            to="/"
            fontSize="3xl"
            fontFamily="'Audiowide', sans-serif"
            color="#F8F8F8"
            letterSpacing="wider"
          >
            Logan Gonzalez
          </Heading>
          <Spacer />
          <IconButton 
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            icon={
              showCloseIcon ? (
                <motion.div
                  whileHover={{ scale: 1.2, color: 'rgba(255, 215, 0, 1)' }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop' }}
                  style={{ color: '#F8F8F8' }}
                >
                  <CloseIcon />
                </motion.div>
              ) : (
                <motion.div 
                  whileHover={{ scale: 1.2, color: 'rgba(255, 215, 0, 1)' }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: 'loop' }}
                  style={{ color: '#F8F8F8' }}
                >
                  <CgMenuGridO />
                </motion.div>
              )
            }
            display={['block', 'block', 'none']}
            onClick={isOpen ? onClose : onOpen}
            variant="unstyled"
            fontSize="30px"
            _focus={{ boxShadow: 'none' }}
            mt="20px"
            mb="20px"
          />
          <Flex
            as="ul"
            display={['none', 'none', 'flex']}
            listStyleType="none"
            ml="auto"
            alignItems="center"
            gap="2rem"
            flex="1"
            justifyContent="space-evenly"
          >
            <Link
              as={RouterLink}
              to="/"
              fontSize="md"
              color="#F8F8F8"
              fontWeight="bold"
              position="relative"
              _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', color: 'gold'}}
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-0.2rem',
                left: 0,
                width: 0,
                height: '2px',
                bg: '#F8F8F8',
                transition: 'width 0.3s ease',
              }}
            >
              Player Bio
            </Link>
            <Link
              as={RouterLink}
              to="/login"
              fontSize="md"
              color="#F8F8F8"
              fontWeight="bold"
              position="relative"
              _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', color: 'gold'}}
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-0.2rem',
                left: 0,
                width: 0,
                height: '2px',
                bg: '#F8F8F8',
                transition: 'width 0.3s ease',
              }}
            >
              Hoops Film
            </Link>
            <Link
              as={RouterLink}
              to="/signup"
              fontSize="md"
              color="#F8F8F8"
              fontWeight="bold"
              position="relative"
              _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', color: 'gold'}}
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-0.2rem',
                left: 0,
                width: 0,
                height: '2px',
                bg: '#F8F8F8',
                transition: 'width 0.3s ease',
              }}
            >
              Player Cards
            </Link>
            <Link
              as={RouterLink}
              to="/signup"
              fontSize="md"
              color="#F8F8F8"
              fontWeight="bold"
              position="relative"
              _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', color: 'gold'}}
              _after={{
                content: '""',
                position: 'absolute',
                bottom: '-0.2rem',
                left: 0,
                width: 0,
                height: '2px',
                bg: '#F8F8F8',
                transition: 'width 0.3s ease',
              }}
            >
              Academics
            </Link>
          </Flex>
  
          {isOpen && (
            <motion.div initial="hidden" animate="visible" exit="exit" variants={menuVariants}>
              <Box
                ref={menuRef}
                position="fixed"
                top="0"
                right="0"
                width="70%"
                height="100vh"
                bgColor="#B0E0E6"
                bgImage="linear-gradient(-45deg, #001f3f 25%, transparent 25%, transparent 50%, #001f3f 50%, #001f3f 75%, transparent 75%, transparent)"
                bgSize="5px 5px;"
                zIndex="overlay"
                color="#F8F8F8"
                borderTopLeftRadius="30px"
                borderBottomLeftRadius="30px"
                boxShadow="0 0 20px rgba(0, 0, 0, 0.9)"
              >
                <motion.div variants={itemVariants}>
                  <Flex alignItems="center" justifyContent="space-between" mb="1rem">
                    <Text fontSize="2xl" fontWeight="bold" color="#F8F8F8" ml="20px" mt="20px">
                      Menu
                    </Text>
                    <IconButton
                      _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', color: 'gold'}}
                      aria-label="Close Menu"
                      icon={<CloseIcon />}
                      onClick={onClose}
                      variant="unstyled"
                      fontSize="20px"
                      color="#F8F8F8"
                      padding="10px"
                      mr="20px"
                      mt="14px"
                      mb="10px"
                    />
                  </Flex>
                  <Divider 
                    borderColor="#F8F8F8" 
                    borderWidth="2px" 
                    borderStyle="solid" 
                    opacity="1"
                  />
                  <Flex
                    direction="column"
                    alignItems="flex-start"
                    justifyContent="space-evenly"
                    h="80%"
                    ml="20px"
                    mt="20px"
                    gap="2rem"
                  >
                    <Link
                      as={RouterLink}
                      to="/"
                      fontSize="md"
                      fontWeight="bold"
                      color="#F8F8F8"
                      _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', color: 'gold'}}
                      onClick={onClose}
                    >
                      Player Bio
                    </Link>
                    <Link
                      as={RouterLink}
                      to="/login"
                      fontSize="md"
                      fontWeight="bold"
                      color="#F8F8F8"
                      _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', color: 'gold'}}
                      onClick={onClose}
                    >
                      Hoops Film
                    </Link>
                    <Link
                      as={RouterLink}
                      to="/signup"
                      fontSize="md"
                      fontWeight="bold"
                      color="#F8F8F8"
                      _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', color: 'gold'}}
                      onClick={onClose}
                    >
                      Player Cards
                    </Link>
                    <Link
                      as={RouterLink}
                      to="/signup"
                      fontSize="md"
                      fontWeight="bold"
                      color="#F8F8F8"
                      _hover={{ transform: 'scale(1.05)', transition: 'transform 0.2s', color: 'gold'}}
                      onClick={onClose}
                    >
                      Academics
                    </Link>
                  </Flex>
                </motion.div>
              </Box>
            </motion.div>
          )}
        </Flex>
      </Box>
    );
  };
  
  export default Navbar;