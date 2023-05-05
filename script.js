const aziendaInput = document.getElementById('azienda');
const prodottoInput = document.getElementById('prodotto');
const giornoAcquistoInput = document.getElementById('giorno-acquisto');
const meseAcquistoInput = document.getElementById('mese-acquisto');
const annoAcquistoInput = document.getElementById('anno-acquisto');
const nrProdottiAcquistatiInput = document.getElementById('nr-prodotti-acquistati');
const prezzoInput = document.getElementById('prezzo');
const tempiConsegnaInputs = document.querySelectorAll('input[name="tempi-consegna"]');
const codiceAcquistoInput = document.getElementById('codice-acquisto');
const codiceAcquistoBtn = document.getElementById('codice-acquisto-btn');

function isValidAzienda() {
    return aziendaInput.value.trim() !== '' && /^[a-zA-Z]+$/.test(aziendaInput.value.trim());
}

function isValidProdotto() {
    return prodottoInput.value.trim() !== '' && /^[a-zA-Z]+$/.test(prodottoInput.value.trim());
}

function isValidGiornoAcquisto() {
    return /^[0-9]{1,2}$/.test(giornoAcquistoInput.value.trim()) && parseInt(giornoAcquistoInput.value.trim()) <= 31;
}

function isValidMeseAcquisto() {
    const mesi = ['GEN', 'FEB', 'MAR', 'APR', 'MAG', 'GIU', 'LUG', 'AGO', 'SET', 'OTT', 'NOV', 'DIC'];
    return mesi.includes(meseAcquistoInput.value.trim());
}

function isValidAnnoAcquisto() {
    return /^[0-9]{4}$/.test(annoAcquistoInput.value.trim()) && parseInt(annoAcquistoInput.value.trim()) >= 2000 && parseInt(annoAcquistoInput.value.trim()) <= 2017;
}

function isValidNrProdottiAcquistati() {
    return /^[0-9]{1,2}$/.test(nrProdottiAcquistatiInput.value.trim()) && parseInt(nrProdottiAcquistatiInput.value.trim()) >= 1 && parseInt(nrProdottiAcquistatiInput.value.trim()) <= 99;
}

function isValidPrezzo() {
    return /^[0-9]{1,3}$/.test(prezzoInput.value.trim()) && parseInt(prezzoInput.value.trim()) >= 1 && parseInt(prezzoInput.value.trim()) <= 999;
}

function isValidTempiConsegna() {
    for(let i = 0; i < tempiConsegnaInputs.length; i++) {
        if(tempiConsegnaInputs[i].checked) {
            return true;
        }
    }
    return false;
}

function updateCodiceAcquisto() {
    const codiceAzienda = aziendaInput.value.trim().substring(0, 4).toUpperCase();
    const codiceProdotto = prodottoInput.value.trim().substring(0, 3).toUpperCase();
    const codiceGiorno = giornoAcquistoInput.value.trim().padStart(2, '0');
    const codiceMese = meseAcquistoInput.value.trim().substring(0, 3).toUpperCase();
    const codiceAnno = annoAcquistoInput.value.trim().substring(2);
    const codiceNrProdotti = nrProdottiAcquistatiInput.value.trim().padStart(2, '0');
    const codicePrezzo = prezzoInput.value.trim().padStart(3, '0');
    codiceAcquistoInput.value = codiceAzienda + codiceProdotto + codiceGiorno + codiceMese + codiceAnno + codiceNrProdotti + codicePrezzo;
}

aziendaInput.addEventListener('blur', function() {
    if(!isValidAzienda()) {
        alert('Il campo Azienda deve contenere solo caratteri');
        aziendaInput.focus();
    }
});

prodottoInput.addEventListener('blur', function() {
    if(!isValidProdotto()) {
        alert('Il campo Prodotto deve contenere solo caratteri');
        prodottoInput.focus();
    }
});

giornoAcquistoInput.addEventListener('blur', function() {
    if(!isValidGiornoAcquisto()) {
        alert('Il campo Giorno acquisto deve essere un numero compreso tra 1 e 31');
        giornoAcquistoInput.focus();
    }
});

meseAcquistoInput.addEventListener('blur', function() {
    if(!isValidMeseAcquisto()) {
        alert('Il campo Mese acquisto deve contenere le prime tre lettere del mese in maiuscolo');
        meseAcquistoInput.focus();
    }
});

annoAcquistoInput.addEventListener('blur', function() {
    if(!isValidAnnoAcquisto()) {
        alert('Il campo Anno acquisto deve essere un numero compreso tra 2000 e 2017');
        annoAcquistoInput.focus();
    }
});

nrProdottiAcquistatiInput.addEventListener('blur', function() {
    if(!isValidNrProdottiAcquistati()) {
        alert('Il campo Nr. prodotti acquistati deve essere un numero compreso tra 1 e 99');
        nrProdottiAcquistatiInput.focus();
    }
});

prezzoInput.addEventListener('blur', function() {
    if(!isValidPrezzo()) {
        alert('Il campo Prezzo deve essere un numero compreso tra 1 e 999');
        prezzoInput.focus();
        }
    });
        
codiceAcquistoBtn.addEventListener('click', function() {
    if(isValidAzienda() && isValidProdotto() && isValidGiornoAcquisto() && isValidMeseAcquisto() && isValidAnnoAcquisto() && isValidNrProdottiAcquistati() && isValidPrezzo() && isValidTempiConsegna()) {
        updateCodiceAcquisto();
    }
})