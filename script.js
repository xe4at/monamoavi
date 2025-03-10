emailjs.init("w2F6Ofgte9pIyv0Lq");

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Show loading overlay
  const loadingOverlay = document.querySelector(".loading-overlay");
  loadingOverlay.style.display = "flex";

  // Disable submit button
  const submitBtn = this.querySelector(".submit");
  submitBtn.disabled = true;
  submitBtn.textContent =
    currentLang === "fa" ? "در حال ارسال..." : "Sending...";

  // Get form data
  const formData = {
    name: this.name.value,
    email: this.email.value,
    phone: this.phone.value,
    message: this.message.value,
  };

  // Send email
  emailjs
    .send("service_fxknijq", "template_dssdfw4", formData)
    .then(
      function (response) {
        alert("پیام شما با موفقیت ارسال شد!");
        // Clear all form fields
        document.getElementById("contactForm").reset();
      },
      function (error) {
        alert("متاسفانه مشکلی پیش آمده. لطفا دوباره تلاش کنید.");
        console.error("EmailJS Error:", error);
      }
    )
    .finally(() => {
      // Hide loading overlay
      loadingOverlay.style.display = "none";

      // Re-enable submit button
      submitBtn.disabled = false;
      submitBtn.textContent =
        currentLang === "fa" ? "ارسال پیام" : "Send Message";
    });
});

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

if (menu && navlist) {
  menu.onclick = () => {
    menu.classList.toggle("bx-x");
    navlist.classList.toggle("open");
  };

  document.querySelectorAll(".navlist a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("bx-x");
      navlist.classList.remove("open");
    });
  });

  window.onscroll = () => {
    menu.classList.remove("bx-x");
    navlist.classList.remove("open");
  };
} else {
  console.error("عناصر مورد نظر یافت نشدند!");
}

