describe('Usabilidade Tela inicial', () => {

    beforeEach(() => {
        cy.visit('/');
    })

    it('Verifica tela inicial', () => {
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
        cy.contains('ap-vmessage    ', 'Password is required!').should('be.visible');
        cy.get('button[type="submit"]').should('be.disabled');
    })

    it('Verifica botao habilitado na tela inicial', () => {
        cy.get('input[formcontrolname="userName"]').type('Bruno');
        cy.get('input[formcontrolname="password"]').type('1233');
        cy.get('button[type="submit"]').should('be.enabled');


    })

    it('Verifica nome da aplicação na tela inicial', () => {
        cy.contains('a', ' ALURAPIC ').should('be.visible')

    })

})
