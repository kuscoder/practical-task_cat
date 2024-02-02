import { Children } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { FlowTypes, FlowProps, FlowGroupProps } from './Flow.types'
import './Flow.scss'

const timeouts: Record<FlowTypes, number> = {
   'fade': 400,
   'flow-top': 400,
   'flow-left': 400,
   'flow-bottom': 400,
   'flow-right': 400
}

// Wrapper for animating a single element
export const Flow = ({ type, active, children }: FlowProps) => (
   <CSSTransition
      in={active}
      classNames={type}
      timeout={timeouts[type]}
      mountOnEnter={true}
      unmountOnExit={true}
   >
      {children}
   </CSSTransition>
)

// Wrapper for animating a list of items
export const FlowGroup = ({ className, type, style, children }: FlowGroupProps) => (
   <TransitionGroup
      className={className}
      style={style}
   >
      {Children.map(children, child => (
         <CSSTransition
            classNames={type}
            timeout={timeouts[type]}
         >
            {child}
         </CSSTransition>
      ))}
   </TransitionGroup>
)
