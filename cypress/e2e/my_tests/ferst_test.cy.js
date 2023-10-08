describe('Tony-win registration tests', () =>{


    beforeEach(() => {
        cy.visit('http://localhost:4200/');

    });


    it('Tony-win main page', () => {


    });

    function randomString(length) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    function randomEmail() {
        return `${randomString(5)}@${randomString(5)}.com`;
    }

    function randomPassword(length) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';

        let result = '';

        result += chars.charAt(Math.floor(Math.random() * chars.length));
        result += numbers.charAt(Math.floor(Math.random() * numbers.length));

        for (let i = 2; i < length; i++) {
            const combined = chars + numbers;
            result += combined.charAt(Math.floor(Math.random() * combined.length));
        }

        return result;
    }


    function randomDateOfBirth() {
        const day = Math.floor(Math.random() * 28) + 1;
        const month = Math.floor(Math.random() * 12) + 1;
        const year = Math.floor(Math.random() * (2005 - 1950) + 1950);
        return { day, month, year };
    }

    function randomPhoneNumber() {
        const numbers = '0123456789';
        let result = '';

        for (let i = 0; i < 8; i++) {
            result += numbers.charAt(Math.floor(Math.random() * numbers.length));
        }

        return result;
    }


    describe('Registration Test', () => {

        it('Successful registration', () => {

            const email = randomEmail();
            const password = randomPassword(8);
            const dob = randomDateOfBirth();
            const phone = randomPhoneNumber();

            cy.get('.sc-iKuAEz > :nth-child(2) > .sc-kDvujY').click();
            cy.get('.sc-fVuMRb > :nth-child(1) > .sc-idXgbr > .sc-kgTSHT').type(randomString(5));
            cy.get('.sc-fVuMRb > :nth-child(2) > .sc-idXgbr > .sc-kgTSHT').type(randomString(5));
            cy.get('.eSepjw > .sc-ilhmMj > .sc-gYbzsP').click();
            cy.get('.cvHdBM').click();
            cy.get(':nth-child(4) > .sc-idXgbr > .sc-kgTSHT').type(email);
            cy.get(':nth-child(5) > .sc-idXgbr > .sc-kgTSHT').type(password);
            cy.get('input.sc-kgTSHT.fvaOHS[readonly][dir="ltr"]').click();
            cy.get('.sc-jOiSOi > :nth-child(1)').click();
            cy.get(':nth-child(9) > :nth-child(1) > .sc-idXgbr > .sc-kgTSHT').type(dob.day.toString());
            cy.get(':nth-child(9) > :nth-child(2) > .sc-idXgbr > .sc-kgTSHT').type(dob.month.toString());
            cy.get(':nth-child(3) > .sc-idXgbr > .sc-kgTSHT').type(dob.year.toString());
            cy.get('.sc-bYMpWt').click();
            cy.get(':nth-child(7) > .sc-kMjNwy > .sc-ilhmMj > .sc-cCjUiG').click();
            cy.get('.sc-cjibBx > :nth-child(1)').click();
            cy.get(':nth-child(7) > .sc-bjfHbI > .sc-idXgbr > .sc-kgTSHT').type(phone);
            cy.get('.sc-dgykgE > .sc-kDvujY').click();
        });

    });


    // it('Successful registration', () => {
    //
    //     cy.get('.sc-iKuAEz > :nth-child(2) > .sc-kDvujY').click();
    //     cy.get('.sc-fVuMRb > :nth-child(1) > .sc-idXgbr > .sc-kgTSHT').type('Oleg');
    //     cy.get('.sc-fVuMRb > :nth-child(2) > .sc-idXgbr > .sc-kgTSHT').type('Bro');
    //     cy.get('.eSepjw > .sc-ilhmMj > .sc-gYbzsP').click();
    //     cy.get('.cvHdBM').click();
    //     cy.get(':nth-child(4) > .sc-idXgbr > .sc-kgTSHT').type('asdas@sdf.com');
    //     cy.get(':nth-child(5) > .sc-idXgbr > .sc-kgTSHT').type('dsfsd12313');
    //     cy.get('input.sc-kgTSHT.fvaOHS[readonly][dir="ltr"]').click();
    //     cy.get('.sc-jOiSOi > :nth-child(1)').click();
    //     cy.get(':nth-child(9) > :nth-child(1) > .sc-idXgbr > .sc-kgTSHT').type('13');
    //     cy.get(':nth-child(9) > :nth-child(2) > .sc-idXgbr > .sc-kgTSHT').type('08');
    //     cy.get(':nth-child(3) > .sc-idXgbr > .sc-kgTSHT').type('2001');
    //     cy.get('.sc-bYMpWt').click();
    //     cy.get(':nth-child(7) > .sc-kMjNwy > .sc-ilhmMj > .sc-cCjUiG').click();
    //     cy.get('.sc-cjibBx > :nth-child(1)').click();
    //     cy.get(':nth-child(7) > .sc-bjfHbI > .sc-idXgbr > .sc-kgTSHT').type('34534576');
    //     cy.get('.sc-dgykgE > .sc-kDvujY').click();
    //
    //
    //     //
    //     // cy.get('[id="field-:R5n6kql9f6:"]').invoke("val").should('equal', 'fgfgf@fdg.co');
    //     // cy.get('[id="field-:R9n6kql9f6:"]').invoke("val").should('equal', 'fgfgf@fdg.co');
    // });
    //
    // // it('LAW create new account button test', () => {
    // //     cy.get('.chakra-link > .chakra-heading').click();
    // //     cy.get('.css-1g209a0').contains('Registration').invoke('text').should('equal', 'Registration');
    // //
    // // });
});