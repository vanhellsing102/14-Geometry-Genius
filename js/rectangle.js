function rectangleArea(){
    const rectangleWidth  = document.getElementById('rectangle-width').value;
    const widthText = parseFloat(rectangleWidth);

    const rectangleLength = document.getElementById('rectangle-length').value;
    const lengthText = parseFloat(rectangleLength);
    
    const area = widthText * lengthText;
    
    const span = document.getElementById('rectangle-span');
    span.innerText = area;

    const calculationArea = document.getElementById('calculation-area');
    const p = document.createElement('p');
    p.innerText = `Rectangle area is = ${area}`;
    p.style.textAlign = 'center';
    p.style.fontSize = '20px';
    calculationArea.appendChild(p);
}
