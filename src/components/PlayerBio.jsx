import { Box, Text, VStack, Heading, Grid , Flex} from '@chakra-ui/react';
import { motion } from 'framer-motion';

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
      { title: "Date of Birth", description: "January 15, 2007" },
      { title: "Place of Birth", description: "San Antonio, TX" },
      { title: "High School", description: "Steele High School" },
      { title: "Team", description: "Texas Hardwork" },
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
        h="850px"
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
      </MotionBox>
      {/* </Box> */}
      </Flex>
    </VStack>
  );
}

export default PlayerProfile;
