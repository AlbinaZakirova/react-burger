import React from 'react';
import styles from './pages.module.css'
import OrderFeed from '../../components/OrderFeed/OrderFeed';
import OrderWaiter from '../../components/OrderWaiter/OrderWaiter';

const FeedPage = () => {
    return (
        <main className={styles.BigPageContent}>
            <OrderFeed />
            <OrderWaiter />
        </main>
    );
};

export default FeedPage;