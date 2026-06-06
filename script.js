// ── Launch-notification modal ──────────────────────────────────────────
// Until the apps are live, every call-to-action opens a signup modal where
// visitors can leave their email (handled by Buttondown).
function setupNotifyModal() {
  const modal = document.getElementById("notify-modal");
  if (!modal) {
    return;
  }

  const openModal = (event) => {
    if (event) {
      event.preventDefault();
    }
    if (typeof modal.showModal === "function") {
      if (!modal.open) {
        modal.showModal();
      }
    } else {
      modal.setAttribute("open", "");
    }
    const email = modal.querySelector("#bd-email");
    if (email) {
      window.setTimeout(() => email.focus(), 50);
    }
  };

  const closeModal = () => {
    if (typeof modal.close === "function") {
      modal.close();
    } else {
      modal.removeAttribute("open");
    }
  };

  document.querySelectorAll('[data-action="notify"]').forEach((trigger) => {
    trigger.addEventListener("click", openModal);
  });

  modal.querySelectorAll('[data-action="close-modal"]').forEach((trigger) => {
    trigger.addEventListener("click", closeModal);
  });

  // Click on the backdrop (outside the dialog content) closes the modal.
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
}

// ── Entrance + ambient animations ──────────────────────────────────────
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

  window.gsap.to(".reveal", {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.12,
    ease: "power2.out"
  });
}

setupNotifyModal();
runAnimations();
