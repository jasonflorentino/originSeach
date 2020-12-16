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
    const cleanData = cleanOriginData(document.getElementById("originData").value);
    const startIndex = document.getElementById("startIndex").value;
    const numberOfItems = document.getElementById("numberOfItems").value;

    let searchResult = [];

    if (startIndex < 1) {
            searchResult.push("Error: Please enter a valid number in Start Index");
            resultField.className = "error";
        } else if (startIndex > cleanData.length) {
            searchResult.push("Error: Start Index is larger than origin data");
            resultField.className = "error";
        } else if (numberOfItems < 1) {
            searchResult.push("Error: Please enter a valid number in Number of Items");
            resultField.className = "error";
        // } else if ((startIndex + numberOfItems) > cleanData.length) {
        //     searchResult.push("Error: Number of Items would be greater than items in origin data");
        //     resultField.className = "error";
        }else {
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