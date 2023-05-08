import styles from '../styles/Profile2.module.css'
import Image from 'next/image'
import img from '../public/assets/perfil.jpg'
import * as yup from "yup";
import { ErrorMessage, Formik, Form, Field } from "formik";
import { useState, useEffect } from 'react';
import Axios from 'axios';
import { useSession } from 'next-auth/react';

export default function ProfileCard() {
    const tarefa1 = '90%';
    const tarefa2 = '10%'
    const tarefa3 = '60%'


    const validationSchema = yup.object({
        nome: yup
        .string()
        .min(4),
        curso: yup
        .string()
        .min(4),
        semestre: yup
          .number(" Apenas o Numero!")
          .required()
          .positive()
          .integer(),
        });

        const [style, setStyle] = useState({
            display: 'none'
        })
        
        const [modder, setModder] = useState(false)

        function HandleClick(modder) {
            if(modder === false){
                setModder(true)
                setStyle({
                   display:'flex',
                   
                    
                  });
                  
            }
            else {
                setModder(false)
                setStyle({
                    display: 'none',
                    position: 'static'
                    
                  });
            }
           
        }
        //pega session do google
        const { data: session, status } = useSession()
        const [nome, setNome] = useState('')
        const [curso, setCurso] = useState('')
        const [semestre, setSemestre] = useState('')

        
        function sendData(values) {
            Axios.put("http://localhost:3001/users/update", {
                nome: values.nome,
                curso: values.curso,
                semestre: values.semestre,
                email: session.user.email
            })
                .then(function(result){
                    setNome(result.data.nome)
                    setCurso(result.data.curso)
                    setSemestre(result.data.semestre)
                     
                    
                })

            }
           function getData() {
                Axios.post("http://localhost:3001/users/dados" ,
                {
                    email: session.user.email
                }).then(function(result) {
                    setNome(result.data.nome)
                    setCurso(result.data.curso)
                    setSemestre(result.data.semestre)
                })
           }

           useEffect(() => {
            console.log('profile card carregou')
            getData()
           }, [])



       
    return(
        <div >
            <div className={styles.containerMaster}>
             {/*<div className={styles.containerCima}>*/}
                <div className={styles.box}>
                    <Image src={img} className={styles.imgPerfil}/>
                    <h2> {nome}  <br/> {curso} {session.user.email}  <br/> Semestre: {semestre} </h2>
                    <button type='button' onClick={() => HandleClick(modder)} >Editar Dados</button>
                        
                        
                        <Formik
                            initialValues={{ nome: "", curso: "", semestre: "" }}
                            validationSchema={validationSchema}
                            onSubmit={sendData}
                        >
                            <div  style={style}>
                                <Form className={styles.formulario}>
                                    <Field  type="nome" name="nome" placeholder="Digite seu nome" className={styles.FormField}  />
                                    <ErrorMessage   component="div" name="nome" />

                                    <Field type="curso" name="curso" placeholder="Digite seu curso" className={styles.FormField}/>
                                    <ErrorMessage   component="div" name="curso" />

                                    <Field type="semestre" name="semestre" placeholder="Digite seu semestre"className={styles.FormField} />
                                    <ErrorMessage   component="div" name="nosemestreme" />

                                    <button type='submit' className={styles.FormButton}>Atualizar Dados</button>
                                </Form>
                            </div>

                        </Formik>
                    

                    
                </div>
                <div className={styles.box}>
                    <h1>Progress</h1>
                    
                    <div className={styles.progresscontainer}>
                        <div className={styles.percentage}>{tarefa3}</div>
                        <div className={styles.bar}>  
                            <div className={styles.progress} style={{width: `${tarefa3}`}}></div>
                        </div>
                    </div>
                    
                    <div className={styles.progresscontainer}>
                        <div className={styles.percentage}>{tarefa2}</div>
                        <div className={styles.bar}>  
                            <div className={styles.progress} style={{width: `${tarefa2}`}}></div>
                        </div>
                    </div>
                    
                    <div className={styles.progresscontainer}>
                        <div className={styles.percentage}>{tarefa1}</div>
                        <div className={styles.bar}>  
                            <div className={styles.progress} style={{width: `${tarefa1}`}}></div>
                        </div>
                    </div>
                </div>
                {/*</div>*/}
                {/*<div className={styles.containerBaixo}>*/}
                    <div className={styles.box}>
                    <h1>Achviments</h1>
                    
                    </div>
                    <div className={styles.box4}>
                        <button className={styles.metaversoButton} onClick={() => window.open('insomnia://')}> Entrar no Metaverso</button>
                    </div>
                {/*</div>*/}
          
        </div>
      
        </div>
    )

    
}

