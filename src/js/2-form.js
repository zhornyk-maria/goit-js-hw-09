const STORAGE_KEY = 'feedback-form-state';

function loadFromLS(key = 'null') {
    const data = localStorage.getItem(key); 

    try {
        const result = JSON.parse(data);
        return result;
    } catch {
        return data;
    }
}

function saveToLS(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
}


const form = document.querySelector('.feedback-form');

form.addEventListener('input', (e) => {
    const userEmail = form.elements.email.value.trim();
    const userMessage = form.elements.message.value.trim();

    const data = {
        email: userEmail,
        message: userMessage,
    }
    
});


function restoreData() {
    const data = loadFromLS(STORAGE_KEY) || {};

    form.elements.email.value = data.email || '';
    form.elements.message.value = data.message || '';
}

restoreData();


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = loadFromLS(STORAGE_KEY) || {};
    console.log(data);

    const userEmail = form.elements.email.value.trim();
    const userMessage = form.elements.message.value.trim();;
    if (userEmail === '' || userMessage === '') {
        alert('Please fill in both form elements.');
    }

    localStorage.removeItem(STORAGE_KEY);
    form.reset();
});

