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

  const float = (selector, y, duration) => {
    if (!document.querySelector(selector)) {
      return;
    }
    window.gsap.to(selector, {
      y,
      duration,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  };

  float(".chip-updated", -8, 3.4);
  float(".chip-location", 10, 4);
  float(".av-out-1", -10, 3);
  float(".av-out-2", 9, 3.8);

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
