import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

class PortfolioContainer extends Component {
  // state
  state = {
    currentPage: "Home"
  };


  // function 
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renerPage = () => { 
    if(this.state.currentPage === About )

  }

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        <About 
        currentPage = {this.state.currentPage === About}
        handlePageChange={this.handlePageChange}
      />
        <Blog 
        currentPage = {this.state.currentPage === Contact}
        handlePageChange={this.handlePageChange}
      />
        <Home 
        currentPage = {this.state.currentPage === Home}
        handlePageChange = {this.handlePageChange}
        />
      </div>

    );
  }
}

export default PortfolioContainer;
