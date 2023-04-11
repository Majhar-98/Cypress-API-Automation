import { baseUrl, token, secretKey } from '../fixtures/envVariable.json';
import Utility from '../fixtures/Utility';
import { faker } from '@faker-js/faker';

describe("Creating User", () => {
    const utility = new Utility();
    const randomFirstName = faker.name.firstName();
    const randomlastName = faker.name.lastName();
    const randomFullName = randomFirstName + ' ' + randomlastName;
    const randomEmail = randomFirstName + utility.randomId(1000, 9999) + '@test.com';
    const password = 'P@ssword123';
    const randomPhoneNumber = '01552' + utility.randomId(100000, 999999);
    const randomNID = (utility.randomId(100000000, 999999999).toString());
    it("Create a user", () => {
        cy.request({
            method: 'POST',
            url: baseUrl + '/user/create',
            headers: {
                'Authorization': token,
                'X-AUTH-SECRET-KEY': secretKey
            },
            body: {
                "name": randomFullName,
                "email": randomEmail,
                "password": password,
                "phone_number": randomPhoneNumber,
                "nid": randomNID,
                "role": "Customer"
            }
        }).then((response) => {
            expect(response.status).eq(201);
            cy.writeFile('cypress/fixtures/user.json', response.body);
        })
    })
})