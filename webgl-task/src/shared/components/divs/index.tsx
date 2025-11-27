import { forwardRef } from 'react';

import styles from './styles.module.css';

export interface IDivsProps {
    amount?: number;
}

const Divs = forwardRef<HTMLDivElement, IDivsProps>(({ amount = 7 }, ref) => {
    return (
        <div ref={ref} className={styles.container}>
            {
                [ ...Array(amount) ].map((item, index) => <div key={index} className={styles.item}></div>)
            }
        </div>
    );
});

export default Divs;