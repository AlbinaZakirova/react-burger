/// <reference types="cypress" />
describe('консттуктор', () => {
  beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit('http://localhost:3000');
		cy.on('uncaught:exception', () => {
			return false;
		});
	});

	it('открытие модального окна', () => {
		cy.contains('Флюоресцентная булка R2-D3').click();
		cy.get('div[aria-label="Закрыть модальное окно"]');
	});

	it('информация об ингредиенте в модельном окне', () => {
		cy.contains('Флюоресцентная булка R2-D3').click();
		cy.get('#modals').contains('Флюоресцентная булка R2-D3');
	});

	it('закрытие модального окна', () => {
		cy.contains('Флюоресцентная булка R2-D3').click();
		cy.get('div[aria-label="Закрыть модальное окно"]').click();
		cy.contains('Детали ингредиента').should('not.exist');
	});

	it('pпроверка dnd', () => {
		cy.contains('Флюоресцентная булка R2-D3').trigger('dragstart');
		cy.contains('Выберите булку')
			.trigger('dragenter')
			.trigger('dragover')
			.trigger('drop');
	});

	it('заказ', () => {
		cy.contains('Флюоресцентная булка R2-D3').trigger('dragstart');
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