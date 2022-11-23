// <HTag tag='h1'>Some Text</HTag>
import { ReactNode } from 'react'

// interface который описывает входящие свойства
export interface HTagProps {
	tag: 'h1' | 'h2' | 'h3'
	children: ReactNode
}
