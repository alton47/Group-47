window.addEventListener("DOMContentLoaded", (event) => {
  const photoGrid = document.querySelector(".photo-grid");
  const lightbox = document.getElementById("lightbox");
  const lightboxContent = document.querySelector(".lightbox-content");
  const closeBtn = document.querySelector(".close");

  const photos = generateRandomPhotos(100); // Generate an array of 100 random photo URLs

  // Generate photo grid
  photos.forEach((photo) => {
    const photoItem = document.createElement("div");
    photoItem.classList.add("photo-item");

    const img = document.createElement("img");
    img.src = photo;
    img.alt = "Photo";

    photoItem.appendChild(img);
    photoGrid.appendChild(photoItem);

    // Lightbox functionality
    photoItem.addEventListener("click", () => {
      lightboxContent.src = photo;
      lightbox.style.display = "block";
    });
  });

  // Close lightbox on close button click
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
});

// Function to generate an array of random photo URLs (replace with your own photo sources)
function generateRandomPhotos(count) {
  const photos = [];
  for (let i = 0; i < count; i++) {
    photos.push(`https://source.unsplash.com/random/400x300?sig=${i}`);
  }
  return photos;
}
