const filterObj = (obj, ...allowedFields) => {
  const newObj = {};

  // Step 1: Get the obj properties [title]
  Object.keys(obj).forEach((el) => {
    // Step 2: Check if el (obj property) is in the allowedFields array
    if (allowedFields.includes(el)) {
      // Step 3: Add obj property and value to the newObj
      newObj[el] = obj[el]; // newObj.title = obj.title
    }
  });

  return newObj;
};

module.exports = { filterObj };
