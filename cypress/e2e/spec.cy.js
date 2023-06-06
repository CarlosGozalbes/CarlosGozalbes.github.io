describe("Homepage", () => {
   beforeEach(() => {
    cy.visit("index.html");
  }); 
/* 
  it("should hide elements on small screens", () => {
    cy.viewport(800, 600);
    cy.get(".text-wrapper").should("not.be.visible");
    cy.get(".text-container").should("not.be.visible");
    cy.get(".btn").should("not.be.visible");
  }); */

 it('should navigate to the about page when "About" button is clicked', () => {
   cy.get('a[href="./about.html"]').eq(1).click();
   cy.url().should("include", "about.html");
   cy.go("back");
   cy.get('a[href="./about.html"]').eq(0).click();
   cy.go("back");
 });

  /* it("should show hidden elements after a delay", () => {
    cy.viewport(1920, 1080);
    cy.wait(10000);
    cy.get("#homepageintroicon").should("not.be.visible");
    cy.get("#clickme").should("be.visible");
  }); */
});
