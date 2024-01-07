import createCardComponent from './createCardComponent.js';

    
document.addEventListener('DOMContentLoaded', function () {

    const text = 'This is heading'
    const text2 = 'Card description with lots of great facts and interesting details.'
    const link = 'index.html'

    const appContainer = document.getElementById('app');
    appContainer.appendChild(createCardComponent(text, link, text2));
    appContainer.appendChild(createCardComponent(text, link, text2));
    appContainer.appendChild(createCardComponent(text, link, text2));
    appContainer.appendChild(createCardComponent(text, link, text2));
    appContainer.appendChild(createCardComponent(text, link, text2));
});