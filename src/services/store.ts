import { configureStore } from '@reduxjs/toolkit'
import constructor from './reducers/constructor';
import currentIngredient from './reducers/currentIngredient';
import ingredients from './reducers/ingredients';
import order from './reducers/order';
import user from "./reducers/user";
import { feedReducer } from './reducers/feed';
import { orderHistoryReducer } from './reducers/orderHistory';
import {
  wsCloseFeed,
  wsConnectFeed,
  wsConnectingFeed,
  wsDisconnectFeed,
  wsErrorFeed, wsMessageFeed,
  wsOpenFeed
} from "./actions/feedActions";
import {
  wsCloseOrder,
  wsConnectingOrder,
  wsConnectOrder,
  wsDisconnectOrder, wsErrorOrder, wsMessageOrder,
  wsOpenOrder
} from "./actions/orderHistoryActions";
import {socketMiddleware} from "./middleware/socketMiddleware";



const wsActionsFeed = {
  wsConnect: wsConnectFeed,
  wsDisconnect: wsDisconnectFeed,
  wsConnecting: wsConnectingFeed,
  wsOpen: wsOpenFeed,
  wsClose: wsCloseFeed,
  wsError: wsErrorFeed,
  wsMessage: wsMessageFeed
}

const wsActionsOrder = {
  wsConnect: wsConnectOrder,
  wsDisconnect: wsDisconnectOrder,
  wsConnecting: wsConnectingOrder,
  wsOpen: wsOpenOrder,
  wsClose: wsCloseOrder,
  wsError: wsErrorOrder,
  wsMessage: wsMessageOrder,
}

const websocketOrderMiddleware = socketMiddleware(wsActionsOrder);
const websocketFeedMiddleware = socketMiddleware(wsActionsFeed);

export const store = configureStore({
  reducer: {
    ingredientsStore: ingredients,
    constructorStore: constructor,
    currentIngredientStore: currentIngredient,
    orderStore: order,
    userStore: user,
    feedStore: feedReducer,
    orderHistoryStore: orderHistoryReducer 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(websocketOrderMiddleware, websocketFeedMiddleware)
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
