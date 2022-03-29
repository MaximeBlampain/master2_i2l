import {createElement, renderVDOM, mountDOM, makePatch} from "./framework/Core.js";

const firstVDOM = createElement('div', {
    classNames : ['main-content'],
    children: [
        createElement('p', {
            children: ['Lorem ipsum']
        })
    ]
});

const secondVDOM = createElement('div', {
    classNames : ['main-content'],
    children: [
        createElement('p', {
            children: [
                'Lorem ipsum 2',
                createElement('strong', {classNames: ['bold'], children: ['Strong text']})
            ],
        })
    ]
});

// First DOM state
let DOM = renderVDOM(firstVDOM);
mountDOM(DOM, document.getElementById('app'));

// Apply diff between firstVDOM and secondVDOM
setTimeout(() => {
    const patch = makePatch(firstVDOM, secondVDOM);
    DOM = patch(DOM);
},2000)
