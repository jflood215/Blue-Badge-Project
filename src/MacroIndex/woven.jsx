import React from "react";
import TasksCard from "./cards/TasksCard";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <h2 className="mt-3">Alerts</h2>
        <div className="row mt-5">
          
          <div class="card" style="width: 18rem;">
  <img class="card-img-top" src=".../100px180/" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
    
          <div className="col-12">
            <TasksCard />
          </div>
      </div>
    );
  }
}
