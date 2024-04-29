// function ellipse(){
//     const ellipsePara1 =  document.getElementById('value-of-a').value;
//     const ellipseText1 = parseFloat(ellipsePara1);

//     const ellipsePara2 = document.getElementById('value-of-b').value;
//     const ellipseText2 = parseFloat(ellipsePara2);

//     const area = 3.1416 * ellipseText1 * ellipseText2;

//     const span = document.getElementById('ellipse-span');
//     span.innerText = area;

//     const calculationArea = document.getElementById('calculation-area');
//     const p = document.createElement('p');
//     calculationArea.appendChild(p);
//     p.innerText = `Ellipse area is = ${area}`;
//     p.style.textAlign = 'center';
//     p.style.fontSize = '20px';
// }

// shortcut***************************
function ellipse(){
    const a = getValue('value-of-a');
    const b = getValue('value-of-b');

    const area = 3.1416 * a * b ;

    setValue('ellipse-span', area);
}
function getValue(value){
    const getValue = document.getElementById(value).value;
    const text = parseFloat(getValue);
    return text;
}
function setValue(id,area){
    const setID = document.getElementById(id);
    setID.innerText = area;
}