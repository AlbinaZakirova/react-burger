import currentIngredient, {
  initialState,
  removeCurrentIngredient,
  setCurrentIngredient,
} from "../reducers/currentIngredient";

describe("currentIngredient reducer", () => {
  
  it("should return the initial state", () => {
    expect(currentIngredient(undefined, { type: "" })).toEqual(
      initialState
    );
  });

  it("should handle set action", () => {
    const newIngredient = { id: '643d69a5c3f7b9001cfa093d', name: 'Флюоресцентная булка R2-D3' };
    const action = setCurrentIngredient(newIngredient);
    const newState = currentIngredient(initialState, action);
    expect(newState.currentIngredient).toEqual(newIngredient);
  });

  it("should handle reset action", () => {
    const prevState = { currentIngredient: null };
    const action = removeCurrentIngredient({});
    const newState = currentIngredient(prevState, action);
    expect(newState.currentIngredient).toEqual(null);
  });
});