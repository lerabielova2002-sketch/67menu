import './deserts.css'

export const Deserts = () => {
  return (
    <div className="deserts-page">
      <h2 className="deserts-title">Desserts</h2>
      <div className="dessert-grid">
        <div className="dessert-card">
          <div className="dessert-image-wrap">
            <img src="https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=500&q=80" alt="Waffle with Berries" />
            <button className="add-button" type="button">Add to Cart</button>
          </div>
          <div className="dessert-info">
            <p className="dessert-maker">Waffle</p>
            <h2>Waffle with Berries</h2>
            <p className="dessert-price">$6.50</p>
          </div>
        </div>

        <div className="dessert-card">
          <div className="dessert-image-wrap">
            <img src="https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?auto=format&fit=crop&w=500&q=80" alt="Vanilla Bean Creme Brulee" />
            <button className="add-button" type="button">Add to Cart</button>
          </div>
          <div className="dessert-info">
            <p className="dessert-maker">Creme Brulee</p>
            <h2>Vanilla Bean Creme Brulee</h2>
            <p className="dessert-price">$7.00</p>
          </div>
        </div>

        <div className="dessert-card">
          <div className="dessert-image-wrap">
            <img src="https://images.unsplash.com/photo-1569864358642-9d1684040f43?auto=format&fit=crop&w=500&q=80" alt="Macaron Mix of Five" />
            <button className="add-button" type="button">Add to Cart</button>
          </div>
          <div className="dessert-info">
            <p className="dessert-maker">Macaron</p>
            <h2>Macaron Mix of Five</h2>
            <p className="dessert-price">$8.00</p>
          </div>
        </div>

        <div className="dessert-card">
          <div className="dessert-image-wrap">
            <img src="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=500&q=80" alt="Classic Tiramisu" />
            <button className="add-button" type="button">Add to Cart</button>
          </div>
          <div className="dessert-info">
            <p className="dessert-maker">Tiramisu</p>
            <h2>Classic Tiramisu</h2>
            <p className="dessert-price">$5.50</p>
          </div>
        </div>

        <div className="dessert-card">
          <div className="dessert-image-wrap">
            <img src="https://cleobuttera.com/wp-content/uploads/2018/03/lifted-baklava-720x720.jpg" alt="Pistachio Baklava" />
            <button className="add-button" type="button">Add to Cart</button>
          </div>
          <div className="dessert-info">
            <p className="dessert-maker">Baklava</p>
            <h2>Pistachio Baklava</h2>
            <p className="dessert-price">$4.00</p>
          </div>
        </div>

        <div className="dessert-card">
          <div className="dessert-image-wrap">
            <img src="https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=500&q=80" alt="Lemon Meringue Pie" />
            <button className="add-button" type="button">Add to Cart</button>
          </div>
          <div className="dessert-info">
            <p className="dessert-maker">Pie</p>
            <h2>Lemon Meringue Pie</h2>
            <p className="dessert-price">$5.00</p>
          </div>
        </div>

        <div className="dessert-card">
          <div className="dessert-image-wrap">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlYorXCZ8sV2SaIWdO6YbJB4NxPfEl4mUc46hnVlW-Wjc_ismaavhjufnkMRBI2ZhLTnJkFpH2fbU0Qr00uGB4bi6a3WW29uXRWJHbyA&s=10" alt="Red Velvet Cake" />
            <button className="add-button" type="button">Add to Cart</button>
          </div>
          <div className="dessert-info">
            <p className="dessert-maker">Cake</p>
            <h2>Red Velvet Cake</h2>
            <p className="dessert-price">$4.50</p>
          </div>
        </div>

        <div className="dessert-card">
          <div className="dessert-image-wrap">
            <img src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=500&q=80" alt="Salted Caramel Brownie" />
            <button className="add-button" type="button">Add to Cart</button>
          </div>
          <div className="dessert-info">
            <p className="dessert-maker">Brownie</p>
            <h2>Salted Caramel Brownie</h2>
            <p className="dessert-price">$5.50</p>
          </div>
        </div>

        <div className="dessert-card">
          <div className="dessert-image-wrap">
            <img src="https://images.unsplash.com/photo-1488477304112-4944851de03d?auto=format&fit=crop&w=500&q=80" alt="Vanilla Panna Cotta" />
            <button className="add-button" type="button">Add to Cart</button>
          </div>
          <div className="dessert-info">
            <p className="dessert-maker">Panna Cotta</p>
            <h2>Vanilla Panna Cotta</h2>
            <p className="dessert-price">$6.50</p>
          </div>
        </div>
      </div>
    </div>
  )
}
