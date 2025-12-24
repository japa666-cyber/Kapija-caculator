<!doctype html>
<html lang="bs">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Klizna kapija – PRO</title>
<style>
  body{font-family:Arial,system-ui,-apple-system,Segoe UI,Roboto,Helvetica Neue;padding:20px;background:#f2f2f2}
  .box{background:#fff;padding:20px;border-radius:10px;max-width:560px;margin:20px auto;box-shadow:0 6px 18px rgba(0,0,0,0.06)}
  label{font-weight:700;margin-top:12px;display:block}
  input,select,button{width:100%;padding:8px;border-radius:6px;border:1px solid #dcdcdc;font-size:15px;box-sizing:border-box}
  input[type="number"]{appearance:textfield;}
  .row{display:flex;gap:12px}
  .row > *{flex:1}
  button.primary{margin-top:15px;background:#4caf50;color:#fff;border:0;padding:11px;font-size:16px;cursor:pointer}
  .result{margin-top:15px;background:#fff8dc;padding:12px;border-radius:6px;border:1px solid #f0e6b8}
  pre{background:#111;color:#0f0;padding:12px;font-size:13px;overflow:auto;border-radius:6px}
  .actions{display:flex;gap:8px;margin-top:8px}
  .actions button{flex:1}
  .note{font-size:13px;color:#666;margin-top:8px}
  .warning{color:#a94442;background:#f2dede;padding:8px;border-radius:6px;margin-top:8px}
</style>
</head>
<body>
<div class="box">
  <h2>Klizna kapija – METAL PRO</h2>

  <label for="prolaz">Širina prolaza (mm)</label>
  <input id="prolaz" type="number" min="200" step="1" value="4000">

  <label for="visina">Visina kapije (mm)</label>
  <input id="visina" type="number" min="200" step="1" value="1600">

  <div class="row">
    <div>
      <label for="okvir">Profil okvira</label>
      <select id="okvir">
        <option value="60">60×60</option>
        <option value="40" selected>40×40</option>
      </select>
    </div>

    <div>
      <label for="ispuna">Ispuna</label>
      <!-- value=width of filling (mm). Height of ispuna (profile) is 20 mm in these options -->
      <select id="ispuna">
        <option value="20" data-h="20">20×20</option>
        <option value="40" data-h="20">40×20</option>
      </select>
    </div>
  </div>

  <button id="calcBtn" class="primary">Izračunaj</button>

  <div id="rez" class="result" aria-live="polite"></div>

  <pre id="cut" readonly></pre>

  <div class="actions">
    <button id="copyBtn">Kopiraj cut listu</button>
    <button id="downloadBtn">Preuzmi kao .txt</button>
  </div>

  <div id="msg" class="note"></div>
</div>

<script>
(function(){
  const prolazEl = document.getElementById('prolaz');
  const visinaEl = document.getElementById('visina');
  const okvirEl = document.getElementById('okvir');
  const ispunaEl = document.getElementById('ispuna');
  const rezEl = document.getElementById('rez');
  const cutEl = document.getElementById('cut');
  const calcBtn = document.getElementById('calcBtn');
  const copyBtn = document.getElementById('copyBtn');
  const downloadBtn = document.getElementById('downloadBtn');
  const msgEl = document.getElementById('msg');

  function formatMm(n){ return Math.round(n) + ' mm'; }
  function formatM(n){ return (n).toFixed(2) + ' m'; }

  function calc(){
    msgEl.textContent = '';
    const prolaz = Number(prolazEl.value);
    const visina = Number(visinaEl.value);
    const okvir = Number(okvirEl.value);
    const ispuna = Number(ispunaEl.value);
    const ispunaVisina = Number(ispunaEl.selectedOptions[0].dataset.h || 20);

    if (!isFinite(prolaz) || !isFinite(visina) || prolaz <= 0 || visina <= 0) {
      rezEl.innerHTML = '<div class="warning">Unesite ispravne pozitivne dimenzije za prolaz i visinu.</div>';
      cutEl.textContent = '';
      return;
    }

    // kontra-teg = 35% od prolaza (isto kao tvoje pravilo)
    const kontra = Math.round(prolaz * 0.35);
    const ukupno = Math.round(prolaz + kontra);

    // čista širina i visina između okvira
    const cistaSirina = ukupno - (2 * okvir);
    const cistaVisina = visina - (2 * okvir);

    // pravilo za maksimalni razmak za određenu širinu ispune
    const maxRazmak = ispuna === 20 ? 110 : 140;

    // broj ispuna koliko stane (cijeli komadi)
    let brojIspuna = Math.floor(cistaSirina / (maxRazmak + ispuna));
    if (brojIspuna < 0) brojIspuna = 0;

    // ako broj ispuna 0 pokušaj s 1 komad (ako ipak treba barem jedan)
    if (brojIspuna === 0) {
      // provjeri može li stati barem jedan bez prijeloma
      if (ispuna <= cistaSirina) brojIspuna = 1;
    }

    const razmak = brojIspuna >= 0 ? (cistaSirina - brojIspuna * ispuna) / (Math.max(1, brojIspuna) + 1) : 0;

    // metri profila: okvir (donja+gornja+2 vertikale) i ispuna (brojIspuna * dužina)
    const okvirMetri = (2 * ukupno + 2 * visina) / 1000;
    const ispunaMetri = (brojIspuna * cistaVisina) / 1000;

    // Prikaži rezultate
    rezEl.innerHTML = `
<b>Dimenzije:</b><br>
➤ Kontra-teg: ${formatMm(kontra)}<br>
➤ Ukupna dužina kapije: ${formatMm(ukupno)}<br>
➤ Čista širina (između okvira): ${formatMm(cistaSirina)}<br>
➤ Čista visina (između okvira): ${formatMm(cistaVisina)}<br>
➤ Razmak ispune: ${isFinite(razmak) ? razmak.toFixed(1) + ' mm' : '-'}<br>
➤ Broj ispuna: ${brojIspuna} kom<br>
➤ Ukupno profila: ${formatM(okvirMetri + ispunaMetri)}
`;

    // Sastavi cut listu tekst
    const ispunaText = `${ispuna}×${ispunaVisina}`;
    const cutText = `CUT LIST – KLIZNA KAPIJA

OKVIR ${okvir}×${okvir}
• Donja greda: 1 × ${ukupno.toFixed(0)} mm (šina)
• Gornja greda: 1 × ${ukupno.toFixed(0)} mm
• Vertikale: 2 × ${visina.toFixed(0)} mm

ISPUNA ${ispunaText}
• Vertikale (ispune): ${brojIspuna} × ${cistaVisina.toFixed(0)} mm

UKUPNO:
• Okvir: ${formatM(okvirMetri)}
• Ispuna: ${formatM(ispunaMetri)}
`;

    cutEl.textContent = cutText;

    // poruka ako nema ispuna
    if (brojIspuna === 0) {
      msgEl.innerHTML = 'Upozorenje: po trenutnim dimenzijama neće stati niti jedna ispuna (broj ispuna = 0). Provjerite širinu prolaza, širinu ispune ili profil okvira.';
    }
  }

  // Kopiranje cut liste u clipboard
  copyBtn.addEventListener('click', async function(){
    try{
      const txt = cutEl.textContent;
      if (!txt) { msgEl.textContent = 'Nema cut liste za kopiranje.'; return; }
      await navigator.clipboard.writeText(txt);
      msgEl.textContent = 'Cut lista kopirana u clipboard.';
    }catch(e){
      msgEl.textContent = 'Greška: ne mogu kopirati (provjerite dozvole).';
    }
  });

  // Preuzimanje kao tekstualna datoteka
  downloadBtn.addEventListener('click', function(){
    const txt = cutEl.textContent;
    if (!txt) { msgEl.textContent = 'Nema cut liste za preuzimanje.'; return; }
    const blob = new Blob([txt], {type: 'text/plain;charset=utf-8'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cut-list-klizna-kapija.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    msgEl.textContent = 'Datoteka preuzeta.';
  });

  // Event listener za gumb i enter na input poljima
  calcBtn.addEventListener('click', calc);
  [prolazEl, visinaEl, okvirEl, ispunaEl].forEach(el=>{
    el.addEventListener('keydown', function(e){
      if (e.key === 'Enter') calc();
    });
  });

  // inicijalni izračun
  calc();
})();
</script>
</body>
</html>