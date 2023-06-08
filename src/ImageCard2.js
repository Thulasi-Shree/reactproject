
import { Component } from "react";
import'./CSS/imageCard.css'

class ImageCard2 extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div>
            <div class="card" id="styles">
               <img
                className="card-img-top"
                src={this.props.img1}
              />
              <div class="card-body" >
                <p class="card-title" id="fonts">{this.props.title}</p>
              <p class="card-title" id="fonts-1">{this.props.title1}</p>
                <p class="card-title" id="fonts-2">{this.props.title2}</p>
                <p><button className="btn" id="btn-2">Know More</button></p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImageCard2;
