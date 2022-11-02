const data = [
  {
    id: 'portfolio-1',
    name: 'Booking App',
    job: {
      client: 'MICROVERSE',
      role: 'Full Stack Dev',
      year: '2022',
    },
    description: {
      summary: 'This app uses a Rails back-end as an API to send doctor details and appointment data to the react frontend of a booking application.',

      portfolio:
        'This app uses a Rails back-end as an API to send doctor details and appointment data to the frontend of a booking application.',
    },
    image: {
      mobile: './assets/portfolio/booking-mobile-1.png',
      desktop: './assets/desktop/booking-desktop-1.png',
    },
    technologies: {
      programingLanguage: 'JavaScript',
      frontendLibrary: 'React',
      stateManagment: 'Redux',
      backendFramework: 'Rails',
      authentication: 'Devise',
      test: 'Jest,RSpec',
    },
    links: {
      sourceCode: 'https://github.com/Melaku05/booking-app-backend',
      demo: 'https://booking-app1.netlify.app',
    },
    card: 'card-img-left',
  },
  {
    id: 'portfolio-2',
    name: 'Tv Gallery',
    job: {
      client: 'MICROVERSE',
      role: 'Full Stack Dev',
      year: '2022',
    },
    description: {
      summary: 'Gallerioni movies is an interactive movie streaming website were movie lovers interact with movies my commenting and liking.',
      portfolio:
        'Gallerioni movies is an interactive movie streaming website were movie lovers interact with movies my commenting and liking.',
    },
    image: {
      mobile: './assets/portfolio/tv-gallery-mobile-2.png',
      desktop: './assets/desktop/tv-gallery-desktop-2.png',
    },
    technologies: {
      programingLanguage: 'JavaScript',
      frontendLibrary: 'Linter',
      stateManagment: 'bootstrap',
      backendFramework: 'Api',
      authentication: '',
      test: 'jest',
    },
    links: {
      sourceCode: 'https://github.com/Melaku05/JavaScript-capstone-project',
      demo: 'https://github.com/Melaku05/JavaScript-capstone-project',
    },

    card: 'card-img-right',
  },
  {
    id: 'portfolio-3',
    name: 'Tonic',
    job: {
      client: 'MICROVERSE',
      role: 'Full Stack Dev',
      year: '2022',
    },
    description: {
      summary: 'This website is mobile-friendly and has two pages: Home and Details. The home page lists the 194 countries with the COVID summary. The Details page shows the detailed COVID data of each country selected.',
      portfolio:
        'This website is mobile-friendly and has two pages: Home and Details. The home page lists the 194 countries with the COVID summary. The Details page shows the detailed COVID data of each country selected.',
    },
    image: {
      mobile: './assets/portfolio/covid-mobile-3.png',
      desktop: './assets/desktop/covid-desktop-3.png',
    },
    technologies: {
      programingLanguage: 'JavaScript',
      frontendLibrary: 'React',
      stateManagment: 'Redux',
      backendFramework: 'Api',
      authentication: 'Redux-thunk',
      test: 'jest',
    },
    links: {
      sourceCode: 'https://github.com/Melaku05/booking-app-backend',
      demo: 'https://booking-app1.netlify.app',

    },
    card: 'card-img-left',
  },
  {
    id: 'portfolio-4',
    name: 'E-commerce API ',
    job: {
      client: 'MICROVERSE',
      role: 'Full Stack Dev',
      year: '2022',
    },
    description: {
      summary: 'The E-commerce API project and the project allow the opportunity for demand and supply to have a direct connection.',
      portfolio:
        'The E-commerce API project and the project allow the opportunity for demand and supply to have a direct connection. It was built with python, Django, Django Rest Framework, Djoser, Pytest, Redis, Celery, MYSQL, and PostgreSQL',
    },
    image: {
      mobile: './assets/portfolio/ecommerce-mobile-4.png',
      desktop: './assets/desktop/ecommerce-desktop-4.png',
    },
    technologies: {
      programingLanguage: 'Python',
      frontendLibrary: 'Django',
      stateManagment: 'Celery,Redis',
      backendFramework: 'Django-Rest',
      authentication: 'Djoser',
      test: 'Pytest',

    },
    links: {
      sourceCode: 'https://github.com/Melaku05/Ecommerce_Api',
      demo: '#',

    },
    card: 'card-img-left',
  },
];

const hamburger = document.querySelector('#hamburger');
const close = document.querySelector('#close');
const navigation = document.querySelector('.nav-ul');
const textPortfolio = document.querySelector('.nav-text-1');
const about = document.querySelector('.nav-text-2');
const contact = document.querySelector('.nav-text-3');

// hamburger menu
hamburger.addEventListener('click', (e) => {
  e.preventDefault();

  navigation.classList.toggle('show');
  hamburger.classList.add('hide');
  close.classList.remove('hide');
  textPortfolio.classList.add('menu-text');
  about.classList.add('menu-text');
  contact.classList.add('menu-text');
});

close.addEventListener('click', () => {
  hamburger.classList.remove('hide');
  navigation.classList.remove('show');
});

textPortfolio.addEventListener('click', (e) => {
  e.stopPropagation();

  navigation.classList.remove('show');
  hamburger.classList.remove('hide');
});

