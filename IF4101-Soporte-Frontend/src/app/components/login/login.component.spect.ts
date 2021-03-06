import { browser, by, element } from 'protractor';

export class LoginPage {
  private credentias = {
    username: 'test',
    password: 'test'
  };

  navigateTo() {
    return browser.get('/login');
  }
  
  fillCredentials(credentias: any = this.credentias) {
    element(by.css('[name="email"]')).sendKeys(credentias.username);
    element(by.css('[name="password"]')).sendKeys(credentias.password);
    element(by.css('.btn-primary')).click();
    console.log('pass the login');
  }

  getPageTitleText() {
    return element(by.css('app-root h2')).getText();
  }

  getErrorMessage() {
    return element(by.css('.alert-danger')).getText();
  }
}