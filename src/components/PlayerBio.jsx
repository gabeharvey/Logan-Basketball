import { Box, Text, VStack, Heading, Grid , Flex, IconButton, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaSnapchatGhost, FaYoutube } from 'react-icons/fa';
import XLogo from '/x-logo.png';
import { Link } from 'react-router-dom';

const MotionBox = motion.create(Box); 

function PlayerProfile() {
  const player = {
    frontImg: "logan-6.png",
    secondImg: "basketball-placeholder2.png",
    name: "Player Bio", 
    bioCategories: [
      { title: "Class", description: "2026" },
      { title: "Position", description: "SG" },
      { title: "Height", description: "6'3\"" },
      { title: "Weight", description: "185 lbs" },
      { title: "Place of Birth", description: "San Antonio, TX" },
      { title: "High School", description: "Steele High School" },
      { title: "Club Team", description: "Texas Hardwork" },
    ],
  };

  return (
    <VStack
      spacing={10}
      p={6}
      // bgImage="url('/basketball.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={12} 
    >
      <Heading fontSize="3xl" fontWeight="medium" color="#F28C28" fontFamily="'Coda', system-ui" mb="5">
        {player.name}
      </Heading>
      <Flex flexDirection="row" flexWrap="wrap" justifyContent="center" alignItems="center">
      {/* <Box
        w={{ base: '90%', md: '400px' }}
        h="500px" 
        minW="350px"
        borderRadius="12px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        overflow="hidden"
      > */}
        <MotionBox
          bgImage={`url(${player.frontImg})`} 
          bgSize="cover"
          bgPosition="center"
          borderRadius="12px"
          borderColor="#ebebeb"
          borderWidth="3px"
          minH="500px"
          minW="350px"
          m="5"
          initial={{ scale: 0.9, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }} 
        >
      </MotionBox>
      <MotionBox
        w={{ base: '90%', md: '500px' }}
        h="770px"
        minW="320px"
        m="5"
        bgColor="#ebebeb"
        bgImage="linear-gradient(-45deg, #ebebeb 25%, transparent 25%, transparent 50%, #ebebeb 50%, #ebebeb 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        borderRadius="12px"
        borderWidth="5px"
        borderColor="#F28C28"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.9, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }} 
      >
        <Grid gap={4}>
          {player.bioCategories.map((category, index) => (
            <Box key={index} p={3} bgColor="transparent" borderRadius="8px">
              <Text color="#000000" fontWeight="bold" fontFamily="'Coda', system-ui" fontSize="lg">
                {category.title}
              </Text>
              <Text color="#000000" fontFamily="'Roboto+Condensed', system-ui" fontSize="lg" fontWeight="semibold" mt={1}>
                {category.description}
              </Text>
            </Box>
          ))}
        </Grid>
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
      </MotionBox>
      {/* </Box> */}
      </Flex>
    </VStack>
  );
}

export default PlayerProfile;
