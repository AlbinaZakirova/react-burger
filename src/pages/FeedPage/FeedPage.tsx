import styles from './FeedPage.module.css'
import OrderFeed from '../../components/OrderFeed/OrderFeed';
import OrderWaiter from '../../components/OrderWaiter/OrderWaiter';
import { useEffect } from 'react';
import { useAppDispatch } from '../../utils/hooks';
import { wsConnectFeed, wsDisconnectFeed } from '../../services/actions/feedActions';
import { BURGER_API_WSS_FEED } from '../../utils/api';

const FeedPage = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(wsConnectFeed({ wsUrl: BURGER_API_WSS_FEED, withTokenRefresh: false }))
    return () => {
      dispatch(wsDisconnectFeed())
    }
  }, []);

  return (
    <main className={styles.feedPage__container}>
      <OrderFeed />
      <OrderWaiter />
    </main>
  );
};

export default FeedPage;  