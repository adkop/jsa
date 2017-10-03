/**
 * Zadanie 2.
 *
 * Zapoznaj się z koncepcją programowania funkcyjnego - compose
 *
 * Napisz taką funkcję lub znajdz w internecie i przerób skrypty (funkcje) z zadania 1
 * tak zeby mozna bylo uzyć compose i uzyskac za jej pomocą rozwiązanie zadania 1.
 */


const PATTERN = /\{\{(.*)\}\}/gm;

const model = { TEXT: "La La La" };

const html = `<div class="{{CLASS_NAME}}" role="toolbar">
<form action="#" method="GET" class="{{CLASS_NAME_FORM}}" data-element="formularz">
    <fieldset id="test" name="find" data-element="fieldsecik">{{TEXT}}</fieldset>
</form>
</div><div data-element="blok">jfdhjfdsfg</div>`;

const compose = function() {
    var funcs = arguments;
    return function() {
        var args = arguments;
        for (var i = funcs.length; i --> 0;) {
            args = [funcs[i].apply(this, args)];
        }
        return args[0];
    };
};

function tpl(str) {
    return str.replace(PATTERN, ($0, $1) => {
        return model[$1] || $0;
    });
}

function fragment(str) {
    return fragment = (new DOMParser()).parseFromString(str, "text/html");
}

function DOMFragmentBuilder(VDOM) {
    let a = VDOM.querySelectorAll("[data-element]");    
    const obj = {};
    a.forEach((el) => obj[el.dataset.element] = el.__proto__);
    console.log(obj);
}

let buildVDOM = compose(fragment, tpl);

DOMFragmentBuilder(buildVDOM(html));