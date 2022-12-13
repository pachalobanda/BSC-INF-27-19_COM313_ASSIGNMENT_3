
import Header from './AppHeader'
import FormCard from './FormCard'


function openMenu() {}
const handleChange = (prop) => (event) => {
 // setValues({ ...values, [prop]: event.target.value });
};

function App() {
  
  return (
    <div>
      <Header/>

      <div style={{ marginTop: "10%" }} className="card-center">
        <FormCard />
      </div>
    </div>
  );
}

export default App;
