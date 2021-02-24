import axios from 'axios'
import { useState } from 'react'

function App() {
  const [name,setName] = useState("")
  const [age,setAge] = useState(0)
  const [country,setCountry] = useState("")
  const [position,setPosition] = useState("")
  const [wage,setWage] = useState(0)
  const [newWage,setnewWage] = useState(0)

  const [ employeeList, setEmployeeList ] = useState([]);

  const getEmployees = () => {
    axios.get('http://localhost:3001/employees').then((response) => {
      setEmployeeList(response.data)
    })
  }

  // const dataEm = {
  //   ...employeeList
  // };

  const addEmployee = () => {
    axios.post('http://localhost:3001/create',{
      name:name,
      age:age,
      country:country,
      position:position,
      wage:wage
    }).then(() => setEmployeeList([
      ...employeeList,{
        name:name,
        age:age,
        country:country,
        position:position,
        wage:wage
      }
    ]))
  }

  const updateEmployeeWage = (id) => {
    axios.put('http://localhost:3001/update', {wage : newWage, id: id}).then((response) => 
    setEmployeeList( employeeList.map((val) => {
        console.log(val.wage)
        return val.id == id ? 
        {
        id: val.id,
        name: val.name,
        age: val.age,
        country: val.country,
        position: val.position,
        wage: val.newWage
        } : val
      })
    ))
  }

    return (
      <div className="App container">
        <h1>Employees Information</h1>
          <div className="information">
            <form action="">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name : </label>
                <input type="text" className="form-control" onChange={(event) => setName(event.target.value)} placeholder="Enter Name" />
              </div>

              <div className="mb-3">
                <label htmlFor="age" className="form-label">Age : </label>
                <input type="number" className="form-control" onChange={(event) => setAge(event.target.value)} placeholder="Enter Number" />
              </div>

              <div className="mb-3">
                <label htmlFor="country" className="form-label">Country : </label>
                <input type="text" className="form-control" onChange={(event) => setCountry(event.target.value)} placeholder="Enter Country" />
              </div>

              <div className="mb-3">
                <label htmlFor="position" className="form-label">Position : </label>
                <input type="text" className="form-control" onChange={(event) => setPosition(event.target.value)} placeholder="Enter Position" />
              </div>

              <div className="mb-3">
                <label htmlFor="wage" className="form-label">Wage : </label>
                <input type="number" className="form-control" onChange={(event) => setWage(event.target.value)} placeholder="Enter Wage" />
              </div>

              <button className="btn btn-success" onClick={addEmployee} >Add Emplyee</button>
            </form>
          </div>
          <hr/>
          <div className="employees">
            <button className="btn btn-primary" onClick={getEmployees}>Show Emplyees</button>
          <br/><br/>
          {employeeList.map((val,key) =>{
            return (
              <div className="employee card">
                <div className="card-body text-left">
                  <p className="card-text">Name :{val.name}</p>
                  <p className="card-text">Age :{val.age}</p>
                  <p className="card-text">Country :{val.country}</p>
                  <p className="card-text">Positions :{val.position}</p>
                  <p className="card-text">Wage :{val.wage}</p>
              
                    <div className="d-flex">
                      <input type="text" className="form-control" onChange={(event) => {setnewWage(event.target.value)}} placeholder={val.wage}/>
                      <button className="btn btn-warning" onClick={() => {updateEmployeeWage(val.id)}}>Update</button>
                    </div>

                </div>
              </div>
            )
          })}
          </div>
      </div>
    )
}


export default App;
