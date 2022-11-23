import cn from 'classnames'

import styles from './Button.module.css'
import { ButtonProps } from './Button.props'

// вытаскиваем пропсы явно, остальные помещаем в переменную props (onClick...)
const Button = ({
	appearance,
	children,
	className,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance === 'primary',
				[styles.ghost]: appearance === 'ghost',
			})}
			{...props}
		>
			{children}
		</button>
	)
}

export default Button
// cn - function as arguments pass classes with , or object with condition
