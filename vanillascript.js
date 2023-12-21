document.addEventListener("DOMContentLoaded", () => {
  function preloadUpcomingImages(currentIndex, preloadCount = 3) {
    const upcomingItems = timelineData.slice(
      currentIndex,
      currentIndex + preloadCount
    );
    upcomingItems.forEach((item) => {
      const img = new Image();
      img.src = `./assets/${item.id}.jpg`; // Adjust the path as necessary
    });
  }

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
      year: "2024",
      location: "India",
      title: "MOBILE GAME",
      category: "Game-Based Learning",
      details: [
        {
          subtitle: "Coming Up: A Game for Boys",
          description: `A D2C Game to equip adolescent boys with the vocabulary and knowledge to approach and be intimate with girls and deal with rejection. 
          `,
        },
      ],
    },

    {
      id: "2",
      year: "2024",
      location: "Nepal",
      title: "Mobile Game",
      category: "Game-Based Learning",
      partner: "PSI/UNICEF",
      details: [
        {
          subtitle: "Coming Up: A game for Girls",
          description: `A D2C Game co-created with girls in Nepal to empower them in making choices, while gaining direct access to information and resources about their health and well-being. 
          `,
        },
      ],
    },

    {
      id: "3",
      year: "2018-Ongoing",
      location: "India",
      title: "Mobile Game",
      category: "Game-Based Learning",
      partner: "PSI/UNDP/FAO",
      details: [
        {
          subtitle: "Go Nisha Go",
          description: `An award-winning D2C Game co-created with youth that lets them discover, explore, learn and play their way toward becoming empowered choice-makers.`,
        },
      ],
    },

    {
      id: "4",
      year: "2015-2019",
      location: " USA, Great Falls National Park, Potomac, Maryland",
      title: "Digital Simulation",
      category: "Game-Based Learning",
      details: [
        {
          subtitle: "Loop Trail Quest",
          description: `Exploring choice-making in shared spaces through a digital simulation with embedded research to understand behaviors that can put in motion triggers that cause the spread of zoonotic disease (tick-borne and mosquito borne diseases). Traditional booklets and videos were used to compare the impact of digital simulations.
          `,
        },
      ],
    },

    {
      id: "5",
      year: "2015-2019",
      location: "GLOBAL - 24 Priority Countries",
      title: "Games for Intervention Design",
      category: "Game-Based Learning",
      details: [
        {
          subtitle: "Point & click fever game",
          description: `Trainers experience a Sub-Saharan African mother’s care-seeking journey and  who or what influences her choices to treat her infant’s fever.`,
        },
        {
          subtitle: `Factors Card Game`,
          description: `A  “scattergories” game where program planners learn the interplay of structural, social,and  internal factors in individual decision-making.`,
        },
        {
          subtitle: "Chutes & Ladders",
          description: `Planners learn through play how different health conditions and diseases can be impacted by multi-faceted factors.
          `,
        },
        {
          subtitle: "Story Dice",
          description: `Players learn how random factors and circumstances can impact the best planned interventions. 
          `,
        },
      ],
    },

    {
      id: "8",
      year: "2011-2014",
      location: "Guyana",
      title: "Strengthening Democratic Local Governance",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: "We are the government",
          description: `Creating demand for good governance and citizen engagement among youth and women through mass media, social media, citizen reporting and engagement of journalists.

          `,
        },
      ],
    },

    {
      id: "9",
      year: "2011-2013",
      location: "Caribbean Region: Guyana, Barbados, Trinidad, & Jamaica",
      title: "Music Videos",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: "Friendz",
          description: `Mobilization of community and youth engagement through music videos to support People Living with AIDS

          `,
        },
      ],
    },

    {
      id: "10",
      year: "2010-2012",
      location: "Caribbean Region: Guyana, Barbados, Trinidad, & Jamaica",
      title: "Multi-Media Interventions",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: "Smart and Strong",
          description: `Alive & Thrive Campaign to engage men and leverage agricultural and WASH sectors in optimal infant and young child feeding practices.

          `,
        },
      ],
    },

    {
      id: "11",
      year: "2008",
      location: "Pakistan",
      title: "Policy Guidance",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: "",
          description: `National policy guidance on the intersections of reproductive health, women’s and children’s health.
          `,
        },
      ],
      partner: "Save the Children",
    },

    {
      id: "6",
      year: "2008-2010",
      location: "Pakistan",
      title: "Interactive Voice Response",
      category: "Game-Based Learning",
      details: [
        {
          subtitle: "Hifazat: Because life is precious",
          description: `Seamless health care solutions to the three delays for pregnant women and mothers: geographic distance, lack of personal agency, and transportation.
          `,
        },
      ],
    },

    {
      id: "12",
      year: "2007",
      location: "Rwanda",
      title: "Indoor Residual Spraying (IRS)",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: "Malaria Prevention",
          description: `Behavior change strategies to support efficacy of IRS
          `,
        },
      ],
      partner: "Save the Children",
    },

    {
      id: "7",
      year: "2004-2009",
      location: "Guyana",
      title: "Interactive Comic Book",
      category: "Game-Based Learning",
      details: [
        {
          subtitle: "Super Gang and the Player",
          description: `The reader gets to choose whether Stella stays with her “sugar daddy” or leaves and reclaims her life.
          `,
        },
      ],
    },

    {
      id: "13",
      year: "2004-2013",
      location: "Guyana",
      title: "Multi-Media Interventions",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: `"Don’t Dis Me"`,
          description: `Communications from Comic Books, Music Videos, to Rock Concerts aimed at adolescents and young adults to address stigma, testing, prevention, treatment, care, and support.
          `,
        },
      ],
      partner: "FHI360/USAID PEPFAR",
    },

    {
      id: "14",
      year: "2003-2006",
      location: "Ethiopia",
      title: "HIV Compassion Campaign",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: `Demand Generation for HIV Testing`,
          description: `Partnership with Coca-Cola Foundation to produce an  award-winning Music Video montage of National Celebrities.`,
        },
      ],
      partner: "FHI360",
    },

    {
      id: "15",
      year: "2003",
      location: "Malawi",
      title: "Policy Guidance",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: ``,
          description: `National policy guidance on Maternal Newborn health`,
        },
      ],
      partner: "Save the Children",
    },

    {
      id: "16",
      year: "2001-2004",
      location: "Pakistan & Ethiopia",
      title: "Tetanus Immunization Campaigns",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: ``,
          description: `Mass media, feature films, and community engagement to promote immunizing women of reproductive age.`,
        },
      ],
      partner: "Save the Children/UNICEF",
    },

    {
      id: "17",
      year: "2001-2004",
      location: "Nepal",
      title: "Clean Delivery Product",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: `National New-born Care Strategy`,
          description: `National policy guidance and ideation and implementation support to women entrepreneurs for clean birthing kits`,
        },
      ],
      partner: "Save the Children",
    },

    {
      id: "18",
      year: "2001-2004",
      location: "Nepal",
      title: "Hygiene Product",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: `Handwriting with soap`,
          description: `A private sector partnership with Unilever to produce an award winning and impactful campaign that promoted the benefits of good handwashing practices and ensured supply of affordable soap.`,
        },
      ],
      partner: "UNICEF/World bank/Unilever",
    },

    {
      id: "19",
      year: "2001-2003",
      location: "Bangladesh",
      title: "Branding & Campaign",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: `Bajee Quddus Wanna bet?`,
          description: `HIV awareness campaign that leveraged humor and Bollywood-style character.
          `,
        },
      ],
      partner: "FHI360/USAID",
    },

    {
      id: "20",
      year: "1995-2002",
      location: "Vietnam, Cambodia, Nepal",
      title: "Product Branding & Distribution",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: `IDEAL (Vietnam)`,
          description: `Oral Contraceptives and Emergency Contraceptives (ECP)

          `,
        },

        {
          subtitle: `Diamond Lady (Cambodia)`,
          description: `Oral Contraceptives 
          `,
        },

        {
          subtitle: `Nava Jeevan (Nepal)`,
          description: `New Life Orange-flavored Oral Rehydration Salts for Children 
          `,
        },

        {
          subtitle: `Sunaulo Gulaf Oral Contraceptive Pills (Nepal)`,
          description: `Aligning consumer benefits such as radiant skin, energy, prosperity, and vibrancy to promote health products.
          `,
        },
      ],
      partner: "KfW (German Development Bank)",
    },

    {
      id: "21",
      year: "1998-1999",
      location: "Indonesia",
      title: "Mass Media Campaign",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: `Action Stop AIDS (ASA)  Aksi Stop AIDS`,
          description: `Mass media communication and private sector partnerships to promote AIDS prevention.`,
        },
      ],
      partner: "FHI360/USAID",
    },

    {
      id: "22",
      year: " 1996-1998",
      location: "Nepal",
      title: "Condom and Animation Campaign",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: `Dhaali Dai`,
          description: `Dual protection engagement using humor and animation.`,
        },
      ],
      partner: "FHI360/USAID",
    },

    {
      id: "23",
      year: " 1996-1998",
      location: "Nepal",
      title: "Communication Strategy",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: `Visceral Leishmaniasis (Kala-Azar)`,
          description: `Communication strategy development to first understand disease causation and the factors that put humans at risk and to distill those insights into compelling messaging.
          `,
        },
      ],
      partner: "ARD/Now Tetratech",
    },

    {
      id: "24",
      year: " 1995",
      location: "Myanmar",
      title: "Branding of Condoms",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: `APHAW Branded Condoms`,
          description: `Position the brand as a trusted friend resulting in it becoming the largest selling condom in Asia.`,
        },
      ],
      partner: "PSI/UNICEF",
    },

    {
      id: "25",
      year: " 1995",
      location: "Myanmar",
      title: "Fuel-Efficient Stoves",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle: `A-1 Savings`,
          description: `Texaco-funded women’s pottery cooperative initiative to produce and sell stoves to reduce deforestation and in-door smoke.`,
        },
      ],
      partner: "PSI/UNICEF",
    },

    {
      id: "26",
      year: "2008-2010",
      location: "Pakistan",
      title: "Branded 24/7 Health Centers, Transport, and Decision Support",
      category: "Social Franchising of Health Services",
      details: [
        {
          subtitle: `Hifazat: Because Life is Precious`,
          description: `Branded ‘uber-style’ taxis take pregnant women to care, where trained providers and certified health centers provide 24/7 seamless healthcare under this umbrella brand of protection.`,
        },
      ],
      partner: "IRC/USAID",
    },

    {
      id: "27",
      year: "2007-2010",
      location: "Bangladesh",
      title: "Health Clinics",
      category: "Social Franchising of Health Services",
      details: [
        {
          subtitle: `Smiling Sun Clinic`,
          description: `Branding refresh and outreach of health clinics to appeal to young married couples.`,
        },
      ],
      partner: "Chemonics/USAID",
    },

    {
      id: "28",
      year: "2004-2013",
      location: "Guyana",
      title: "A coalition of 43 businesses",
      category: "Social Franchising of Health Services",
      details: [
        {
          subtitle: `Guyana Business Coalition`,
          description: `Businesses unite to provide HIV testing, workplace training, transportation, insurance, and other support needs. Shared learnings and partnerships with Thai and S. Africa Business Coalitions.`,
        },
      ],
      partner: "FHI360/MSH PEPFAR/USAID",
    },

    {
      id: "29",
      year: "2004-2007",
      location: "Bangladesh",
      title: "Branded Drop-in Centers",
      category: "Social Franchising of Health Services",
      details: [
        {
          subtitle: `Modhumita (Sweet Friend)`,
          description: `Drop in center for gay men, sex workers and injection drug users.`,
        },
      ],
    },

    {
      id: "30",
      year: "2004-2007",
      location: "Bangladesh",
      title: "Branded Drop-in Centers",
      category: "Social Franchising of Health Services",
      details: [
        {
          subtitle: `Modhumita (Sweet Friend)`,
          description: `160 customized lounges and meeting places that attracted marginalized populations for testing and treatment for STIs including HIV.
          `,
        },
      ],
      partner: "FHI360/MSH PEPFAR/USAID",
    },

    {
      id: "31",
      year: "2003-2004",
      location: "Vietnam",
      title: "HIV testing and counseling spaces",
      category: "Social Franchising of Health Services",
      details: [
        {
          subtitle: `Café corners`,
          description: `HIV testing and counseling corners in coffee shops.`,
        },
      ],
      partner: "Marie Stopes International",
    },

    {
      id: "31",
      year: "1995",
      location: "Nepal",
      title:
        "Injectable contraceptive distribution, training and certification",
      category: "Social Franchising of Health Services",
      details: [
        {
          subtitle: ``,
          description: `A global first over-the-counter contraceptive distributed through a network of branded pharmacies with quality assured through mystery shopper checks.`,
        },
      ],
    },
  ];

  const categorySettings = {
    "Full Timeline": {
      color: "#f8f8f8",
      backgroundImage:
        "https://images.unsplash.com/photo-1571053748382-141b7de59b88?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    "Game-Based Learning": {
      color: "#d7401a",
      backgroundImage:
        "https://images.unsplash.com/photo-1682685797828-d3b2561deef4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    "Branding & Demand Generation": {
      color: "#e8a425",
      backgroundImage:
        "https://images.unsplash.com/photo-1682686581427-7c80ab60e3f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    "Social Franchising of Health Services": {
      color: "#3d7a31",
      backgroundImage:
        "https://images.unsplash.com/photo-1695653420508-f2481c1d783c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  };

  function renderTimeline(category = "Full Timeline") {
    timelineContainer.innerHTML = ""; // Clear existing content

    timelineData.forEach((item) => {
      if (category !== "Full Timeline" && item.category !== category) return;

      const sublocationContent = item.sublocation
        ? ` - ${item.sublocation}`
        : "";

      let detailsContent = "";
      item.details.forEach((detail) => {
        const subtitle = detail.subtitle
          ? `<p class="subtitle">${detail.subtitle}</p>`
          : "";

        detailsContent += `
                <div class = "details">
                ${subtitle}
                    <p class="desc">${detail.description}</p>
                </div>
            `;
      });

      const backgroundColor =
        // categorySettings[item.category].color || "rgba(0,0,0,0)";
        "rgba(0,0,0,0)";

      const dividerColor =
        categorySettings[item.category].color || "rgba(0,0,0,0)";

      const partnerContent = item.partner
        ? `<span class="partner">${item.partner}</span>`
        : "";
      const content = `
 
          <div class="timeline-item" data-text="${item.year}">     
          <div class="year">
              <h3>${item.year}</h3> 
              <div class="dot"></div>         
          </div>     
              <div class="timeline__content">
                    <img class="timeline__img" src="./assets/${item.id}.jpg" loading="lazy" />
                    <div class="timeline__text" style="background-color: ${backgroundColor};">
                      <div class="title_content">
                            <span class="category">${item.category}</span>
                            <div class="divider" style="background-color: ${dividerColor};"></div>
                            <p class="location">${item.location} ${sublocationContent}<span> </span></p>
                      </div>
                      <p class="title">${item.title}</p> 
                      ${detailsContent}
                      <p class="partnerContainer"> ${partnerContent}</p>
                      <button style="background-color: ${dividerColor};">Read more</button>
                    </div>
              </div>
          </div>
 
        `;
      timelineContainer.insertAdjacentHTML("beforeend", content);
    });
  }

  // Initialize the timeline
  function initTimeline(category = "Full Timeline") {
    // Sort timelineData in descending order by year
    timelineData.sort((a, b) => {
      // Extract the first 4 characters of the year and convert to number
      const yearA = parseInt(a.year.substring(0, 4));
      const yearB = parseInt(b.year.substring(0, 4));

      // Compare the years
      return yearB - yearA;
    });

    renderTimeline(category);
    setupIntersectionObserver();
  }

  // Setup Intersection Observer
  function oldSetupIntersectionObserver() {
    const observerOptions = {
      threshold: 0.4,
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

  // Setup Intersection Observer
  function olderSetupIntersectionObserver() {
    const observerOptions = {
      threshold: [0, 0.25, 0.5, 0.75, 1],
      // Removed rootMargin from here
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        const viewportHeight = window.innerHeight;
        const itemHeight = entry.target.clientHeight;
        const rootMarginValue = Math.floor((viewportHeight - itemHeight) / 2);
        const rootMargin = `${rootMarginValue}px 0px`;

        // Update the rootMargin for the current entry dynamically
        observer.unobserve(entry.target);
        observer.observe(entry.target, { ...observerOptions, rootMargin });

        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          document
            .querySelectorAll(".timeline-item--active")
            .forEach((activeElement) => {
              activeElement.classList.remove("timeline-item--active");
            });
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

          // Preload images for upcoming items
          preloadUpcomingImages(index, 3); // Adjust the number of items to preload as needed
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
