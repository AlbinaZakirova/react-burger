import styles from './FeedPage.module.css'
import OrderFeed from '../../components/OrderFeed/OrderFeed';
import OrderWaiter from '../../components/OrderWaiter/OrderWaiter';

const FeedPage = () => {
  return (
    <main className={styles.feedPage__container}>
      <OrderFeed />
      <OrderWaiter />
    </main>
  );
};

export default FeedPage; 