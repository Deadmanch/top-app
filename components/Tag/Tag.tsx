import { TagProps } from './Tag.props';
import styles from './Tag.module.scss';
import cn from 'classnames';


export const Tag = ({size = 's', children,color = 'ghost',href, className, ...props}: TagProps):JSX.Element => {
	return (
		<div
		className ={cn(styles.tag, className,{
			[styles.s]: size == 's',
			[styles.m]: size == 'm',
			[styles.ghost]: color == 'ghost',
			[styles.red]: color == 'red',
			[styles.green]: color == 'green',
			[styles.grey]: color == 'grey',
			[styles.primary]: color == 'primary',
		})}
		{...props}
		>{
			href
			? <a>{children}</a>
			:<>{children}</>
		}
			
		</div>
	);
};