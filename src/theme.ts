import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
  }
}

const shadows = {
  // glass: '0px 8px 32px rgba(31, 38, 135, 0.37)'
  glass: '0px 8px 32px hsla(236, 63%, 33%, 0.37)'
}

const theme = extendTheme({ config, colors, shadows })

export default theme
