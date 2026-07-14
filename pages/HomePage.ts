import { Page, Locator } from '@playwright/test';

export class HomePage {

   readonly page: Page;
   readonly myApplicationLink: Locator;

   constructor(page: Page) {
      this.page = page;
      this.myApplicationLink = page.getByText('My Applications', { exact: true });
   }

   async navigateToMyApplications() {
      await this.myApplicationLink.click();
   }
}