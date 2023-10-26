const button = document.getElementById('button')
const options = {
    method: 'GET',
    mode:'no-cors'
};

async function getAffirmation() {
     const response = await fetch('https://zenquotes.io/api/quotes/');
			var data = await response.json();
			console.log(data);
}

button.addEventListener('click',getAffirmation)