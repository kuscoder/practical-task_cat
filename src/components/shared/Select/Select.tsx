import { FC, useState } from 'react'
import { classNames } from 'utils/classNames'
import { useFocusOut } from 'hooks/useFocusOut'
import { SelectProps } from './Select.types'
import chevronDown from 'public/assets/chevron-down.svg'
import css from './Select.module.scss'

export const Select: FC<SelectProps> = ({ className, placeholder, value, setValue, options }) => {
   const [focus, setFocus] = useState(false)

   const container = useFocusOut<HTMLDivElement>(focus, () => {
      setFocus(false)
   })

   const chooseHandler = (value: string) => () => {
      setFocus(false)
      setValue(value)
   }

   return (
      <div className={classNames(className, css.select, { [css.focus]: focus })} ref={container}>
         <button className={classNames('focus-accent', css.value)} onFocus={() => setFocus(true)} type="button">
            {value && <span>{value}</span>}
            {!value && <span className={css.placeholder}>{placeholder}</span>}
            <img src={chevronDown} alt="chevronDown" />
         </button>

         <ul className={classNames('scroll-y', css.options)}>
            {options.map(option => (
               <li className={css.option} key={option.value}>
                  <button type="button" onClick={chooseHandler(option.value)}>
                     {option.label}
                  </button>
               </li>
            ))}

            {!options.length && <li className={css.empty}>Nothing was found</li>}
         </ul>
      </div>
   )
}
