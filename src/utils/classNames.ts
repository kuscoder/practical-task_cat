type AvailableTypes = string | number | boolean | null | undefined

type AvailableTypesObject = {
   [key: string]: AvailableTypes
}

type ListType = (AvailableTypes | AvailableTypesObject)[]

export function classNames(...list: ListType): string | undefined {
   const classList: string[] = []

   list.forEach(item => {
      if (!item) return

      if (typeof item === 'object') {
         for (const key in item) {
            if (item[key]) {
               classList.push(key)
            }
         }
      } else {
         classList.push(String(item))
      }
   })

   return classList.length ? classList.join(' ') : undefined
}
