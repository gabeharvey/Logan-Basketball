import { Box, VStack, Heading, Flex, Link } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function Media() {
  const mediaArticles = [
    {
      title: "Logan Gonzalez to Compete at 2020 NBA All-Star Hot Shot Competition",
      url: "https://news4sanantonio.com/sports/san-antonio-teen-set-to-compete-at-2020-nba-all-star-hot-shot-competition",
    },
    {
      title: "Logan Gonzalez Finishes Strong at NBA All-Star Hot Shot Competition",
      url: "https://news4sanantonio.com/sports/spurs-zone/san-antonios-lone-rep-at-nba-all-star-hot-shot-competition-finishes-strong",
    },
  ];

  return (
    <VStack spacing={10} p={6} mt={12} align="center"> 
      <Heading fontSize="3xl" fontWeight="medium" color="#F28C28" fontFamily="'Coda', system-ui" mb="5">
        Media Coverage
      </Heading>
      <Flex direction="column" alignItems="center" width="100%">
        {mediaArticles.map((article, index) => (
          <MotionBox
            key={index}
            w={{ base: '90%', md: '500px' }}
            h="80px"
            m="5"
            bgColor="#ebebeb"
            borderRadius="12px"
            borderWidth="2px"
            borderColor="#F28C28"
            boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
            p={4}
            display="flex"
            alignItems="center"
            initial={{ scale: 0.9, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: 'easeOut' }}
          >
            <Link
              href={article.url}
              isExternal
              color="#000000"
              fontWeight="bold"
              fontSize="lg"
              _hover={{ color: '#e47608', textDecoration: 'underline' }}
            >
              {article.title}
            </Link>
          </MotionBox>
        ))}
      </Flex>
    </VStack>
  );
}

export default Media;