// Language translations
const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact",
    hello: "Hello, I'm",
    role: "Videographer & Content Creator",
    description:
      "Professional videographer and content creator with a passion for storytelling through visual media.",
    aboutTitle: "About Me",
    aboutDesc:
      "I am a professional videographer and content creator with over 5 years of experience. My expertise includes professional event videography, video editing, social media content creation, and commercial production.",
    servicesTitle: "My Services",
    servicesDesc: "What I Excel At",
    portfolioTitle: "Latest Projects",
    portfolioDesc: "Portfolio",
    contactTitle: "Contact Me",
    contactDesc: "Let's Discuss Your Project",
    viewServices: "View Services",
    contactMe: "Contact Me",
    viewWork: "View My Work",
    sendMessage: "Send Message",
    yourName: "Your Name",
    yourEmail: "Your Email",
    yourPhone: "Your Phone Number",
    projectDetails: "Project Details",
    copyright: "Copyright © 2024 All Rights Reserved",
    // Services
    videoService: "Professional Videography",
    videoServiceDesc:
      "4K quality videography for events, ceremonies, and products. Using professional equipment to capture your best moments with cinematic quality.",
    editingService: "Video Editing",
    editingServiceDesc:
      "Professional video editing with advanced software. Color grading, effects, and creative editing to create engaging content.",
    contentService: "Content Creation",
    contentServiceDesc:
      "Creative content creation for social media platforms. Design and production of promotional videos, motion graphics, and digital content.",
    // Portfolio
    commercial: "Home Appliance Brand Commercial",
    commercialDesc:
      "Professional commercial video production for new product launches. 4K videography with creative editing and production.",
    corporate: "Corporate Documentary",
    corporateDesc:
      "Story-driven corporate documentary production. Combining interviews, aerial footage, and motion graphics.",
    social: "Social Media Content",
    socialDesc:
      "Engaging content creation for Instagram and YouTube. Short videos, stories, and interactive posts.",
    sending: "Sending...",
    messageSent: "Message sent successfully!",
    messageError: "Error sending message. Please try again.",
    im: "I'm",
    availableFor:
      "Available for videography, editing, and content creation projects. Let's discuss your ideas and vision for your next project.",
    expertise: "My expertise includes:",
    eventVideography: "Professional event and ceremony videography",
    videoEditing: "Video editing with cutting-edge software",
    socialMedia: "Engaging social media content creation",
    commercial: "Commercial and promotional video production",
    photography: "Industrial and advertising photography",
    quality:
      "Using professional equipment and modern techniques, I ensure top quality in all projects.",
    goal: "My goal is to create content that not only looks beautiful but effectively conveys your message to your audience.",
    loadingMessage: "Sending Message...",
  },
  fa: {
    home: "خانه",
    about: "درباره من",
    services: "خدمات",
    portfolio: "نمونه کارها",
    contact: "تماس",
    hello: "سلام",
    im: "من",
    role: "فیلمبردار و تولیدکننده محتوا",
    description:
      "با بیش از ۵ سال تجربه در فیلمبرداری، تدوین و تولید محتوای دیجیتال. متخصص در تولید محتوای حرفه‌ای و جذاب برای کسب‌وکارها و برندها.",
    aboutTitle: "درباره من",
    aboutDesc:
      "من یک فیلمبردار و تولیدکننده محتوای حرفه‌ای با بیش از ۵ سال تجربه هستم. تخصص‌های من شامل:\n• فیلمبرداری حرفه‌ای مراسم و رویدادها\n• تدوین ویدیو با نرم‌افزارهای پیشرفته\n• تولید محتوای جذاب برای شبکه‌های اجتماعی\n• تولید ویدیوهای تبلیغاتی و تجاری\n• عکاسی صنعتی و تبلیغاتی\n\nبا استفاده از تجهیزات حرفه‌ای و تکنیک‌های مدرن، کیفیت برتر را در تمام پروژه‌ها تضمین می‌کنم.\nهدف من خلق محتوایی است که نه تنها زیبا باشد، بلکه پیام شما را به مخاطبان به شکلی موثر منتقل کند.",
    servicesTitle: "خدمات من",
    servicesDesc: "تخصص‌های من",
    portfolioTitle: "آخرین پروژه‌ها",
    portfolioDesc: "نمونه کارها",
    contactTitle: "تماس با من",
    contactDesc: "درباره پروژه‌تان گفتگو کنیم",
    viewServices: "مشاهده خدمات",
    contactMe: "تماس با من",
    viewWork: "مشاهده کارها",
    sendMessage: "ارسال پیام",
    yourName: "نام شما",
    yourEmail: "ایمیل شما",
    yourPhone: "شماره تماس شما",
    projectDetails: "جزئیات پروژه",
    copyright: "تمامی حقوق محفوظ است © ۱۴۰۲",
    videoService: "فیلمبرداری حرفه‌ای",
    videoServiceDesc:
      "فیلمبرداری با کیفیت 4K برای مراسم، رویدادها و محصولات. استفاده از تجهیزات حرفه‌ای برای ثبت بهترین لحظات شما با کیفیت سینمایی.",
    editingService: "تدوین ویدیو",
    editingServiceDesc:
      "تدوین حرفه‌ای ویدیو با نرم‌افزارهای پیشرفته. اصلاح رنگ، افکت‌گذاری و تدوین خلاقانه برای ایجاد محتوای جذاب.",
    contentService: "تولید محتوا",
    contentServiceDesc:
      "تولید محتوای خلاقانه برای شبکه‌های اجتماعی. طراحی و تولید ویدیوهای تبلیغاتی، موشن گرافیک و محتوای دیجیتال.",
    commercial: "تیزر تبلیغاتی لوازم خانگی",
    commercialDesc:
      "تولید ویدیوی تبلیغاتی حرفه‌ای برای معرفی محصولات جدید. فیلمبرداری 4K با تدوین خلاقانه و تولید حرفه‌ای.",
    corporate: "مستند شرکتی",
    corporateDesc:
      "تولید مستند شرکتی با روایت داستانی. ترکیبی از مصاحبه، تصاویر هوایی و موشن گرافیک.",
    social: "محتوای شبکه‌های اجتماعی",
    socialDesc:
      "تولید محتوای جذاب برای اینستاگرام و یوتیوب. ویدیوهای کوتاه، استوری و پست‌های تعاملی.",
    sending: "در حال ارسال...",
    messageSent: "پیام شما با موفقیت ارسال شد!",
    messageError: "خطا در ارسال پیام. لطفا دوباره تلاش کنید.",
    loadingMessage: "در حال ارسال پیام...",
    availableFor:
      "آماده همکاری در پروژه‌های فیلمبرداری، تدوین و تولید محتوا. برای گفتگو درباره ایده‌ها و چشم‌انداز پروژه‌تان با من در تماس باشید.",
  },
};

