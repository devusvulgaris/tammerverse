'use client'
import { IconButton, useColorMode, Box, Link, Flex } from '@chakra-ui/react'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const NavigationRight = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  console.log('colorMode', colorMode)
  const colorModeIcon = colorMode === 'light' ? faMoon : faSun
  return (
    <Flex>
      <IconButton aria-label='Change color mode' icon={<FontAwesomeIcon icon={colorModeIcon} />} onClick={toggleColorMode} />
    </Flex>
  )
}

export default NavigationRight
