// script untuk button konversi
function konversi(){
    var celsius = document.getElementById('celsius').value;
    var fahrenheit = document.getElementById('fahrenheit').value;
    var kalkulasi = document.getElementById('kalkulasi').value;
    
    if(celsius != '' && document.getElementById('fahrenheit').disabled){
        fahrenheit = (celsius * 1.8) + 32;
        const input = document.getElementById('celsius');
        input.style.backgroundColor = 'transparent';
        input.style.outlineColor = 'none';
        input.style.boxShadow = 'none';
        const output = document.getElementById('fahrenheit');
        output.style.outlineColor = 'rgb(11, 245, 217)';
        output.style.backgroundColor = 'white';
        output.style.boxShadow = '0 0 10px rgb(127, 255, 212)';
        const cara = document.getElementById('kalkulasi');
        cara.style.outlineColor = 'rgb(245, 11, 11)';
        cara.style.backgroundColor = 'white';
        cara.style.boxShadow = '0 0 10px rgb(244, 57, 57)';
        document.getElementById('kalkulasi').value = `(${celsius}\u00b0C  *  1.8) + 32 = ${fahrenheit}\u00b0F`;
    } else if(fahrenheit != '' && document.getElementById('celsius').disabled){
        celsius = (fahrenheit - 32) * 5/9;
        const input = document.getElementById('celsius');
        input.style.outlineColor = 'rgb(11, 245, 217)';
        input.style.backgroundColor = 'white';
        input.style.boxShadow = '0 0 10px rgb(127, 255, 212)';
        const output = document.getElementById('fahrenheit');
        output.style.backgroundColor = 'transparent';
        output.style.outlineColor = 'none';
        output.style.boxShadow = 'none';
        const cara = document.getElementById('kalkulasi');
        cara.style.outlineColor = 'rgb(245, 11, 11)';
        cara.style.backgroundColor = 'white';
        cara.style.boxShadow = '0 0 10px rgb(244, 57, 57)';
        document.getElementById('kalkulasi').value = `(${fahrenheit}\u00b0F  -  32) * 5/9 = ${celsius}\u00b0C`;
    }
    document.getElementById('fahrenheit').value = fahrenheit;
    document.getElementById('celsius').value = celsius;
}


// script untuk button reset
function reset(){
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
    document.getElementById('kalkulasi').value = '';
    const input = document.getElementById('celsius');
    input.style.backgroundColor = 'transparent';
    input.style.outlineColor = 'none';
    input.style.boxShadow = 'none';
    const output = document.getElementById('fahrenheit');
    output.style.backgroundColor = 'transparent';
    output.style.outlineColor = 'none';
    output.style.boxShadow = 'none';
    const cara = document.getElementById('kalkulasi');
    cara.style.backgroundColor = 'transparent';
    cara.style.outlineColor = 'none';
    cara.style.boxShadow = 'none';
}


// script untuk button reverse
function reverse(){
    let inputF = document.getElementById('fahrenheit');
    let outputC = document.getElementById('celsius');
    inputF.disabled = !inputF.disabled;
    outputC.disabled = !outputC.disabled;    
}
