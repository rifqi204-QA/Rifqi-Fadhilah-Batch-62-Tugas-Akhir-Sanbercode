/// <reference types ="cypress" />

describe('API Testing',() => {
    it('Testing API Single User not Found',()=> {
        cy.request({method: 'GET',url: 'https://reqres.in/api/users/23',failOnStatusCode:false})
        .then((response)=> {
            expect(response.status).to.eq(404)
            expect(response.body).to.not.be.null
            //expect(response.body).to.have.property('message', 'User not found');
        })
    })
})
