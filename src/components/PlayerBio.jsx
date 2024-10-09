/* eslint-disable react/prop-types */
import { Box, Text, VStack, Heading, Grid } from '@chakra-ui/react';

function PlayerBio({ frontImg, name, bioCategories }) {
  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={10}
      bgImage="url('/basketball.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={16} 
      mb={16} 
    >
      <Heading fontSize="2xl" color="#001f3f" fontFamily="'Audiowide', sans-serif">
        {name}
      </Heading>
      <Box
        w={{ base: '90%', md: '600px' }}
        h="500px" 
        borderRadius="12px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        overflow="hidden"
        mb={6} 
      >
        <Box
          bgImage={`url(${frontImg})`} 
          bgSize="cover"
          bgPosition="center"
          h="100%"
        />
      </Box>

      <Box
        w={{ base: '90%', md: '600px' }}
        bgColor="#00B2A9"
        bgImage="linear-gradient(-45deg, #001f3f 25%, transparent 25%, transparent 50%, #001f3f 50%, #001f3f 75%, transparent 75%, transparent)"
        bgSize="3px 3px;"
        borderRadius="12px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
      >
        <Grid gap={4}>
          {bioCategories.map((category, index) => (
            <Box key={index} p={3} bgColor="transparent" borderRadius="8px">
              <Text color="#F8F8F8" fontWeight="bold" fontFamily="'Audiowide', sans-serif" fontSize="lg">
                {category.title}
              </Text>
              <Text color="#F8F8F8" fontFamily="'Audiowide', sans-serif" mt={1}>
                {category.description}
              </Text>
            </Box>
          ))}
        </Grid>
      </Box>
    </VStack>
  );
}

function PlayerProfile() {
  const player = {
    frontImg: "../basketball-player.png",
    name: "Player Bio", 
    bioCategories: [
      {
        title: "Class",
        description: "2026"
      },
      {
        title: "Position",
        description: "SG"
      },
      {
        title: "Height",
        description: "6'3\""
      },
      {
        title: "Weight",
        description: "185 lbs"
      },
      {
        title: "Date of Birth",
        description: "January 15, 2007"
      },
      {
        title: "Place of Birth",
        description: "San Antonio, TX"
      },
      {
        title: "High School",
        description: "Steele High School"
      },
      {
        title: "Team",
        description: "Texas Hardwork"
      },
    ],
  };

  return <PlayerBio frontImg={player.frontImg} name={player.name} bioCategories={player.bioCategories} />;
}

export default PlayerProfile; 
