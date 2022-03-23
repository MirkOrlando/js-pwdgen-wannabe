/* unsecure passwords generator */

const schedule = 'Unsecure Passwords Generator'

document.getElementById('schedule_name').innerHTML = schedule

const a_bit_of_security = '22'

/* ask user firstname */

const firstname = prompt('Inserisci il tuo nome')

/* ask user lastname */

const lastname = prompt('Inserisci il tuo cognome')

/* ask user fav color */

const fav_color = prompt('Inserisci il tuo colore preferito')

/* define const unsecure password */

const unsecure_password = firstname + lastname + fav_color + a_bit_of_security
/* write user unsecure password */

document.getElementById('password').innerHTML = unsecure_password