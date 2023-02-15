import { Selector } from 'testcafe';

fixture `Xyte Group Test`
    .page('https://dovid-microwaves.on-xyte.com/auth/sign-in');

test("Group creation for Xyte", async t => {
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
    const errorNameAlreadyExists = Selector('.rrt-text').withText('Name has already been taken');
    const buttonCloseGroupNameWindow = Selector('[type="button"]').withText('Close');
    const buttonOpenSignOutWindow = Selector('.user-name')
    const buttonSignOut = Selector('.mantine-Menu-itemLabel').withText('Sign out');
    
    // Verify that user has arrived on the Login page and logins
    await t
        .expect(pageTitle.withText('Sign-In').exists).ok()
        .typeText(userName, 'dkrongold@gmail.com')
        .typeText(passWord, '1234qwerASDF!@#$7890')
        .click(submitButton);

    // Verify that the user arrived on the Home page
    await t.expect(menuOrg.exists).ok();
    
    // Add Group
    await t
        .click(menuSettings)
        .click(tabGroups)
        .click(buttonCreateGroup)
        .expect(addGroupNameTitle.exists).ok()
        .typeText(addGroupName, 'Boris Microwave Services')
        .click(buttonAddGroupName);

    // Verify if add group with same name error message generated
    await t.expect(errorNameAlreadyExists.exists).ok(); 
    
    // Logout
    await t
        .click(buttonCloseGroupNameWindow)
        .click(buttonOpenSignOutWindow)
        .click(buttonSignOut);
});