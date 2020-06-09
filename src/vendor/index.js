import React, { Component } from "react";
import Header from "./global/header";
import Footer from "./global/footer";
import Home from "./pages/home";

class App extends Component {
    render() {
        return (
            <div className="main_wapper">
                <Header />
                <Home />
                <Footer />
            </div>
        );
    }
}
export default App; // Don’t forget to use export default!
