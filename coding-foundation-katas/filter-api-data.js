function filterApiData(apiData, mandatoryKeys) {
  // Add you solution here
  let result = [];
  for (let i = 0; i < apiData.length; i++) {
    const entriesKeys = Object.keys(apiData[i]);
    let allKeysFound = true;
    for (const key in mandatoryKeys) {
      if (!entriesKeys.includes(mandatoryKeys[key])) {
        allKeysFound = false;
        break;
      }
    }
    if (allKeysFound) {
      result.push(apiData[i]);
    }
  }
  return result;
}
