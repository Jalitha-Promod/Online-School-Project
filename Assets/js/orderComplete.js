document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");
  const sidebarToggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const sectionHeaders = document.querySelectorAll(".sidebar .section-header");

  // Tab functionality
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");

      const targetTab = tab.getAttribute("data-tab");
      tabContents.forEach((content) => {
        content.classList.remove("active");
        if (content.id === targetTab + "-content") {
          content.classList.add("active");
        }
      });
    });
  });

  // Mobile Sidebar Toggle
  if (sidebarToggle && sidebar && overlay) {
    sidebarToggle.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevent click from bubbling to document
      sidebar.classList.toggle("show");
      overlay.classList.toggle("show");
      document.body.style.overflow = sidebar.classList.contains("show")
        ? "hidden"
        : "";
    });

    overlay.addEventListener("click", () => {
      sidebar.classList.remove("show");
      overlay.classList.remove("show");
      document.body.style.overflow = "";
    });
    // Close sidebar if clicked outside on mobile/tablet
    document.addEventListener("click", (e) => {
      if (
        sidebar.classList.contains("show") &&
        !sidebar.contains(e.target) &&
        e.target !== sidebarToggle &&
        !sidebarToggle.contains(e.target)
      ) {
        sidebar.classList.remove("show");
        overlay.classList.remove("show");
        document.body.style.overflow = "";
      }
    });
  }

  // Sidebar Accordion
  sectionHeaders.forEach((header) => {
    const lessonList = header.nextElementSibling;
    const arrow = header.querySelector(".arrow");

    if (header.getAttribute("data-section") === "intro-ux" && lessonList) {
      lessonList.style.display = "block";
      header.classList.add("open");
      if (arrow) arrow.style.transform = "rotate(90deg)";
    } else if (lessonList) {
      lessonList.style.display = "none";
      if (arrow) arrow.style.transform = "rotate(0deg)";
    }

    header.addEventListener("click", () => {
      if (lessonList) {
        const isOpen = lessonList.style.display === "block";
        lessonList.style.display = isOpen ? "none" : "block";
        header.classList.toggle("open", !isOpen);
        if (arrow)
          arrow.style.transform = isOpen ? "rotate(0deg)" : "rotate(90deg)";
      }
    });
  });
});
