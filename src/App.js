import React from "react";
import Navbar from "./components/navbar";
import Section from "./components/section";
class App extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Navbar />
        <div className="container z-depth-5">
          <Section />
        </div>
      </>
    );
  }
}
export default App;
