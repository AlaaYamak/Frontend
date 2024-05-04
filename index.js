const googleFitLoginBtn = document.getElementById('google-fit-login-btn');

const CLIENT_ID = '287747751322-dq08iikhc0k2jgkffs9om8r5vrd979vo.apps.googleusercontent.com';
const REDIRECT_URI = 'http://localhost:5500/redirect.html';
const auth_url = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=https://www.googleapis.com/auth/fitness.activity.read%20https://www.googleapis.com/auth/fitness.body.read%20https://www.googleapis.com/auth/fitness.heart_rate.read%20https://www.googleapis.com/auth/fitness.sleep.read`;

googleFitLoginBtn.addEventListener('click', () => {
  window.open(auth_url)
})