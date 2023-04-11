const envVariable = require('../fixtures/envVariable.json');
const user = require('../fixtures/user.json');

describe("Deleting user", () => {
    it("Delete user by id", () => {
        cy.request({
            method: 'DELETE',
            url: envVariable.baseUrl + '/user/delete/' + user.user.id,
            headers: {
                'Authorization': envVariable.token,
                'X-AUTH-SECRET-KEY': envVariable.secretKey
            }
        }).then((response) => {
            expect(response.status).eq(200);
            cy.writeFile('cypress/fixtures/user.json', response.body);
        })
    })
})