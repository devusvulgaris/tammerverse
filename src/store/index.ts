import { create } from 'zustand'

const useStore = create((set) => ({
  modalOpen: false,
  openModal: () => set({ modalOpen: true }),
  closeModal: () => set({ modalOpen: false })
}))

export default useStore
