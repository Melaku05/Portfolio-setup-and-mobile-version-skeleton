const body = document.querySelector('body');
const menuDiv = document.createElement('div');
menuDiv.className = 'menu-content';
menuDiv.style.display = 'none';

const htmlContent = `<img class="x-menu" src="images/Icon-Cancel.svg" alt="cancel image">
<ul class="menu-list-item">
  <li class="portfolio"><a class="menu-list-items" href="#portfolio">Portfolio</a></li>
  <li class="about"><a class="menu-list-items" href="#about">About</a></li>
  <li class="contact"><a class="menu-list-items" href="#contact">Contact</a></li>
</ul>`;

menuDiv.innerHTML = htmlContent;
body.appendChild(menuDiv);
const cancelImage = menuDiv.querySelector('img');
cancelImage.className = 'x-menu';
cancelImage.src = 'images/Icon-Cancel.svg';
cancelImage.alt = 'cancel image';

const menuIcon = document.querySelector('.menu');
menuIcon.addEventListener('click', () => {
  menuDiv.style.display = 'flex';
  document.getElementById('header').style.filter = 'blur(0.3125rem)';
});

cancelImage.addEventListener('click', () => {
  menuDiv.style.display = 'none';
  document.getElementById('header').style.filter = 'none';
});

const itemLists = document.querySelectorAll('.menu-list-items');
itemLists.forEach((item) => {
  item.addEventListener('click', () => {
    menuDiv.style.display = 'none';
    document.getElementById('header').style.filter = 'none';
  });
});

const myProjects = [
  {
    name: 'Tonic',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy
    text ever since the 1500s, when an unknown printer took a galley
    of type and scrambled it 1960s with the releaLorem Ipsum is
    simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever
    since the 1500s, when an unknown printer took a galley of type
    and scrambled it 1960s with the releorem Ipsum is simply dummy
    text of the printing and typesetting industry. Lorem Ipsum han
    printer took a galley of type and scrambled it 1960s with the
    releawn printer took a galley of type and scrambled it 1960s
    with the releaLorem Ipsum is simply dummy text of the printing
    and typesetting industry. Lorem Ipsum has been the industry's
    standard dummy text ever since the 1500s, when an unknown
    printer took a galley of type and scrambled it 1960s`,
    featuredImage: './images/SnapshootDesktopPortfolioA.svg',
    technology: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    liveVersion:
      'https://melaku05.github.io/Portfolio-setup-and-mobile-version-skeleton/',
    sourceCode:
      'https://github.com/Melaku05/Portfolio-setup-and-mobile-version-skeleton',
  },

  {
    name: 'Multi-Post Stories',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it 1960s with the releaLorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it 1960s with the releorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum han
                printer took a galley of type and scrambled it 1960s with the
                releawn printer took a galley of type and scrambled it 1960s
                with the releaLorem Ipsum is simply dummy text of the printing
                and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it 1960s`,
    featuredImage: './images/SnapshootDesktopPortfolioB.svg',
    technology: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    liveVersion:
      'https://melaku05.github.io/Portfolio-setup-and-mobile-version-skeleton/',
    sourceCode:
      'https://github.com/Melaku05/Portfolio-setup-and-mobile-version-skeleton',
  },

  {
    name: 'Facebook 360',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled it 1960s with the releaLorem Ipsum is
      simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type
      and scrambled it 1960s with the releorem Ipsum is simply dummy
      text of the printing and typesetting industry. Lorem Ipsum han
      printer took a galley of type and scrambled it 1960s with the
      releawn printer took a galley of type and scrambled it 1960s
      with the releaLorem Ipsum is simply dummy text of the printing
      and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it 1960s`,
    featuredImage: './images/SnapshootDesktopPortfolioC.svg',
    technology: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    liveVersion:
      'https://melaku05.github.io/Portfolio-setup-and-mobile-version-skeleton/',
    sourceCode:
      'https://github.com/Melaku05/Portfolio-setup-and-mobile-version-skeleton',
  },

  {
    name: 'Uber Navigation',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy
      text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled it 1960s with the releaLorem Ipsum is
      simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type
      and scrambled it 1960s with the releorem Ipsum is simply dummy
      text of the printing and typesetting industry. Lorem Ipsum han
      printer took a galley of type and scrambled it 1960s with the
      releawn printer took a galley of type and scrambled it 1960s
      with the releaLorem Ipsum is simply dummy text of the printing
      and typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it 1960s`,
    featuredImage: './images/SnapshootDesktopPortfolioD.svg',
    technology: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    liveVersion:
      'https://melaku05.github.io/Portfolio-setup-and-mobile-version-skeleton/',
    sourceCode:
      'https://github.com/Melaku05/Portfolio-setup-and-mobile-version-skeleton',
  },
];

const seeProjectBtn = document.querySelectorAll('.see-project');
seeProjectBtn.forEach((item, i) => {
  item.addEventListener('click', () => {
    const project = myProjects[i];
    const modalMenu = document.querySelector('.modal-container');
    const projectTitle = modalMenu.querySelector('.modal-card-title');
    projectTitle.textContent = project.name;
    const projectDesc = modalMenu.querySelectorAll('.modal-primary-text');
    const [mobileDesc, desktopDesc] = projectDesc;
    mobileDesc.textContent = project.description;
    desktopDesc.textContent = project.description;
    projectDesc.textContent = project.description;
    const projectMobileImage = modalMenu.querySelector('.mobile-image');
    projectMobileImage.src = project.featuredImage;
    const projectDesktopImage = modalMenu.querySelector('.desktop-image');
    projectDesktopImage.src = project.featuredImage;
    const liveLink = document.querySelector('.live-link');
    liveLink.href = project.liveVersion;
    const liveSourceCode = document.querySelector('.source-code');
    liveSourceCode.href = project.sourceCode;
    const allTech = document.querySelectorAll('.modal-tag');
    allTech.forEach((item, i) => {
      item.textContent = project.technology[i];
    });

    modalMenu.style.display = 'flex';
  });
});

const modalCancelBtn = document.querySelector('.modal-cancel-image');
modalCancelBtn.addEventListener('click', () => {
  const removeModalContainer = document.querySelector('.modal-container');
  removeModalContainer.style.display = 'none';
});
