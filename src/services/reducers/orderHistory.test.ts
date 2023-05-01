import { testData } from '../../utils/test-utils';
import { initialState, orderHistoryReducer } from '../reducers/orderHistory';
import { wsMessageOrder } from '../actions/orderHistoryActions';


describe('history reducer', () => {
	it('should return initial state', () => {
		expect(orderHistoryReducer(undefined, { type: '' })).toEqual(initialState);
	});

	it('should hanlde wsMessageOrder action', () => {
		expect(
			orderHistoryReducer(initialState, {
				type: wsMessageOrder.type,
				payload: testData
			})
		).toEqual({
			...initialState,
			data: testData
		});
	}); 
});