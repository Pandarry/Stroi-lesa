import styles from '/styles/OrderBtn.module.scss';

export function OrderBtn({ children, style, title }) {
    return (
        <button className={style ? `${styles.AnotherOrderBtn}` : `${styles.OrderBtn}`}>
            {title ? title : children}
        </button>
    );
}
