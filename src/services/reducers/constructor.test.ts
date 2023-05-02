import { testBun, testIngredient } from '../../utils/test-utils';

import { addConstructor, clearConstructor, constructorSlice, initialState, moveElement, removeConstructor } from './constructor';

describe('burger-constructor reducer', () => {
	it('should handle addConstructor for bun', () => {
		expect(
			constructorSlice.reducer(initialState, {
				type: addConstructor.type,
				payload: { ...testBun, type: 'bun' }
			})
		).toEqual({
			...initialState,
			bun: { ...testBun, uuid: expect.any(String) }
		});
	});

	it('should handle addConstructor for ingredient', () => { 
		expect(
			constructorSlice.reducer(initialState, {
				type: addConstructor.type,
				payload: { ...testIngredient, type: 'sauce' }
			})
		).toEqual({
			...initialState,
			ingredients: [{ ...testIngredient, type: 'sauce', uuid: expect.any(String) }]
		});
	});

	it('should hanlde removeConstructor', () => {
		expect(
			constructorSlice.reducer(initialState, {
				type: removeConstructor.type,
				payload: testIngredient
			})
		).toEqual(initialState);
	});
 
  it('should hanlde clearConstructor', () => {
		expect(
			constructorSlice.reducer(initialState, {
				type: clearConstructor.type,
        bun: null
			})
		).toEqual(initialState);
	});

	it('should hanlde moveElement (start < end)', () => {
		const expectedResult = [testBun, testIngredient];
		const ingredients = [testIngredient, testBun];
		expect(
			constructorSlice.reducer(
				{ ...initialState, ingredients },
				{
					type: moveElement.type,
					payload: [0, 1]
				}
			)
		).toEqual({ ...initialState, ingredients: expectedResult });
	});

	it('should hanlde moveElement (start === end)', () => {
		const ingredients = [testIngredient, testBun];
		expect(
			constructorSlice.reducer(
				{ ...initialState, ingredients },
				{
					type: moveElement.type,
					payload: [1, 1]
				}
			)
		).toEqual({ ...initialState, ingredients: ingredients });
	});
	it('should hanlde moveElement (start > end)', () => {
		const ingredients = [testBun, testIngredient];
		const expectedResult = [testIngredient, testBun];
		expect(
			constructorSlice.reducer(
				{ ...initialState, ingredients },
				{
					type: moveElement.type,
					payload: [1, 0]
				}
			)
		).toEqual({ ...initialState, ingredients: expectedResult });
	});
});