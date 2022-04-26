import React,{useState} from 'react';
import PirataForm from '../components/PirataForm';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Create = () => {

    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const createPirata = (values) => {
        console.log(values);

        axios.post('http://localhost:8080/api/piratas/new', values)
        .then(res=>{
            console.log("exitoso");
            navigate("/piratas");
        }).catch((err)=>{
            console.log(err.response)
            const errorResponse = err.response.data.errors;
            console.log(errorResponse);
                const errorArr=[];
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
        })
    }

    return (
        <div>
            {errors.map((err)=><div className={`alert alert-danger`} >{err} </div>)}
            <PirataForm onSubmitProp={createPirata} ></PirataForm>
            
        </div>
    );
}

export default Create;