function pentagon(){
    const pentagonParameter =  document.getElementById('pentagon-parameter').value;
    const pentagonText = parseFloat(pentagonParameter);

    const pentagonBase = document.getElementById('pentagon-base').value;
    const baseText = parseFloat(pentagonBase);

    const area = 0.5 * pentagonText * baseText;

    const span = document.getElementById('pentagon-span');
    span.innerText = area;

    const calculationArea = document.getElementById('calculation-area');
    const p = document.createElement('p');
    calculationArea.appendChild(p);
    p.innerText = `Pentagon area is = ${area}`;
    p.style.textAlign = 'center';
    p.style.fontSize = '20px';
}