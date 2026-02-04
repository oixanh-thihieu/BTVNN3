describe('Static Table - Highlight row by SKU', () => {

  it('Highlight correct row and show message', () => {
    cy.visit('https://autotestsandbox.com/examples/static-table');
    // Nhập SKU cần highlight
    cy.get('[data-test-id="static-table-primary"]').type('Product Table');
    cy.get('[data-test-id="static-table-secondary"]').type('SKU-004');
    //  Click Highlight
    cy.contains('Highlight row').click();
    // Verify đúng dòng được highlight
    cy.contains('tr', 'SKU-004').should('have.class', 'bg-indigo-50').and('be.visible');

    // Verify các dòng khác không bị highlight
    cy.contains('tr', 'SKU-001').should('not.have.class', 'bg-indigo-50');
    cy.contains('tr', 'SKU-002').should('not.have.class', 'bg-indigo-50');
    cy.contains('tr', 'SKU-003').should('not.have.class', 'bg-indigo-50');

    //  Verify thông báo hiển thị đúng
    cy.contains('Product Table highlighted SKU-004').should('be.visible');
  })
})
