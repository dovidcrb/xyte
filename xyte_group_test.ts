import { Selector } from 'testcafe';

fixture `Xyte Group Test`
    .page('https://dovid-microwaves.on-xyte.com/auth/sign-in');

test("Login into Xyte", async t => {
    // Login
    const pageTitle = Selector('.mantine-Text-root');
    const userName = Selector('[name="email"]');
    const passWord = Selector('[name="password"]');
    const submitButton = Selector('button').withText('Sign In');
    const menuOrg = Selector('span').withText('Organization Overview');
    const menuSettings = Selector('span').withText('Settings');
    const tabGroups = Selector('.mantine-Group-root').withText('Groups');
    const buttonCreateGroup = Selector('span').withText('Create Group');
    const addGroupNameTitle = Selector('.modal-title').withText('Add Access');
    const addGroupName = Selector('[name="name"]');
    const buttonAddGroupName = Selector('[type="submit"]').withText('Create');
    
    // Verify that user has arrived on the Login page
    await t.expect(pageTitle.withText('Sign-In').exists).ok();
    await t
        .typeText(userName, 'dkrongold@gmail.com')
        .typeText(passWord, '1234qwerASDF!@#$7890');
    await t.click(submitButton);
    // Verify that the user arrived on the Home page
    await t.expect(menuOrg.exists).ok();
    
    // Add Group
    await t.click(menuSettings);
    await t.click(tabGroups);
    await t.click(buttonCreateGroup);
    await t.expect(addGroupNameTitle.exists).ok();
    await t.typeText(addGroupName, 'Boris Microwave Services');
    await t.click(buttonAddGroupName);



});


// Test Group

// Add Group with same name as first group

// Logout