function konversi(){
    var celsius = document.getElementById('celsius').value;
    var fahrenheit = document.getElementById('fahrenheit').value;
    var kalkulasi = document.getElementById('kalkulasi').value;
    
    if(celsius != ''){
        fahrenheit = (celsius * 1.8) + 32;
        const output = document.getElementById('fahrenheit');
        output.style.outlineColor = 'rgb(11, 245, 217)';
        output.style.backgroundColor = 'white';
        output.style.boxShadow = '0 0 10px rgb(127, 255, 212)';
        const cara = document.getElementById('kalkulasi');
        cara.style.outlineColor = 'rgb(245, 11, 11)';
        cara.style.backgroundColor = 'white';
        cara.style.boxShadow = '0 0 10px rgb(244, 57, 57)';
        document.getElementById('kalkulasi').value = `(${celsius}\u00b0C  *  1.8) + 32 = ${fahrenheit}\u00b0F`;
    } else {
        const output = document.getElementById('fahrenheit');
        output.style.width = '500px';
        output.style.height = '35px';
        output.style.fontSize = '20px';
        output.style.fontWeight = 'bold';
        output.style.padding = '0 10px';
        output.style.borderRadius = '10px';
        output.style.border = 'solid 2px #000';
        output.style.color = '#000';
        output.style.backgroundColor = 'transparent';
        output.style.outlineColor = 'none';
        output.style.boxShadow = 'none';
        const cara = document.getElementById('kalkulasi');
        cara.style.width = '500px';
        cara.style.height = '35px';
        cara.style.fontSize = '20px';
        cara.style.fontWeight = 'bold';
        cara.style.padding = '0 10px';
        cara.style.borderRadius = '10px';
        cara.style.border = 'solid 2px #000';
        cara.style.color = '#000';
        cara.style.backgroundColor = 'transparent';
        cara.style.outlineColor = 'none';
        cara.style.boxShadow = 'none';
        document.getElementById('kalkulasi').value = '';
    }   
    document.getElementById('fahrenheit').value = fahrenheit;
    document.getElementById('celsius').value = celsius;
}

function reset(){
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
    document.getElementById('kalkulasi').value = '';
    const output = document.getElementById('fahrenheit');
    output.style.width = '500px';
    output.style.height = '35px';
    output.style.fontSize = '20px';
    output.style.fontWeight = 'bold';
    output.style.padding = '0 10px';
    output.style.borderRadius = '10px';
    output.style.border = 'solid 2px #000';
    output.style.color = '#000';
    output.style.backgroundColor = 'transparent';
    output.style.outlineColor = 'none';
    output.style.boxShadow = 'none';
    const cara = document.getElementById('kalkulasi');
    cara.style.width = '500px';
    cara.style.height = '35px';
    cara.style.fontSize = '20px';
    cara.style.fontWeight = 'bold';
    cara.style.padding = '0 10px';
    cara.style.borderRadius = '10px';
    cara.style.border = 'solid 2px #000';
    cara.style.color = '#000';
    cara.style.backgroundColor = 'transparent';
    cara.style.outlineColor = 'none';
    cara.style.boxShadow = 'none';
}
