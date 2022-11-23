import cn from 'classnames'

import styles from './Paragraph.module.css'
import { ParagraphProps } from './Paragraph.props'

const Paragraph = ({
	size = 'medium',
	children,
	className,
	...props
}: ParagraphProps): JSX.Element => {
	return (
		<p
			className={cn(styles.p, className, {
				[styles.small]: size === 'small',
				[styles.medium]: size === 'medium',
				[styles.large]: size === 'large',
			})}
			{...props}
		>
			{children}
		</p>
	)
}
export default Paragraph
