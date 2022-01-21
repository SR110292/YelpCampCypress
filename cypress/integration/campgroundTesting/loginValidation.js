///<reference types = "Cypress"/> 
const homePage = require('../../functionalLibs/homePage');
const showPage = require('../../functionalLibs/showPage');
const navbar = require('../../functionalLibs/navbar');
const frontPage = require('../../functionalLibs/frontPage');
const loginPage = require('../../functionalLibs/loginPage');

describe('Login validation', () => {
    beforeEach(() => {
        cy.fixture('loginValidation.json').then((data) => {
            globalThis.data = data;
        })
        frontPage.launchurl();
    })

    it('Login with incorrect password', () => {
        frontPage.clickViewCampgroundBtn();
        navbar.clickOnLoginBtn();
        loginPage.enterUserName(globalThis.data.username);
        loginPage.enterPassword(globalThis.data.incorrect_password);
        loginPage.clickOnLoginBtn(false);
        loginPage.validateWarningMsg(globalThis.data.incorrectCredentials)
        loginPage.closeMsg();
    })

    it('Login with correct password', () => {
        frontPage.clickViewCampgroundBtn();
        navbar.clickOnLoginBtn();
        loginPage.enterUserName(globalThis.data.username);
        loginPage.enterPassword(globalThis.data.password);
        loginPage.clickOnLoginBtn(true);
        loginPage.validateWarningMsg(globalThis.data.welcomeMsg)
        loginPage.closeMsg();
        navbar.clickOnLogoutBtn();
        loginPage.validateWarningMsg(globalThis.data.logoutMsg)
        loginPage.closeMsg();
    })

    it('Login without entering credentials', () => {
        frontPage.clickLoginTab();
        loginPage.clickOnLoginBtn(false);
        loginPage.validateLoginPage();
        loginPage.validateWarningMsg(globalThis.data.missingCredentials)
        loginPage.closeMsg();
    })

    it('Adding and deleting a review', () => {
        const testComment = Cypress.currentTest.title + " " + Math.floor(Math.random() * 1000) + 1;

        frontPage.clickLoginTab();
        loginPage.enterUserName(globalThis.data.username);
        loginPage.enterPassword(globalThis.data.password);
        loginPage.clickOnLoginBtn(true);
        homePage.validateHomePage();
        homePage.clickIndividualCampground();
        showPage.getTotalReviews();
        showPage.giveRating(globalThis.data.testRating3);
        showPage.enterComments(testComment);
        showPage.submitReview();
        showPage.validateWarningMsg(globalThis.data.reviewAdded)
        showPage.closeMsg();
        showPage.reviewCountValidation('greater');
        showPage.validateAddedReview(globalThis.data.testRating3, testComment);
        showPage.deleteReview(testComment);
        showPage.validateWarningMsg(globalThis.data.reviewDeleted)
        showPage.closeMsg();
        showPage.reviewCountValidation('equal');
        showPage.validateDeletedReview(globalThis.data.testRating3, testComment);
        navbar.clickOnLogoutBtn();
    })
})