/// <reference types="cypress" />
describe('консттуктор', () => {
	const testUrl = 'http://localhost:3000';
	const testBun = 'Флюоресцентная булка R2-D3';
  beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(testUrl);
		cy.on('uncaught:exception', () => {
			return false;
		});
	});

	it('открытие модального окна', () => {
		cy.contains(testBun).click();
		cy.get('div[aria-label="Закрыть модальное окно"]');
	});

	it('информация об ингредиенте в модельном окне', () => {
		cy.contains(testBun).click();
		cy.get('#modals').contains(testBun);
	});

	it('закрытие модального окна', () => {
		cy.contains(testBun).click();
		cy.get('div[aria-label="Закрыть модальное окно"]').click();
		cy.contains('Детали ингредиента').should('not.exist');
	});

	it('pпроверка dnd', () => {
		cy.contains(testBun).trigger('dragstart');
		cy.contains('Выберите булку')
			.trigger('dragenter')
			.trigger('dragover')
			.trigger('drop');
	});

	it('заказ', () => {
		cy.contains(testBun).trigger('dragstart');
		cy.contains('Выберите булку')
			.trigger('dragenter')
			.trigger('dragover')
			.trigger('drop');

		cy.contains('Соус традиционный галактический').trigger('dragstart');
		cy.get('#noBun')
			.trigger('dragenter')
			.trigger('dragover')
			.trigger('drop');

		cy.contains('Оформить заказ').click();
	});
}); 