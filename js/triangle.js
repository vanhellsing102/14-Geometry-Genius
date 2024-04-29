// function triangle(){
//     const triangleBase = document.getElementById('triangle-base');
//     const triangleBaseText = triangleBase.value;
//     const base = parseFloat(triangleBaseText);

//     const triangleHeight = document.getElementById('triangle-height');
//     const triangleHeightText = triangleHeight.value;
//     const height = parseFloat(triangleHeightText);

//     const area = 0.5 * base * height;

//     const span = document.getElementById('triangle-span');
//     span.innerText = area;

//     const calculationArea = document.getElementById('calculation-area');
//     const p = document.createElement('p');
//     p.innerText =  `Triangle area is = ${area}`;
//     p.style.textAlign = 'center';
//     p.style.fontSize = '20px';
//     calculationArea.appendChild(p);
// }



// shortcut **************************************
function triangle(){
    const base = getValue(document.getElementById('triangle-base'));
    const height = getValue(document.getElementById('triangle-height'));

    const area = base * height * 0.5;
    const span = document.getElementById('triangle-span');
    span.innerText = area;
    // shortcut****************
    // setText(document.getElementById('triangle-span'),area);
}
function getValue(parameter){
    const value = parameter.value;
    const text = parseFloat(value);
    return text;
    // shortcut*******************
    // const value = parseFloat(parameter.value);
    // return value;
}

// shortcut************************
// function setText(span, area){
//     span.innerText = area;
// }


