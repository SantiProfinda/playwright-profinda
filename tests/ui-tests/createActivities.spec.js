test.describe('Create Activities', () => {
  const activityTypes = [
    { type: 'Engagement', path: '/activities/engagement/new' },
    { type: 'Role', path: '/activities/role/new' },
    // Add other activity types
  ];

  for (const activity of activityTypes) {
    test(`Create a new ${activity.type}`, async ({ page }) => {
      const activityPage = new BaseActivityCreationPage(page);
      await activityPage.goto(activity.path);
      await activityPage.fillTitle(`Test ${activity.type}`);
      await activityPage.fillDescription(`This is a test ${activity.type.toLowerCase()}.`);
      await activityPage.submit();

      // Add assertions
    });
  }
});