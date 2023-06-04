import {useRef, useEffect} from 'react'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text
} from '@chakra-ui/react'

export default function Info() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  useEffect(() => {
    return () => {
      onClose()
    }
  }, [])

  return (
    <>
      <Button ref={btnRef} color="white" bgGradient='linear(to-r, #cc2b5e, #753a88)' onClick={onOpen} position="fixed" zIndex={100}>
        Info
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader> Outotec 6 axis robotic arm</DrawerHeader>

          <DrawerBody textAlign="center">
            <Text>
              This robotic arm is widely used in manufacturing.
              It is operating on various conveyer lines for various industries.
            </Text>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' borderColor="purple.500" mr={3} onClick={onClose}>
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}