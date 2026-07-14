import { Page, Locator } from '@playwright/test';

export class MyApplicationPage {
    readonly page: Page;
    readonly applicationRows: Locator;


    constructor(page: Page) {
        this.page = page;
        this.applicationRows = page.locator('tbody tr');
    }

    async getApplications() {

        const applications = [];
        const rowCount = await this.applicationRows.count();

        for (let i = 0; i < rowCount; i++) {
            const cells = this.applicationRows.nth(i).locator('td');

            const application = {
                status: (await cells.nth(0).innerText()).trim(),
                referenceNumber: (await cells.nth(1).innerText()).trim(),
                applicationNumber: (await cells.nth(2).innerText()).trim(),
                permitType: (await cells.nth(3).innerText()).trim(),
                address: (await cells.nth(4).innerText()).trim(),
                date: (await cells.nth(5).innerText()).trim(),
                owner: (await cells.nth(6).innerText()).trim(),
                action: (await cells.nth(7).innerText()).trim()
            };
            applications.push(application);
        }
        return applications;
    }
}