 // Image gallery data
    // This can be moved to a separate JSON file for easier management
    const galleryData = [
        {
          id: 1,
          title: "Porsche B&W",
          category: "automotive",
          src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408766/automotive-images-6_ffl2u7.jpg",
          description: "Stuggart Porsche Logo",
          orientation: "portrait"
        },
        {
          id: 2,
          title: "Porsche B&W",
          category: "automotive",
          src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408762/automotive-images-5_vrp7ki.jpg",
          description: "Porsche headlight low angle",
          orientation: "landscape"
        },
        {
          id: 3,
          title: "Porsche B&W",
          category: "automotive",
          src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408771/automotive-images-8_d2rwwc.jpg",
          description: "Porsche tyre straight on",
          orientation: "portrait"
        },
        {
          id: 4,
          title: "Porsche B&W",
          category: "automotive",
          src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408765/automotive-images-7_ie3m6u.jpg",
          description: "Turbo 911 logo shot",
          orientation: "landscape"
        },
        {
          id: 5,
          title: "Drift Championship",
          category: "automotive",
          src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408757/automotive-images-1_tp5fqp.jpg",
          description: "Drifting car in action",
          orientation: "landscape"
        },
        {
          id: 6,
          title: "Drift Championship",
          category: "automotive",
          src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408758/automotive-images-2_heqzsw.jpg",
          description: "Intense battle between the two",
          orientation: "landscape"
        },
        {
          id: 7,
          title: "Drift Championship",
          category: "automotive",
          src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408762/automotive-images-4_babuzm.jpg",
          description: "Backside of two drifting cars",
          orientation: "landscape"
        },
        {
          id: 8,
          title: "Formula 4",
          category: "automotive",
          src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408907/f4-panning-softened_hbfh05.jpg",
          description: "A car speeding past reaching speeds of 240km/h",
          orientation: "long"
        },
        {
          id: 9,
          title: "Mustang Poster",
          category: "automotive",
          src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408754/automotive-images-37_cwwxsn.jpg",
          description: "A fire shot of a mustang at night converted to a poster",
          orientation: "portrait"
        },
        {
          id: 10,
          title: "Mustang Car",
          category: "automotive",
          src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408812/automotive-images-32_jzokte.jpg",
          description: "3/4 shot of a ford mustang",
          orientation: "landscape"
        },
        {
          id: 11,
          title: "Mustang Poster",
          category: "automotive",
          src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408754/automotive-images-38_wdgbrz.jpg",
          description: "Front shot of a mustang with headlights in the background",
          orientation: "portrait"
        },
        {
          id: 12,
          title: "Mustang Back Shot",
          category: "automotive",
          src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741408808/automotive-images-33_wnpq1w.jpg",
          description: "Headlight shot of a mustang capturing its raw power",
          orientation: "landscape"
        },
        {
          id: 13,
          title: "Loving Penguins",
          category: "wildlife",
          src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741430848/PENGUINS-1-2_srtvsi.jpg",
          description: "Two penguins being affectionate with each other",
          orientation: "long"
        },
        {
          id: 14,
          title: "Sleeping Fox",
          category: "wildlife",
          src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741431022/eepy-fox-1_nizajj.jpg",
          description: "Adorable image of a sleeping fox",
          orientation: "portrait"
        },
        {
          id: 15,
          title: "Territorial Lion",
          category: "wildlife",
          src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741430918/lion-1-2_kupfx1.jpg",
          description: "A lion standing, taking its rightful place, marking its territory",
          orientation: "landscape"
        },
        {
          id: 16,
          title: "Trapped Bird",
          category: "wildlife",
          src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741430978/trapped-birbs-1_obattd.jpg",
          description: "A beautiful, but encaged bird",
          orientation: "portrait"
        },
        {
          id: 17,
          title: "Humble Duck",
          category: "wildlife",
          src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741431421/DSC_0538_io9ppa.jpg",
          description: "A duck gracefully floating on the water",
          orientation: "landscape"
        },
        {
          id: 18,
          title: "The Louvre",
          category: "architecture",
          src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741451243/20240818_170451_dra269.jpg",
          description: "Where the past meets the future",
          orientation: "long"
        },
        {
          id: 19,
          title: "Sheikh Zayed Mosque",
          category: "architecture",
          src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741451678/sheikh-zayed-mosque-1_dd73ar.jpg",
          description: "Built with marble an astonishing work of engineering",
          orientation: "portrait"
        },
        {
          id: 20,
          title: "Sheikh Zayed Mosque",
          category: "architecture",
          src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741451681/sheikh-zayed-mosque-11_c22quk.jpg",
          description: "Built with marble an astonishing work of engineering",
          orientation: "landscape"
        },
        {
          id: 21,
          title: "Sheikh Zayed Mosque",
          category: "architecture",
          src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741451681/sheikh-zayed-mosque-3_kg3zlo.jpg",
          description: "Built with marble an astonishing work of engineering",
          orientation: "portrait"
        },
        {
          id: 22,
          title: "Sheikh Zayed Mosque",
          category: "architecture",
          src: "https://res.cloudinary.com/dtqobhfme/image/upload/v1741451680/sheikh-zayed-mosque-19_i4hixk.jpg",
          description: "Built with marble an astonishing work of engineering",
          orientation: "landscape"
        },
      ];
  
      // DOM references
