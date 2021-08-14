import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`https://widgets-475f6.web.app/`;

test("Check uploaded files", async (t) => {
    await t
        .setFilesToUpload("#file-input", ["../../readings.txt"])
        .click("#start-eval");
});