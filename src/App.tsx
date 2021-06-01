import React, { useState } from 'react'
import { Box, VStack, Grid, Flex, Spacer, Heading, Button } from '@chakra-ui/react'

import { ColorModeSwitcher } from './ColorModeSwitcher'
import { Summary } from './components/Summary/Summary'
import { Focus } from './components/Focus/Focus'

const initialFocuses = [
  { title: 'Wellness', progress: 1800, total: 3600 },
  { title: 'Hobbies', progress: 0, total: 3600 },
  { title: 'Work', progress: 7200, total: 7200 },
  { title: 'Core', progress: 3600, total: 7200 },
  { title: 'Family', progress: 1968, total: 3600 }
]

export const App = () => {
  const [focuses, setFocuses] = useState(initialFocuses)

  const addFocus = () => setFocuses((prev) => [...prev, { title: 'Another', progress: 3000, total: 3600 }])

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3} templateRows="60px 1fr">
        <Flex>
          <Box p="2">
            <Heading size="md">Progress</Heading>
          </Box>
          <Spacer />
          <Box>
            <ColorModeSwitcher />
          </Box>
        </Flex>
        <VStack spacing={8}>
          <Summary progress={25} />
          <Box w="100%">
            {focuses.map((focus, i) => (
              <Focus key={`${focus.title}-${i}`} title={focus.title} progress={focus.progress} total={focus.total} />
            ))}
          </Box>
          <Button onClick={addFocus}>Add Focus</Button>
        </VStack>
      </Grid>
    </Box>
  )
}

// {/* <Logo h="40vmin" pointerEvents="none" />
// <Text>
//   Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
// </Text>
// <Link color="brand.700" href="https://chakra-ui.com" fontSize="2xl" target="_blank" rel="noopener noreferrer">
//   Learn Chakra
// </Link> */}
