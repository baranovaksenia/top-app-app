// <Paragraph size='small'>Some Text</Paragraph>
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface ParagraphProps
	extends DetailedHTMLProps<
		HTMLAttributes<HTMLParagraphElement>,
		HTMLParagraphElement
	> {
	size?: 'small' | 'medium' | 'large'
	children: ReactNode
}
