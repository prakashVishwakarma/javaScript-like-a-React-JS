// Vanilla JavaScript component
export default function createCardComponent(text, link, text2) {

    const div = document.createElement('div');
    const pInsideA = document.createElement('p');
    const p2InsideA = document.createElement('p');
    const divInsideA = document.createElement('div');
    const divInsideDiv = document.createElement('div');
    const a = document.createElement('a');


    div.classList.add('card');
    a.classList.add('card1');
    p2InsideA.classList.add('small');
    divInsideA.classList.add('go-corner');
    divInsideDiv.classList.add('go-arrow');

    a.href = link
    divInsideA.href = link
    pInsideA.innerText = text
    p2InsideA.innerText = text2
    divInsideDiv.innerText = '→'

    div.appendChild(a);
    a.appendChild(pInsideA)
    a.appendChild(p2InsideA)
    a.appendChild(divInsideA)
    divInsideA.appendChild(divInsideDiv)

    return div;
}
