export interface Option {
   value: string
   label: string
}

export interface SelectProps {
   className?: string
   placeholder?: string
   value: string | null
   setValue: (value: string) => void
   options: Option[]
}
