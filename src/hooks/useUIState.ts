import { useCallback, useState } from 'react'

function useUIState() {
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false)

  const openAccountModal = useCallback(() => {
    setIsAccountModalOpen(true)
  }, [])

  const closeAccountModal = useCallback(() => {
    setIsAccountModalOpen(false)
  }, [])

  return {
    isAccountModalOpen,
    openAccountModal,
    closeAccountModal,
  }
}

export default useUIState
