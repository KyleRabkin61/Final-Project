const products = [
    {
        name: 'Wooden Airplane',
        age: 'Toddlers',
        img: 'imgs/plane1.jpg',
        description: 'Soar through imaginative skies with this classic wooden airplane. Handcrafted from sustainable Baltic birch wood with a safe, natural harvest finish and a spinning propeller. Measures 3.5"H x 7"L x 7"W.'
    },
    {
        name: 'Wooden Train Set',
        age: '3+',
        img: 'imgs/train1.jpg',
        description: 'Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood. Large size (84cm L x 11cm H x 13cm W) with moving wheels and a fully ecological design.'
    },
    {
        name: 'Wooden Boat',
        age: 'All ages',
        img: 'imgs/boat1.jpg',
        description: 'Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety. Includes two peg "lobster people." Size: 10.5"W x 3.5"H.'
    },
    {
        name: 'Wooden Block Set',
        age: '3+',
        img: 'imgs/block1.jpg',
        description: 'Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate (13” L x 12” W x 2” H).'
    },
    {
        name: 'Wooden Car',
        age: 'All ages',
        img: 'imgs/car1.jpg',
        description: 'This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children.'
    }
]

function generateProductCards() {
    const productCardsContainer = document.getElementById('productCards')

    products.forEach(product => {
        const card = document.createElement('div')
        card.classList.add('col-xl-3', 'col-md-5', 'col-12', 'p-2', 'm-1', 'product-card')

        card.innerHTML = `
            
    <div class="card h-100">
  <div class="card-header text-center"> ${product.name}</div>
  <div class="card-body">
    <div class="text-center">
      <img class="img-fluid product-image" src="${product.img}">
      <p><strong>Ages:</strong> ${product.age}</p>
      <!-- Button trigger modal -->
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>${product.description}</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
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