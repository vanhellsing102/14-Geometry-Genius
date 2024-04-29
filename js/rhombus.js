function rhombus(){
    const parallelogramBase =  document.getElementById('value-of-d1').value;
    const d1Text = parseFloat(parallelogramBase);

    const parallelogramHeight = document.getElementById('value-of-d2').value;
    const d2Text = parseFloat(parallelogramHeight);

    const area = 0.5 * d1Text * d2Text;

    const span = document.getElementById('rhombus-span');
    span.innerText = area;

    const calculationArea = document.getElementById('calculation-area');
    const p = document.createElement('p');
    calculationArea.appendChild(p);
    p.innerText = `Rhombus area is = ${area}`;
    p.style.textAlign = 'center';
    p.style.fontSize = '20px';
}