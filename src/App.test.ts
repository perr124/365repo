import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`https://widgets-475f6.web.app/`;


test('Submit form with all fields filled', async t => {
    const evalName = 'Evalname';

    const evalNameInput = Selector('#evalName');
    const evalNameInputExists = evalNameInput.exists;
    await t
        .expect(evalNameInputExists).ok()
        .typeText(evalNameInput, evalName)
        .expect(evalNameInput.value).eql(evalName)
});

test("Check uploaded files", async (t) => {
    await t
        .setFilesToUpload("#file-input", ["../../readings.txt"])
        .click("#start-eval");
});