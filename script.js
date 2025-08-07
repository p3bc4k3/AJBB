// Training schedule data
const trainingSchedule = [
    {
        category: "Baby",
        year: "2020-2021",
        sessions: [
            { day: "Vendredi", time: "17h30-18h15", location: "Sauvian" },
            { day: "Samedi", time: "09h00-09h45", location: "Thézan" },
            { day: "Samedi", time: "10h30-11h15", location: "Villeneuve" }
        ],
        color: "#f59e0b"
    },
    {
        category: "Pré-poussins",
        year: "2018-2019",
        sessions: [
            { day: "Lundi", time: "18h30-19h30", location: "Thézan" },
            { day: "Lundi", time: "18h00-19h00", location: "Villeneuve" },
            { day: "Vendredi", time: "18h15-19h15", location: "Sauvian" },
            { day: "Samedi", time: "11h15-12h15", location: "Villeneuve" }
        ],
        color: "#10b981"
    },
    {
        category: "Poussins 1",
        year: "2017",
        sessions: [
            { day: "Lundi", time: "18h30-19h30", location: "Thézan" },
            { day: "Lundi", time: "18h00-19h00", location: "Villeneuve" },
            { day: "Vendredi", time: "18h15-19h15", location: "Sauvian" },
            { day: "Samedi", time: "11h15-12h15", location: "Villeneuve" }
        ],
        color: "#3b82f6"
    },
    {
        category: "Poussins 2",
        year: "2016",
        sessions: [
            { day: "Lundi", time: "18h30-19h30", location: "Thézan" },
            { day: "Mardi", time: "18h00-19h00", location: "Villeneuve" },
            { day: "Jeudi", time: "18h00-19h00", location: "Villeneuve" },
            { day: "Vendredi", time: "18h15-19h15", location: "Sauvian" }
        ],
        color: "#8b5cf6"
    },
    {
        category: "Benjamins",
        year: "2014-2015",
        sessions: [
            { day: "Lundi", time: "18h30-19h30", location: "Thézan" },
            { day: "Mardi", time: "18h00-19h00", location: "Villeneuve" },
            { day: "Jeudi", time: "18h00-19h00", location: "Villeneuve" },
            { day: "Vendredi", time: "18h15-19h15", location: "Sauvian" }
        ],
        color: "#f97316"
    },
    {
        category: "Minimes +",
        year: "2013 et avant",
        sessions: [
            { day: "Lundi", time: "19h30-20h30", location: "Thézan" },
            { day: "Mardi", time: "19h00-20h30", location: "Villeneuve" },
            { day: "Jeudi", time: "19h00-20h30", location: "Villeneuve" }
        ],
        color: "#dc2626"
    }
];

// Location data
const locations = {
    "Villeneuve": {
        name: "Villeneuve-lès-Béziers",
        address: "Chemin Saint-Michel, 34420 Villeneuve-lès-Béziers"
    },
    "Thézan": {
        name: "Thézan-lès-Béziers", 
        address: "Rue Antoine De Saint Exupéry, 34490 Thézan-lès-Béziers"
    },
    "Sauvian": {
        name: "Sauvian",
        address: "26 Rue des Tulipes, 34410 Sauvian"
    }
};

