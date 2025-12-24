document.getElementById('profilForm').addEventListener('submit', function(e){
    e.preventDefault();

    const duzina = parseInt(document.getElementById('duzina').value);
    const profil = parseInt(document.getElementById('profil').value);
    const cijena = parseFloat(document.getElementById('cijena').value);

    // Izračun broja vertikala (jednostavna formula)
    const polja = 3; // recimo 3 polja
    const brojVertikala = polja + 1;
    const ukupnaDuzina = brojVertikala * duzina / polja / 1000; // m
    const ukupnaCijena = ukupnaDuzina * cijena;

    document.getElementById('rezultat').innerHTML = `
      Broj vertikala: ${brojVertikala}<br>
      Ukupna cijena: ${ukupnaCijena.toFixed(2)} KM
    `;

    // ASCII skica (jednostavna)
    let skica = '';
    for(let i=0; i<brojVertikala; i++){
        skica += '|';
        skica += '-'.repeat(duzina/100) + '|';
        skica += '\n';
    }
    document.getElementById('skica').textContent = skica;
});
