describe('comment-project spec', () => {
  it('Comment-project', () => {
    cy.visit('http://localhost:5173/');
    cy.get("[data-qa='comment-input']").eq(0).type('Olá mundo');
    cy.get("[data-qa='publish-button']").eq(0).click();
    cy.get("[data-qa='comment-text']").each((element) => {
      if (element.text() === 'Excelente conteúdo.') {
        cy.get(element)
          .siblings('header')
          .children("[data-qa='delete-button']")
          .click();
      }
    });
  });
});
