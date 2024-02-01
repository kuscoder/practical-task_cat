export type FlowTypes = 'fade' | 'flow-top' | 'flow-left' | 'flow-bottom' | 'flow-right'

export interface FlowProps {
   type: FlowTypes
   active: boolean
   children: React.ReactElement
}

export interface FlowGroupProps {
   className?: string
   type: FlowTypes
   style?: React.CSSProperties
   children: React.ReactElement | React.ReactElement[]
}
