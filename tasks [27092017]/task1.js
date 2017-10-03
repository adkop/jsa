/**
 * Zadanie 1.
 *
 * Dokończ funckcję DOMFragmentBuilder tak, zeby zwracala obiekt gdzie
 * nazwą własności jest wartość atrybutu data-element, a wartością jest
 * element interface DOM posiadający ten atrybute.
 *
 * Przyklad obiektu, ktory ma byc zwrocony
 *
 * {
 *      fieldsecik: #HTMLFildsetElement (obiekt DOM fieldset)
 * }
 */
const PATTERN = /\{\{(.*)\}\}/gm;

const html = `<div class="{{CLASS_NAME}}" role="toolbar">
<form action="#" method="GET" class="{{CLASS_NAME_FORM}}" data-element="formularz">
    <fieldset id="test" name="find" data-element="fieldsecik">{{TEXT}}</fieldset>
</form>
</div><div data-element="blok">jfdhjfdsfg</div>`;

function tpl(str, model) {
    return str.replace(PATTERN, ($0, $1) => {
        return model[$1] || $0;
    });
}

const fragment = (new DOMParser()).parseFromString(tpl(html, {
    TEXT: "La La La"
}), "text/html");

function DOMFragmentBuilder() {
    let a = fragment.querySelectorAll("[data-element]");    
    const obj = {};
    a.forEach((el) => obj[el.dataset.element] = el.__proto__);
    console.log(obj);
}

DOMFragmentBuilder();