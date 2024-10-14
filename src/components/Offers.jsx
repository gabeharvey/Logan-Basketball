import { Box, Text, VStack, Heading, Flex, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function Offers() {
  const offers = [
    {
      schoolName: "St Mary's University",
      logo: "st-mary-rattlers.png", 
      description: "Full athletic scholarship",
    },
    {
      schoolName: "Texas A&M University-Kingsville",
      logo: "texas-am-kingsville.png",
      description: "Full athletic scholarship",
    },
  ];

  return (
    <VStack
      spacing={10}
      p={6}
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={12}
    >
      <Heading fontSize="3xl" fontWeight="medium" color="#F28C28" fontFamily="'Coda', system-ui" mb="5">
        Scholarship Offers
      </Heading>
      <Flex
        direction="column" // Stack items vertically
        alignItems="center"
        width="100%"
      >
        {offers.map((offer, index) => (
          <MotionBox
            key={index}
            w={{ base: '90%', md: '500px' }}
            h="150px"
            minW="320px"
            m="5"
            bgColor="#ebebeb"
            bgImage="linear-gradient(-45deg, #ebebeb 25%, transparent 25%, transparent 50%, #ebebeb 50%, #ebebeb 75%, transparent 75%, transparent)"
            bgSize="1px 1px"
            borderRadius="12px"
            borderWidth="5px"
            borderColor="#F28C28"
            boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
            p={4}
            display="flex"
            alignItems="center"
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          >
            <Image
              src={offer.logo}
              alt={`${offer.schoolName} logo`}
              boxSize="80px"
              objectFit="contain"
              borderRadius="8px"
              mr={4}
            />
            <Box>
              <Text color="#000000" fontWeight="bold" fontFamily="'Coda', system-ui" fontSize="lg">
                {offer.schoolName}
              </Text>
              <Text color="#000000" fontFamily="'Roboto+Condensed', system-ui" fontSize="md" fontWeight="semibold" mt={1}>
                {offer.description}
              </Text>
            </Box>
          </MotionBox>
        ))}
      </Flex>
    </VStack>
  );
}

export default Offers;
