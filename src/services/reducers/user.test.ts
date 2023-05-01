import { userSlice, initialState, registerUser, signInUser, exitUser, updateAccessToken, getUserData, updateUserData, forgotPassword } from "./user";

export const testUserData = {
	email: 'anton@ya.ru',
	name: 'Антон'
};  

describe('userSlice reducer', () => {
	it('should return initial state', () => {
		expect(userSlice.reducer(initialState, { type: '' })).toEqual(
			initialState
		);
	});

	it('should return registerUser fulfilled', () => {
		expect(
			userSlice.reducer(initialState, {
				payload: { user: testUserData, success: true },
				type: registerUser.fulfilled
			})
		).toEqual({ 
       ...initialState, 
       user: testUserData, 
			 isRegistered: true,
       isAuth: true 
    }); 
	});

	it('should return signInUser fulfilled', () => {
		expect(
			userSlice.reducer(initialState, {
				payload: { user: testUserData, success: true },
				type: signInUser.fulfilled
			})
		).toEqual({ 
       ...initialState, 
       user: testUserData, 
			 isLogin: true,
       isAuth: true 
    });
	});

	it('should return exitUser fulfilled', () => {
		expect(
			userSlice.reducer(initialState, {
				payload: { user: {}, success: true },
				type: exitUser.fulfilled,
				
			})
		).toEqual({
       ...initialState, 
       user: {}, 
			 isExited: true,
       isAuth: false 
    });
	});

	it('should return updateAccessToken fulfilled', () => { 
		expect(
			userSlice.reducer(initialState, {
				type: updateAccessToken.fulfilled,
				payload: { accessToken: 'testAccessToken', refreshToken: 'testRefreshToken', success: true }
			})
		).toEqual({
       ...initialState, 
       isTokenUpdated: true 
    });
	});

	it('should return getUserData fulfilled', () => {
		expect(
			userSlice.reducer(initialState, {
				payload: {
					user: testUserData,
					success: true
				},
				type: getUserData.fulfilled
			})
		).toEqual({ 
       ...initialState, 
       user: testUserData, 
       isUserDataGot: true 
    });
	});

	it('should return updateUserData fulfilled', () => { 
		expect(
			userSlice.reducer(initialState, {
				payload: { user: testUserData, success: true },
				type: updateUserData.fulfilled
			})
		).toEqual({ 
       ...initialState, 
       user: testUserData, 
       isUserDataUpdated: true
    });
	});

	it('should return forgotPassword fulfilled', () => {
		expect(
			userSlice.reducer(initialState, {
				type: forgotPassword.fulfilled,
				payload: {
					success: true 
				}
			})
		).toEqual({ 
       ...initialState, 
       isUserForgotPassword: true 
    });
	}); 

}); 