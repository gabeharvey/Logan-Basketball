import { Box, Text, VStack, Heading, Grid, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);

function StatTracker() {
  const [stats, setStats] = useState({
    points: '',
    assists: '',
    rebounds: '',
    steals: '',
    blocks: '',
  });

  const [gameInfo, setGameInfo] = useState({
    team: '',
    opponent: '',
    date: '',
  });

  const [games, setGames] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStats((prevStats) => ({
      ...prevStats,
      [name]: value,
    }));
  };

  const handleGameInfoChange = (e) => {
    const { name, value } = e.target;
    setGameInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleAddGame = () => {
    setGames([...games, { ...gameInfo, ...stats }]);
    setStats({
      points: '',
      assists: '',
      rebounds: '',
      steals: '',
      blocks: '',
    });
    setGameInfo({
      team: '',
      opponent: '',
      date: '',
    });
  };

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
    >
      <Heading fontSize="3xl" fontWeight="medium" color="#F28C28" fontFamily="'Coda', system-ui">
        Game Stat Tracker
      </Heading>

      <MotionBox
        w={{ base: '90%', md: '600px' }}
        bgColor="#F8F8F8"
        borderRadius="12px"
        borderColor="#38393d"
        borderWidth="5px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 5, ease: 'easeOut' }}
      >
        <Heading fontSize="lg" color="#000000" fontFamily="'Coda', system-ui" mb={4}>
          Player Stats:
        </Heading>
        {games.length === 0 ? (
          <Text color="#000000">No games added yet.</Text>
        ) : (
          <Grid gap={4}>
            {games.map((game, index) => (
              <Box key={index} p={3} bgColor="transparent" borderRadius="8px">
                <Text color="#F8F8F8" fontWeight="bold" fontFamily="'Coda', system-ui">
                  Game {index + 1} - Logan Gonzalez:
                </Text>
                <Text color="#F8F8F8">Team: {game.team}</Text>
                <Text color="#F8F8F8">Opponent: {game.opponent}</Text>
                <Text color="#F8F8F8">Date: {game.date}</Text>
                <Text color="#F8F8F8">Points: {game.points}</Text>
                <Text color="#F8F8F8">Assists: {game.assists}</Text>
                <Text color="#F8F8F8">Rebounds: {game.rebounds}</Text>
                <Text color="#F8F8F8">Steals: {game.steals}</Text>
                <Text color="#F8F8F8">Blocks: {game.blocks}</Text>
              </Box>
            ))}
          </Grid>
        )}
      </MotionBox>

      <MotionBox
        w={{ base: '90%', md: '600px' }}
        bgColor="#A9A9A9"
        bgImage="linear-gradient(-45deg, #38393d 25%, transparent 25%, transparent 50%, #38393d 50%, #38393d 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        borderRadius="12px"
        borderColor="#F28C28"
        borderWidth="4px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 5, ease: 'easeOut' }}
      >
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Coda', system-ui" fontSize="lg">
              Team
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={gameInfo.team}
              name="team"
              onChange={handleGameInfoChange}
              placeholder="Enter team name"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Coda', system-ui" fontSize="lg">
              Opponent
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={gameInfo.opponent}
              name="opponent"
              onChange={handleGameInfoChange}
              placeholder="Enter opponent name"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Coda', system-ui" fontSize="lg">
              Date
            </FormLabel>
            <Input
              type="date"
              bgColor="#FFFFFF"
              color="#38393d"
              value={gameInfo.date}
              name="date"
              onChange={handleGameInfoChange}
              placeholder="Enter game date"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Coda', system-ui" fontSize="lg">
              Points
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.points}
              name="points"
              onChange={handleInputChange}
              placeholder="Enter points"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Coda', system-ui" fontSize="lg">
              Assists
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.assists}
              name="assists"
              onChange={handleInputChange}
              placeholder="Enter assists"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Coda', system-ui" fontSize="lg">
              Rebounds
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.rebounds}
              name="rebounds"
              onChange={handleInputChange}
              placeholder="Enter rebounds"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Coda', system-ui" fontSize="lg">
              Steals
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.steals}
              name="steals"
              onChange={handleInputChange}
              placeholder="Enter steals"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Coda', system-ui" fontSize="lg">
              Blocks
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#38393d"
              value={stats.blocks}
              name="blocks"
              onChange={handleInputChange}
              placeholder="Enter blocks"
            />
          </FormControl>
          <Button
            onClick={handleAddGame}
            mt={4}
            bgColor="#000000"
            maxW="50%"
            minW="45%"
            color="#F8F8F8"
            fontFamily="'Coda', system-ui"
            fontWeight="medium"
            fontSize="xl"
            borderRadius="8px"
            borderColor="#000000"
            borderWidth="3px"
            _hover={{ borderColor: '#F8F8F8' }}
          >
            Add Game
          </Button>
        </VStack>
      </MotionBox>
    </VStack>
  );
}

export default StatTracker;
