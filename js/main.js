
document.addEventListener('DOMContentLoaded', () => {
  // Simplified loader - just hide it without removing
  const loader = document.querySelector('.loader');
  if (loader) {
      setTimeout(() => {
          loader.classList.add('loader-hidden');
      }, 1500);
  }

  // Navigation Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('.main-nav');
  
  if (navToggle && mainNav) {
      navToggle.addEventListener('click', () => {
          navToggle.classList.toggle('active');
          mainNav.classList.toggle('active');
      });
  }

  // Close navigation when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
          if (navToggle && mainNav) {
              navToggle.classList.remove('active');
              mainNav.classList.remove('active');
          }
      });
  });

  // Back to Top Button
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
      window.addEventListener('scroll', () => {
          if (window.pageYOffset > 300) {
              backToTopBtn.classList.add('active');
          } else {
              backToTopBtn.classList.remove('active');
          }
      });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });

 
  // GSAP Animations
  if (typeof gsap !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // Hero section animations
      gsap.from('.title-word-1', {
          duration: 0.8,
          opacity: 0,
          y: 20,
          delay: 0.2,
          ease: 'power2.out'
      });
      
      gsap.from('.title-word-2', {
          duration: 0.8,
          opacity: 0,
          y: 20,
          delay: 0.4,
          ease: 'power2.out'
      });
      
      gsap.from('.title-word-3', {
          duration: 0.8,
          opacity: 0,
          y: 20,
          delay: 0.6,
          ease: 'power2.out'
      });
      
      gsap.from('.title-word-4', {
          duration: 0.8,
          opacity: 0,
          y: 20,
          delay: 0.8,
          ease: 'power2.out'
      });
      
      gsap.from('.hero-subtitle', {
          duration: 0.8,
          opacity: 0,
          y: 20,
          delay: 1.2,
          ease: 'power2.out'
      });
      
      gsap.from('.hero-btns', {
          duration: 0.8,
          opacity: 0,
          y: 20,
          delay: 1.4,
          ease: 'power2.out'
      });
      
      gsap.from('.scroll-down', {
          duration: 0.8,
          opacity: 0,
          y: 20,
          delay: 1.8,
          ease: 'power2.out'
      });

      // Image border animation
      gsap.to('.image-border', {
          x: 10,
          y: 10,
          repeat: -1,
          yoyo: true,
          duration: 3,
          ease: 'sine.inOut'
      });

      // Section animations
      document.querySelectorAll('[data-animation]').forEach(section => {
          gsap.from(section, {
              scrollTrigger: {
                  trigger: section,
                  start: 'top 80%',
                  toggleActions: 'play none none none'
              },
              opacity: 0,
              y: 50,
              duration: 1,
              ease: 'power2.out'
          });
      });
  }

  // Static data for skills
  const skillsData = [
    { 
      name: "Property & Casualty (P&C)", 
      proficiency: 70, 
      icon: "fas fa-car-crash",
     
  },
      { name: "Statistics", proficiency: 90, icon: "fas fa-chart-bar" },
      { name: "Probability", proficiency: 85, icon: "fas fa-percentage" },
      { name: "Predictive Modeling", proficiency: 65, icon: "fas fa-chart-line" },
      { name: "Excel", proficiency: 90, icon: "fas fa-file-excel" },
      { name: "R Programming", proficiency: 75, icon: "fas fa-code" },
      { name: "Python", proficiency: 70, icon: "fab fa-python" },
      { 
        name: "Data Visualization", 
        proficiency: 75, 
        icon: "fas fa-chart-pie",}
  ];

  // Static data for certificates
  const certificatesData = [
    {
        name: "CM2 - Financial Engineering and Loss Reserving",
        issuingOrganization: "Institute and Faculty of Actuaries (IFoA)",
        issueDate: "2024-09-01",
        image: "./images/certificates/ifoa-logo.png",
        credentialUrl: "#",
        isExam: true,
        examCode: "CM2"
    },
    {
        name: "CB1 - Business Finance",
        issuingOrganization: "Institute and Faculty of Actuaries (IFoA)",
        issueDate: "2024-04-23",
        image: "./images/certificates/ifoa-logo.png",
        credentialUrl: "#",
        isExam: true,
        examCode: "CB1"
    },
    {
        name: "CB2 - Business Economics",
        issuingOrganization: "Institute and Faculty of Actuaries (IFoA)",
        issueDate: "2024-04-01",
        image: "./images/certificates/ifoa-logo.png",
        credentialUrl: "#",
        isExam: true,
        examCode: "CB2"
    },
    {
        name: "CM1 - Actuarial Mathematics",
        issuingOrganization: "Institute and Faculty of Actuaries (IFoA)",
        issueDate: "2024-04-01",
        image: "./images/certificates/ifoa-logo.png",
        credentialUrl: "#",
        isExam: true,
        examCode: "CM1"
    },
    
    {
        name: "CS1 - Actuarial Statistics",
        issuingOrganization: "Institute and Faculty of Actuaries (IFoA)",
        issueDate: "2023-09-01",
        image: "./images/certificates/ifoa-logo.png",
        credentialUrl: "#",
        isExam: true,
        examCode: "CS1"
    },{
        name: "Student Research Case Study Challenge-2024",
        issuingOrganization: "Society of Actuaries (SOA)",
        issueDate: "2024-01-01",
        image: "./images/certificates/soa-logo.jpg",
        credentialUrl: "./images/certificates/soa-logo.jpg",
        isExam: false,
        achievementType: "Research Competition"
    },
    {
        name: "Student Research Case Study Challenge-2025",
        issuingOrganization: "Society of Actuaries (SOA)",
        issueDate: "2025-01-01",
        image: "./images/certificates/soa.png",
        credentialUrl: "./images/certificates/soa.png",
        isExam: false,
        achievementType: "Research Competition"
    }
];
const Experiencesdata= [
  {
    name: "AIG Actuarial Analyst Job Simulation",
        issuingOrganization: "Forage",
        Date: "May 2025",
        image: "./images/certificates/forage-schema-logo.png",
        credentialUrl: "#",
        isExam: false,
        examCode: "Simulation"
  },
  {
    name: "CAS summer program",
        issuingOrganization: "Causalty Actuarial Society",
        Date: "June 2024 to August 2024",
        image: "./images/certificates/cas.png",
        credentialUrl: "www.parchment.com/u/s/zWl1",
        isExam: false,
        examCode: "CS1"
  }
]
  // Display skills
  function displaySkills() {
      const container = document.getElementById('skills-list');
      if (container) {
          container.innerHTML = skillsData.map(skill => `
              <div class="skill-card">
                  <div class="skill-header">
                      <div class="skill-icon">
                          <i class="${skill.icon}"></i>
                      </div>
                      <h3 class="skill-name">${skill.name}</h3>
                  </div>
                  <div class="skill-bar">
                      <div class="skill-progress" style="width: ${skill.proficiency}%"></div>
                  </div>
                  <div class="skill-percent">${skill.proficiency}%</div>
              </div>
          `).join('');
      }
  }

  // Display certificates
  function displayCertificates() {
      const container = document.getElementById('certificates-list');
      if (container) {
          container.innerHTML = certificatesData.map(cert => `
              <div class="certificate-card">
                  ${cert.image ? `<img src="${cert.image}" alt="${cert.name}" class="certificate-img">` : ''}
                  <div class="certificate-content">
                      <h3 class="certificate-title">${cert.name}</h3>
                      <span class="certificate-org">${cert.issuingOrganization}</span>
                      <span class="certificate-date">${new Date(cert.issueDate).toLocaleDateString()}</span>
                      ${cert.credentialUrl ? `
                          <a href="${cert.credentialUrl}" target="_blank" class="certificate-btn">
                              View Credential <i class="fas fa-external-link-alt"></i>
                          </a>
                      ` : ''}
                  </div>
              </div>
          `).join('');
      }
  }
  function displayExperiences() {
    const container = document.getElementById('experiences-list');
    if (container) {
        container.innerHTML = Experiencesdata.map(cert => `
            <div class="certificate-card">
                ${cert.image ? `<img src="${cert.image}" alt="${cert.name}" class="certificate-img">` : ''}
                <div class="certificate-content">
                    <h3 class="certificate-title">${cert.name}</h3>
                    <span class="certificate-org">${cert.issuingOrganization}</span>
                    <span class="certificate-date">${cert.Date}</span>
                    ${cert.credentialUrl ? `
                        <a href="${cert.credentialUrl}" target="_blank" class="certificate-btn">
                            View Credential <i class="fas fa-external-link-alt"></i>
                        </a>
                    ` : ''}
                </div>
            </div>
        `).join('');
    }
}
  // Initialize animations after content is loaded
  function initAnimations() {
      if (typeof gsap !== 'undefined') {
          // Skill cards animation
          gsap.utils.toArray('.skill-card').forEach((card, i) => {
              gsap.from(card, {
                  scrollTrigger: {
                      trigger: card,
                      start: 'top 80%',
                      toggleActions: 'play none none none'
                  },
                  opacity: 0,
                  y: 50,
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: 'power2.out'
              });
          });
      
          // Certificate cards animation
          gsap.utils.toArray('.certificate-card').forEach((card, i) => {
              gsap.from(card, {
                  scrollTrigger: {
                      trigger: card,
                      start: 'top 80%',
                      toggleActions: 'play none none none'
                  },
                  opacity: 0,
                  y: 50,
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: 'power2.out'
              });
          });
      }
  }

  // Contact form submission
  const contactForm = document.getElementById('contact-form');

  if (contactForm) {
      contactForm.addEventListener('submit', async (e) => {
          e.preventDefault();
          const submitBtn = contactForm.querySelector('button[type="submit"]');
          
          if (submitBtn) {
              submitBtn.disabled = true;
              submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  
              // Prepare data as JSON
              const formData = {
                  name: contactForm.querySelector('#name').value,
                  email: contactForm.querySelector('#email').value,
                  subject: contactForm.querySelector('#subject').value,
                  message: contactForm.querySelector('#message').value
              };
  
              try {
                  const response = await fetch('https://formspree.io/f/mjkypwdj', {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json',
                          'Accept': 'application/json'
                      },
                      body: JSON.stringify(formData)
                  });
  
                  if (response.ok) {
                      alert('Message sent successfully!');
                      contactForm.reset();
                  } else {
                      throw new Error('Failed to send message');
                  }
              } catch (error) {
                  alert('Error: ' + error.message);
              } finally {
                  submitBtn.disabled = false;
                  submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
              }
          }
      });
  }

  // Initialize everything
  displaySkills();
  displayCertificates();
  displayExperiences();
  // Initialize animations after a small delay
  setTimeout(initAnimations, 100);
});
