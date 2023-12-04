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
      year: "1995-2002",
      location: "Vietnam, Cambodia, Nepal",
      title: "Product Branding and Distribution",
      category: "Branding & Demand Generation",
      details: [
        {
          subtitle:
            "IDEAL Oral Contraceptives (Vietnam) <br/> Diamond Lady Oral Contraceptives (Cambodia) <br/> Nava Jeevan (New Life Orange-flavored Oral Rehydration Salts for Children) (Nepal)",
          description: `Aligning consumer benefits such as radiant skin, energy, prosperity, and vibrancy to promote health products.`,
        },
      ],
      partner: "KfW (German Development Bank)",
    },

    {
      id: "2",
      imageUrl: "",
      year: "1995",
      location: "Myanmar",
      title: "Branding of Condoms",
      category: "Branding & Demand Generation",
      partner: "PSI/UNICEF",
      details: [
        {
          subtitle: "APHAW Branded Condoms",
          description:
            `Position the brand as a trusted friend resulting in it becoming the largest selling condom in Asia. `,
        }
      ],
    },

    {
      id: "3",
      imageUrl: "https://drive.google.com/uc?export=view&id=1zwsgjMH2rMSebr3HBeD9PZ1rYQoSdatz",
      year: "1995",
      location: "Myanmar",
      title: "Fuel-Efficient Stoves",
      category: "Branding & Demand Generation",
      partner: "PSI/UNDP/FAO",
      details: [
        {
          subtitle: "A-1 Savings",
          description:
            `Texaco-funded women’s pottery cooperative initiative to produce and sell stoves to reduce deforestation and in-door smoke.`,
        }
      ],
    },

    {
      id: "4",
      imageUrl: "",
      year: "1995",
      location: "Nepal",
      title: "Injectable contraceptive distribution, retraining and certification",
      category: "Social Franchising of Health Services",
      details: [
        {
          subtitle: "Sangini Three Monthly",
          description:
            `A global first over-the-counter contraceptive distributed through a network of branded pharmacies with quality assured through mystery shopper checks.`,
        }
      ],
    },


    {
      id: "5",
      imageUrl: "",
      year: "1996-1998",
      location: "Nepal",
      title: "Condom and Animation Campaign",
      category: "Branding & Demand Generation",
      partner: "FHI360/USAID",
      details: [
        {
          subtitle: "Dhaali Dai",
          description:
            `Dual protection engagement using humor and animation.`,
        }
      ],
    },

    {
      id: "5",
      imageUrl: "",
      year: "1998-99",
      location: "Nepal",
      title: "Mass Media Campaign",
      category: "Branding & Demand Generation",
      partner: "FHI360/USAID",
      details: [
        {
          subtitle: "Action Stop AIDS (ASA)",
          description:
            `Mass media communication and private sector partnerships to promote AIDS prevention.`,
        }
      ],
    },


    {
      id: "5",
      imageUrl: "",
      year: "2001-2004",
      location: "Pakistan & Ethiopia",
      title: "Tetanus Immunization Campaigns",
      category: "Branding & Demand Generation",
      partner: "Save the Children/UNICEF",
      details: [
        {
          description:
            `Mass media, feature films, and community engagement to promote immunizing women of reproductive age. A D2C Game co-created with girls in Nepal to empower them in making choices, while gaining direct access to information and resources about their health and well-being.`,
        },
      ],
    },

    {
      id: "5",
      imageUrl: "https://drive.google.com/uc?export=view&id=1ebcoDh98uUzvl2McOtlPweVUwvBp6MEO",
      year: "2001-2003",
      location: "Bangladesh",
      title: "Branding Campaign",
      category: "Branding & Demand Generation",
      partner: "FHI360/USAID",
      details: [
        {
          subtitle: "Bajee Quddus Wanna bet?",
          description:
            `HIV awareness campaign that leveraged humor and Bollywood-style character.`,
        }
      ],
    },


    {
      id: "5",
      imageUrl: "",
      year: "2001-2004",
      location: "Nepal",
      title: "Clean Delivery Product",
      category: "Branding & Demand Generation",
      partner: "Save the Children/UNICEF",
      details: [
        {
          subtitle: "National New-born Care Strategy",
          description:
            `National policy guidance and ideation and implementation support to women entrepreneurs for clean birthing kits`,
        }
      ],
    },


    {
      id: "5",
      imageUrl: "",
      year: "2003",
      location: "Malawi",
      title: "Policy Guidance",
      category: "Branding & Demand Generation",
      partner: "Save the Children",
      details: [
        {
          subtitle: "",
          description:
            `National policy guidance on Maternal Newborn health`,
        }
      ],
    },

    {
      id: "5",
      imageUrl: "https://drive.google.com/uc?export=view&id=1nYTsmFtg0qNY13A7n9yJyiMCloSUKpna",
      year: "2003",
      location: "Bangladesh",
      title: "Branded Drop-in Centers",
      category: "Social Franchising of Health Services",
      partner: "FHI360/USAID",
      details: [
        {
          subtitle: "Modhumita (Sweet Friend)",
          description:
            `160 customized lounges and meeting places that attracted marginalized populations for testing and treatment for STIs including HIV.`,
        }
      ],
    },

    {
      id: "5",
      imageUrl: "",
      year: "2003-2004",
      location: "COUNTRY",
      title: "HIV testing and counselling spaces",
      category: "Social Franchising of Health Services",
      partner: "Marie Stopes International",
      details: [
        {
          subtitle: "Café corners",
          description:
            `HIV testing and counselling corners in coffee shops.`,
        }
      ],
    },

    {
      id: "5",
      imageUrl: "https://drive.google.com/uc?export=view&id=1b_nCWh-oc3ncolne8gmKAINxCcDTO9Jf",
      year: "2003-2006",
      location: "Ethiopia",
      title: "HIV Compassion Campaign",
      category: "Branding & Demand Generation",
      partner: "FHI360",
      details: [
        {
          subtitle: "Demand Generation for HIV Testing",
          description:
            `Partnership with Coca-Cola Foundation and award-winning Music Video montage of National Celebrities.`,
        }
      ],
    },

    


    {
      id: "5",
      imageUrl: "https://drive.google.com/uc?export=view&id=15Aa1O5Nez7gLEnGvrcvTQG3jEbeC6YLF",
      year: "2004-2007",
      location: "Bangladesh",
      title: "Branded Drop-in Centers",
      category: "Social Franchising of Health Services",
      partner: "FHI360/ USAID",
      details: [
        {
          subtitle: "Modhumita (Sweet Friend)",
          description:
            `160 customized lounges and meeting places that attracted marginalized populations for testing and treatment for STIs including HIV.`,
        }
      ],
    },



    {
      id: "3",
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

    {
      id: "5",
      imageUrl: "https://drive.google.com/uc?export=view&id=1Q_5S9KczHaTEjnXIDNMgAViBCzBejdWx",
      year: "2004-2013",
      location: "Guyana",
      sublocation: "HIV/AIDS Prevention Project (GHARP I)",
      title: "Multi-Media Interventions",
      category: "Branding & Demand Generation",
      partner: "FHI360/USAID PEPFAR",
      details: [
        {
          subtitle: "Don't Dis Me",
          description:
            `Communications from Comic Books to Rock Concerts aimed at adolescents and young adults, from to address stigma, testing, prevention, treatment, care, and support.`,
        }
      ],
    },


    {
      id: "5",
      imageUrl: "https://drive.google.com/uc?export=view&id=19Vb0kW92atUzYSE5l3CzhfuZncP4gxUF",
      year: "2004-2013",
      location: "Guyana",
      title: "Guyana Business Coalition",
      category: "Social Franchising of Health Services",
      partner: "FHI360/MSH PEPFAR/USAID",
      details: [
        {
          subtitle: "A coalition of 43 businesses",
          description:
            `Businesses unite to provide HIV testing, workplace training, transportation, insurance, and other support needs. Shared learnings and partnerships with Thai and S. Africa Business Coalitions.`,
        }
      ],
    },

    {
      id: "5",
      imageUrl: "",
      year: "2007",
      location: "Rwanda",
      title: "Malaria Prevention",
      category: "Branding & Demand Generation",
      partner: "FHI360",
      details: [
        {
          subtitle: "Indoor Residual Spraying (IRS)",
          description:
            `Behavior change strategies to support efficacy of IRS`,
        }
      ],
    },

    {
      id: "5",
      imageUrl: "",
      year: "2007-2010",
      location: "Bangladesh",
      title: "Health Clinics",
      category: "Social Franchising of Health Services",
      partner: "Chemonics/USAID",
      details: [
        {
          subtitle: "Smiling Sun Clinic",
          description:
            `Branding refresh and outreach of health clinics to appeal to young married couples.`,
        }
      ],
    },

    {
      id: "4",
      imageUrl:
        "https://drive.google.com/uc?export=view&id=180vIgx2d3l4y2ACMS9gc7xp9LpM1OzRD",
      year: "2008-2010",
      location: "Pakistan",
      title: "Interactive Voice Response",
      category: "Game-Based Learning",
      details: [
        {
          subtitle: "Hifazat: Because life is precious",
          description:
            "Seamless health care solutions to the three delays for pregnant women and mothers: Geographic distance, lack of personal agency, and transportation.",
        },
      ],
    },


    {
      id: "5",
      imageUrl: "https://drive.google.com/uc?export=view&id=1xqoHJp7S_8ae5IaXHwN489AftTYYgve5",
      year: "2008-2010",
      location: "Pakistan",
      title: "Interactive voice response tool",
      category: "Social Franchising of Health Services",
      partner: "IRC/USAID",
      details: [
        {
          subtitle: "Hifazat: Because Life is Precious",
          description:
            `Branded ‘uber-style’ taxis take pregnant women to care, where trained providers and certified health centers provide 24/7 seamless healthcare under this umbrella brand of protection.`,
        }
      ],
    },


    {
      id: "5",
      imageUrl: "https://drive.google.com/uc?export=view&id=1pSzvAYc5OIcBlrOjk2hI7eB5Hlf5Plo5",
      year: "2010-2012",
      location: "Ethiopia",
      title: "Smart and Strong",
      category: "Branding & Demand Generation",
      partner: "FHI360/USAID PEPFAR",
      details: [
        {
          subtitle: "",
          description:
            `Alive & Thrive Campaign to engage men and leverage agricultural and WASH sectors in optimal infant and young child feeding practices.`,
        }
      ],
    },

      

    {
      id: "5",
      imageUrl: "https://drive.google.com/uc?export=view&id=1LX9hj8E9ZpVNBmhZ0g2aeMYD0a2GZz8J",
      year: "2011-2013",
      location: "Caribbean Region",
      sublocation: "Guyana, Barbados, Trinidad, & Jamaica",
      title: "Music Videos",
      category: "Branding & Demand Generation",
      partner: "Options/KfW",
      details: [
        {
          subtitle: "Friends",
          description:
            `Mobilization of community and youth engagement to support People Living with AIDS`,
        }
      ],
    },



   
    {
      id: "5",
      imageUrl: "https://drive.google.com/uc?export=view&id=15Aa1O5Nez7gLEnGvrcvTQG3jEbeC6YLF",
      year: "2011-2014",
      location: "Bangladesh",
      title: "Strengthening Democratic Local Governance",
      category: "Branding & Demand Generation",
      partner: "ARD/Tetratech USAID",
      details: [
        {
          subtitle: "We are the government",
          description:
            `Creating demand for good governance and citizen engagement among youth and women through mass media, social media, citizen reporting and engagement of journalists.`,
        }
      ],
    },


    {
      id: "2",
      imageUrl:
        "https://drive.google.com/uc?export=view&id=1YL0IvtLQmmv4JRrOXgnCZO-vfAmUb5Xu ",
      year: "2015–2019",
      location: "Global",
      sublocation: "24 Priority Countries",
      title: "Games for Intervention Design",
      category: "Game-Based Learning",
      details: [
        {
          subtitle: "Point & click fever game",
          description:
            "Trainers experience a Sub-Saharan African mother care-seeking journey on who or what influences her choices to treat her infant’s fever. ",
        },
        {
          subtitle: "Factors Card Game",
          description:
            "A  “scattergories” game where planners learn the interplay of structural, social, Internal factors in individual decision-making.",
        },
        {
          subtitle: "Chutes & Ladders",
          description:
            "Planners learn through play how different health conditions and diseases can be impacted by multi-faceted factors.",
        },
        {
          subtitle: "Story Dice",
          description:
            "Players learn how random factors and circumstances can impact the best planned interventions.",
        },
      ],
    },



    {
      id: "5",
      imageUrl: "",
      year: "2015–2019",
      location: "USA",
      sublocation: "Great Falls National Park, Potomac, Maryland",
      title: "Digital Simulation",
      category: "Game-Based Learning",
      details: [
        {
          subtitle: "Loop Trail Quest",
          description:
            "Exploring choice-making in shared spaces through Intervention and research to understand conservation behaviors. ",
        },
      ],
    },



    {
      id: "3",
      imageUrl: "",
      year: "2018-Ongoing",
      location: "India",
      title: "Mobile Game",
      category: "Game-Based Learning",
      details: [
        {
          subtitle: "Go Nisha Go",
          description:
            "An award-winning D2C Game co-created with youth that lets them discover, explore, learn and play their way toward becoming empowered choice-makers.",
        },
      ],
    },

    {
      id: "5",
      imageUrl: "",
      year: "Coming up 2024",
      location: "India",
      title: "Mobile Games",
      category: "Game-Based Learning",
      details: [
        {
          description:
            `A D2C Game to equip adolescent boys with the vocabulary and knowledge to approach and be intimate with girls and deal with rejection <br/><br/>A D2C Game co-created with girls in Nepal to empower them in making choices, while gaining direct access to information and resources about their health and well-being. ` ,
        },
       
      ],
    },

 

   

    {
      id: "5",
      imageUrl: "",
      year: "YEAR",
      location: "Nepal",
      title: "Zoonotic disease prevention strategies",
      category: "Branding & Demand Generation",
      partner: "ARD/Now Tetratech",
      details: [
        {
          description:
            ` `,
        }
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
    "Branding & Demand Generation": {
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

  function renderTimeline(category = "Full Timeline") {
    timelineContainer.innerHTML = ""; // Clear existing content

    timelineData.reverse().forEach((item) => {
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
        categorySettings[item.category].color || "#ffffff";

      const partnerContent = item.partner
        ? `<span class="partner">${item.partner}</span>`
        : "";
      const content = `
            <div class="timeline-item" data-text=".">
                <div class="timeline__content">
                    <img class="timeline__img" src="${item.imageUrl}" loading="lazy" />
                    <div class="timeline__text" style="background-color: ${backgroundColor};">
                        <span class="badge">${item.category}</span>
                        <h2 class="timeline__content-title">${item.year}<span> ${item.location} ${sublocationContent}</span></h2>
                        <p class="timeline__content-desc"><span class="title">${item.title}<br/><br/></span></p>
                        ${detailsContent}
                        <p class="partnerContainer"> ${partnerContent}</p>
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
