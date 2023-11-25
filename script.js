(function ($) {
  // Timeline data array
  const timelineData = [
    {
      id: "1",
      imageUrl:
        "https://images.unsplash.com/photo-1682685797828-d3b2561deef4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year: "2004-2009",
      location: "Guyana",
      title: "Interactive Comic Book",
      description:
        'Super Gang and the Player -  Stay with your "sugar daddy" or leave. ',
      category: "Game-Based Learning",
    },
    {
      id: "2",
      imageUrl:
        "https://images.unsplash.com/photo-1682686581427-7c80ab60e3f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year: "2008–2010",
      location: "Pakistan",
      title: "Interactive Voice Response",
      description: "Hifazat: Because life is precious. Seek care or selfcare?",
      category: "Game-Based Learning",
    },
    {
      id: "3",
      imageUrl:
        "https://images.unsplash.com/photo-1695653420508-f2481c1d783c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year: "2015 - 2019",
      location: "GLOBAL -24 Priority Countries",
      title: "THINK BIG: Point & Click Fever Game",
      description:
        "Who or what influences Adamas choices to treat her  baby’s fever?",
      category: "Game-Based Learning",
    },
    {
      id: "4",
      imageUrl:
        "https://images.unsplash.com/photo-1682685796467-89a6f149f07a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year: "2015 - 2019",
      location: "COUNTRY",
      title: "Digital Simulation",
      description: "Choice based loop trail quest",
      category: "Game-Based Learning",
    },
    {
      id: "5",
      imageUrl:
        "https://images.unsplash.com/photo-1700463887323-732990f4540a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year: "2018 - ONGOING",
      location: "GLOBAL",
      title: "GOC the project brand",
      description:
        "Gaming innovations to support young people as empowered choice-makers.",
      category: "Game-Based Learning",
    },
    {
      id: "6",
      imageUrl:
        "https://gameofchoicenotchance.com/i/image1.png",
      year: "2018 - ONGOING",
      location: "india",
      title: "Mobile Game",
      description:
        "Digital Choice Based Simulation Go Nisha Go - A mobile Game to support young girls as empowered choice-makers.",
      category: "Game-Based Learning",
    },
    {
      id: "7",
      imageUrl:
        "https://plus.unsplash.com/premium_photo-1700583711364-ad77a9eba0b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year: "Coming up 2024",
      location: "india",
      title: "Mobile Game",
      description: "A Game for Boys, A Game for Girls in Nepal",
      category: "Game-Based Learning",
    },

    {
      id: "8",
      imageUrl:
        "https://images.unsplash.com/photo-1682685797828-d3b2561deef4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year: "1995",
      location: "Bruma",
      title: "Branded Condoms",
      description: "Description",
      category: "Demand Generation",
    },
    {
      id: "9",
      imageUrl:
        "https://images.unsplash.com/photo-1682686581427-7c80ab60e3f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      year: "1995",
      location: "Bruma",
      title: "Fuel-Efficient Stoves",
      description: "Description",
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

  // Function to render the timeline
  function renderTimeline(category = null) {
    const timelineContainer = $("#timeline-1 .timeline");
    timelineContainer.empty(); // Clear existing content

    // Color mapping for categories
    const categoryColors = {
      "Game-Based Learning": "#7d1e57",
      "Demand Generation": "#d7401a",
      "Social Franchising of Health Services": "#3d7a31",
    };

    timelineData.forEach((item) => {

      if (category && item.category !== category) return;

      // Determine the background color based on the category
      const backgroundColor = categoryColors[item.category] || "#ffffff"; // Default to white if category not found


      const content = `
        <div class="timeline-item" data-text="${item.category}">
          <div class="timeline__content">
            <img class="timeline__img" src="${item.imageUrl}" />
            <div class="timeline__text" style="background-color: ${backgroundColor};">
              <h2 class="timeline__content-title">${item.year}<span> ${item.location} </span></h2>
              <p class="timeline__content-desc"><span>${item.title}<br/></span>${item.description}</p>
              <button>Read more</button>
            </div>
          </div>
        </div>
      `;
      timelineContainer.append(content);
    });
  }

   function filterTimelineItems(category) {
    $('.timeline-item').each(function() {
      if ($(this).data('text') !== category) {
        $(this).css('max-height', '0').queue(function(next) {
          $(this).css('display', 'none');
          next();
        });
      } else {
        $(this).css('display', '').css('max-height', ''); // Reset display and max-height
      }
    });
   
  }

  function setupNavigation() {
    $('.nav-item').on('click', function() {
        var selectedCategory = $(this).data('category');

        if (selectedCategory === 'All') {
            // Render all timeline items
            renderTimeline();
            $("#timeline-1").timeline();
        } else {
            // Render items of the selected category
            renderTimeline(selectedCategory);
            $("#timeline-1").timeline();
        }
    });
}

  function toggleNavigation() {
    var nav = $("#floating-nav");
    if (nav.css("display") === "none") {
      nav.css("display", "flex"); // Show the nav as a flexbox
    } else {
      nav.css("display", "none"); // Hide the nav
    }
  }

  function setupHamburgerToggle() {
    $("#hamburger-icon").click(toggleNavigation);
  }

  // Timeline plugin definition
  $.fn.timeline = function () {
    // var selectors = {
    //   id: $(this),
    //   item: $(this).find(".timeline-item"),
    //   activeClass: "timeline-item--active",
    //   img: ".timeline__img",
    // };

    //filtering selector

    var selectors = {
      id: $(this),
      item: $(this).find(".timeline-item").filter(function() {
        return $(this).css('display') !== 'none';
      }),
      activeClass: "timeline-item--active",
      img: ".timeline__img",
    };

    // Initial setup
    function setupTimeline() {
      selectors.item.eq(0).addClass(selectors.activeClass);
      selectors.id.css(
        "background-image",
        "url(" + selectors.item.first().find(selectors.img).attr("src") + ")"
      );
      var itemLength = selectors.item.length;

      $(window).scroll(function () {
    var pos = $(this).scrollTop();

    // Check if the scroll position is near the top of the page
    if (pos < 100) { // You can adjust this threshold as needed
        selectors.item.removeClass(selectors.activeClass);
        selectors.item.first().addClass(selectors.activeClass);
        selectors.id.css(
            "background-image",
            "url(" + selectors.item.first().find(selectors.img).attr("src") + ")"
        );
    } else {
        selectors.item.each(function (i) {
            var imgBottom = $(this).find(selectors.img).offset().top + $(this).find(selectors.img).outerHeight();

            if (pos >= imgBottom) {
                var nextItem = selectors.item.eq(i + 1);
                if (nextItem.length) {
                    selectors.id.css(
                        "background-image",
                        "url(" + nextItem.find(selectors.img).attr("src") + ")"
                    );
                    selectors.item.removeClass(selectors.activeClass);
                    nextItem.addClass(selectors.activeClass);
                }
            }
        });
    }
});
    }

    setupTimeline();
  };

  // Render the timeline and initialize the plugin
  $(document).ready(function () {
    renderTimeline();
    $("#timeline-1").timeline();
    setupHamburgerToggle();
    setupNavigation(); 
  });
})(jQuery);
