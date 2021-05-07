import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { AboutPage} from "../src/pages/AboutPage";
import { EducationPage} from "../src/pages/EducationPage";
import { RecentWorkPage } from "../src/pages/RecentWork";
import { Skills} from "../src/pages/Skills";
import {Footer} from "./components/Footer";
function App() {

  return (
    <Router>
    <NavBar/>
      <Switch>
        <Route path='/' exact component={AboutPage} />
        <Route path='/about' exact component={AboutPage} />
        <Route path='/education' exact component={EducationPage} />
        <Route path='/skills' exact component={Skills} />
        <Route path='/recentwork' exact component={RecentWorkPage} />
      </Switch>
      <Footer/>
      </Router>
  );
}

export default App;

 //import Header, sidenav, main content, footer components
// stateless functional compent, statefull class component    
//if varaible declared and passed as a proop it cant be changed because immutable
//immutable can't be changed
// declare varaibles in sate then that can be mutable
//mutable can change during running of program
//always remember to use "this" keyword in the clases 
// UI don't re render the state if u change directly wihtout setstate
// 12th vedio
//rfce shortcut to create a functional component
// buttononClick={this.clickHandler.bind(this)}
// buttononClick={()=>this.clickHandler()}
// child component calling parent component  
// button onClick={this.proops.greetHandler}
//in parent: <child greethandler={this.greetParent}/>
//greetParent(){} // function implementation
// If u want to pass the values to parent component from child component use callback function
//...
//..
// const GroceryList=groceryList.map(groceryItem=><Grocery groceryitem={groceryItem}/>);

