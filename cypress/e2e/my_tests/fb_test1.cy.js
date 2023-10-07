describe('Facebook signing signup tests', () =>{


    beforeEach(() => {
        cy.visit('https://web-dev.legendsatwar.io/login');

    });

    afterEach(() => {
        cy.log('after each block');

    });


    before(() => {
        cy.log('before all the tests block');

    });

    after(() => {
        cy.log('after all the tests block');

    });

    it('LAW title page', () => {


    });

    it('LAW input email and password check', () => {

        cy.get('[id="field-:R5n6kql9f6:"]').type('fgfgf@fdg.co');
        cy.get('[id="field-:R9n6kql9f6:"]').type('fgfgf@fdg.co');

        cy.get('[id="field-:R5n6kql9f6:"]').invoke("val").should('equal', 'fgfgf@fdg.co');
        cy.get('[id="field-:R9n6kql9f6:"]').invoke("val").should('equal', 'fgfgf@fdg.co');
    });

    it('LAW create new account button test', () => {
        cy.get('.chakra-link > .chakra-heading').click();
        cy.get('.css-1g209a0').contains('Registration').invoke('text').should('equal', 'Registration');

    });
});