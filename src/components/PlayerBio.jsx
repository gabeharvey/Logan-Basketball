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
      <Heading fontSize="4xl" color="#F8F8F8" fontFamily="'Audiowide', sans-serif">
        {name}
      </Heading>
      <Box
        w={{ base: '90%', md: '600px' }}
        bgColor="#B0E0E6"
        bgImage="linear-gradient(-45deg, #001f3f 25%, transparent 25%, transparent 50%, #001f3f 50%, #001f3f 75%, transparent 75%, transparent)"
        bgSize="5px 5px;"
        borderRadius="12px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
      >
        <Box
          bgImage={`url(${frontImg})`}
          bgSize="cover"
          bgPosition="center"
          borderRadius="12px"
          w="100%"
          h="300px"
          mb={6}
        ></Box>
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
        title: "Shooting",
        description: "Logan Gonzalez is a sharpshooter, with an average of 45% from three-point range, making him a dangerous player on the perimeter."
      },
      {
        title: "Speed",
        description: "Known for his explosive first step, Logan can drive past defenders with ease, making him a key asset in transition plays."
      },
      {
        title: "Basketball IQ",
        description: "Logan's understanding of the game is exceptional, allowing him to read defenses and make smart decisions on the court."
      },
      {
        title: "Clutch Performance",
        description: "Logan has a history of delivering in high-pressure situations, with several game-winning shots under his belt."
      },
      {
        title: "Defense",
        description: "With strong defensive skills, Logan often takes on the challenge of guarding the opponent’s best player."
      },
      {
        title: "Leadership",
        description: "As a team captain, Logan inspires his teammates with his work ethic and commitment to the game."
      },
    ],
  };

  return <PlayerBio frontImg={player.frontImg} name={player.name} bioCategories={player.bioCategories} />;
}

export default PlayerProfile;
