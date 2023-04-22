import { Navbar } from "./component/navbar";
import { InfoHeading } from "./component/infoHeading";
import { Experience } from "./component/experience";
import { Card } from "./component/Lists/card";
import { Br3 } from "./component/spaces/3br";
import "./App.css";
import { List } from "./component/Lists/list";

function App() {
  return (
    <div className="app">
      <Experience />
      <Br3/>
      <InfoHeading/>
      <Br3/>
      <List/>    

    </div>
  );
}
export default App;
