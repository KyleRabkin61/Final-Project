const products = [
  {
    name: 'Wooden Airplane',
    age: 'Toddlers',
    img1: 'imgs/plane1.jpg',
    img2: 'imgs/plane2.jpg',
    img3: 'imgs/plane3.jpg',
    rating: '4.8/5',
    sentence: 'Soar through imaginative skies with this classic wooden airplane!',
    description: 'Handcrafted from sustainable Baltic birch wood with a safe, natural harvest finish and a spinning propeller. Measures 3.5"H x 7"L x 7"W.',
    review: ['hahah','haha','hahaha']
  },
  {
    name: 'Wooden Train Set',
    age: '3+',
    img1: 'imgs/train1.jpg',
    img2: 'imgs/train2.jpg',
    img3: 'imgs/train3.jpg',
    rating: '4.6/5',
    sentence: 'Embark on a charming journey with this beautiful handcrafted wooden train set!',
    description: 'Engine and three interchangeable cars boast intricate details made from real beech wood. Large size (84cm L x 11cm H x 13cm W) with moving wheels and a fully ecological design.'
  },
  {
    name: 'Wooden Boat',
    age: 'All ages',
    img1: 'imgs/boat1.jpg',
    img2: 'imgs/boat2.jpg',
    img3: 'imgs/boat3.jpg',
    rating: '5/5',
    sentence: 'Set sail for bathtub adventures with this adorable wooden boat!',
    description: 'Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety. Includes two peg "lobster people." Size: 10.5"W x 3.5"H.'
  },
  {
    name: 'Wooden Car',
    age: 'All ages',
    img1: 'imgs/car1.jpg',
    img2: 'imgs/car2.jpg',
    img3: 'imgs/car3.jpg',
    rating: '4.8/5',
    sentence: 'This heirloom-quality wooden car is a timeless treasure!',
    description: 'Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children.'
  },
  {
    name: 'Wooden Block Set',
    age: '3+',
    img1: 'imgs/block2.jpg',
    img2: 'imgs/block4.jpg',
    img3: 'imgs/block5.jpg',
    rating: '5/5',
    sentence: 'Build creativity and imagination with this high-quality, 72-piece block set!',
    description: 'Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate (13” L x 12” W x 2” H).'
  }
]

function generateProductCards() {
  const productCardsContainer = document.getElementById('productCards');

  products.forEach((product, index) => {
      const card = document.createElement('div');
      card.classList.add('col-lg-4', 'col-md-6', 'col-sm-12');

      card.innerHTML = `
        <div class="card p-c h-100" id="card">
          <div class="card-header text-center">${product.name}</div>
          <div class="card-body">
            <div class="text-center">
              <img class="img-fluid product-image" src="${product.img1}">
              <p><strong>Age:</strong> ${product.age}</p>
              <p>${product.sentence}</p>
              <!-- Button trigger modal -->
              <button type="button" class="product-btn" data-bs-toggle="modal" data-bs-target="#exampleModal${index}">Learn More</button>
            </div>
          </div>
        </div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModal${index}" tabindex="-1" role="dialog" aria-labelledby="ModelLabel" aria-hidden="true">
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title" id="exampleModalLabel${index}"><span class="learnmoree">Learn More:</span> ${product.name}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <!-- Carousel -->
                <div id="carouselExample${index}" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <div class="carousel-item active modal-c-item">
                      <img src="${product.img1}" class="d-block w-100 modal-c-img" alt="...">
                      <div class="carousel-caption top-0 mt-5">
                      </div>
                  </div>
                  <div class="carousel-item modal-c-item">
                    <img src="${product.img2}" class="d-block w-100 modal-c-img" alt="...">
                    <div class="carousel-caption top-0 mt-5">
                    </div>
                  </div>
                  <div class="carousel-item modal-item">
                    <img src="${product.img3}" class="d-block w-100 modal-c-img" alt="...">
                    <div class="carousel-caption top-0 mt-5">
                    </div>
                  </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample${index}" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample${index}" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                  </button>
              </div>
                <p><strong>Rating:</strong> ${product.rating}</p>
                <p class = "pro-descrip">${product.description}</p>
              </div>
              <div class="modal-footer" style="display: flex; justify-content: space-between;">
                <button type="button" class="product-btn" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      `;
      productCardsContainer.appendChild(card);
  });

}

window.onload = generateProductCards;

function refresh() {
  location.reload();
}





document.querySelectorAll('.card').forEach(button => {
    button.addEventListener('click', function() {
        document.getElementById('card').classList.toggle('flip-card');
    });
});
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// reviews