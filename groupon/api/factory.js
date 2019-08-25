const factory = {
  updateBook,
  createBook
};

function updateBook(req, data) {
  var data = JSON.parse(data);
  filteredData = data.books.filter(book => book.id === req.params.id)[0];
  filteredData["name"] = req.body["name"]
    ? req.body["name"]
    : filteredData["name"];
  filteredData["author"] = req.body["author"]
    ? req.body["author"]
    : filteredData["author"];
  filteredData["count"] = req.body["count"]
    ? req.body["count"]
    : filteredData["count"];
  filteredData["description"] = req.body["description"]
    ? req.body["description"]
    : filteredData["description"];
  remainObj = data.books.filter(book => book.id !== req.params.id);

  data.books = [...remainObj, filteredData].sort(function(a, b) {
    return parseInt(a.id) - parseInt(b.id);
  });
  return data;
}

function createBook(req, data) {
  var data = JSON.parse(data);
  var filteredData = data.books
    .map(book => Number(book.id))
    .sort((a, b) => parseInt(a) - parseInt(b));
  obj = {};
  if (
    !req.body["name"] &&
    !req.body["author"] &&
    !req.body["count"] &&
    !req.body["description"]
  ) {
    return data;
  } else {
    obj["id"] = (
      parseInt(filteredData[filteredData.length - 1]) + 1
    ).toString();
    obj["name"] = req.body["name"] ? req.body["name"] : "";
    obj["author"] = req.body["author"] ? req.body["author"] : "";
    obj["count"] = req.body["count"] ? req.body["count"] : "";
    obj["description"] = req.body["description"] ? req.body["description"] : "";
    data.books.push(obj);
    return data;
  }
}

module.exports = factory;
