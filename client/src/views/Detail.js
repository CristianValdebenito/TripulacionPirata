import React,{useState,useEffect} from 'react';
import { useParams,useNavigate } from "react-router-dom";
import axios from 'axios';

const Detail = () => {

    const {id} = useParams();
    const [pirata, setPirata] = useState({})
    const navigate = useNavigate();
    const [skill1, setSkill1] = useState();
    const [skill2, setSkill2] = useState()
    const [skill3, setSkill3] = useState()
    

    useEffect(() => {
        axios.get("http://localhost:8080/api/piratas/" + id)
            .then((res)=>{
                setPirata(res.data.pirata);
                console.log(res.data.pirata);
                setSkill1(res.data.pirata.skill1);
                setSkill2(res.data.pirata.skill2);
                setSkill3(res.data.pirata.skill3);
            })
    }, [])
//api/piratas/changeskill/:skill/:id
    const changeSkill = (skillNumber) => {
        console.log(skillNumber,"lo que mando")
        axios.post('http://localhost:8080/api/piratas/changeskill/'+skillNumber+"/"+id)
        .then(res=>{
            console.log("resulto")
            if(skillNumber === 1){
                const original = skill1;
                console.log(original);
                setSkill1(!original);

            }
            if(skillNumber === 2){
                const original = skill2;
                setSkill2(!original);
            }
            if(skillNumber === 3){
                const original = skill3;
                setSkill3(!original);
            }

        }).catch((err)=>{
            console.log(err,"error devuelto")
        })
    }


    return (
        <div>
            <div className="titlesup">
                <h1>{pirata.name}</h1>
                <button className="btn6" onClick={()=>navigate("/piratas")}>TABLERO DE TRIPULACION</button>
            </div>
            <div className='contenedor22'>
                <div className='detalleDer'>
                    <img className="foto88" src="https://img.freepik.com/vector-gratis/craneo-pirata-barbudo-bigote-vintage_225004-106.jpg?w=2000" alt="Pirata pic"/>
                    <h1 className='detH1'>"Tiemblan maderas"</h1>
                </div>
                <div className='detalleIzq'>
                    <div className='acercaDe'><h2>Acerca de {pirata.name}</h2></div>
                    <h5><p>Posicion:  {  pirata.position}</p></h5>
                    <h5><p>Tesoro: {  pirata.treasure}</p></h5>

                   <div className='aaa'> <h5 className='h5'>Habilidad 1: {skill1?"SI":"NO"} </h5> <button className='btnSkill' onClick={()=>changeSkill(1)}>{skill1?"NO":"SI"}</button></div>
                    <div className='aaa'><h5 className='h5'>Habilidad 2: {skill2?"SI":"NO"} </h5><button className='btnSkill' onClick={()=>changeSkill(2)}>{skill2?"NO":"SI"}</button></div>
                    <div className='aaa'><h5 className='h5'>Habilidad 3: {skill3?"SI":"NO"}  </h5><button className='btnSkill' onClick={()=>changeSkill(3)}>{skill3?"NO":"SI"}</button></div>
                </div>
            </div>
        </div>
    );
}

export default Detail;