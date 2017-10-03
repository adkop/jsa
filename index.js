// const app = document.getElementById("app");
// app.insertAdjacentText("beforeEnd", "");

// const arr = [ 2, 5, 8, 1];
// console.log(...arr);

// function fn(param1, param2, ...args){
//     console.log(args);
// }

// fn(1, 3, 5, 'a', 'c');

// const obj2 = {
//     p1: 'a',
//     p10: {
//         p10_1 : 'AdK'
//     }
// };

// const { p10: { p10_1: zm1 }, p1 } = obj2;

// console.log(zm1, p1);

// const min = 2;
// const max = 10;
// const array = [3, 5, 7, 8];

// function minMax(min, max, ...array) {
//     const a = array.map(number => (min <= number && number <= max) ? number : "-");
//     console.log.apply(console, a);
// }
// minMax(2, 10, 1, 5, 6, 7);

// console.log(
//         [3, 5, 8, 10].reduce((sum, item) => sum + item, 0)
// );

// const string = `array is ${array}, and play with js ${2 + 3}`;
// console.log(string);


// class Abc {
//     constructor(a, b){
//         this.a = a;
//         this.b = b;
//     }
//     area(){
//         return this.a * this.b;
//     }    
//     method1(param1){
//         return param1;
//     }
// }
// const rect = new A(2, 5);
// console.log(rect.area());

// class B extends A {  //B dziedziczy po klasie A
//     constructor(...args) {
//         super(args); //wywołuje konstruktora klasy A
//     }
// }

// objhtml = [{
//     nodeName : "div",
//     attributes: {
//         className : "find-text",
//         role : "toolbar"
//     },
//     childNodes: [{
//         nodeName : "form",
//         attributes : {
//             className : "find-text__form",
//             action : "#",
//             method : "GET"
//         },
//         childNodes: [{
//             nodeName : "div",
//             attributes : {},
//             childNodes: [{
//                 nodeName : "fieldset",
//                 attributes: {
//                     name : "find"
//                 },
//                 childNodes: [{
//                     nodeName : "div",
//                     attributes : {},
//                     childNodes: [{
//                         nodeName : "ul",
//                         attributes : {},
//                         childNodes: [{
//                             nodeName : "li",
//                             attributes: {
//                                 role : "checkbox",
//                             },
//                             childNodes: [{
//                                 nodeName : "input",
//                                 attributes: {
//                                     type : "checkbox",
//                                     id : "find-matchcase",
//                                     name : "option",
//                                     value : "matchcase",
//                                     "data-cmd" : "ignoreCase", 
//                                     className : "find"
//                                 }
//                             },
//                             {
//                                 nodeName : "label",
//                                 attributes: {
//                                     for : "find-matchcase", 
//                                     title : "Case sensitive",
//                                     childNodes: [{
//                                         nodeName : "text",
//                                         attributes : {
//                                             text : "Aa"
//                                         }
//                                     }]
//                                 }
//                             }]
//                         }]
//                     }]
//                 }]
//             }]
//         }]
//     }]
// }]    

// function buildHtml(object) {
//     let htmlObject = object;
//     const attrMap = {
//         className: "class"
//     }

//     if (!Array.isArray(object)) {
//         htmlObject = [object];
//     }

//     function htmlAttributes(attributes){
//         return Object.keys(attributes).map(attributeName => {
//             return `${attrMap[attributeName] || attributeName}="${attributes[attributeName]}"`;
//         }).join(" ");
//     }

//     return htmlObject.map(({ nodeName, attributes, childNodes }) => 
//         `<${nodeName} ${htmlAttributes(attributes)}> ${buildHtml(childNodes)} </${nodeName}>`).join("");
//         return;
// }

// console.log(buildHtml(objhtml));


const html = `
    <div class="{{CLASS_NAME}}" role="toolbar">
        <form action="#" method="GET" class="{{CLASS_NAME_FORM}}">
            <fieldset name="find" data-element="fieldset">{{TEXT}}</fieldset>
        </form>
    </div> `;

const PATTERN = /\{\{(.*)\}\}/gm;

function tpl(str, model) {
    return str.replace(PATTERN, ($0, $1) => model[$1] || $0);
}

document.createDocumentFragment();

console.log(tpl(html, {TEXT:"LaLaLa"}));

