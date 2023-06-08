
import { Component } from "react";
import'./CSS/Numbercard.css'

class NumberCard extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div>
            <div class="card" id="style">
              
              <div class="card-body">
              <p class="card-title" id="font">{this.props.title}</p> 
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

export default NumberCard;
