const cars = [
  {
    name: "Tesla Model S",
    desc: "Electric luxury sedan with autopilot.",
    price: "$79,990",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Audi RS7",
    desc: "Sporty and powerful luxury sedan.",
    price: "$114,000",
    img: "https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "BMW M4",
    desc: "High-performance coupe with aggressive style.",
    price: "$74,000",
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Mercedes-AMG GT",
    desc: "Exotic sports car with V8 engine.",
    price: "$115,900",
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Porsche Taycan",
    desc: "Electric sports car with luxury feel.",
    price: "$82,700",
    img: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Lexus LC 500",
    desc: "Luxury coupe with stunning design.",
    price: "$93,050",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Ford Mustang Mach-E",
    desc: "Electric SUV with muscle car heritage.",
    price: "$43,000",
    img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=600&q=80"
  },
  {
    name: "Chevrolet Corvette C8",
    desc: "Mid-engine sports car with amazing performance.",
    price: "$65,000",
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80"
  }
];


const carousel = document.getElementById('carousel');

function createCard(car) {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <img src="${car.img}" alt="${car.name}" />
    <div class="card-body">
      <div class="car-name">${car.name}</div>
      <div class="car-desc">${car.desc}</div>
      <div class="car-price">${car.price}</div>
    </div>
  `;

  return card;
}

function populateCarousel() {
  carousel.innerHTML = '';
  cars.forEach(car => {
    const card = createCard(car);
    carousel.appendChild(card);
  });
}

populateCarousel();

// Scroll buttons
const btnLeft = document.getElementById('btn-left');
const btnRight = document.getElementById('btn-right');

btnLeft.addEventListener('click', () => {
  carousel.scrollBy({ left: -300, behavior: 'smooth' });
});

btnRight.addEventListener('click', () => {
  carousel.scrollBy({ left: 300, behavior: 'smooth' });
});

card.addEventListener("click", () => {
  localStorage.setItem("selectedCar", JSON.stringify(car));
  window.location.href = "car-detail.html";
});
function createCard(car) {
  const card = document.createElement('div');
  card.className = 'card';

  card.innerHTML = `
    <img src="${car.img}" alt="${car.name}" />
    <div class="card-body">
      <div class="car-name">${car.name}</div>
      <div class="car-desc">${car.desc}</div>
      <div class="car-price">${car.price}</div>
    </div>
  `;

  // Add click to view detail
  card.addEventListener("click", () => {
    localStorage.setItem("selectedCar", JSON.stringify(car));
    window.location.href = "car-detail.html";
  });

  return card;
}
