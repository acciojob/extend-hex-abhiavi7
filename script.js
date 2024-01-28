const extendHex = (shortHex) => {
    // Remove the # prefix if present
    shortHex = shortHex.replace("#", "");

    // Make sure the input is a valid short hex code
    if (!/^[0-9a-fA-F]{3}$/.test(shortHex)) {
        throw new Error("Invalid short hex code format");
    }

    // Extend the short hex code to a full hex code
    const fullHex = shortHex
        .split("")
        .map(component => component.repeat(2))
        .join("");

    // Add the # prefix to the full hex code
    return "#" + fullHex;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));

