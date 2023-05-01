import { testOrder } from '../../utils/test-utils';
import {
	orderSlice,
	initialState,
	sendOrder
} from './order';

describe('orderSlice reducer', () => {
	it('should return initial state', () => {
		expect(orderSlice.reducer(initialState, { type: '' })).toEqual(
			initialState
		);
	});

	it('should hanlde sendOrder fulfilled', () => {
		expect(
			orderSlice.reducer(initialState, {
				payload: testOrder,
				type: sendOrder.fulfilled
			})
		).toEqual({
       ...initialState, 
       orderData: testOrder, 
       isLoading: false 
    });
	}); 

	it('should return sendOrder pending', () => {
		expect(
			orderSlice.reducer(initialState, {
				payload: testOrder,
				type: sendOrder.pending
			})
		).toEqual({ 
      ...initialState, 
      isLoading: true, 
      error: null 
    });
	});

	it('should return sendOrder rejected', () => {
		const testError = { message: 'Error occurred' };
		expect(
			orderSlice.reducer(initialState, {
				payload: testError,
				type: sendOrder.rejected
			})
		).toEqual({ 
			...initialState, 
			error: testError,
			isLoading: false
		});
	});

});  