import { useRef, useEffect } from 'react'

export function useFocusOut<E extends HTMLElement>(focus: boolean, callback: () => void): React.RefObject<E> {
   const element = useRef<E>(null)

   useEffect(() => {
      const onOutAction = (e: Event) => {
         if (focus && element.current && !element.current.contains(e.target as Node)) {
            callback()
         }
      }

      document.addEventListener('click', onOutAction)
      document.addEventListener('focusin', onOutAction)

      return () => {
         document.removeEventListener('click', onOutAction)
         document.removeEventListener('focusin', onOutAction)
      }
   }, [focus]) // eslint-disable-line

   return element
}
