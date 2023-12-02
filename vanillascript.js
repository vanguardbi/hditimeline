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
      subtitle: "Super Gang and the Player",
      description:
        "The reader gets to choose whether Stella stays with her “sugar daddy” or leaves and reclaims her life.",
      category: "Game-Based Learning",
    },
    {
      id: "3",
      imageUrl:
        "https://drive.google.com/uc?export=view&id=1YL0IvtLQmmv4JRrOXgnCZO-vfAmUb5Xu",
      year: "2015 - 2019",
      location: "GLOBAL -24 Priority Countries",
      title: "THINK BIG: Point & Click Fever Game",
      description:
        "Trainers experience a Sub-Saharan African mother care-seeking journey on who or what influences her choices to treat her infant’s fever.",
      category: "Game-Based Learning",
    },

    {
      id: "6",
      imageUrl: "https://gameofchoicenotchance.com/i/image1.png",
      year: "2018 - ONGOING",
      location: "india",
      title: "Go Nisha Go",
      description:
        "An award-winning D2C Game co-created with youth that lets them discover, explore, learn and play their way toward becoming empowered choice-makers.",
      category: "Game-Based Learning",
    },
    {
      id: "7",
      imageUrl:
        "https://drive.google.com/uc?export=view&id=1azsfD8nG8BWT932z68gWfeyWVg4qfRDD",
      year: "2008–2010",
      location: "Pakistan",
      title:"Interactive Voice Response",
      subtitle: "Hifazat: Because life is precious",
      description: "Seamless health care solutions to the three delays for pregnant women and mothers: Geographic distance, lack of personal agency, and transportation.",
      category: "Game-Based Learning",
    },

    {
      id: "8",
      imageUrl:
        "",   year: "2015–2019",
      location: "USA, Great Falls National Park, Potomac, Maryland",
      title: "Digital Simulation",
      subtitle: "Loop trail quest",
      description: "Exploring choice-making in shared spaces through Intervention and research to understand conservation behaviors.",
      category: "Demand Generation",
    },
    {
      id: "9",
      imageUrl:
        "https://images.unsplash.com/photo-1682686581427-7c80ab60e3f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year: "Coming up 2024",
      location: "India",
      title: "Mobile Games",
      description: "A D2C Game to equip adolescent boys with the vocabulary and knowledge to approach and be intimate with girls and deal with rejection. A D2C Game co-created with girls in Nepal to empower them in making choices, while gaining direct access to information and resources about their health and well-being. ",
      category: "Demand Generation",
    },
    {
      id: "3",
      imageUrl:
        "https://images.unsplash.com/photo-1661240794784-ca1cb2008b6f?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year: "1995-2002",
      location: "Vietnam",
      title: "Product",
      description: "Description",
      category: "Demand Generation",
    },
    {
      id: "4",
      imageUrl:
        "https://images.unsplash.com/photo-1682685796467-89a6f149f07a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year: "1998-99",
      location: "COUNTRY",
      title: "Product",
      description: "Description",
      category: "Demand Generation",
    },
    {
      id: "5",
      imageUrl:
        "https://images.unsplash.com/photo-1700463887323-732990f4540a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year: "2001 - 2003",
      location: "Bangladesh",
      title: "Badgee Kuduus",
      description: "Description",
      category: "Demand Generation",
    },
    {
      id: "6",
      imageUrl:
        "https://images.unsplash.com/photo-1700463887323-732990f4540a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year: "2003 - 2006",
      location: "Ethiopia",
      title: "Product",
      description: "Description",
      category: "Demand Generation",
    },
    {
      id: "7",
      imageUrl:
        "https://images.unsplash.com/photo-1700463887323-732990f4540a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year: "2007",
      location: "Rwanda",
      title: "Product",
      description: "Description",
      category: "Demand Generation",
    },

    {
      id: "1",
      imageUrl:
        "https://images.unsplash.com/photo-1682685797828-d3b2561deef4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year: "2010-2012",
      location: "Ethiopia",
      title: "Product",
      description: "Description",
      category: "Demand Generation",
    },
    {
      id: "2",
      imageUrl:
        "https://images.unsplash.com/photo-1682686581427-7c80ab60e3f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year: "2011–2014",
      location: "Bangladesh",
      title: "Product",
      description: "Description",
      category: "Demand Generation",
    },
    {
      id: "3",
      imageUrl:
        "https://images.unsplash.com/photo-1695653420508-f2481c1d783c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year: "2015",
      location: "Country",
      title: "Title",
      description: "Description",
      category: "Demand Generation",
    },
    {
      id: "4",
      imageUrl:
        "https://images.unsplash.com/photo-1682685796467-89a6f149f07a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year: "2004-2013",
      location: "Guyana",
      title: "Product",
      description: "Workplace initiatives. Business coalition.",
      category: "Social Franchising of Health Services",
    },
    {
      id: "5",
      imageUrl:
        "https://images.unsplash.com/photo-1700463887323-732990f4540a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year: "2004-2007",
      location: "Vietnam",
      title: "Product",
      description: "Description",
      category: "Social Franchising of Health Services",
    },
    {
      id: "6",
      imageUrl:
        "https://images.unsplash.com/photo-1700463887323-732990f4540a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year: "2007 - 2010",
      location: "Country",
      title: "Product",
      description: "Hizvat Circ",
      category: "Social Franchising of Health Services",
    },
    {
      id: "7",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1700580483044-aa2db0a52be4?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year: "2008-2010",
      location: "Pakistan",
      title: "Product",
      description: "Description",
      category: "Social Franchising of Health Services",
    },

    {
      id: "7",
      imageUrl:
        "https://images.unsplash.com/photo-1571053748382-141b7de59b88?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year: "Year",
      location: "Bangkok",
      title: "Product",
      description: "Service clinic workplaces",
      category: "Social Franchising of Health Services",
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
  function renderTimeline(category = "Full Timeline") {
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
