import { testData } from '../../utils/test-utils';
import { initialState } from '../reducers/orderHistory';
import { feedReducer } from './feed';
import { wsMessageFeed } from '../actions/feedActions';


describe('feed reducer', () => {
	
	it('should return initial state', () => {
		expect(feedReducer(undefined, { type: '' })).toEqual(initialState);
	});

	it('should hanlde wsMessageFeed action', () => {
		expect(
			feedReducer(initialState, {
				type: wsMessageFeed.type,
				payload: testData
			})
		).toEqual({
			...initialState,
			data: testData
		});
	});
});