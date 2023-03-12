describe('alura busca cursos', () => {

    beforeEach(() => {
        cy.visit('https://alura-fotos.herokuapp.com/#/home');
    })

    it('Verifica mensagem de validacao', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Email is required!').should('be.visible')
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Full name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'User name is required!').should('be.visible')
        cy.contains('ap-vmessage', 'Password is required!').should('be.visible')

    })

    it('Verifica mensagem de email invalido', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="email"]').type('Bruno');
        cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible')
    })

    it('Verifica mensagem de senha com menos de 8 caracteres', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible')
    })

    it('Verifica mensagem de usuario com letra maiuscula aprarece', () => {
        cy.contains('a', 'Register now').click();
        cy.contains('button', 'Register').click();
        cy.get('input[formcontrolname="userName"]').type('Bruno');
        cy.contains('button', 'Register').click();
        cy.contains('ap-vmessage', 'Must be lower case').should('be.visible')
    })

    it('fazer login com usuario valido', () => {
        cy.login('flavio', '123')
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('fazer login com usuario invalido', () => {
        cy.login('Bruno', '134456')
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password');
        });
    })

    const usuarios = require('../../fixtures/usuarios.json')
    usuarios.forEach(usuario => {

        it('registro novo usuário ' + usuario.name,  () => {
            cy.contains('a', 'Register now').click();
            cy.contains('button', 'Register').click();   
            cy.cadastro(usuario.email, usuario.name, usuario.usuario, usuario.senha)
    
        })
    });
    
})
