const googleFitLoginBtn = document.getElementById('google-fit-login-btn');
const fitBitLoginBtn = document.getElementById('fit-bit-login-btn');

const REDIRECT_URI = 'http://localhost:5500/redirect.html';

const googleFit = {
  baseUrl: 'https://accounts.google.com/o/oauth2/auth',
  clientId:'287747751322-dq08iikhc0k2jgkffs9om8r5vrd979vo.apps.googleusercontent.com',
  scopes: [
    'https://www.googleapis.com/auth/fitness.activity.read',
    'https://www.googleapis.com/auth/fitness.body.read',
    'https://www.googleapis.com/auth/fitness.heart_rate.read',
    'https://www.googleapis.com/auth/fitness.sleep.read'
  ],
  responseType: 'code'
}

const fitBit = {
  baseUrl: 'https://www.fitbit.com/oauth2/authorize',
  clientId:'23RXM3',
  scopes: [
    'activity',
    'heartrate', 
    'sleep', 
    'weight',
  ],
  responseType: 'code'
}

function createValidUrl(serviceObj) {
  return `${serviceObj.baseUrl}?client_id=${serviceObj.clientId}&scope=${serviceObj.scopes.join('%20')}&redirect_uri=${REDIRECT_URI}&response_type=${serviceObj.responseType}`
}

const google_fit_auth_url = createValidUrl(googleFit);
const fit_bit_auth_url = createValidUrl(fitBit);

googleFitLoginBtn.addEventListener('click', () => {
  window.open(google_fit_auth_url)
})

fitBitLoginBtn.addEventListener('click', () => {
  window.open(fit_bit_auth_url)
})