
import { Component } from "react";
import'./CSS/ProductCard.css'

class ProductCard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div>
            <div class="card" id="style">
              <img
                className="card-img-top"
                src={this.props.img1}
              />
              <div class="card-body">
              <p class="card-title" id="font-1">{this.props.title1}</p>
                <p class="card-title" id="font-2">{this.props.title2}</p>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;
