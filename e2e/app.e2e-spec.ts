import { NgReactiveValidationPage } from './app.po';

describe('ng-reactive-validation App', () => {
  let page: NgReactiveValidationPage;

  beforeEach(() => {
    page = new NgReactiveValidationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
