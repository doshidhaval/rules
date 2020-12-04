const NAME_PROPERTY = "name";

module.exports = (targetVal, _opts, paths) => {
  if (!Array.isArray(targetVal)) {
    return;
  }

  
  const seen = [];
  const results = [];

  const rootPath = paths.target !== void 0 ? paths.target : paths.given;

  for (let i = 0; i < targetVal.length; i++) {
    if (targetVal[i] === null || typeof targetVal[i] !== "object") {
      continue;
    }

    const tagName = targetVal[i][NAME_PROPERTY];

    if (tagName === void 0) {
      continue;
    }

    if (seen.includes(tagName)) {
      results.push({
        message: `Duplicate tag name '${tagName}'`,
        path: [...rootPath, i, NAME_PROPERTY],
      });
    } else {
      seen.push(tagName);
    }
  }

  return results;
};
