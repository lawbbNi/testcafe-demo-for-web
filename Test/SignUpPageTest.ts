import SignupPage from "../Page Medel/SignUp";
import {Selector, t} from "testcafe";

const url = 'https://ecommerce-playground.lambdatest.io/index.php?route=account/register';
fixture("sign up page test")
    .page(url);
test ("end to end", async t =>{
    await t
        .typeText(SignupPage.firstnameInput, 'John')
        .typeText(SignupPage.lastnameInput, 'Doe')
        .typeText(SignupPage.emailInput, 'johndoe@example.com')
        .typeText(SignupPage.telephoneInput, '0712345678')
        .typeText(SignupPage.passwordInput, 'Qwerty123!')
        .typeText(SignupPage.confirmInput, 'Qwerty123!')
        .click(SignupPage.agreeBtn)
        .click(SignupPage.continueBtn);
});





