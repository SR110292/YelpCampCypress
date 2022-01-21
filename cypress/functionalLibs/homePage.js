///<reference types = "Cypress"/> 
const { indexPageElements } = require(`../support/webElements`);

module.exports = {
    clickIndividualCampground: () => {
        cy.xpath(indexPageElements.individualCampgroundBtn).click()
    },
    getCampgroundTxt: () => {
        let txt = {};
        cy.xpath(indexPageElements.individualDescription).then((el) => {
            txt = el.text().trim();
            cy.wrap(txt).as('descTxt');
        })
    },
    validateHomePage: () => {
        cy.url().should('include', '/campgrounds')
        cy.xpath(indexPageElements.mapContainer).should(`exist`)
    }

}




