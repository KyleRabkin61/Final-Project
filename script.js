const products = [
  {
    name: 'Wooden Airplane',
    age: 'Toddlers',
    img: 'imgs/plane1.jpg',
    sentence: 'Soar through imaginative skies with this classic wooden airplane!',
    description: 'Handcrafted from sustainable Baltic birch wood with a safe, natural harvest finish and a spinning propeller. Measures 3.5"H x 7"L x 7"W.'
  },
  {
    name: 'Wooden Train Set',
    age: '3+',
    img: 'imgs/train1.jpg',
    sentence: 'Embark on a charming journey with this beautiful handcrafted wooden train set!',
    description: 'Engine and three interchangeable cars boast intricate details made from real beech wood. Large size (84cm L x 11cm H x 13cm W) with moving wheels and a fully ecological design.'
  },
  {
    name: 'Wooden Boat',
    age: 'All ages',
    img: 'imgs/boat1.jpg',
    sentence: 'Set sail for bathtub adventures with this adorable wooden boat!',
    description: 'Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety. Includes two peg "lobster people." Size: 10.5"W x 3.5"H.'
  },
  {
    name: 'Wooden Car',
    age: 'All ages',
    img: 'imgs/car1.jpg',
    sentence: 'This heirloom-quality wooden car is a timeless treasure!',
    description: 'Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children.'
  },
  {
    name: 'Wooden Block Set',
    age: '3+',
    img: 'imgs/block1.jpg',
    sentence: 'Build creativity and imagination with this high-quality, 72-piece block set!',
    description: 'Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate (13” L x 12” W x 2” H).'
  }
]

function generateProductCards() {
  const productCardsContainer = document.getElementById('productCards')

  products.forEach((product, index) => {
    const card = document.createElement('div')
    card.classList.add('col-12','col-md-5', 'col-xl-4', 'p-2', 'm-1', 'product-card')

    card.innerHTML = `
  <div class="card p-c h-100">
    <div class="card-header text-center"> ${product.name}</div>
    <div class="card-body">
      <div class="text-center">
      <img class="img-fluid product-image" src="${product.img}">
      <p><strong>Age:</strong> ${product.age}</p>
      <p>${product.sentence}</p>
      <!-- Button trigger modal -->
      <button type="button" class="product-btn" data-bs-toggle="modal" data-bs-target="#exampleModal${index}">Learn More</button>
      </div>
    </div>
  </div>
  <!-- Modal -->
    <div class="modal fade" id="exampleModal${index}" tabindex="10" aria-labelledby="exampleModalLabel${index}" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header text-center">
            <h1 class="modal-title fs-5" id="exampleModalLabel${index}">${product.name}</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>${product.description}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn">Save changes</button>
          </div>
        </div>
      </div>
    </div>
`
    productCardsContainer.appendChild(card)
  })
}

window.onload = generateProductCards

// document.querySelectorAll('.flip-button').forEach(button => {
//     button.addEventListener('click', function() {
//         document.getElementById('card').classList.toggle('flip-card');
//     });
// });
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