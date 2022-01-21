
module.exports.genericElements = {
    body: 'body'
}


module.exports.frontPageElements = {

    LoginTab: `//a[text()='Login']`,
    RegisterTab: `//a[text()='Register']`,
    LogoutTab: `//a[text()='Logout']`,
    viewCampgroundBtn: `(//a[@href='/campgrounds'])[2]`,
}

module.exports.navbarElements = {
    homeBtn: `//a[text()='Home']`,
    CampgroundsBtn: `//a[text()='Campgrounds']`,
    NewBtn: `//a[text()='New']`,
    LoginBtn: `//a[text()='Login']`,
    RegisterBtn: `//a[text()='Register']`,
    LogoutBtn: `//a[text()='Logout']`
}

module.exports.loginPageElements = {
    msgAlert: `//div[contains(@class,'alert-dismissible')]`,
    msgCloseIcon: `//button[@class='btn-close']`,
    userNameField: `//input[@name='username']`,
    passwordField: `//input[@name='password']`,
    loginBtn: `//button[text()='Login']`
}

module.exports.indexPageElements = {
    mapContainer: `//div[@id='cluster-map']`,
    individualDescription: `(//p[@class='card-text'])[3]`,
    individualCampgroundBtn: `(//a[@class='btn btn-primary'])[2]`,
}

module.exports.showPageElements = {
    mapContainer: `//div[@id='map']`,
    allReviewStars: `.starability-result`,
    giveStars: `(//label[contains(@for,'first-rate')])`,
    commentsField: `//*[@name='review[body]']`,
    submitBtn: `//button[text()='Submit']`,
    noExistingComment: `//h5[contains(text(),'Be the first one to comment on this!!!')]`,
    starRatingInput: `//fieldset[@class='starability-basic']`,
    campgroundDescription: `(//p[@class='card-text'])[1]`
}

