describe('Example Test Suite', () => {
  it('should visit the homepage and assert title', () => {
    cy.visit('/');
    cy.title().should('include', 'Your Website Title');
  });

  it('should perform a search', () => {
    cy.visit('/');
    cy.get('input[name="search"]').type('Cypress Testing');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/search');
    cy.get('.search-results').should('have.length.greaterThan', 0);
  });

  it('should navigate to a product page', () => {
    cy.visit('/');
    cy.get('.product-link:first').click();
    cy.url().should('include', '/product');
    cy.get('.product-title').should('exist');
  });
});

