describe('First page load under 2 seconds', () => {

  it('Verify page load time is under 2 seconds', () => {
    // 1. Truy cập trang
    cy.visit('https://autotestsandbox.com/labs/first-page-load-under-2-seconds')

    // 2. Click Measure
    cy.contains('Measure')
      .should('be.visible')
      .click()

    // 3. Verify trạng thái PASS
    cy.contains('Pass', { timeout: 10000 })
      .should('be.visible')

    // 4. Verify load time < 2000ms (nếu hiển thị số)
    cy.get('[role="status"]') //cy.contains('Load time:')
      .invoke('text')
      .then((text) => {
        const time = parseInt(text.replace(/\D/g, ''), 10)
        expect(time).to.be.lessThan(2000)
      })
  })
})
