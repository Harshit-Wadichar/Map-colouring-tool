var data = [
    {id: 'INAN'},
    {id: 'INTG'},
    {id: 'INAP'},
    {id: 'INAR'},
    {id: 'INAS'},
    {id: 'INBR'},
    {id: 'INCH'},
    {id: 'INCT'},
    {id: 'INDH'},
    {id: 'INDL'},
    {id: 'INGA'},
    {id: 'INGJ'},
    {id: 'INHR'},
    {id: 'INHP'},
    {id: 'INJH'},
    {id: 'INKA'},
    {id: 'INKL'},
    {id: 'INMP'},
    {id: 'INMH'},
    {id: 'INMN'},
    {id: 'INML'},
    {id: 'INMZ'},
    {id: 'INNL'},
    {id: 'INOR'},
    {id: 'INPY'},
    {id: 'INPB'},
    {id: 'INRJ'},
    {id: 'INSK'},
    {id: 'INTN'},
    {id: 'INTR'},
    {id: 'INUP'},
    {id: 'INUT'},
    {id: 'INWB'},
    {id: 'INLD'},
    {id: 'INJK'},
    {id: 'INLA'}
];

const button = document.querySelector('#button');
const button1 = document.querySelector('#button1');
const listContainer = document.getElementById('list-container');
const currentColor = document.querySelector('#scolor');
const reset = document.querySelector('#reset');

function setColor(sColor){
    currentColor.textContent = `Current Color: ${sColor.toUpperCase()}`;
    currentColor.style.backgroundColor = sColor;
    const r = parseInt(sColor.substr(1,2),16);
    const g = parseInt(sColor.substr(3,2),16);
    const b = parseInt(sColor.substr(5,2),16);
    const yiq = ((r*299)+(g*587)+(b*114))/1000;
    const textColor = yiq >= 128 ? '#000' : '#fff';
    currentColor.style.color = textColor;
    data.forEach(dataItem => {
    document.getElementById(dataItem.id).addEventListener('click', function() {
        document.getElementById(dataItem.id).style.fill = sColor;
    });
})
}

function createLigand(sColor) {
    const listItem = document.createElement('li');
    const input = document.createElement('div');
    input.contentEditable = true;
    input.textContent = "";
    input.className = "editable";
    const box = document.createElement('div');
    box.style.backgroundColor = sColor;
    box.className = "box";
    const r = parseInt(sColor.substr(1,2),16);
    const g = parseInt(sColor.substr(3,2),16);
    const b = parseInt(sColor.substr(5,2),16);
    const yiq = ((r*299)+(g*587)+(b*114))/1000;
    const textColor = yiq >= 128 ? '#000' : '#fff';
    listItem.style.color = textColor;
    listContainer.appendChild(listItem);
    listItem.appendChild(box);
    listItem.appendChild(input);
    box.addEventListener('dblclick', function() {
       listItem.remove();
    });
}

function takeInput(x) {
    let sColor;
    if(x) {
         sColor = document.getElementById('colorPicker').value;
    } else {
         sColor = document.getElementById('input').value;
    }
    setColor(sColor);
    createLigand(sColor);
    }

function resetColors() {
    data.forEach(dataItem => {
        document.getElementById(dataItem.id).style.fill = "white"; 
})
    currentColor.textContent = `Current Color: #FFFFFF`;
    currentColor.style.backgroundColor = '#FFFFFF';
    currentColor.style.color = '#000';
    listContainer.innerHTML = '';
}

button.addEventListener('click', () => takeInput(false));
button1.addEventListener('click', () => takeInput(true));
reset.addEventListener('click', resetColors);


//js to dowload the div as a image -+-+-+-+-+-+-+-+--+-+-+-+-+-+-+-+--+-+-+-+-+-+-+-+--+-
document.getElementById('download').addEventListener('click', function () {
    const divToCapture = document.querySelector('.map');

    // Use html2canvas to capture the div
    html2canvas(divToCapture).then(canvas => {
      // Convert the canvas to an image URL
      const imageURL = canvas.toDataURL('image/png');

      // Create a temporary link element
      const link = document.createElement('a');
      link.href = imageURL;
      link.download = 'map.png'; // File name for download
      link.click(); // Trigger the download
    });
  });