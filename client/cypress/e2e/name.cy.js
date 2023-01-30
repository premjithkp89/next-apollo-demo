import { slowCypressDown } from 'cypress-slow-down'
import 'cypress-slow-down/commands'

describe('example to-do app', () => {

    before(() => {
      cy.visit('http://localhost:3000')
      cy.slowDown(300)
    })


    after(() => {
      // rollback to normal speed
      cy.slowDownEnd()
    })


    beforeEach(() => {

    })


    afterEach(() => {

    })



    it('displays grid list', () => {
      cy.get('#user-grid').should('be.visible')
    })
  })