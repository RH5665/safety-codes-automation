import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { MyApplicationPage } from '../pages/MyApplicationPage';
import { users } from '../test-data/users';
import applicationData from '../test-data/applicationData.json';
import { environment } from '../config/environment';

test('Validate application for logged in user', async ({ page }) => {

    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const myApplicationPage = new MyApplicationPage(page);

    await page.goto(environment.baseUrl);
    await loginPage.login(users.email, users.password);
    await homePage.navigateToMyApplications();

    const actualApplications = await myApplicationPage.getApplications();

    expect(actualApplications.length).toBe(applicationData.length);

    for (let i = 0; i < applicationData.length; i++) {
        expect(actualApplications[i].status).toBe(applicationData[i].status);
        expect(actualApplications[i].referenceNumber).toBe(applicationData[i].referenceNumber);
        expect(actualApplications[i].applicationNumber).toBe(applicationData[i].applicationNumber);
        expect(actualApplications[i].permitType).toBe(applicationData[i].permitType);
        expect(actualApplications[i].address).toContain(applicationData[i].address);
        expect(actualApplications[i].date).toBe(applicationData[i].date);
        expect(actualApplications[i].owner).toContain(applicationData[i].owner);
        expect(actualApplications[i].action).toContain(applicationData[i].action);
    }
});