// Get the current language from localStorage or default to 'fa'
let currentLang = localStorage.getItem("language") || "fa";

// Set initial direction and language
document.documentElement.setAttribute(
  "dir",
  currentLang === "fa" ? "rtl" : "ltr"
);
document.documentElement.setAttribute("lang", currentLang);

// Create and append language switcher button
const languageSwitcher = document.createElement("button");
languageSwitcher.className = "language-switcher";
languageSwitcher.textContent = currentLang === "en" ? "FA" : "EN";
document.body.appendChild(languageSwitcher);

// Function to update text content
function updateContent(lang) {
  // Update all elements with data-translate attribute
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang][key]) {
      if (key === "aboutTitle" && lang === "fa") {
        element.innerHTML = translations[lang][key].replace("Me", "من");
      } else if (key === "servicesTitle" && lang === "fa") {
        element.innerHTML = translations[lang][key].replace("My", "من");
      } else if (key === "contactTitle" && lang === "fa") {
        element.innerHTML = translations[lang][key].replace("Me", "من");
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  // Update name based on language
  const nameElement = document.querySelector(".home-text h1");
  if (nameElement) {
    nameElement.textContent = lang === "fa" ? "منا معاوی" : "Mona Moavi";
  }

  // Update placeholders
  document
    .querySelectorAll("[data-translate-placeholder]")
    .forEach((element) => {
      const key = element.getAttribute("data-translate-placeholder");
      if (translations[lang][key]) {
        element.placeholder = translations[lang][key];
      }
    });

  // Update direction
  document.documentElement.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
  document.documentElement.setAttribute("lang", lang);

  // Update button text
  languageSwitcher.textContent = lang === "en" ? "FA" : "EN";

  // Save language preference
  localStorage.setItem("language", lang);
  currentLang = lang;

  // Update loading message
  updateLoadingMessage();

  // Update form placeholders
  updateFormPlaceholders(lang);
}

// Language switcher click handler
languageSwitcher.addEventListener("click", () => {
  const newLang = currentLang === "en" ? "fa" : "en";
  updateContent(newLang);
});

// Initial content update
document.addEventListener("DOMContentLoaded", () => {
  updateContent(currentLang);
});

// Update loading message based on language
function updateLoadingMessage() {
  const loadingText = document.querySelector(".loading-spinner p");
  if (loadingText) {
    loadingText.textContent = translations[currentLang].loadingMessage;
  }
}

// Update form placeholders based on language
function updateFormPlaceholders(lang) {
  const form = document.getElementById("contactForm");
  if (form) {
    if (lang === "fa") {
      form.name.placeholder = "نام شما";
      form.email.placeholder = "ایمیل شما";
      form.phone.placeholder = "شماره تماس شما";
      form.message.placeholder = "جزئیات پروژه";
      form.querySelector(".submit").textContent = "ارسال پیام";
    } else {
      form.name.placeholder = "Your Name";
      form.email.placeholder = "Your Email";
      form.phone.placeholder = "Your Phone Number";
      form.message.placeholder = "Project Details";
      form.querySelector(".submit").textContent = "Send Message";
    }
  }
}
