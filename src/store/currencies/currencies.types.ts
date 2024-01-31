export interface Currency {
   id: string
   name: string
}

export interface CurrenciesState {
   list: Currency[]
   choosedId: Currency['id'] | null
}
