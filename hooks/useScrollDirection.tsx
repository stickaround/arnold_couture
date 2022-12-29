import { useEffect } from 'react'

export enum ScrollDirection {
  Initial,
  Down,
  Up,
}

const useScrollDirection = (isMobileOnly = false, isMobile = false) => {
  useEffect(() => {
    const threshold = 10
    let lastScrollY = window.scrollY || 0

    let ticking = false
    const updateScrollDir = () => {
      const scrollY = window.scrollY || 0

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }

      // Used to tell if menu will show or not

      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    if ((isMobileOnly && isMobile) || !isMobileOnly) {
      window?.addEventListener('scroll', onScroll)
    }

    // Fallback for initial load

    return () => {
      window?.removeEventListener('scroll', onScroll)
    }
  }, [isMobileOnly, isMobile])
}

export default useScrollDirection
