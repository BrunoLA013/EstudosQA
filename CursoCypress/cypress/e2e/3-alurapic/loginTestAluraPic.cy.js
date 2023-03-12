describe('Teste de login no AluraPic', () => {

    beforeEach(() => {
        cy.visit('/');

    })

    it('fazer login com usuario valido', () => {
        cy.login(Cypress.env('userName'), Cypress.env('password'))
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('fazer login com usuario invalido', () => {
        cy.login('Bruno', '134456')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        });
    })


})
