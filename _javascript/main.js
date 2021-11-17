// Anketa
document.querySelector('#submit-form').addEventListener('click', function(e){

  const url = 'https://script.google.com/macros/s/AKfycby7ZaxZSNHpvjNCh0PMvVdTlWJ4l8FwTLjWwUmb45NqrpmyqztDn4716wzt_Pz6LT6M/exec';
  

  e.preventDefault();

  if( document.getElementById('ime_prezime').value != '' &&
      (document.getElementById('dolazim').checked || document.getElementById('ne_dolazim').checked) &&
      (document.getElementById('DA_imam').checked || document.getElementById('NE_nemam').checked)
  ) {

      document.querySelector('#submit-form').classList.add('is-hidden');
      document.querySelector('#error-msg').classList.add('is-hidden');
      document.querySelector('#loading-indicator').classList.remove('is-hidden');

      document.getElementById('ime_prezime').classList.remove('error_ime');
      document.querySelector('.error_ime__message').classList.add('is-hidden');
      document.querySelector('.error__labels__dolazak').classList.remove('error_dolazak');
      document.querySelector('.error_dolazak__message').classList.add('is-hidden');
      document.querySelector('.error__labels__potvrda').classList.remove('error_potvrda');
      document.querySelector('.error_potvrda__message').classList.add('is-hidden');

      fetch(url,{
        method: 'POST',
        mode: 'no-cors',
        cache: 'no-cache',
        headers: {
        'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: $('form#ESA_obrazac').serializeJSON()
      })
        .then(document.querySelector('#loading-indicator').classList.add('is-hidden'))
        .then(document.querySelector('#response-msg').classList.remove('is-hidden'));
        
  } else {
    document.querySelector('#error-msg').classList.remove('is-hidden');

    if (document.getElementById('ime_prezime').value == '') {
      document.getElementById('ime_prezime').classList.add('error_ime');
      document.querySelector('.error_ime__message').classList.remove('is-hidden');
    } else {
      document.getElementById('ime_prezime').classList.remove('error_ime');
      document.querySelector('.error_ime__message').classList.add('is-hidden');
    };

    if (!(document.getElementById('dolazim').checked) && !(document.getElementById('ne_dolazim').checked)) {
      document.querySelector('.error__labels__dolazak').classList.add('error_dolazak');
      document.querySelector('.error_dolazak__message').classList.remove('is-hidden');
    } else {
      document.querySelector('.error__labels__dolazak').classList.remove('error_dolazak');
      document.querySelector('.error_dolazak__message').classList.add('is-hidden');
    };

    if (!(document.getElementById('DA_imam').checked) && !(document.getElementById('NE_nemam').checked)) {
      document.querySelector('.error__labels__potvrda').classList.add('error_potvrda');
      document.querySelector('.error_potvrda__message').classList.remove('is-hidden');
    } else {
      document.querySelector('.error__labels__potvrda').classList.remove('error_potvrda');
      document.querySelector('.error_potvrda__message').classList.add('is-hidden');
    };
  }

});