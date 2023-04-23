import OrderFeed from '../../components/OrderFeed/OrderFeed';
import OrderWaiter from '../../components/OrderWaiter/OrderWaiter';
import style from './FeedPage.module.css'

const FeedPage = () => {
    return (
        <main className={style.BigPageContent}>
            <OrderFeed />
            <OrderWaiter />
        </main>
    );
};

export default FeedPage;