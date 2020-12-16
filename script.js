function removeWhiteSpace(text) {
    return text.replace(/\s+/g, "");
};

function removeNumbers(text) {
    return text.replace(/\d+/g, "");
};

function cleanOriginData(text) {
    return removeNumbers(removeWhiteSpace(text));
};

const resultField = document.getElementById("result");

function execute() {
    resultField.className = "";
    const cleanData = cleanOriginData(document.getElementById("originData").value);
    const startIndex = document.getElementById("startIndex").value;
    const numberOfItems = document.getElementById("numberOfItems").value;

    let searchResult = [];

    if (startIndex < 1) {
            searchResult.push("Error: Invalid Start Index");
            resultField.className = "error";
        } else if (startIndex > cleanData.length) {
            searchResult.push("Error: Start Index too large for Origin Data");
            resultField.className = "error";
        } else if (numberOfItems < 1) {
            searchResult.push("Error: Invalid Number of Items");
            resultField.className = "error";
        } else if (cleanData.length < Number(startIndex) + Number(numberOfItems)) {
            searchResult.push("Error: Number of Items too large for origin data");
            resultField.className = "error";
        } else {
            for(let i = 0; i < numberOfItems; i++) {
                searchResult.push(cleanData[(startIndex-1)+i])
            }
        }

    resultField.textContent = searchResult.join("");
};

function resetForm() {
    resultField.textContent = undefined;
    resultField.className = "";
}