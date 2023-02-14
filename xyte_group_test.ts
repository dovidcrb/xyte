import { Selector } from 'testcafe';

fixture `Xyte Group Test`
    .page('https://dovid-microwaves.on-xyte.com/auth/sign-in');

test("Login into Xyte", async t => {
    // Login
    const pageTitle = Selector('.mantine-Text-root');
    const userName = Selector('[name="email"]');
    const passWord = Selector('[name="password"]');
    const submitButton = Selector('button').withText('Sign In');
    const menuOrg = Selector('span').withText('Organization Overview')
    

    await t.expect(pageTitle.withText('Sign-In').exists).ok();
    await t
        .typeText(userName, 'dkrongold@gmail.com')
        .typeText(passWord, '1234qwerASDF!@#$7890');
    await t.click(submitButton);
    await t.debug();
    await t.expect(menuOrg.exists).ok();
});

// Add Group

// Test Group

// Add Group with same name as first group

// Logout