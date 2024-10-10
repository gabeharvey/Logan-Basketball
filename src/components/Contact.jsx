import { Box, VStack, Heading, Input, Textarea, Button, Grid, FormControl, FormLabel } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion.create(Box);

function Contact() {
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
        Contact Us
      </Heading>
      
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
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Grid gap={4}>
          <FormControl id="name">
            <FormLabel color="#F8F8F8" fontWeight="bold" fontFamily="'Coda', system-ui">
              Name
            </FormLabel>
            <Input
              placeholder="Your Name"
              bgColor="#F8F8F8"
              color="#001f3f"
              borderRadius="8px"
              _placeholder={{ color: 'gray.500' }}
            />
          </FormControl>

          <FormControl id="email">
            <FormLabel color="#F8F8F8" fontWeight="bold" fontFamily="'Coda', system-ui">
              Email
            </FormLabel>
            <Input
              type="email"
              placeholder="Your Email"
              bgColor="#F8F8F8"
              color="#001f3f"
              borderRadius="8px"
              _placeholder={{ color: 'gray.500' }}
            />
          </FormControl>

          <FormControl id="message">
            <FormLabel color="#F8F8F8" fontWeight="bold" fontFamily="'Coda', system-ui">
              Message
            </FormLabel>
            <Textarea
              placeholder="Your Message"
              bgColor="#F8F8F8"
              color="#001f3f"
              borderRadius="8px"
              _placeholder={{ color: 'gray.500' }}
              rows={4}
            />
          </FormControl>

          <Button
            mt={4}
            bgColor="#B2FF8C"
            color="#001f3f"
            fontFamily="'Coda', system-ui"
            borderRadius="8px"
            _hover={{ bgColor: 'silver' }}
          >
            Submit
          </Button>
        </Grid>
      </MotionBox>
    </VStack>
  );
}

export default Contact;
