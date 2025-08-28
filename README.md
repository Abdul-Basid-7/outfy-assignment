# 🎥 GSAP Image Zoom Animation Project

This project is a recreation of a video animation using **HTML, CSS, and GSAP**.  
The animation displays multiple images with a **three-level zoom effect**:

1. **First Zoom** → Image zooms into fullscreen quickly and disappears.  
2. **Second Zoom** → Image again zooms into fullscreen quickly and disappears.  
3. **Third Zoom** → Image appears slowly at its real/original size, then zooms into fullscreen and disappears.  

This sequence is repeated for all images.

---

## 🚀 Tech Stack
- **HTML5** – Structure of the project  
- **CSS3** – Styling and borders around images  
- **GSAP (GreenSock Animation Platform)** – Handles animations  

---

## 📂 Project Structure
project-folder/
│── index.html # Main HTML file
│── style.css # Styling
│── script.js # GSAP animation logic
│── README.md # Documentation


---

## 🎨 Features
- Smooth **3-level zoom animation** for images.  
- Attractive **border + shadow** around images.  
- GSAP **timeline animations** for precise control.  
- Fully responsive container.  

---

## ▶️ How to Run
1. Clone this repository or download the project files.  
2. Open `index.html` in your browser.  
3. The animation will start automatically.  

---

## 📖 Example Code Snippets

### HTML
```html
<section class="scene scene2">
  <div class="images">
    <img src="https://picsum.photos/id/1015/400/300" class="img">
    <img src="https://picsum.photos/id/1025/400/300" class="img">
    <img src="https://picsum.photos/id/1035/400/300" class="img">
  </div>
</section>


function animateImage(selector) {
  // Fast zoom 1
  tl.to(selector, { opacity: 1, scale: 1.5, duration: 0.8 })
    .to(selector, { scale: 3, opacity: 0, duration: 0.8 });

  // Fast zoom 2
  tl.to(selector, { opacity: 1, scale: 1.5, duration: 0.8 })
    .to(selector, { scale: 3, opacity: 0, duration: 0.8 });

  // Slow zoom 3
  tl.to(selector, { opacity: 1, scale: 1, duration: 1.5 })
    .to(selector, { scale: 3, opacity: 0, duration: 1.8 });
}
📌 Future Improvements

Add background music to make it feel like a video.

Add loop mode to continuously repeat the slideshow.

Add text captions synced with each image.

👨‍💻 Author

Developed as part of an assignment project using GSAP.


