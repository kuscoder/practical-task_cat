import { FC, useState } from 'react'
import { classNames } from 'utils/classNames'
import { useFocusOut } from 'hooks/useFocusOut'
import { Flow } from '../Animations/Flow'
import { SelectProps } from './Select.types'
import chevronDown from 'public/assets/chevron-down.svg'
import css from './Select.module.scss'

export const Select: FC<SelectProps> = ({ className, placeholder, textIsEmpty, value, setValue, options }) => {
   const [focus, setFocus] = useState(false)

   const container = useFocusOut<HTMLDivElement>(focus, () => {
      setFocus(false)
   })

   const chooseHandler = (value: string) => () => {
      setFocus(false)
      setValue(value)
   }

   return (
      <div
         className={classNames(className, css.select, { [css.focus]: focus })}
         ref={container}
      >
         <button
            className={classNames('focus-accent', css.value)}
            onClick={() => setFocus(true)}
            type="button"
         >
            <span className={classNames({ [css.placeholder]: !value })}>{value || placeholder}</span>

            <img
               src={chevronDown}
               alt="chevronDown"
            />
         </button>

         <Flow
            type="fade"
            active={focus}
         >
            <ul className={classNames('scroll-y', css.options)}>
               {options.map(option => (
                  <li
                     className={classNames(css.option, { [css.choosed]: option.value === value })}
                     key={option.value}
                  >
                     <button
                        type="button"
                        onClick={chooseHandler(option.value)}
                     >
                        <span>{option.label}</span>
                     </button>
                  </li>
               ))}

               {!options.length && <li className={css.empty}>{textIsEmpty}</li>}
            </ul>
         </Flow>
      </div>
   )
}
