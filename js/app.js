const body = document.querySelector('body');
const taImport = document.getElementById('paste-zone__data');
const btnImport = document.getElementById('btn-import');
let skus = [];
const btnPrint = document.getElementById('btn-print');
const btnReset = document.getElementById('btn-reset');


btnImport.addEventListener('click', () => {
    let importTa = taImport.value.split('\n');
    console.log('importTa', importTa);
    const finalArray = [];
    for(line of importTa){
        if(line.trim() != ''){
            finalArray.push(line.trim());
        }
    }
    console.log('finalArray', finalArray);
    skus = finalArray;
    alert('Données importées !');
});

btnPrint.addEventListener('click', () => {
    body.innerHTML = '';
    for(var i=0; i<skus.length; i++) {
        var barcode = document.createElement('img');
        barcode.id = skus[i];
        JsBarcode(barcode, skus[i]);
        barcode.setAttribute('style','margin:1rem;width:300px;height:120px');
        body.appendChild(barcode);
        body.setAttribute('style','display:flex;flex-direction:row;flex-wrap:wrap;align-content:flex-start;')
    }
});

btnReset.addEventListener('click', () => {
    taImport.value = '';
    taImport.focus();
});