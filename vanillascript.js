document.addEventListener("DOMContentLoaded", () => {
  // Cache commonly used elements
  const timelineContainer = document
    .getElementById("timeline-1")
    .querySelector(".timeline");
  const wholePage = document.getElementById("timeline-1");
  const navItems = document.querySelectorAll(".nav-item");
  const hamburgerIcon = document.getElementById("hamburger-icon");
  const floatingNav = document.getElementById("floating-nav");
  const timelineData = [
    {
      id: "1",
      imageUrl: "",
      year: "2004-2009",
      location: "Guyana",
      title: "Interactive Comic Book",
      category: "Game-Based Learning",
      details: [
        {
          subtitle: "Super Gang and the Player",
          description:
            "The reader gets to choose whether Stella stays with her “sugar daddy” or leaves and reclaims her life.",
        },
        // Additional details can be added here
      ],
    },
  ];

  const categorySettings = {
    "Full Timeline": {
      color: "#333",
      backgroundImage:
        "https://images.unsplash.com/photo-1571053748382-141b7de59b88?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    "Game-Based Learning": {
      color: "#7d1e57",
      backgroundImage:
        "https://images.unsplash.com/photo-1682685797828-d3b2561deef4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    "Demand Generation": {
      color: "#d7401a",
      backgroundImage:
        "https://images.unsplash.com/photo-1682686581427-7c80ab60e3f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    "Social Franchising of Health Services": {
      color: "#3d7a31",
      backgroundImage:
        "https://images.unsplash.com/photo-1695653420508-f2481c1d783c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  };

  // Render the timeline
  function rendersTimeline(category = "Full Timeline") {
    timelineContainer.innerHTML = ""; // Clear existing content

    timelineData.forEach((item) => {
      if (category !== "Full Timeline" && item.category !== category) return;

      const backgroundColor =
        categorySettings[item.category].color || "#ffffff";
      const content = `
        <div class="timeline-item" data-text="${item.category}">
          <div class="timeline__content">
            <img class="timeline__img" src="${item.imageUrl}" loading="lazy" />
            <div class="timeline__text" style="background-color: ${backgroundColor};">
              <h2 class="timeline__content-title">${item.year}<span> ${item.location} </span></h2>
              <p class="timeline__content-desc"><span class="title">${item.title}<br/><br/></span></p>
              <p class="timeline__content-desc"><span class="subtitle">${item.subtitle}<br/></span>${item.description}</p>
              <button>Read more</button>
            </div>
          </div>
        </div>
      `;
      timelineContainer.insertAdjacentHTML("beforeend", content);
    });
  }

  function renderTimeline(category = "Full Timeline") {
    timelineContainer.innerHTML = ""; // Clear existing content

    timelineData.forEach((item) => {
      if (category !== "Full Timeline" && item.category !== category) return;

      let detailsContent = "";
      item.details.forEach((detail) => {
        detailsContent += `
          <div>
            <p class="subtitle">${detail.subtitle}</p>
            <p class="desc">${detail.description}</p>
          </div>
        `;
      });

      const backgroundColor =
        categorySettings[item.category].color || "#ffffff";
      const content = `
        <div class="timeline-item" data-text="${item.category}">
          <div class="timeline__content">
            <img class="timeline__img" src="${item.imageUrl}" loading="lazy" />
            <div class="timeline__text" style="background-color: ${backgroundColor};">
            <h2 class="timeline__content-title">${item.year}<span> ${item.location} </span></h2>
            <p class="timeline__content-desc"><span class="title">${item.title}<br/><br/></span></p>
              ${detailsContent}
              <button>Read more</button>
            </div>
          </div>
        </div>
      `;
      timelineContainer.insertAdjacentHTML("beforeend", content);
    });
  }

  // Initialize the timeline
  function initTimeline(category = "Full Timeline") {
    renderTimeline(category);
    setupIntersectionObserver();
  }

  // Setup Intersection Observer
  function setupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("timeline-item--active");
          const imageUrl = entry.target.querySelector(".timeline__img").src;
          wholePage.style.backgroundImage = `url(${imageUrl})`;
        } else {
          entry.target.classList.remove("timeline-item--active");
        }
      });
    }, observerOptions);

    document
      .querySelectorAll(".timeline-item")
      .forEach((item) => observer.observe(item));
  }

  // Setup navigation
  function setupNavigation() {
    navItems.forEach((item) => {
      item.addEventListener("click", (event) => {
        // Remove active class from all nav items
        navItems.forEach((navItem) => navItem.classList.remove("active"));

        // Add active class to the clicked nav item
        event.currentTarget.classList.add("active");

        const selectedCategory = item.getAttribute("data-category");
        const backgroundImage =
          categorySettings[selectedCategory].backgroundImage;
        wholePage.style.backgroundImage = `url(${backgroundImage})`;
        initTimeline(selectedCategory);

        // Close the floating nav
        floatingNav.classList.remove("active");
        hamburgerIcon.innerHTML = "&#9776;";
        hamburgerIcon.classList.remove("active");
      });
    });
  }

  function toggleNavigation() {
    floatingNav.classList.toggle("active");
  }

  function setupHamburgerToggle() {
    hamburgerIcon.addEventListener("click", () => {
      hamburgerIcon.classList.toggle("active");
      if (hamburgerIcon.classList.contains("active")) {
        hamburgerIcon.innerHTML = ""; // Change to 'X' icon
      } else {
        hamburgerIcon.innerHTML = "&#9776;"; // Change back to hamburger icon
      }
      toggleNavigation();
    });
  }

  // Initialize functions
  initTimeline();
  setupHamburgerToggle();
  setupNavigation();
});
