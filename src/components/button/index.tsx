import { ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    title: string;
    children?: JSX.Element;
}

export const Button = ({ title, children, className, ...rest }: ButtonProps) => {
    return (
        <button className={`${styles.container} ${className}`} {...rest}>
            {title}
            {children}
        </button>
    )
}