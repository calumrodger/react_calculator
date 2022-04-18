describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should update running total', () => {
    cy.get('#clear').click();
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number3').click();
    cy.get('.display').should('contain', '233')
  })

  it('should update arithmetical operations with result', () => {
    cy.get('#clear').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')
  })

  it('should be able to chain multiple operations together', () => {
    cy.get('#clear').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '20')
  })

  it('should be able to give negative results', () => {
    cy.get('#clear').click();
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1')
  })

  it('should be able to give decimal results', () => {
    cy.get('#clear').click();
    cy.get('#number1').click();
    cy.get('#decimal').click();
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#decimal').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '3.2')
  })

  it('should be able to give very large results', () => {
    cy.get('#clear').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-multiply').click();
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1e+24')
  })

  it("should return an error message when attempting to divide by zero", () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'error') 
  })
})