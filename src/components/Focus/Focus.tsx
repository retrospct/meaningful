import React from 'react'
import { Box, BoxProps, Heading, Progress } from '@chakra-ui/react'

interface FocusProps extends BoxProps {
  title: string
  progress: number
  total: number
}

export const Focus = (props: FocusProps) => {
  return (
    <Box>
      <Heading size="md" textAlign="left">
        {props.title}
      </Heading>
      <Progress value={(props.progress / props.total) * 100} />
    </Box>
  )
}
