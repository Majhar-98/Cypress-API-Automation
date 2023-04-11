const envVariable = require('../fixtures/envVariable.json');

describe('User login', () => {
  it('login with valid username and password', () => {
    cy.request({
      method: 'POST',
      url: envVariable.baseUrl + '/user/login',
      body: {
        "email": "salman@roadtocareer.net",
        "password": "1234"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      var token = response.body.token;
      envVariable.token = token;
      cy.writeFile('cypress/fixtures/envVariable.json', JSON.stringify(envVariable));
    });
  })
})