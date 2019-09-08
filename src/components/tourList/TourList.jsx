import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../tour/Tour";
import { tourData } from "../tourData";

class TourList extends Component {
  state = {
    tours: tourData
  };

  handleRemoveTour = id => {
    const { tours } = this.state;
    const filtredTours = tours.filter(t => t.id !== id);
    this.setState({ tours: filtredTours });
    console.log(this.state.tours);
  };
  render() {
    //object destructuring
    const { tours } = this.state;
    return (
      <section className="tourlist">
        {tours.map(tour => {
          return (
            <Tour
              key={tour.id}
              tour={tour}
              removeTour={this.handleRemoveTour}
            />
          );
        })}
      </section>
    );
  }
}

export default TourList;
