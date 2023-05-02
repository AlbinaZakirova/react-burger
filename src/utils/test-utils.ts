export const testData = {
	orders: [
		{
			_id: '644f70e045c6f2001be6f7e1',
			ingredients: [
				'643d69a5c3f7b9001cfa093c',
				'643d69a5c3f7b9001cfa093c',
				'643d69a5c3f7b9001cfa0942',
				'643d69a5c3f7b9001cfa0941',
				'643d69a5c3f7b9001cfa0946'
			],
			status: 'done',
			name: 'Минеральный био-марсианский краторный spicy бургер',
			createdAt: '2023-05-01T07:57:20.302Z',
			updatedAt: '2023-05-01T07:57:20.359Z',
			number: 2513
		},
		{
			_id: '644f712145c6f2001be6f7e3',
			ingredients: [
				'643d69a5c3f7b9001cfa093c',
				'643d69a5c3f7b9001cfa093c',
				'643d69a5c3f7b9001cfa0942',
				'643d69a5c3f7b9001cfa0941',
				'643d69a5c3f7b9001cfa0946'
			],
			status: 'done',
			name: 'Минеральный био-марсианский краторный spicy бургер',
			createdAt: '2023-05-01T07:58:25.457Z',
			updatedAt: '2023-05-01T07:58:25.563Z',
			number: 2514
		},
		{
			_id: '644f713945c6f2001be6f7e5',
			ingredients: [
				'643d69a5c3f7b9001cfa093c',
				'643d69a5c3f7b9001cfa093c',
				'643d69a5c3f7b9001cfa0942',
				'643d69a5c3f7b9001cfa0941',
				'643d69a5c3f7b9001cfa0946'
			],
			status: 'done',
			name: 'Минеральный био-марсианский краторный spicy бургер',
			createdAt: '2023-05-01T07:58:49.672Z',
			updatedAt: '2023-05-01T07:58:49.774Z',
			number: 2515
		}
	],
	success: true,
	total: 2186,
	totalToday: 197
};

export const testBun = {
	_id: '643d69a5c3f7b9001cfa093d',
	name: 'Флюоресцентная булка R2-D3',
	type: 'bun',
	proteins: 44,
	fat: 26,
	carbohydrates: 85,
	calories: 643,
	price: 988,
	image: 'https://code.s3.yandex.net/react/code/bun-01.png',
	image_mobile: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
	image_large: 'https://code.s3.yandex.net/react/code/bun-01-large.png',
	__v: 0
};

export const testIngredient = {
	_id: '643d69a5c3f7b9001cfa0944',
	name: 'Соус традиционный галактический',
	type: 'sauce',
	proteins: 42,
	fat: 24,
	carbohydrates: 42,
	calories: 99,
	price: 15,
	image: 'https://code.s3.yandex.net/react/code/sauce-03.png',
	image_mobile: 'https://code.s3.yandex.net/react/code/sauce-03-mobile.png',
	image_large: 'https://code.s3.yandex.net/react/code/sauce-03-large.png',
	__v: 0
	
};


export const testOrder = {
	success: true,
	name: 'Бессмертный краторный spicy бургер',
	order: {
		ingredients: [
			{
				_id: '643d69a5c3f7b9001cfa093c',
				name: 'Краторная булка N-200i',
				type: 'bun',
				proteins: 80,
				fat: 24,
				carbohydrates: 53,
				calories: 420,
				price: 1255,
				image: 'https://code.s3.yandex.net/react/code/bun-02.png',
				image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
				image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
				__v: 0
			},
			{
				_id: '643d69a5c3f7b9001cfa093c',
				name: 'Краторная булка N-200i',
				type: 'bun',
				proteins: 80,
				fat: 24,
				carbohydrates: 53,
				calories: 420,
				price: 1255,
				image: 'https://code.s3.yandex.net/react/code/bun-02.png',
				image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
				image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
				__v: 0
			},
			{
				_id: '643d69a5c3f7b9001cfa0942',
				name: 'Соус Spicy-X',
				type: 'sauce',
				proteins: 30,
				fat: 20,
				carbohydrates: 40,
				calories: 30,
				price: 90,
				image: 'https://code.s3.yandex.net/react/code/sauce-02.png',
				image_mobile:
					'https://code.s3.yandex.net/react/code/sauce-02-mobile.png',
				image_large: 'https://code.s3.yandex.net/react/code/sauce-02-large.png',
				__v: 0
			},
			{
				_id: '643d69a5c3f7b9001cfa093f',
				name: 'Мясо бессмертных моллюсков Protostomia',
				type: 'main',
				proteins: 433,
				fat: 244,
				carbohydrates: 33,
				calories: 420,
				price: 4337,
				image: 'https://code.s3.yandex.net/react/code/meat-02.png',
				image_mobile:
					'https://code.s3.yandex.net/react/code/meat-02-mobile.png',
				image_large: 'https://code.s3.yandex.net/react/code/meat-02-large.png',
				__v: 0
			}
		],
		_id: '644fa59245c6f2001be6f97e',
		owner: {
			name: 'Антон',
			email: 'anton@ya.ru',
			createdAt: '2023-04-18T10:21:32.465Z',
			updatedAt: '2023-04-21T08:18:04.961Z'
		},
		status: 'done',
		name: 'Бессмертный краторный spicy бургер',
		createdAt: '2023-05-01T11:42:10.738Z',
		updatedAt: '2023-05-01T11:42:10.783Z',
		number: 2561,
		price: 2682
	}
};

