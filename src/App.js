import axios from "axios";

function App() {
    function getStudentData() {
        axios.get("http://localhost:3000/api1/students").then(
            res=>{
                console.log(res)
            },
            err=>{
                console.log(err)
            }
        )
    }

    function getCarData() {
        axios.get("http://localhost:3000/api2/cars").then(
            res=>{
                console.log(res)
            },
            err=>{
                console.log(err)
            }
        )
    }

    return (
      <div>
          <button onClick={getStudentData}>获取学生数据</button>
          <button onClick={getCarData}>获取汽车数据</button>
      </div>
  );
}

export default App;