about.addEventListener('click', (e) => {
  e.stopPropagation();

  navigation.classList.remove('show');
  hamburger.classList.remove('hide');
});

contact.addEventListener('click', (e) => {
  e.stopPropagation();

  navigation.classList.remove('show');
  hamburger.classList.remove('hide');
});

// popup
// dynamic html code from javascript
const portfolio = document.querySelector('#portfolio');
const modal = document.querySelector('#myModal');

portfolio.classList.add('works');

Array.from(portfolio.children).forEach((child, index) => {
  child.innerHTML = `
  <section class="${data[index].card}">
    <ul>
      <li><img src="${data[index].image.mobile}" alt="icon" class="img-1-1" /></li>
      <li><img src="${data[index].image.desktop}" alt="icon" class="img-1-2" /></li>
    </ul>
    <div class="block-1">
      <div class="text-group">
        <h2 class="lg-text-2">${data[index].name}</h2>
        <div class="client-info">
          <h3 class="client">${data[index].job.client}</h3>
          <a href="#"><img src="./assets/Counter.svg" alt="counter" /></a>
          <h3 class="role">${data[index].job.role}</h3>
          <a href="#"><img src="./assets/Counter.svg" alt="counter" /></a>
          <h3 class="year-label">${data[index].job.year}</h3>
        </div>
      </div>
      <h3 class="sm-text-2">${data[index].description.summary}</h3>
      <ul class="tags">
        <li>${data[index].technologies.programingLanguage}</li>
        <li>${data[index].technologies.frontendLibrary}</li>
        <li>${data[index].technologies.stateManagment}</li>
        <li>${data[index].technologies.backendFramework}</li>
        <li>${data[index].technologies.authentication}</li>
        <li>${data[index].technologies.test}</li>
       

      </ul>

      <div class="actions" id="${data[index].id}">
        <button class="btn" id="btn" type="button">See Project</button>
      </div>
    </div>
  </section>`;
});

// modals
Array.from(portfolio.children).forEach((item, index) => {
  item.firstElementChild.lastElementChild.lastElementChild.firstElementChild.addEventListener('click', () => {
    modal.innerHTML = `
    <!-- Modal content -->
    <section class="modal-content">
      <div class="popup-text-group">
        <div class="text-group">
          <h2 class="popup-text-lg">${data[index].name}</h2>
          <div class="client-info">
            <h3 class="client">${data[index].job.client}</h3>
            <a href="#"><img src="./assets/Counter.svg" alt="counter" /></a>
            <h3 class="role">${data[index].job.role}</h3>
            <a href="#"><img src="./assets/Counter.svg" alt="counter" /></a>
            <h3 class="year-label">${data[index].job.year}</h3>
          </div>
        </div>
        <span class="close">&times;</span>
      </div>
      <ul>
        <li><img src="${data[index].image.mobile}" alt="icon" class="img-1-1" /></li>
        <li><img src="${data[index].image.desktop}" alt="icon" class="img-1-2 popup-img" /></li>
      </ul>
      <div class="popup-bottom">
        <p class="popup-text-sm">${data[index].description.portfolio}</p>
        <div class="popup-block">
          <ul class="tags ${data[index].id}">
          </ul>
          <div class="popup-actions">
            <button class="btn btnImg" id="btn" type="button"><a href="${data[index].links.demo}">See Live</a>
              <img src="./assets/btnIcon-1.svg" alt="icon" id="imgIcon" />
            </button>
            <button class="btn btnImg" id="btn" type="button"> <a href="${data[index].links.sourceCode}">See Source</a> 
              <img src="./assets/cat.svg" alt="icon" id="imgIcon" />
            </button>
          </div>
        </div>
      </div>
    </section>
    `;

    const ulList = document.querySelector('.popup-block .tags');

    Object.keys(data[index].technologies).forEach((e) => {
      ulList.innerHTML += `<li>${data[index].technologies[e]}</li>`;
    });

    modal.style.display = 'block';
    const span = document.getElementsByClassName('close')[0];
    span.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
});

// form validation
const form = document.querySelector('.form');
const emailInput = form.elements.email;

const INPUT_LOWERCASE = 'Error : Please enter a lowercase input';

function showMessage(input, message, type) {
  const msg = document.querySelector('.error-text');
  msg.innerText = message;
  input.className = type ? 'success' : 'error';
  return type;
}

function showError(input, message) {
  return showMessage(input, message, false);
}

function validateEmail(input, invalidLowercase) {
  if (input.value === input.value.toLowerCase()) {
    return true;
  }
  return showError(input, invalidLowercase);
}

// local storage
function saveUserDetails() {
  const formData = new FormData(form);
  const fullname = formData.get('fullname');
  const email = formData.get('email');
  const feedback = formData.get('feedback');
  const myFormData = { name: fullname, email, feedback };
  localStorage.setItem('myFormData', JSON.stringify(myFormData));
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValid = validateEmail(emailInput, INPUT_LOWERCASE);
  if (emailValid) {
    form.submit();
    saveUserDetails();
  }
});

const stored = localStorage.getItem('myFormData');

function getUserDetails(localObj) {
  const userDetails = JSON.parse(localObj);
  form.fullname.value = userDetails.name;
  form.email.value = userDetails.email;
  form.feedback.value = userDetails.feedback;
}

getUserDetails(stored);
