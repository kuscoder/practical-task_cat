type AvailableTypes = string | number | boolean | null | undefined

type AvailableTypesObject = {
   [key: string]: AvailableTypes
}

type ListType = (AvailableTypes | AvailableTypesObject)[]

// Takes any number of arguments which can be a string or object.
// The argument 'active' is short for { active: true }.
// If the value associated with a given key is falsy, that key wont be included in the output.
// Returns string of classes or undefined
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
