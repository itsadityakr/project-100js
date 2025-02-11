function formatStrings() {
    let str1 = document.getElementById("string1").value;
    let str2 = document.getElementById("string2").value;

    let concatenation = str1 + " " + str2;

    let templateString = `${str1} ${str2}`;

    let typeCoercion = str1 + 10;

    let numSum = Number(str1) + Number(str2);

    document.getElementById("output").innerHTML = `
        <p><strong>Concatenation (+):</strong> ${concatenation}</p>
        <p><strong>Template Literal:</strong> ${templateString}</p>
        <p><strong>Type Coercion (String + Number):</strong> ${typeCoercion}</p>
        <p><strong>Sum Addition (Number + Number):</strong> ${numSum}</p>
    `;
}
