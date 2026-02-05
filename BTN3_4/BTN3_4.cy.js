describe('First page load under 2 seconds', () => {
  it('Verify PASS status when first page load is under 2 seconds', {
    retries: {
      runMode: 2,
      openMode: 2
    }
  }, () => {
    // Step: Truy cập trang
    cy.visit('https://autotestsandbox.com/labs/first-page-load-under-2-seconds');

    // 2. Click Measure
    cy.contains('Measure').should('be.visible').click();

    // 3. Verify trạng thái PASS
    cy.contains('Pass').should('be.visible');

    // 4. Verify load time < 2000ms (nếu hiển thị số)
    cy.get('[role="status"]').invoke('text').then((text) => { // Lấy thời gian hiển thị
      const time = parseInt(text.replace(/\D/g, ''), 10); //cắt chữ, chỉ lấy số
      expect(time).to.be.lessThan(2000); //Nếu nhỏ hơn 2s mà fail thì retry, nếu pass thì ngừng
    });
  });
});