// Sample events data
const events = [
    {
        date: new Date(2025, 1, 8), // 8 février 2025
        title: "Compétition Départementale Minimes",
        description: "Championnat départemental - Catégorie Minimes"
    },
    {
        date: new Date(2025, 1, 15), // 15 février 2025
        title: "Compétition Départementale Cadets",
        description: "Championnat départemental - Catégorie Cadets"
    },
    {
        date: new Date(2025, 1, 22), // 22 février 2025
        title: "Compétition Départementale Juniors",
        description: "Championnat départemental - Catégorie Juniors"
    },
    {
        date: new Date(2025, 2, 1), // 1er mars 2025
        title: "Compétition Départementale Seniors",
        description: "Championnat départemental - Catégorie Seniors"
    },
    {
        date: new Date(2025, 2, 8), // 8 mars 2025
        title: "Compétition Régionale Minimes",
        description: "Championnat régional - Catégorie Minimes"
    },
    {
        date: new Date(2025, 2, 15), // 15 mars 2025
        title: "Compétition Régionale Cadets",
        description: "Championnat régional - Catégorie Cadets"
    },
    {
        date: new Date(2025, 2, 22), // 22 mars 2025
        title: "Compétition Régionale Juniors",
        description: "Championnat régional - Catégorie Juniors"
    },
    {
        date: new Date(2025, 2, 29), // 29 mars 2025
        title: "Compétition Régionale Seniors",
        description: "Championnat régional - Catégorie Seniors"
    },
    {
        date: new Date(2025, 3, 5), // 5 avril 2025
        title: "Compétition Interrégionale Minimes",
        description: "Championnat interrégional - Catégorie Minimes"
    },
    {
        date: new Date(2025, 3, 12), // 12 avril 2025
        title: "Compétition Interrégionale Cadets",
        description: "Championnat interrégional - Catégorie Cadets"
    },
    {
        date: new Date(2025, 3, 19), // 19 avril 2025
        title: "Compétition Interrégionale Juniors",
        description: "Championnat interrégional - Catégorie Juniors"
    },
    {
        date: new Date(2025, 3, 26), // 26 avril 2025
        title: "Compétition Interrégionale Seniors",
        description: "Championnat interrégional - Catégorie Seniors"
    },
    {
        date: new Date(2025, 4, 3), // 3 mai 2025
        title: "Championnat de France Minimes",
        description: "Championnat de France - Catégorie Minimes"
    },
    {
        date: new Date(2025, 4, 10), // 10 mai 2025
        title: "Championnat de France Cadets",
        description: "Championnat de France - Catégorie Cadets"
    },
    {
        date: new Date(2025, 4, 17), // 17 mai 2025
        title: "Championnat de France Juniors",
        description: "Championnat de France - Catégorie Juniors"
    },
    {
        date: new Date(2025, 4, 24), // 24 mai 2025
        title: "Championnat de France Seniors",
        description: "Championnat de France - Catégorie Seniors"
    }
];

// Calendar state
let currentDate = new Date();

// DOM elements
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const planningGrid = document.getElementById('planningGrid');
const calendarTitle = document.getElementById('calendarTitle');
const calendarGrid = document.getElementById('calendarGrid');
const eventsContainer = document.getElementById('eventsContainer');
const prevMonth = document.getElementById('prevMonth');
const nextMonth = document.getElementById('nextMonth');
const contactForm = document.getElementById('contactForm');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    renderPlanningCards();
    renderCalendar();
    renderEvents();
    initializeContactForm();
    initializeScrollEffects();
});

// Navigation
function initializeNavigation() {
    navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active navigation link
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section[id]');
        const scrollPos = window.pageYOffset + 100;

        sections.forEach(section => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            const id = section.getAttribute('id');
            const link = document.querySelector(`a[href="#${id}"]`);

            if (scrollPos >= top && scrollPos <= bottom) {
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                if (link) link.classList.add('active');
            }
        });
    });
}

// Planning cards
function renderPlanningCards() {
    planningGrid.innerHTML = '';
    
    trainingSchedule.forEach(category => {
        const card = document.createElement('div');
        card.className = 'planning-card fade-in-up';
        
        const sessionsHTML = category.sessions.length > 0 
            ? category.sessions.map(session => `
                <div class="schedule-card">
                    <div class="schedule-day">${session.day}</div>
                    <div class="schedule-time">${session.time}</div>
                    <div class="schedule-location">${session.location}</div>
                </div>
            `).join('')
            : '<div class="schedule-card"><div class="schedule-time">Horaires à définir</div></div>';

        card.innerHTML = `
            <div class="category-badge" style="background-color: ${category.color}">${category.category}</div>
            <h3 class="category-title">${category.category}</h3>
            <p class="category-year">Année de naissance : ${category.year}</p>
            
            <div class="schedule-grid">
                ${sessionsHTML}
            </div>
        `;
        
        planningGrid.appendChild(card);
    });
}

