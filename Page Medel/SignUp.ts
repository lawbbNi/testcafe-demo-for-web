import {Selector, t} from "testcafe";

class SignupPage {
    firstnameInput: Selector = Selector('#input-firstname');
    lastnameInput: Selector = Selector('#input-lastname');
    emailInput: Selector = Selector('#input-email');
    telephoneInput: Selector = Selector('#input-telephone');
    passwordInput: Selector = Selector('#input-password');
    confirmInput: Selector= Selector('#input-confirm');
    agreeBtn: Selector= Selector('#input-agree');
    continueBtn: Selector= Selector('input.btn-primary');
}

export default new SignupPage();