describe('Autocomplete Component', () => {
  it('should show country list when input has value', () => {
    cy.visit('http://localhost:3001');
    cy.get('input[placeholder="Please enter the name of the country here..."]').type('cana');
    cy.get('li').should('have.length.greaterThan', 0);
    cy.get('li:first').should('contain', 'Canada');
  });
});
