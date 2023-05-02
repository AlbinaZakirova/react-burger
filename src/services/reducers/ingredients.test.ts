import { testBun, testIngredient } from '../../utils/test-utils';
import {
	fetchIngredients,
	ingredientSlice,
	initialState
} from '../reducers/ingredients';

describe('ingredientSlice reducer', () => {
	it('should return initial state', () => {
		expect(ingredientSlice.reducer(initialState, { type: '' })).toEqual(
			initialState
		);
	});

	it('should hanlde ingredientSlice fulfilled', () => {
		expect(
			ingredientSlice.reducer(initialState, {
				payload: [testBun, testIngredient],
				type: fetchIngredients.fulfilled
			})
		).toEqual({
			...initialState,
			data: [testBun, testIngredient],
			isLoading: false
		});
	});  

	it('should hanlde ingredientSlice pending', () => {
		expect(
			ingredientSlice.reducer(initialState, {
				type: fetchIngredients.pending
			})
		).toEqual({
			...initialState,
			isLoading: true,
			error: null
		});
	});

	it('should hanlde ingredientSlice rejected', () => {
		expect(
			ingredientSlice.reducer(initialState, {
				payload: 'error',
				type: fetchIngredients.rejected
			})
		).toEqual({
			...initialState,
			isLoading: false,
			'error': 'error' 
		});
	});
});  