function getUniqueLocations(sessions) {
    const uniqueLocations = [...new Set(sessions.map(session => session.location))];
    return uniqueLocations.map(location => {
        const locationData = locations[location];
        return locationData ? `<div>${locationData.name}</div><div style="font-size: 0.8em; opacity: 0.8;">${locationData.address}</div>` : location;
    }).join('<hr style="margin: 0.5rem 0; border: none; border-top: 1px solid #e5e7eb;">');
}

// Calendar functionality
function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // Update calendar title
    const monthNames = [
        "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
        "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
    ];
    calendarTitle.textContent = `${monthNames[month]} ${year}`;
    
    // Clear calendar grid
    calendarGrid.innerHTML = '';
    
    // Add day headers
    const dayHeaders = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    dayHeaders.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'calendar-day-header';
        dayHeader.textContent = day;
        calendarGrid.appendChild(dayHeader);
    });
    
    // Get first day of month and number of days
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = (firstDay.getDay() + 6) % 7; // Monday = 0
    
    // Add empty cells for previous month
    for (let i = 0; i < startingDayOfWeek; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'calendar-day other-month';
        calendarGrid.appendChild(emptyDay);
    }
    
    // Add days of current month
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'calendar-day';
        dayElement.textContent = day;
        
        const dayDate = new Date(year, month, day);
        
        // Check if it's today
        if (dayDate.toDateString() === today.toDateString()) {
            dayElement.classList.add('today');
        }
        
        // Check if there's an event on this day
        const hasEvent = events.some(event => 
            event.date.toDateString() === dayDate.toDateString()
        );
        
        if (hasEvent) {
            dayElement.classList.add('has-event');
        }
        
        calendarGrid.appendChild(dayElement);
    }
}

// Event navigation
prevMonth.addEventListener('click', function() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonth.addEventListener('click', function() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Events rendering
function renderEvents() {
    eventsContainer.innerHTML = '';
    
    // Sort events by date
    const sortedEvents = events.sort((a, b) => a.date - b.date);
    
    // Filter upcoming events (next 30 days)
    const now = new Date();
    const thirtyDaysFromNow = new Date(now.getTime() + (30 * 24 * 60 * 60 * 1000));
    
    const upcomingEvents = sortedEvents.filter(event => 
        event.date >= now && event.date <= thirtyDaysFromNow
    );
    
    if (upcomingEvents.length === 0) {
        eventsContainer.innerHTML = '<p class="text-center" style="color: var(--text-secondary); padding: 2rem;">Aucun événement prévu dans les 30 prochains jours.</p>';
        return;
    }
    
    upcomingEvents.forEach(event => {
        const eventElement = document.createElement('div');
        eventElement.className = 'event-item fade-in';
        
        const monthNames = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aoû', 'Sep', 'Oct', 'Nov', 'Déc'];
        
        eventElement.innerHTML = `
            <div class="event-date">
                <div class="event-day">${event.date.getDate()}</div>
                <div class="event-month">${monthNames[event.date.getMonth()]}</div>
            </div>
            <div class="event-details">
                <h4>${event.title}</h4>
                <p>${event.description}</p>
            </div>
        `;
        
        eventsContainer.appendChild(eventElement);
    });
}

// Contact form
function initializeContactForm() {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Scroll effects
function initializeScrollEffects() {
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.fade-in-up, .planning-card, .location-card, .contact-card, .event-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Header background on scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = 'var(--shadow-md)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = 'none';
        }
    });
}

// Utility functions
function formatDate(date) {
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    };
    return date.toLocaleDateString('fr-FR', options);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Resize handler
window.addEventListener('resize', debounce(function() {
    // Close mobile menu on resize
    if (window.innerWidth > 768) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
}, 250));

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
});

// Service Worker registration (for PWA capabilities)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('SW registered: ', registration);
            })
            .catch(function(registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
    });
}