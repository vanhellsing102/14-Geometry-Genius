function parallelogram(){
    const parallelogramBase =  document.getElementById('parallelogram-base').value;
    const baseText = parseFloat(parallelogramBase);


    const parallelogramHeight = document.getElementById('parallelogram-height').value;
    const heightText = parseFloat(parallelogramHeight);

    const area = baseText * heightText;

    const span = document.getElementById('parallelogram-span');
    span.innerText = area;

    const calculationArea = document.getElementById('calculation-area');
    const p = document.createElement('p');
    calculationArea.appendChild(p);
    p.innerText = `Parallelogram area is = ${area}`;
    p.style.textAlign = 'center';
    p.style.fontSize = '20px';
}