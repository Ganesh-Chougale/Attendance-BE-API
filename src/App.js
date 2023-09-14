import './App.css';
import style from "./style.module.css";

function App() {
  return (

<div className={`${style.viewport}`}>
<div className={`row ${style.actionbox}`}>

<div className={`col-12 ${style.header}`}>
<button type="button" class="btn btn-outline-light" >Create New Class</button>
</div>


<div className={`col-12 ${style.adder}`}>

<input type="text" name="classname" className={`${style.cname}`} id="cn" placeholder="Enter Class Name" />

{/* Checkboxes */}
<div className={`col-12 ${style.cbox}`}>
<div className="row">

<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
  <input type="checkbox" id="box-1" />
  <label for="box-1">Sem 1</label>
</div>

<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
  <input type="checkbox" id="box-2" />
  <label for="box-2">Sem 2</label>
</div>

<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
  <input type="checkbox" id="box-3" />
  <label for="box-3">Sem 3</label>
</div>

<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
  <input type="checkbox" id="box-4" />
  <label for="box-4">Sem 4</label>
</div>

<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
  <input type="checkbox" id="box-5" />
  <label for="box-5">Sem 5</label>
</div>

<div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
  <input type="checkbox" id="box-6" />
  <label for="box-6">Sem 6</label>
</div>

</div>

</div> {/* Checkboex */}

<div className={`col-12 ${style.saveb}`}>
<button type="button" class="btn btn-success">Save</button>
</div>


</div>

</div>  {/* Bootstrap row */}
</div>  // viweport

  );
}

export default App;

