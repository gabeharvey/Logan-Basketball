/* eslint-disable react/prop-types */
import { Box, Text, VStack, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';

function VideoCard({ videoSrc, title, description }) {
  return (
    <Box w="300px" h="400px" mb="10px">
      <Box
        w="100%"
        h="100%"
        borderRadius="12px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        overflow="hidden"
        bgColor="#00B2A9"
        bgImage="linear-gradient(-45deg, #001f3f 25%, transparent 25%, transparent 50%, #001f3f 50%, #001f3f 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        display="flex"
        flexDirection="column"
      >
        <Box w="100%" h="70%">
          <video
            src={videoSrc}
            controls
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '12px 12px 0 0',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Box p={3} textAlign="center" bgColor="#001f3f" h="30%">
          <Text fontSize="lg" fontWeight="bold" color="#F8F8F8" fontFamily="'Coda', system-ui">
            {title}
          </Text>
          <Text mt={2} color="#F8F8F8" fontFamily="'Coda', system-ui">
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

function HoopsFilm() {
  const videos = [
    {
      videoSrc: "../video1.mp4",
      title: "Logan's Highlight Reel 1",
      description: "Top 10 plays of the season.",
    },
    {
      videoSrc: "../video2.mp4",
      title: "Logan's Training Session",
      description: "Intense off-season workout.",
    },
    {
      videoSrc: "../video3.mp4",
      title: "Logan's Game-Winning Shots",
      description: "Best clutch moments.",
    },
    {
      videoSrc: "../video4.mp4",
      title: "Logan's Defense Highlights",
      description: "Lockdown defensive plays.",
    },
    {
      videoSrc: "../video5.mp4",
      title: "Logan's Dunk Compilation",
      description: "Powerful dunks and finishes.",
    },
    {
      videoSrc: "../video6.mp4",
      title: "Logan's Passing Skills",
      description: "Amazing assists and playmaking.",
    },
    {
      videoSrc: "../video7.mp4",
      title: "Logan's All-Star Game",
      description: "Best moments from the All-Star game.",
    },
    {
      videoSrc: "../video8.mp4",
      title: "Logan's High School Highlights",
      description: "Top plays from High School career.",
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
      <Text fontSize="2xl" color="#001f3f" fontFamily="'Coda', system-ui" fontWeight="bold">
        Hoops Film
      </Text>
      <SimpleGrid columns={columns} spacing={{ base: 3, sm: 5 }} justifyItems="center">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            videoSrc={video.videoSrc}
            title={video.title}
            description={video.description}
          />
        ))}
      </SimpleGrid>
    </VStack>
  );
}

export default HoopsFilm;
