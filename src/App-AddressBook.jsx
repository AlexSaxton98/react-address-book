import './App.css';
import { useState } from "react"

const App = () =>{
    const[address, setAddress] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()
        const phoneNumber = {address}
        console.log(phoneNumber)
        setAddress(e.target.value)
    }


    return(
        <div>
                <h1>Input Phone Number</h1>
                <form onSubmit={handleSubmit}>
                    <label>Phone Number</label>
                    <input 
                        type="text"
                        required
                        // value = {address}
                        // onChange={(e) => }
                    />
                </form>
                <h1>{address}</h1>
        </div>
        

    )
}

const Address = (props) =>{

}

// const Input = (value, func, num, label) => {
//     return(
//         <form>
//         <label htmlFor={num}>{label}:</label>
//         <input
//             num={num}
//             type="text"
//             onChange={console.log("hello")}
//             value={value}
//             />
//         </form>
//     )}

// {/* <Input value={address} func={setAddress} label="Address" num="address"/>  */}

export default App;


