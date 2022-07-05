import { useRef, useState, useEffect } from 'react'

export const useHidenBar = ({ element } = {}) => {
  const [show, setShow] = useState(true)
  const [endPosition, setEndPosition] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      let startPosition = window.scrollY || window.document.documentElement.scrollTop;

      if (startPosition > endPosition) {
        setShow(false)
      } else {
        setShow(true)
      }
      setEndPosition(startPosition)
    })
  }, [endPosition])
  return {show, setShow}
}