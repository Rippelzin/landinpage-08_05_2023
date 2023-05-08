import Head from "next/head"

import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";

import { useEffect, useState } from 'react';

import { FaUserAlt } from 'react-icons/fa';
import {RiLockPasswordFill} from 'react-icons/ri';
import {SiOculus} from 'react-icons/si'
import {CgUserAdd} from 'react-icons/cg'
import {FcGoogle} from 'react-icons/fc'
import styles from '../styles/SignIn.module.css'

import Axios from "axios";

import { useSession, signIn, getSession} from 'next-auth/react'

export default function  Entrar(){
    

    Axios.defaults.withCredentials = true;

   /* const handleLogin = (values) => { 
        console.log('enviando dados ')
        Axios.post("http://localhost:3001/users/login",  //mudei do post pro get
          email: values.email,
          password: values.password,
        }).then((response) => {
          alert(response.data.msg);
          //console.log(response)
        })}
const verify = () =>{
  Axios.get("http://localhost:3001/users")
  .then(function(result) {
    console.log(result)
  })
}*/

const verify = (values) =>{
  Axios.post("http://localhost:3001/users/login" , {
    email: values.email,
    password: values.password,
  }).then(function(result) {
    console.log(result)
  })
}
    const validationSchema = yup.object({
      email: yup
      .string()
      .email("email inválido")
      .required("O email é obrigatório"),
        password: yup
          .string()
          .min(8, "Minimo de 8 digitos")
          .required("Insira sua Senha")
      });

     
      
    
    return(
        <div className={styles.mainContainer}>
          <h1 className={styles.title}>Prossiga com o Login </h1>
          <div>
           {/* <Head>
                <title>Sign In</title>
            </Head>
        
            <div className={styles.form_area}>
            <h1>Login</h1>
            {<Formik
      
                initialValues={{ email: "", password: "" }}
                validationSchema={validationSchema}
                onSubmit={verify}
                 /* i need to add the function to make a GET in the API 
      
            >
                <div >
        
                    <Form  >
          
                        <div className={styles.ra_field}>
                            <FaUserAlt className={styles.icon_ra}/>
                            <Field type="string" name="email" placeholder="Digite seu Email" className={styles.formulario} />
                            <ErrorMessage   component="div" name="email" />
                        </div>

                    
                        <div className={styles.psw_field}>
                            <RiLockPasswordFill className='icon-password'/>
                            <Field type="password" name="password" placeholder="Digite sua senha" className={styles.formulario} />
                            <ErrorMessage component="div" name="password" />
                         </div>

                    <button className={styles.login_button} type="submit" > <SiOculus className={styles.Oculus}/> </button> {/* i need to add the function to navigate the use to the sign up page 
                    </Form>
                </div>
    </Formik>}
    <div > 
    
    
    
            <div className={styles.ou_box}> 
              <div className={styles.line1}>   </div>
              <div className={styles.ou}>OU</div>
              <div className={styles.line2}>   </div>
             </div>
            
            <button className={styles.to_signup} > <CgUserAdd className={styles.sign_up_icon}/> </button> */}
           
           
            
          </div>
  
          <button onClick={() => signIn()} className={styles.googleProvider}> <FcGoogle className={styles.googleIcon}/> </button>
      </div>
            
        //</div>
    )
}

export const getServerSideProps = async (context ) => {
    const session = await getSession(context)
    if(session){
      return{
        redirect: {
          destination: '/profile'
        }
      }
    }
    return{
        props : {session},
      }
}
