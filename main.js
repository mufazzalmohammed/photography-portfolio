// =============================================
// GLOBAL VARIABLES
// =============================================

const galleryData = [
  {
    id: 1,
    title: "Porsche B&W",
    category: "automotive",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408766/automotive-images-6_ffl2u7.jpg",
    description: "Stuggart Porsche Logo",
    orientation: "portrait",
  },
  {
    id: 2,
    title: "Porsche B&W",
    category: "automotive",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408762/automotive-images-5_vrp7ki.jpg",
    description: "Porsche headlight low angle",
    orientation: "landscape",
  },
  {
    id: 3,
    title: "Porsche B&W",
    category: "automotive",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408771/automotive-images-8_d2rwwc.jpg",
    description: "Porsche tyre straight on",
    orientation: "portrait",
  },
  {
    id: 4,
    title: "Porsche B&W",
    category: "automotive",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408765/automotive-images-7_ie3m6u.jpg",
    description: "Turbo 911 logo shot",
    orientation: "landscape",
  },
  {
    id: 5,
    title: "Drift Championship",
    category: "automotive",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408757/automotive-images-1_tp5fqp.jpg",
    description: "Drifting car in action",
    orientation: "landscape",
  },
  {
    id: 6,
    title: "Drift Championship",
    category: "automotive",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408758/automotive-images-2_heqzsw.jpg",
    description: "Intense battle between the two",
    orientation: "landscape",
  },
  {
    id: 7,
    title: "Drift Championship",
    category: "automotive",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408762/automotive-images-4_babuzm.jpg",
    description: "Backside of two drifting cars",
    orientation: "landscape",
  },
  {
    id: 8,
    title: "Formula 4",
    category: "automotive",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408907/f4-panning-softened_hbfh05.jpg",
    description: "A car speeding past reaching speeds of 240km/h",
    orientation: "long",
  },
  {
    id: 9,
    title: "Mustang Poster",
    category: "automotive",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408754/automotive-images-37_cwwxsn.jpg",
    description: "A fire shot of a mustang at night converted to a poster",
    orientation: "portrait",
  },
  {
    id: 10,
    title: "Mustang Car",
    category: "automotive",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408812/automotive-images-32_jzokte.jpg",
    description: "3/4 shot of a ford mustang",
    orientation: "landscape",
  },
  {
    id: 11,
    title: "Mustang Poster",
    category: "automotive",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408754/automotive-images-38_wdgbrz.jpg",
    description: "Front shot of a mustang with headlights in the background",
    orientation: "portrait",
  },
  {
    id: 12,
    title: "Mustang Back Shot",
    category: "automotive",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408808/automotive-images-33_wnpq1w.jpg",
    description: "Headlight shot of a mustang capturing its raw power",
    orientation: "landscape",
  },
  {
    id: 23,
    title: "Poster",
    category: "landscape",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1742910278/Supra_tyqnpm.jpg",
    description: "Creative lightning supra poster",
    orientation: "portrait",
  },
  {
    id: 24,
    title: "Poster",
    category: "landscape",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1742910275/Mercedes_uqa062.jpg",
    description: "Timely yet classic mercedes car poster",
    orientation: "portrait",
  },
  {
    id: 25,
    title: "Poster",
    category: "landscape",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1742910438/Porsche_xtfdes.jpg",
    description: "Porsche different style poster",
    orientation: "portrait",
  },
  {
    id: 13,
    title: "Loving Penguins",
    category: "wildlife",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741430848/PENGUINS-1-2_srtvsi.jpg",
    description: "Two penguins being affectionate with each other",
    orientation: "long",
  },
  {
    id: 14,
    title: "Sleeping Fox",
    category: "wildlife",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741431022/eepy-fox-1_nizajj.jpg",
    description: "Adorable image of a sleeping fox",
    orientation: "portrait",
  },
  {
    id: 15,
    title: "Territorial Lion",
    category: "wildlife",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741430918/lion-1-2_kupfx1.jpg",
    description:
      "A lion standing, taking its rightful place, marking its territory",
    orientation: "landscape",
  },
  {
    id: 16,
    title: "Trapped Bird",
    category: "wildlife",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741430978/trapped-birbs-1_obattd.jpg",
    description: "A beautiful, but encaged bird",
    orientation: "portrait",
  },
  {
    id: 17,
    title: "Humble Duck",
    category: "wildlife",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741431421/DSC_0538_io9ppa.jpg",
    description: "A duck gracefully floating on the water",
    orientation: "landscape",
  },
  {
    id: 18,
    title: "The Louvre",
    category: "architecture",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741451243/20240818_170451_dra269.jpg",
    description: "Where the past meets the future",
    orientation: "long",
  },
  {
    id: 19,
    title: "Sheikh Zayed Mosque",
    category: "architecture",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741451678/sheikh-zayed-mosque-1_dd73ar.jpg",
    description: "Built with marble an astonishing work of engineering",
    orientation: "portrait",
  },
  {
    id: 20,
    title: "Sheikh Zayed Mosque",
    category: "architecture",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741451681/sheikh-zayed-mosque-11_c22quk.jpg",
    description: "Built with marble an astonishing work of engineering",
    orientation: "landscape",
  },
  {
    id: 21,
    title: "Sheikh Zayed Mosque",
    category: "architecture",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741451681/sheikh-zayed-mosque-3_kg3zlo.jpg",
    description: "Built with marble an astonishing work of engineering",
    orientation: "portrait",
  },
  {
    id: 22,
    title: "Sheikh Zayed Mosque",
    category: "architecture",
    src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741451680/sheikh-zayed-mosque-19_i4hixk.jpg",
    description: "Built with marble an astonishing work of engineering",
    orientation: "landscape",
  },
]

