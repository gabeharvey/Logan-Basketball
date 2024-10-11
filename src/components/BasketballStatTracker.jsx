import { Box, Text, VStack, Heading, Grid, Input, Button, FormControl, FormLabel } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);

function BasketballStatTracker() {
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
      mb={16}
    >
      <Heading fontSize="2xl" color="#001f3f" fontFamily="'Coda', system-ui">
        Basketball Stat Tracker
      </Heading>

      <MotionBox
        w={{ base: '90%', md: '600px' }}
        bgColor="#001f3f"
        borderRadius="12px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 5, ease: 'easeOut' }}
      >
        <Heading fontSize="lg" color="#F8F8F8" fontFamily="'Coda', system-ui" mb={4}>
          Game Stats
        </Heading>
        {games.length === 0 ? (
          <Text color="#F8F8F8">No games added yet.</Text>
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
        bgColor="#00B2A9"
        bgImage="linear-gradient(-45deg, #001f3f 25%, transparent 25%, transparent 50%, #001f3f 50%, #001f3f 75%, transparent 75%, transparent)"
        bgSize="1px 1px"
        borderRadius="12px"
        boxShadow="0 0 15px rgba(0, 0, 0, 0.7)"
        p={6}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 5, ease: 'easeOut' }}
      >
        <VStack spacing={4} align="stretch">
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Coda', system-ui">
              Team
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#001f3f"
              value={gameInfo.team}
              name="team"
              onChange={handleGameInfoChange}
              placeholder="Enter team name"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Coda', system-ui">
              Opponent
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#001f3f"
              value={gameInfo.opponent}
              name="opponent"
              onChange={handleGameInfoChange}
              placeholder="Enter opponent name"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Coda', system-ui">
              Date
            </FormLabel>
            <Input
              type="date"
              bgColor="#FFFFFF"
              color="#001f3f"
              value={gameInfo.date}
              name="date"
              onChange={handleGameInfoChange}
              placeholder="Enter game date"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Coda', system-ui">
              Points
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#001f3f"
              value={stats.points}
              name="points"
              onChange={handleInputChange}
              placeholder="Enter points"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Coda', system-ui">
              Assists
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#001f3f"
              value={stats.assists}
              name="assists"
              onChange={handleInputChange}
              placeholder="Enter assists"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Coda', system-ui">
              Rebounds
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#001f3f"
              value={stats.rebounds}
              name="rebounds"
              onChange={handleInputChange}
              placeholder="Enter rebounds"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Coda', system-ui">
              Steals
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#001f3f"
              value={stats.steals}
              name="steals"
              onChange={handleInputChange}
              placeholder="Enter steals"
            />
          </FormControl>
          <FormControl>
            <FormLabel color="#F8F8F8" fontFamily="'Coda', system-ui">
              Blocks
            </FormLabel>
            <Input
              bgColor="#FFFFFF"
              color="#001f3f"
              value={stats.blocks}
              name="blocks"
              onChange={handleInputChange}
              placeholder="Enter blocks"
            />
          </FormControl>
          <Button
            onClick={handleAddGame}
            mt={4}
            bgColor="#B2FF8C"
            color="#001f3f"
            fontFamily="'Coda', system-ui"
            borderRadius="8px"
            _hover={{ bgColor: 'silver' }}
          >
            Add Game
          </Button>
        </VStack>
      </MotionBox>
    </VStack>
  );
}

export default BasketballStatTracker;
