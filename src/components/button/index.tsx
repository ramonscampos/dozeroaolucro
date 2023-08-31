import { AnchorHTMLAttributes } from 'react';
import styles from './button.module.scss';

interface AnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    title: string;
    children?: JSX.Element;
}

export const Button = ({ title, children, className, ...rest }: AnchorProps) => {
    return (
        <a className={`${styles.container} ${className}`} {...rest}>
            {title}
            {children}
        </a>
    )
}