// =============================================
// UTILITY FUNCTIONS
// =============================================

function getOrientationClass(orientation) {
  if (orientation === "portrait") return "portrait"
  if (orientation === "long") return "long"
  return "landscape"
}

// =============================================
// NAVIGATION INITIALIZATION
// =============================================

function initNavigation() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html"
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href")
    if (linkPage === currentPage) {
      link.classList.add("active")
    }
  })
}

// =============================================
// PORTFOLIO FILTER CHIP FUNCTIONALITY
// =============================================

function initPortfolioFilterChips() {
  // Check if we're on portfolio page
  const portfolioFilterSection = document.querySelector(
    ".portfolio-filter-section",
  )
  if (!portfolioFilterSection) return

  // Get all necessary elements
  const filterChips = document.querySelectorAll(".filter-chip")
  const galleryGrid = document.querySelector(".gallery-grid")

  // If no gallery grid found, create it
  if (!galleryGrid) {
    createGalleryGrid()
  }

  // Create gallery item HTML
  function createGalleryItem(item) {
    const orientationClass = getOrientationClass(item.orientation)

    return `
      <div class="gallery-item ${orientationClass}" data-category="${item.category}">
        <img src="${item.src}" alt="${item.title}" loading="lazy">
        <div class="image-overlay">
          <h3 class="image-title">${item.title}</h3>
          <p class="image-description">${item.description}</p>
        </div>
      </div>
    `
  }

  // Filter and display images
  function filterImages(category) {
    const galleryGrid = document.getElementById("galleryGrid")
    if (!galleryGrid) return

    // Clear current images
    galleryGrid.innerHTML = ""

    // Filter images based on category
    const filteredImages =
      category === "all"
        ? galleryData
        : galleryData.filter(item => item.category === category)

    // Display message if no images
    if (filteredImages.length === 0) {
      galleryGrid.innerHTML = `
        <div class="no-images">
          <i class="fas fa-images"></i>
          <p>No images found in this category</p>
        </div>
      `
      return
    }

    // Add filtered images
    filteredImages.forEach((item, index) => {
      galleryGrid.insertAdjacentHTML("beforeend", createGalleryItem(item))

      // Add animation with delay
      const items = galleryGrid.querySelectorAll(".gallery-item")
      const lastItem = items[items.length - 1]
      setTimeout(() => {
        lastItem.classList.add("visible")
      }, index * 50)
    })
  }

  // Add click events to filter chips
  filterChips.forEach(chip => {
    chip.addEventListener("click", () => {
      // Remove active class from all chips
      filterChips.forEach(c => c.classList.remove("active"))
      // Add active class to clicked chip
      chip.classList.add("active")
      // Filter images
      filterImages(chip.dataset.filter)
    })
  })

  // Initialize with "All" filter
  filterImages("all")
}

// =============================================
// CREATE GALLERY GRID (IF MISSING)
// =============================================

function createGalleryGrid() {
  // Find where to insert the gallery
  const portfolioFilterSection = document.querySelector(
    ".portfolio-filter-section",
  )
  if (!portfolioFilterSection) return

  // Create gallery section
  const gallerySection = document.createElement("section")
  gallerySection.className = "gallery-section"
  gallerySection.innerHTML = `
    <div class="container">
      <div class="gallery-grid" id="galleryGrid">
        <!-- Images will be loaded here -->
      </div>
    </div>
  `

  // Insert after filter section
  portfolioFilterSection.insertAdjacentElement("afterend", gallerySection)
}

// =============================================
// BACK TO TOP BUTTON
// =============================================

function initBackToTop() {
  const backToTopBtn = document.getElementById("backToTop")
  if (!backToTopBtn) return

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 300) {
      backToTopBtn.classList.add("visible")
    } else {
      backToTopBtn.classList.remove("visible")
    }
  })

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  })
}

// =============================================
// HOMEPAGE FUNCTIONALITY
// =============================================

function initHomepage() {
  if (!document.body.classList.contains("home-page")) return

  const animatedElements = document.querySelectorAll(
    ".full-name, .subtitle, .explore-container",
  )

  setTimeout(() => {
    animatedElements.forEach((el, index) => {
      setTimeout(() => {
        el.style.opacity = "1"
        el.style.transform = "translateY(0)"
      }, index * 300)
    })
  }, 500)
}

