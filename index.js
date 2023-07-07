const humbargerBtn = document.querySelector('.humbarger-icon');
const closeBtn = document.querySelector('.close-icon');
const navigationItems = document.querySelector('.nav-items');
const navLink = document.querySelector('.nav-link');

const toggleMenu = () => {
  navigationItems.classList.toggle('show');
  humbargerBtn.classList.toggle('hide');
  closeBtn.classList.toggle('hide');
};

humbargerBtn.addEventListener('click', toggleMenu);
closeBtn.addEventListener('click', toggleMenu);

navLink.addEventListener('click', (event) => {
  event.preventDefault();
  const targetURL = navLink.getAttribute('href');
  window.location.href = targetURL;
});

const speakers = [
  {
    imageUrl: 'https://summitclinicalresearch.com/wp-content/uploads/2022/11/Bollepalli2.png',
    image_alt: 'speaker image',
    name: 'Dr. Sureka Bollepalli',
    title: 'Medical Director, CEO',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nobis molestias nemo sapiente vero possimus, deleniti facilis quos ratione dolorum autem vitae eaque saepe? Laborum quod odit ipsum cupiditate corporis.',
  },
  {
    imageUrl: 'https://summitclinicalresearch.com/wp-content/uploads/2022/11/Bollepalli2.png',
    image_alt: 'speaker image',
    name: 'Dr. Sureka Bollepalli',
    title: 'Medical Director, CEO',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nobis molestias nemo sapiente vero possimus, deleniti facilis quos ratione dolorum autem vitae eaque saepe? Laborum quod odit ipsum cupiditate corporis.',
  },
  {
    imageUrl: 'https://summitclinicalresearch.com/wp-content/uploads/2022/11/Bollepalli2.png',
    image_alt: 'speaker image',
    name: 'Dr. Sureka Bollepalli',
    title: 'Medical Director, CEO',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nobis molestias nemo sapiente vero possimus, deleniti facilis quos ratione dolorum autem vitae eaque saepe? Laborum quod odit ipsum cupiditate corporis.',
  },
  {
    imageUrl: 'https://summitclinicalresearch.com/wp-content/uploads/2022/11/Bollepalli2.png',
    image_alt: 'speaker image',
    name: 'Dr. Sureka Bollepalli',
    title: 'Medical Director, CEO',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nobis molestias nemo sapiente vero possimus, deleniti facilis quos ratione dolorum autem vitae eaque saepe? Laborum quod odit ipsum cupiditate corporis.',
  },
  {
    imageUrl: 'https://summitclinicalresearch.com/wp-content/uploads/2022/11/Bollepalli2.png',
    image_alt: 'speaker image',
    name: 'Dr. Sureka Bollepalli',
    title: 'Medical Director, CEO',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nobis molestias nemo sapiente vero possimus, deleniti facilis quos ratione dolorum autem vitae eaque saepe? Laborum quod odit ipsum cupiditate corporis.',
  },
  {
    imageUrl: 'https://summitclinicalresearch.com/wp-content/uploads/2022/11/Bollepalli2.png',
    image_alt: 'speaker image',
    name: 'Dr. Sureka Bollepalli',
    title: 'Medical Director, CEO',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam nobis molestias nemo sapiente vero possimus, deleniti facilis quos ratione dolorum autem vitae eaque saepe? Laborum quod odit ipsum cupiditate corporis.',
  },
];

const createCard = (speaker) => {
  const speakerCard = document.createElement('div');
  speakerCard.classList.add('speaker-card');

  const speakerImage = document.createElement('img');
  speakerImage.src = speaker.imageUrl;
  speakerImage.alt = speaker.image_alt;
  speakerImage.classList.add('speaker-img');

  const speakerDetails = document.createElement('div');
  speakerDetails.classList.add('speaker-details');

  const speakerName = document.createElement('h2');
  speakerName.textContent = speaker.name;
  speakerName.classList.add('speaker-name');

  const speakerTitle = document.createElement('h3');
  speakerTitle.textContent = speaker.title;
  speakerTitle.classList.add('speaker-title');

  const speakerInfo = document.createElement('p');
  speakerInfo.textContent = speaker.description;
  speakerInfo.classList.add('speaker-info');

  speakerDetails.appendChild(speakerName);
  speakerDetails.appendChild(speakerTitle);
  speakerDetails.appendChild(speakerInfo);

  speakerCard.appendChild(speakerImage);
  speakerCard.appendChild(speakerDetails);

  return speakerCard;
};

const speakersContainer = document.querySelector('.speakers-container');
const cardsContainer = speakersContainer.querySelector('.cards-container');
const seeMoreButton = speakersContainer.querySelector('.see-more-button');
const seeLessButton = speakersContainer.querySelector('.see-less-button');
const maxDisplayedSpeakers = 3;
let isExpanded = false;

const createSpeakers = (speakers) => {
  cardsContainer.innerHTML = ''; // Clear the cards container

  speakers.forEach((speaker) => {
    const createdCard = createCard(speaker);
    cardsContainer.appendChild(createdCard);
  });
};

const toggleSpeakers = () => {
  isExpanded = !isExpanded;

  if (isExpanded) {
    createSpeakers(speakers);
    seeMoreButton.style.display = 'none';
    seeLessButton.style.display = 'inline-block';
  } else {
    createSpeakers(speakers.slice(0, maxDisplayedSpeakers));
    seeMoreButton.style.display = 'inline-block';
    seeLessButton.style.display = 'none';
  }
};

seeMoreButton.addEventListener('click', toggleSpeakers);
seeLessButton.addEventListener('click', toggleSpeakers);

// Function to check if the screen width is less than 768px
const isSmallScreen = () => window.innerWidth < 768;

// Function to handle the visibility of the "See more" and "See less" buttons
const handleSeeButtonsVisibility = () => {
  if (isSmallScreen()) {
    seeMoreButton.style.display = isExpanded ? 'none' : 'inline-block';
    seeLessButton.style.display = isExpanded ? 'inline-block' : 'none';
    createSpeakers(isExpanded ? speakers : speakers.slice(0, maxDisplayedSpeakers));
  } else {
    seeMoreButton.style.display = 'none';
    seeLessButton.style.display = 'none';
    createSpeakers(speakers);
  }
};

// Initial visibility check
handleSeeButtonsVisibility();

// Event listener for window resize to handle visibility changes
window.addEventListener('resize', handleSeeButtonsVisibility);
