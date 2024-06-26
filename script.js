const products = [
  {
    name: 'Wooden Airplane',
    age: 'Toddlers',
    img1: 'imgs/plane1.jpg',
    img2: 'imgs/plane2.jpg',
    img3: 'imgs/plane3.jpg',
    rating: '4.8/5',
    cost: '$19.99',
    sentence: 'Soar through imaginative skies with this classic wooden airplane!',
    description: 'Handcrafted from sustainable Baltic birch wood with a safe, natural harvest finish and a spinning propeller. Measures 3.5"H x 7"L x 7"W.',
    review: ["Wow, this wooden airplane totally blew me away - it's like a blast from the past with a modern twist, and it looks awesome on my shelf!", "This wooden airplane is epic, it's like I'm flying through the clouds with my imagination on full throttle!", "Seriously, this wooden airplane? It's like having a piece of history right in your hands, and it's so darn cool to see it up close!"]
  },
  {
    name: 'Wooden Train Set',
    age: '3+',
    img1: 'imgs/train1.jpg',
    img2: 'imgs/train2.jpg',
    img3: 'imgs/train3.jpg',
    rating: '4.6/5',
    cost: '$24.99',
    sentence: 'Embark on a charming journey with this beautiful handcrafted wooden train set!',
    description: 'Engine and three interchangeable cars boast intricate details made from real beech wood. Large size (84cm L x 11cm H x 13cm W) with moving wheels and a fully ecological design.',
    review: ["Zooming through twists and turns, this wooden train set is the coolest thing ever - it's like having my own little world of adventures right in my room!", "This wooden train set? It's like a magical journey waiting to happen every time I push those cars around the track - best toy ever!", "My little conductor's face lights up every time he plays with this wooden train set - it's like watching his imagination come to life on those tracks!"]
  },
  {
    name: 'Wooden Boat',
    age: 'All ages',
    img1: 'imgs/boat1.jpg',
    img2: 'imgs/boat2.jpg',
    img3: 'imgs/boat3.jpg',
    rating: '5/5',
    cost: '$19.99',
    sentence: 'Set sail for bathtub adventures with this adorable wooden boat!',
    description: 'Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety. Includes two peg "lobster people." Size: 10.5"W x 3.5"H.',
    review: ["This wooden boat rocks my world - it's like sailing the seven seas of fun right in my bathtub!", "This wooden boat is the best thing ever - watching your excitement as you captain it across our little sea makes every splash a treasure!", "This wooden boat is a hit with my little captain - it's like seeing the joy of adventure sparkle in your eyes with every wave it conquers!"]
  },
  {
    name: 'Wooden Car',
    age: 'All ages',
    img1: 'imgs/car1.jpg',
    img2: 'imgs/car2.jpg',
    img3: 'imgs/car3.jpg',
    rating: '4.8/5',
    cost: '$15.99',
    sentence: 'This heirloom-quality wooden car is a timeless treasure!',
    description: 'Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children.',
    review: ["This wooden car is totally rad - it's like zooming down imagination lane with the wind in my hair!", "This wooden car is so cool and fun to play with, I can't stop zooming it around the house!", "This wooden car is beautifully crafted and durable, providing hours of imaginative play for my child!"]
  },
  {
    name: 'Wooden Block Set',
    age: '3+',
    img1: 'imgs/block6.jpg',
    img2: 'imgs/block4.jpg',
    img3: 'imgs/block2.jpg',
    rating: '5/5',
    cost: '$29.99',
    sentence: 'Build creativity and imagination with this high-quality, 72-piece block set!',
    description: 'Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate (13” L x 12” W x 2” H).',
    review: ["These wooden blocks are awesome—I can build towers, castles, and anything I can imagine!", "I love these wooden blocks because I can build so many cool things and knock them down!", "This wooden block set is fantastic for sparking creativity and developing fine motor skills in my child!"]
  }
]

function generateProductCards() {
  const productCardsContainer = document.getElementById('productCards');

  products.forEach((product, index) => {
      const card = document.createElement('div');
      card.classList.add('col-lg-4', 'col-md-6', 'col-sm-12', 'p-4');

      card.innerHTML = `
        <div class="card p-c h-100" id="card">
          <div class="card-header text-center">${product.name}</div>
          <div class="card-body">
            <div class="text-center">
              <img class="img-fluid product-image" src="${product.img1}">
              <p class="p-3">${product.sentence}</p>
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
                <p><strong>Age:</strong> ${product.age}</p>
                <p><strong>Rating:</strong> ${product.rating}</p>
                <p><strong>Cost:</strong> ${product.cost}</p>
                <p class = "pro-descrip">${product.description}</p>
              </div>
              <div class = "modal-body">
                <p><strong>Reviews:</strong></p>
                <p>"${product.review[0]}" - <i>Anonymous</i></p>
                <br>
                <p>"${product.review[1]}" - <i>Anonymous</i></p>
                <br>
                <p>"${product.review[2]}" - <i>Anonymous</i></p>
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