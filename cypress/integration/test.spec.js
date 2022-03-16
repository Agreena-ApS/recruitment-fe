/* eslint-disable no-undef */
describe("Integration tests", () => {
  it("should open and find all certification", () => {
    cy.visit("/");

    cy.get("[data-testid=page-name]").should(
      "contain.text",
      "All Certifications"
    );
  });

  it("should navigate to favorites successfully", () => {
    cy.visit("/");

    cy.contains("Favorites").click();

    cy.get("[data-testid=page-name]").should(
      "contain.text",
      "Favorite Certifications"
    );
  });

  it("should add to favorites and, then remove it from favorites", () => {
    cy.visit("/");
    cy.get("[data-testid=add-favorite]").first().click();

    cy.contains("Favorites").click();
    cy.get("tbody").find("tr");
    cy.get("[data-testid=add-favorite]").first().click();
    cy.get("tbody").find("tr").should("not.exist");
  });

  it("should navigate to last page", () => {
    cy.visit("/");
    cy.get("[data-testid=last-page]").click();

    cy.get("[data-testid=last-page]").should("be.disabled");
  });

  it("should check if first page chevron disabled", () => {
    cy.visit("/");

    cy.get("[data-testid=first-page]").should("be.disabled");
  });

  it("should navigate to last page then first page", () => {
    cy.visit("/");
    cy.get("[data-testid=last-page]").click();
    cy.get("[data-testid=first-page]").click();

    cy.get("[data-testid=first-page]").should("be.disabled");
  });

  it("should navigate to next page then previous page", () => {
    cy.visit("/");
    cy.get("[data-testid=next-page]").click();
    cy.get("[data-testid=previous-page]").click();

    cy.get("[data-testid=first-page]").should("be.disabled");
  });
});