const gallery = document.getElementById('gallery');
const categoryButtons = document.querySelectorAll('.category-btn');

// Determine image orientation class based on dimensions
function getOrientationClass(orientation) {
  if (orientation === 'portrait') return 'portrait';
  if (orientation === 'tall') return 'tall';
  if (orientation === 'long') return 'long';
  return '';
}

// Initialize gallery
function loadGallery(category = 'all') {
  // Clear gallery
  gallery.innerHTML = '';

  // Filter images based on category
  const filteredImages = category === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === category);

  // Create and append gallery items with lazy loading and placeholders
  filteredImages.forEach((item, index) => {
    const galleryItem = document.createElement('div');
    // Add classes for proper sizing and animation
    galleryItem.className = `gallery-item ${getOrientationClass(item.orientation)}`;
    galleryItem.dataset.category = item.category;

    // Set animation order for staggered effect
    galleryItem.style.setProperty('--animation-order', index);

    // Use data-src for lazy loading and include a placeholder background
    galleryItem.innerHTML = `
      <img 
        data-src="${item.src}" 
        alt="${item.title}" 
        style="background-color: #f0f0f0; background-image: url('${item.src.replace('/upload/', '/upload/w_50,q_10/')}'); background-size: cover;" 
        class="lazyload"
      >
      <div class="overlay">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    `;
    gallery.appendChild(galleryItem);
  });

  // Lazy load images using IntersectionObserver
  const lazyImages = document.querySelectorAll('.lazyload');
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src; // Load the actual image
        img.onload = () => img.classList.add('loaded'); // Optional: Add a class for styling
        observer.unobserve(img); // Stop observing once loaded
      }
    });
  }, {
    rootMargin: '0px',
    threshold: 0.1 // Trigger when 10% of the image is visible
  });

  lazyImages.forEach(img => observer.observe(img));
}

// Category filtering
categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Update active button
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Load gallery with selected category
    loadGallery(button.dataset.category);
  });
});

// Initialize gallery on page load
document.addEventListener('DOMContentLoaded', () => {
  loadGallery();
});

// Scroll-to-top button functionality
const topButton = document.getElementById("topButton");
let lastScrollPosition = window.pageYOffset;

// Show/hide scroll-to-top button based on scroll direction
window.onscroll = function () {
  const currentPosition = window.pageYOffset;

  // Only show button when user is scrolling upward AND has scrolled down enough
  if (currentPosition < lastScrollPosition && currentPosition > 300) {
    topButton.style.display = "block";
    setTimeout(() => {
      topButton.classList.add("visible");
    }, 10);
  } else {
    topButton.classList.remove("visible");
    setTimeout(() => {
      if (!topButton.classList.contains("visible")) {
        topButton.style.display = "none";
      }
    }, 300); // Match this to the transition duration
  }

  lastScrollPosition = currentPosition;
};

// Scroll to the top when the button is clicked
topButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});