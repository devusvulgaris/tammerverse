import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text
} from '@chakra-ui/react'
import {shallow} from 'zustand/shallow'
import Link from 'next/link'

import useStore from '@/store'

export function InfoModal() {
  const [isOpen, onOpen, onClose] = useStore(store => [store.modalOpen, store.openModal, store.closeModal], shallow)

  console.log('---is open', isOpen)
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Metso Outotec Metals</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Metso is a frontrunner in sustainable technologies, end-to-end solutions and services for aggregates, mining, metals refining and recycling industries.</Text>
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button as={Link} href="/scene" color="white" bgGradient='linear(to-r, #cc2b5e, #753a88)'>Visit 3D scene</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
