import Footer from "./components/footer";
import Header from "./components/header";
import { BrowserRouter as Router, Switch ,Route } from 'react-router-dom';

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import NotFound from "./components/notFound";
import Category from "./components/category";
import Recipe from "./pages/recipe";


function App() {
  return (
    <> 
     <Router basename="/react-food">
      <Header/>
     <main className="container content">
   
         <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/about" component={About}/>
         <Route path="/contact" component={Contact} />
         <Route path="/category/:name" component={Category} />
         <Route path="/meal/:id" component={Recipe} />
         <Route component={NotFound} />
         </Switch>
   
     </main>
      <Footer/>
      </Router>
    </>
  );
}

export default App;
