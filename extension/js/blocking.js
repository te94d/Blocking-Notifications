function updateRuleset() {
  const dateObj = new Date();
  const isAm = dateObj.getHours() < 12 ? true : false;
  if (isAm) {
    // 午前
    chrome.declarativeNetRequest.updateEnabledRulesets({
      enableRulesetIds: ["ruleset_1"],
    });
  } else {
    // 午後
    chrome.declarativeNetRequest.updateEnabledRulesets({
      disableRulesetIds: ["ruleset_1"],
    });
  }
}

chrome.alarms.create({ delayInMinutes: 1, periodInMinutes: 1 });
chrome.alarms.onAlarm.addListener(() => {
  updateRuleset();
});