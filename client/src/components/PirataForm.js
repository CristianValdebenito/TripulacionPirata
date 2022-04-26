import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup";

const PirataForm = (props) => {
    const navigate = useNavigate();
  const {onSubmitProp} = props;

  return (
    <div>
      <Formik

        initialValues={{
          name: "",
          image:"",
          treasure:"",//experiencie
          catch:"",//direccion
          position:"Primer Oficial",//role
          skill1: true,
          skill2: true,
          skill3: true,
        }}

        /* validationSchema={Yup.object().shape({
            name: Yup.string()
            .required("Por favor ingresa un nombre"),
            image: Yup.string()
            .required("Imagen Obligatoria"),
            treasure: Yup.number()
            .required("Tesoro obligatorio"),
            catch: Yup.string()
            .required("Recompensa Obligatoria"),
            position: Yup.string()
            .required("Posicion obligatoria"),
            */
            validationSchema={Yup.object().shape({
            skill1: Yup.bool(),
            skill2: Yup.bool(),
            skill3: Yup.bool(),
        })} 

        onSubmit={(values,{setSubmitting})=>{
            onSubmitProp(values);
        }}

      >
           {({errors,
            touched,
            handleSubmit})=>{

               /*  treasure:"",//experiencie
                catch:"",//direccion
                position:"Primer Oficial",//role */
                return (
                    <div>

                    <div className="titlesup">
                        <h1>Ingreso de Piratas</h1>
                        <button className="btn6" onClick={()=>navigate("/piratas")}>TABLERO DE TRIPULACION</button>
                    </div>
                    <div className="contenedor">
                        <Form className="formAdd" onSubmit={handleSubmit}>
                            <div className="izq">
                                <label htmlFor='name'><h5>Nombre Pirata</h5></label>
                                <Field id="name" type="text" placeholder="Nombre" name="name" className="form-control" />
                                {errors.name && touched.name && <p className='error'>{errors.name} </p>}

                                <label htmlFor='image'><h5>Imagen URL</h5></label>
                                <Field id="image" type="text" placeholder="url" name="image" className="form-control" />
                                {errors.image && touched.image && <p className='error'>{errors.image} </p>}

                                <label htmlFor='treasure'><h5>Tesoro del pirata</h5></label>
                                <Field id="treasure" type="number" placeholder="oro" name="treasure" className="form-control" />
                                {errors.treasure && touched.treasure && <p className='error'>{errors.treasure} </p>}

                                <label htmlFor='catch'><h5>Recompensa</h5></label>
                                <Field id="catch" type="number" placeholder="recompensa en oro" name="catch" className="form-control" />
                                {errors.catch && touched.catch && <p className='error'>{errors.catch} </p>}
                            </div>
                            <div className="der">
                                <div className="poss">
                            
                            <Field  id='position' type="text" as='select' name='position'>
                                <option value="Primer Oficial">Primer Oficial</option>{/* Desarrollador Fullstack */}
                                <option value="Contramaestre">Contramaestre</option>{/* Administracion */}
                                <option value="Capitan">Capitan</option>{/* jefe */}
                                <option value="Chico de la Polvora">Chico de la Polvora</option>
                            </Field>
                            <div className="s2"><label htmlFor="position" ><h5>Posicion del pirata</h5></label></div>
                            </div>
                           <div className="skill">
                               <div className="skill1">
                            <Field  id="skill1" type="checkbox" name="skill1" />
                            <div className="s1"><label htmlFor='skill1'><h6>Pata de palo</h6></label></div>
                            </div>
                            {errors.skill1 && touched.skill1 && <p className='error'>{errors.skill1} </p>}
                            <div className="skill2">
                            <Field id="skill2" type="checkbox" name="skill2"  />
                            <div className="s1"><label htmlFor='skill2'><h6>Parche en el ojo</h6></label></div>
                            </div>
                            {errors.skill2 && touched.skill2 && <p className='error'>{errors.skill2} </p>}
                            <div className="skill3">
                            <Field id="skill3" type="checkbox" name="skill3" />
                            <div className="s1"> <label htmlFor='skill1'><h6>Mano de garfio</h6></label></div>
                            </div>
                            {errors.skill3 && touched.skill3 && <p className='error'>{errors.skill3} </p>}                         
                            </div>
                            <button className="btnAdd" type="submit" disabled={Object.values(errors).length>0} >Agregar Pirata</button>
                          
                            </div>
                        </Form>
                    </div>
                    </div>
                )

            }}

      </Formik>
    </div>
    
  );
};

export default PirataForm;