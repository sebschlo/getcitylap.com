const siteConfig = {
  iosUrl: "#",
  androidUrl: "#",
  supportEmail: "support@citylap.app",
  githubUrl: ""
};

function applyLinks() {
  const iosLinks = document.querySelectorAll('[data-role="ios-link"]');
  const androidLinks = document.querySelectorAll('[data-role="android-link"]');
  const supportLinks = document.querySelectorAll('[data-role="support-link"]');
  const githubLinks = document.querySelectorAll('[data-role="github-link"]');

  iosLinks.forEach((link) => {
    link.href = siteConfig.iosUrl;
    if (siteConfig.iosUrl === "#") {
      link.setAttribute("aria-disabled", "true");
      link.addEventListener("click", (event) => event.preventDefault());
    }
  });

  androidLinks.forEach((link) => {
    link.href = siteConfig.androidUrl;
    if (siteConfig.androidUrl === "#") {
      link.setAttribute("aria-disabled", "true");
      link.addEventListener("click", (event) => event.preventDefault());
    }
  });

  supportLinks.forEach((link) => {
    link.href = `mailto:${siteConfig.supportEmail}`;
  });

  githubLinks.forEach((link) => {
    if (!siteConfig.githubUrl) {
      return;
    }

    link.href = siteConfig.githubUrl;
    link.classList.remove("is-hidden");
  });
}

function runAnimations() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion || typeof window.gsap === "undefined") {
    document.querySelectorAll(".reveal").forEach((node) => {
      node.style.opacity = "1";
      node.style.transform = "none";
    });
    return;
  }

  window.gsap.to(".ambient-one", {
    x: -30,
    y: 24,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  window.gsap.to(".ambient-two", {
    x: 22,
    y: -18,
    duration: 7,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  window.gsap.to(".floating-card-one", {
    y: -10,
    duration: 3.6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  window.gsap.to(".floating-card-two", {
    y: 12,
    duration: 4.2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  window.gsap.to(".floating-card-three", {
    y: -8,
    duration: 3.2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  window.gsap.to(".reveal", {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: "power2.out"
  });
}

applyLinks();
runAnimations();
