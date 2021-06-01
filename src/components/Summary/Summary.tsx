import React from 'react'
import { Box, CircularProgress, CircularProgressLabel, BoxProps } from '@chakra-ui/react'

interface SummaryProps extends BoxProps {
  progress?: number
}
export const Summary = (props: SummaryProps) => {
  return (
    <Box>
      <CircularProgress value={props.progress || 0} color="teal.500" size="220px" thickness="10px">
        <CircularProgressLabel>{`${props.progress || 0}%`}</CircularProgressLabel>
      </CircularProgress>
    </Box>
  )
}
