/* Navigation drawer, project filtering, and contact form interactions */

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggleBtn = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      toggleBtn.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Project category filter (projects.html)
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll("[data-category]");
  if (filterBtns.length && projectCards.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        filterBtns.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const filter = btn.dataset.filter;

        projectCards.forEach((card) => {
          const cats = (card.dataset.category || "").split(" ");
          card.style.display = filter === "all" || cats.includes(filter) ? "" : "none";
        });
      });
    });
  }

  // Contact form handler (opens pre-filled mailto & shows confirmation)
  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");
  if (contactForm && formStatus) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const subject = document.getElementById("subject").value.trim();
      const message = document.getElementById("message").value.trim();

      const mailtoBody = encodeURIComponent(
        `From: ${name} (${email})\n\n${message}`
      );
      const mailtoHref = `mailto:work.fayzan@gmail.com?subject=${encodeURIComponent(
        subject || "Portfolio Inquiry"
      )}&body=${mailtoBody}`;

      formStatus.textContent =
        "[+] Opening your email client to send message to work.fayzan@gmail.com...";
      window.location.href = mailtoHref;
    });
  }

  // Copy email button
  const copyBtn = document.getElementById("copy-email-btn");
  if (copyBtn) {
    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText("work.fayzan@gmail.com");
        copyBtn.textContent = "Copied!";
        setTimeout(() => {
          copyBtn.textContent = "Copy Email";
        }, 1800);
      } catch {
        copyBtn.textContent = "work.fayzan@gmail.com";
      }
    });
  }
});
