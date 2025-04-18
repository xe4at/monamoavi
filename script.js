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
    hello: "Hello",
    im: "I'm",
    role: "Professional Content Creator",
    description:
      "With over 2 years of experience in videography, editing, and digital content creation. Specializing in creating professional and engaging content for businesses and brands.",
    aboutTitle: "About Me",
    aboutDesc:
      "Hey there! I'm a content creator who loves making cool stuff with just my phone. From shooting videos to editing and creating awesome content—it's all about being creative and having fun!",
    skill1: "Mobile Videography",
    skill2: "Mobile Video Editing",
    skill3: "Social Media Content",
    skill4: "Product Photography",
    skill5: "Brand Page Design",
    aboutFooter:
      "With a few years of experience in the digital world, I've learned how to create amazing content with simple tools. For me, mobile content creation isn't just a job—it's a way to tell stories in a fun and authentic way!",
    servicesTitle: "My Services",
    servicesDesc: "What I Do",
    portfolioTitle: "My Latest Work",
    portfolioDesc: "Check Out My Projects",
    contactTitle: "Contact Me",
    contactDesc: "Want to Create Something Awesome Together?",
    viewServices: "View Services",
    contactMe: "Contact Me",
    viewWork: "View My Work",
    sendMessage: "Send Message",
    yourName: "Your Name",
    yourEmail: "Your Email",
    yourPhone: "Your Phone Number",
    projectDetails: "Project Details",
    copyright: "Copyright © 2024 All Rights Reserved",
    videoService: "Mobile Videography",
    videoServiceDesc:
      "From ceremonies and events to behind-the-scenes work, I capture everything with my mobile in high quality. Creative angles and professional lighting, perfect for social media.",
    editingService: "Mobile Video Editing",
    editingServiceDesc:
      "Quick and professional mobile editing: color grading, cool effects, typography, and rhythm perfect for Instagram and ads.",
    contentService: "Content Creation",
    contentServiceDesc:
      "From content calendar design to promotional and educational videos—all with mobile and tailored to your brand identity.",
    commercial: "Home Appliance Ad",
    commercialDesc:
      "Made a cool ad for a home appliance brand. Shot everything on my phone and added some awesome effects!",
    corporate: "Company Story",
    corporateDesc:
      "Created a fun company story video. Mixed interviews with cool visuals to make it interesting!",
    social: "Social Media Fun",
    socialDesc:
      "Made some super engaging content for Instagram. Short videos, stories, and posts that people loved!",
    sending: "Sending...",
    messageSent: "Message sent successfully!",
    messageError: "Error sending message. Please try again.",
    availableFor:
      "For collaboration, consultation, or questions about services, choose the easiest way to reach me:",
    loadingMessage: "Sending Message...",
    contactFooter:
      "No matter what stage your project is in, I'm here to help you turn your ideas into impactful content—with mobile and lots of creativity!",
  },
  fa: {
    home: "خانه",
    about: "درباره من",
    services: "خدمات",
    portfolio: "نمونه کارها",
    contact: "تماس",
    hello: "سلام",
    im: "من",
    role: "تولید کننده محتوای حرفه‌ای",
    description:
      "با بیش از ۲ سال تجربه در فیلمبرداری، تدوین و تولید محتوای دیجیتال. متخصص در تولید محتوای حرفه‌ای و جذاب برای کسب‌وکارها و برندها.",
    aboutTitle: "درباره من",
    aboutDesc:
      "سلام! من یه تولیدکننده محتوا هستم که عاشق ساختن چیزهای جذاب با موبایلمه. از فیلمبرداری و ادیت گرفته تا تولید محتوای باحال—همه‌چی سرگرم‌کننده و خلاقانه!",
    skill1: "فیلمبرداری با موبایل",
    skill2: "ادیت ویدیو با موبایل",
    skill3: "محتوای شبکه‌های اجتماعی",
    skill4: "عکاسی از محصولات",
    skill5: "طراحی پیج برندها",
    aboutFooter:
      "با چند سال تجربه توی فضای دیجیتال، یاد گرفتم چطور با ابزارهای ساده محتوای جذاب تولید کنم. برای من تولید محتوا با موبایل فقط یه کار نیست—یه راه برای گفتن داستان‌ها به روش باحال و واقعیه!",
    servicesTitle: "خدمات من",
    servicesDesc: "خدمات من",
    portfolioTitle: "آخرین کارهام",
    portfolioDesc: "ببین چه کارای باحالی کردم",
    contactTitle: "تماس با من",
    contactDesc: "دوست داری باهم یه پروژه خفن بسازیم؟",
    viewServices: "مشاهده خدمات",
    contactMe: "تماس با من",
    viewWork: "مشاهده کارها",
    sendMessage: "ارسال پیام",
    yourName: "نام شما",
    yourEmail: "ایمیل شما",
    yourPhone: "شماره تماس شما",
    projectDetails: "جزئیات پروژه",
    copyright: "تمامی حقوق محفوظ است © 1403",
    videoService: "فیلمبرداری موبایلی",
    videoServiceDesc:
      "فیلمبرداری حرفه‌ای با موبایل از مراسم، محصولات و پشت‌صحنه‌های کاری با کیفیت بالا و زاویه‌های خلاقانه، مخصوص شبکه‌های اجتماعی.",
    editingService: "تدوین موبایلی",
    editingServiceDesc:
      "تدوین سریع و حرفه‌ای با موبایل: اصلاح رنگ، افکت‌گذاری، تایپ‌های جذاب و ریتم متناسب با فضای اینستاگرام.",
    contentService: "تولید محتوا",
    contentServiceDesc:
      "تولید محتوای مخصوص شبکه‌های اجتماعی، از طراحی تقویم محتوایی تا تولید ویدیوهای تبلیغاتی و آموزشی با موبایل.",
    commercial: "تبلیغ لوازم خانگی",
    commercialDesc:
      "یه تبلیغ باحال برای یه برند لوازم خانگی ساختم. همه‌چی رو با موبایل گرفتم و افکت‌های جذاب اضافه کردم!",
    corporate: "داستان شرکت",
    corporateDesc:
      "یه ویدیوی جذاب از داستان شرکت ساختم. مصاحبه‌ها رو با تصاویر باحال ترکیب کردم تا جذاب بشه!",
    social: "محتوای شبکه‌های اجتماعی",
    socialDesc:
      "محتوای جذابی برای اینستاگرام ساختم. ویدیوهای کوتاه، استوری و پست‌هایی که همه دوست داشتن!",
    sending: "در حال ارسال...",
    messageSent: "پیام شما با موفقیت ارسال شد!",
    messageError: "خطا در ارسال پیام. لطفا دوباره تلاش کنید.",
    loadingMessage: "در حال ارسال پیام...",
    availableFor:
      "برای همکاری، مشاوره یا سوال در مورد خدمات، راحت‌ترین راه رو انتخاب کن و بهم پیام بده:",
    contactFooter:
      "فرقی نمی‌کنه پروژه‌ت در چه مرحله‌ای باشه، من اینجام تا کمکت کنم ایده‌هات رو تبدیل به محتوای تاثیرگذار کنی—با موبایل و کلی خلاقیت!",
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
