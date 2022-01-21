///<reference types = "Cypress"/> 
const homePage = require('../../functionalLibs/HomePage');
const showPage = require('../../functionalLibs/showPage');
const navbar = require('../../functionalLibs/navbar');
const frontPage = require('../../functionalLibs/frontPage');
const loginPage = require('../../functionalLibs/loginPage');


describe('Basic validation', () => {
    beforeEach(() => {
        cy.fixture('loginValidation.json').then((data) => {
            globalThis.data = data;
        })
        frontPage.launchurl();
    })

    it('validation of show page without login', () => {
        frontPage.clickViewCampgroundBtn();
        homePage.getCampgroundTxt();
        homePage.clickIndividualCampground()
        showPage.validateCampgroundText();
        showPage.cannotReviewValidation();
        navbar.clickOnNewBtn(false);
        loginPage.validateWarningMsg(globalThis.data.mustLoginMsg);
        loginPage.closeMsg();
    })
})