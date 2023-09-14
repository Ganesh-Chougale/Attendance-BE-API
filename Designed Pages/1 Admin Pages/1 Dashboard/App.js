import './App.css';
import style from "./style.module.css";

function App() {
  return (

<div className={`${style.viewport}`}>
<div className={`${style.actionbox}`}>

<div className={`${style.btnbox}`}>
<a href="#"><button type="button" className="btn btn-outline-warning">Approve Teacher</button></a>
<a href="#"><button type="button" className="btn btn-outline-warning">Add Class</button></a>
<a href="#"><button type="button" className="btn btn-outline-warning">Add Subject</button></a>
<a href="#"><button type="button" className="btn btn-outline-warning">Edit Class</button></a>
<a href="#"><button type="button" className="btn btn-outline-warning">Edit Subject</button></a>
</div>

</div>
</div>

  );
}

export default App;
