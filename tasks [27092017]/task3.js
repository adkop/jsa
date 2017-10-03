/**
 *  Zadanie 3.
 *  
 *  Napisz funkcje, która jako paramtr przyjmie obiekt przypisany do zmiennej module i zwróci fragment dokumentu interface DOM
 *  z drzewem odzwierciedlającym dany obiekt. Zrób to tak, żeby nie odzwierciedlać obiektu w stringu ale bezpośrednio w interface DOM.
 */

 let answer = document.createElement("body");

 const mod1 = {
    nodeName: "div",
    attributes: {
        className: "find-text",
        role: "toolbar"
    },
    childNodes: [{
        nodeName: "form",
        attributes: {
            action: "#",
            method: "GET",
            className: "find-text__form"
        },
        childNodes: [{
            nodeName: "fieldset",
            attributes: {
                name: "find"
            }
        }]
    }]
};

function objectToHTML(mod1) {
    let htmlObject = mod1;
    const attrMap = {
        className: "class"
    }

    if (!Array.isArray(htmlObject)) {
        htmlObject = [htmlObject];
    }

    function htmlAttributes(attributes, node) {
        Object.keys(attributes || []).map(attributeName => node.setAttribute((attrMap[attributeName] || attributeName), attributes[attributeName]));
        return node;
    }

    return htmlObject.map(({
        nodeName,
        attributes,
        childNodes
    }) => {
        let node = document.createElement(nodeName);
        htmlAttributes(attributes, node);
        answer.appendChild(node);
            if (childNodes){
                objectToHTML(childNodes);
            }
        }
    );
}

objectToHTML(mod1);
console.log(answer);