// =============================================
// CONTACT MODAL FUNCTIONALITY WITH WEB3FORMS
// =============================================

// Web3Forms configuration - Get your free access key from https://web3forms.com
const WEB3FORMS_ACCESS_KEY = "55328f18-0cc5-4078-8dc9-10758fbe3821" // Replace with your actual key

function initContactModal() {
  const modal = document.getElementById("contactModal")
  const closeBtn = document.getElementById("closeModalBtn")

  // Get all contact triggers
  const contactLinks = document.querySelectorAll('a[href="contact.html"]')
  const emailIcons = document.querySelectorAll(
    '.footer-social a[href*="mailto"]',
  )

  // Remove mailto from email links in footer and add click handler
  emailIcons.forEach(link => {
    link.removeAttribute("href")
    link.style.cursor = "pointer"
    link.addEventListener("click", e => {
      e.preventDefault()
      openModal()
    })
  })

  // Add click handler to Contact nav links
  contactLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault()
      openModal()
    })
  })

  // Close modal when clicking close button
  if (closeBtn) {
    closeBtn.addEventListener("click", closeModal)
  }

  // Close modal when clicking overlay
  if (modal) {
    modal.addEventListener("click", e => {
      if (e.target === modal) {
        closeModal()
      }
    })
  }

  // Close modal with Escape key
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && modal?.classList.contains("active")) {
      closeModal()
    }
  })

  // Initialize form submission
  initContactForm()
}

function openModal() {
  const modal = document.getElementById("contactModal")
  const form = document.getElementById("contactForm")
  const successMsg = document.getElementById("successMessage")

  if (modal) {
    // Reset form state
    if (form) {
      form.reset()
      form.style.display = "block"
    }
    if (successMsg) {
      successMsg.style.display = "none"
    }

    modal.classList.add("active")
    document.body.style.overflow = "hidden"
  }
}

function closeModal() {
  const modal = document.getElementById("contactModal")
  const form = document.getElementById("contactForm")
  const successMsg = document.getElementById("successMessage")

  if (modal) {
    modal.classList.remove("active")
    document.body.style.overflow = ""

    // Reset form for next time
    if (form) {
      form.style.display = "block"
    }
    if (successMsg) {
      successMsg.style.display = "none"
    }
  }
}

function initContactForm() {
  const form = document.getElementById("contactForm")
  const submitBtn = document.getElementById("submitBtn")
  const submitText = submitBtn?.querySelector(".submit-text")
  const submitSpinner = submitBtn?.querySelector(".submit-spinner")
  const successMsg = document.getElementById("successMessage")

  if (!form) return

  form.addEventListener("submit", async e => {
    e.preventDefault()

    // Get form data for validation
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const subject = document.getElementById("subject").value
    const message = document.getElementById("message").value

    // Simple validation
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields")
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address")
      return
    }

    // Show loading state
    if (submitBtn) {
      submitBtn.disabled = true
      if (submitText) submitText.style.opacity = "0.5"
      if (submitSpinner) submitSpinner.style.display = "inline"
    }

    try {
      // Create form data for Web3Forms
      const formData = new FormData()
      formData.append("name", name)
      formData.append("email", email)
      formData.append("subject", subject)
      formData.append("message", message)

      // Your Web3Forms access key
      formData.append("access_key", WEB3FORMS_ACCESS_KEY)

      // Add subject line for your email
      formData.append("subject", "New Contact from Photography Portfolio")

      // Add from name
      formData.append("from_name", "Photography Portfolio")

      // Send to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        console.log("Message sent successfully!")

        // Show success message
        if (form) form.style.display = "none"
        if (successMsg) successMsg.style.display = "block"

        // Auto close modal after 2 seconds
        setTimeout(() => {
          closeModal()
        }, 2000)
      } else {
        alert(
          "Error: " +
            (data.message || "Unable to send message. Please try again."),
        )
      }
    } catch (error) {
      console.error("Error sending message:", error)
      alert(
        "Something went wrong. Please try again or email me directly at itsmufazzalphotography@gmail.com",
      )
    } finally {
      // Reset button state
      if (submitBtn) {
        submitBtn.disabled = false
        if (submitText) submitText.style.opacity = "1"
        if (submitSpinner) submitSpinner.style.display = "none"
      }
    }
  })
}

// =============================================
// MAIN INITIALIZATION
// =============================================

document.addEventListener("DOMContentLoaded", () => {
  console.log("Feyzee Photography loaded successfully! 📸")

  // Initialize all functionality
  initNavigation()
  initHomepage()
  initPortfolioFilterChips()
  initBackToTop()
  initContactModal()

  // Check if gallery data exists
  if (galleryData.length === 0) {
    console.warn("⚠️ No gallery data found. Please add your images.")
  }
})
