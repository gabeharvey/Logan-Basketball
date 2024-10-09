/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { useState } from 'react';

function Card({ frontImg, name, bio, flipSound }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    flipSound.play();
    setFlipped(!flipped);
  };

  return (
    <Box w="300px" h="400px" perspective="1000px" mb="10px">
      <Box
        w="100%"
        h="100%"
        position="relative"
        style={{ transformStyle: 'preserve-3d' }}
        transition="transform 0.6s"
        transform={flipped ? 'rotateY(180deg)' : 'rotateY(0deg)'}
        onClick={handleFlip}
      >
        <Box
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        >
          <Box
            bgImage={`url(${frontImg})`}
            bgSize="cover"
            bgPosition="center"
            borderRadius="12px"
            w="100%"
            h="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
          ></Box>
        </Box>
        <Box
          bgColor="#00B2A9"
          bgImage="linear-gradient(-45deg, #001f3f 25%, transparent 25%, transparent 50%, #001f3f 50%, #001f3f 75%, transparent 75%, transparent)"
          bgSize="3px 3px;"
          position="absolute"
          style={{ backfaceVisibility: 'hidden' }}
          w="100%"
          h="100%"
          borderRadius="12px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
          transform="rotateY(180deg)"
          p={5}
        >
          <Text fontSize="2xl" fontWeight="bold" color="#F8F8F8" fontFamily="'Audiowide', sans-serif">
            {name}
          </Text>
          <Text mt={4} color="#F8F8F8" fontFamily="'Audiowide', sans-serif" fontWeight="bold">
            Player Bio: {bio}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function PlayerCards() {
  const flipSound = new Audio('/card-flip.mp3');

  const players = [
    {
      frontImg: "../football-player.png",
      name: "Logan Gonzalez",
      bio: "Logan Gonzalez is a sharpshooter, with an average of 45% from three-point range, making him a dangerous player on the perimeter."
    },
    {
      frontImg: "../gym-athlete.png",
      name: "Logan Gonzalez",
      bio: "Logan Gonzalez is known for his explosive first step, allowing him to drive past defenders with ease."
    },
    {
      frontImg: "../basketball-player1.png",
      name: "Logan Gonzalez",
      bio: "Logan Gonzalez has a remarkable basketball IQ, enabling him to read defenses and make smart decisions on the court."
    },
    {
      frontImg: "../basketball-player2.png",
      name: "Logan Gonzalez",
      bio: "Logan Gonzalez excels in transition, averaging over 15 fast break points per game."
    },
    {
      frontImg: "../basketball-player3.png",
      name: "Logan Gonzalez",
      bio: "Logan Gonzalez has shown impressive defensive skills, regularly locking down the opponent's best scorer."
    },
    {
      frontImg: "../basketball-player4.png",
      name: "Logan Gonzalez",
      bio: "Logan Gonzalez possesses exceptional ball-handling skills, often leaving defenders off balance."
    },
    {
      frontImg: "../basketball-player5.png",
      name: "Logan Gonzalez",
      bio: "Logan Gonzalez is known for his clutch performances, scoring an average of 20 points in the fourth quarter."
    },
    {
      frontImg: "../basketball-player6.png",
      name: "Logan Gonzalez",
      bio: "Logan Gonzalez has developed a reliable mid-range jump shot, adding versatility to his offensive game."
    },
  ];

  const columns = useBreakpointValue({ base: 1, sm: 1, md: 2, lg: 3, xl: 4 });

  return (
    <VStack
      spacing={8}
      align="center"
      justify="center"
      p={{ base: 5, md: 10 }}
      bgImage="url('/basketball.png')"
      bgSize="contain"
      bgPosition="center"
      bgRepeat="no-repeat"
      mt={{ base: 12, md: 16 }} 
      mb={{ base: 12, md: 16 }} 
    >
      <Text fontSize="2xl" color="#F8F8F8" fontFamily="'Audiowide', sans-serif" fontWeight="bold">
        Click on Card
      </Text>
      <SimpleGrid
        columns={columns}
        spacing={{ base: 3, sm: 5 }} 
        justifyItems="center"
      >
        {players.map((player, index) => (
          <Card 
            key={index} 
            frontImg={player.frontImg} 
            name={player.name} 
            bio={player.bio}
            flipSound={flipSound} 
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default PlayerCards;
