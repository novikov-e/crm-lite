import {FC, ReactNode} from 'react'

interface ServicesPropsType {
  children?: ReactNode
  
}

export const Services: FC<ServicesPropsType> = ({children, }) => {
  return <div>Services component</div>
}
