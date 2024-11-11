AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Data & Analytics Engineering Intern",
    cardImage: "assets/images/experience-page/fsulogo.png",
    place: "Florida State University",
    time: "(2023 - 2024)",
    desp: "<li>WIP L1.</li> <li>WIP L2.</li> <li>WIP L3.</li>",
  },
  {
    title: "Information Technology Specialist",
    cardImage: "assets/images/experience-page/fsulogo.png",
    place: "Florida State University",
    time: "(2022 - 2023)",
    desp: "<li>WIP L1.</li> <li>WIP L2.</li> <li>WIP L3.</li>",
  },
  {
    title: "Customer Service Representative",
    cardImage: "assets/images/experience-page/aglogo.png",
    place: "A&G Capital",
    time: "(2017 - 2022)",
    desp: "<li>WIP L1.</li> <li>WIP L2.</li> <li>WIP L3.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Sigma Chi Fraternity",
    cardImage: "assets/images/experience-page/sigmachilogo.jpeg",
    description:
      "Founding Member<br>2021 - 2024",
  },
  {
    title: "Living Intentionally Finding Togetherness",
    cardImage: "assets/images/experience-page/liftlogo.jpg",
    description:
      "Undergraduate Program Coordinator<br>2022",
  },
  {
    title: "Center for Health Advocacy and Wellness",
    cardImage: "assets/images/experience-page/fsuchaw.png",
    description:
      "Campus Outreach Volunteer<br>2022",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Beta Gamma Sigma Honor Society",
    subtitle: "Member",
    image: "assets/images/experience-page/BGSlogo.jpg",
    desp: "Beta Gamma Sigma is the exclusive international honor society serving business programs accredited by AACSB International.<br>Membership in Beta Gamma Sigma is the highest recognition a business student anywhere can receive in an AACSB business program.",
    href: "https://www.betagammasigma.org/home",
  },
  {
    title: "Association for Information Systems",
    subtitle: "Member",
    image: "assets/images/experience-page/aislogo.jpg",
    desp: "AIS is a professional organization dedicated to promoting better knowledge and understanding of information systems and technology. AIS aids students in career development via career building workshops, regular speaking engagements with IT professionals, and networking events.",
    href: "https://nolecentral.dsa.fsu.edu/organization/ais",
  },
  {
    title: "Florida State University Cybersecurity Club",
    subtitle: "Member",
    image: "assets/images/experience-page/fsucybersec.jpeg",
    desp: "The FSU Cybersecurity Club is dedicated to creating an inclusive, hands-on environment for students to enhance their interpersonal and professional skills.",
    href: "https://nolecentral.dsa.fsu.edu/organization/cybersecurity",
  },
  {
    title: "Gamma Iota Sigma, Iota Chapter",
    subtitle: "Member",
    image: "assets/images/experience-page/gislogo.jpg",
    desp: "The purpose of this fraternity is to promote, encourage, and sustain student interest in insurance, risk management, and actuarial science as professions; to encourage the high moral and scholastic attainments of its members; and to facilitate interaction of educational institutions and industry",
    href: "https://nolecentral.dsa.fsu.edu/organization/gammaiotasigma",
  },
  {
    title: "Habitat for Humanity",
    subtitle: "Member",
    image: "assets/images/experience-page/h4hlogo.jpeg",
    desp: "Habitat for Humanity at FSU is a nonprofit organization dedicated to eradicating substandard housing and making decent housing a matter of conscience and action.",
    href: "https://nolecentral.dsa.fsu.edu/organization/habitatforhumanityatfloridastateuniversity",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
