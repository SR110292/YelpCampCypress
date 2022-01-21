///<reference types = "Cypress"/> 
const { showPageElements, genericElements } = require(`../support/webElements`);
const loginPage = require("./loginPage");

module.exports = {
    validateCampgroundText: () => {
        cy.get('@descTxt').then(txt => {
            cy.xpath(showPageElements.campgroundDescription).should(`contain.text`, txt);
        })
    },
    cannotReviewValidation: () => {
        cy.xpath(showPageElements.starRatingInput).should('not.exist');
    },
    getTotalReviews() {
        cy.get(genericElements.body)
            .then(($body) => {
                let count = {};
                if ($body.find(showPageElements.allReviewStars).length) {
                    cy.get(genericElements.body).find(showPageElements.allReviewStars)
                        .then((el) => {
                            count = el.length;
                            cy.wrap(count).as(`count`);
                        })
                } else {
                    count = 0;
                    cy.xpath(showPageElements.noExistingComment).should('exist');
                    cy.wrap(count).as(`count`);
                }
            })
    },
    giveRating(rating) {
        cy.xpath(showPageElements.mapContainer).scrollIntoView({ duration: 2000 })
        cy.xpath(showPageElements.giveStars + `[` + rating + `]`).click({ force: true, scrollBehavior: `top` });
    },
    enterComments(msg) {
        cy.xpath(showPageElements.commentsField).type(msg, { force: true });
    },
    submitReview() {
        cy.xpath(showPageElements.submitBtn).click({ force: true });
    },
    validateWarningMsg(msg) {
        loginPage.validateWarningMsg(msg)
    },
    closeMsg() {
        loginPage.closeMsg()
    },
    reviewCountValidation(text) {
        if (text === 'greater') {
            cy.get('@count').then(count => {
                cy.get('body').find(showPageElements.allReviewStars).should(`have.length`, count + 1)
            })
        } else if (text === 'equal') {
            cy.get('@count').then(count => {
                cy.get('body').find(showPageElements.allReviewStars).should(`have.length`, count)
            })
        } else {
            cy.get('@count').then(count => {
                cy.get('body').find(showPageElements.allReviewStars).should(`have.length`, count - 1)
            })
        }
    },
    validateAddedReview(rating, text) {
        const locator = `//div[@class='card mb-3']//p[@data-rating='${rating}']/following-sibling::p[contains(text(),'${text}')]`
        cy.xpath(locator).should('exist');
    },
    deleteReview(text) {
        const locator = `//div[@class='card mb-3']//p[contains(text(),'${text}')]/following-sibling::form/button`
        cy.xpath(locator).click({ force: true });
    },
    validateDeletedReview(rating, text) {
        const locator = `//div[@class='card mb-3']//p[@data-rating='${rating}']/following-sibling::p[contains(text(),'${text}')]`
        cy.xpath(locator).should('not.exist');
    }

}