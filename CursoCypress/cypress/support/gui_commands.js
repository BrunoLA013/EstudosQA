Cypress.Commands.add('login', (nome, senha) => {
    cy.get('input[formcontrolname="userName"]').type(nome);
    cy.get('input[formcontrolname="password"]').type(senha);
    cy.get('button[type="submit"]').click();
})

Cypress.Commands.add('cadastro', (email, nome, usuario, senha) => {
    cy.get('input[formcontrolname="email"]').type(email);
    cy.get('input[formcontrolname="fullName"]').type(nome);
    cy.get('input[formcontrolname="userName"]').type(usuario);
    cy.get('input[formcontrolname="password"]').type(senha);
    cy.contains('button', 'Register').click();
})


