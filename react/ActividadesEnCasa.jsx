import React, { useState, useEffect } from 'react';
// import Styles from './styles.css';
import Styles from './Styles.css'
// import "./Styles.css";

const ActividadesEnCasa = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getProductsSkusProperties();
    }, []);

    const getProductsSkusProperties = async () => {
        let productos  = [];

        const res = await fetch(`/api/dataentities/datosActCasa/search?_fields=id%2Cnombre%2Ccategoria%2Ctipo%2Cminiatura%2Carchivo`);
        const registrosVTable = await res.json();
        if (registrosVTable.length > 0) {
            for(let i = 0; i < registrosVTable.length; i++) {
                let obj = {
                    'id': registrosVTable[i].id,
                    'nombre': registrosVTable[i].nombre,
                    'categoria': registrosVTable[i].categoria,
                    'tipo': registrosVTable[i].tipo,
                    'miniatura': registrosVTable[i].miniatura,
                    "archivo": registrosVTable[i].archivo, 
                    'clicked': false,
                    
                }
                // console.log(...obj);
                // if ( registrosVTable[i].archivo === 'Imagen' ) {
                //     let archivo = {
                //         'archivo': <img className={Styles.content} src={registrosVTable[i].archivo} alt={registrosVTable[i].nombre} />
                //     };
                //     obj = 
                //     // obj = [...obj, {'archivo': <img className={Styles.content} src={registrosVTable[i].archivo} alt={registrosVTable[i].nombre} />}]
                // }
                // else if ( registrosVTable[i].archivo === 'PDF' ) {
                //     // let archivo = {
                //     //     'archivo': <iframe src={registrosVTable[i].archivo} style={{width: '100%', padding: '0px 192px', border: '0px', }} ></iframe>
                //     // };
                //     // obj = [...obj, {'archivo': <iframe src={registrosVTable[i].archivo} style={{width: '100%', padding: '0px 192px', border: '0px', }} ></iframe>}]
                // }
                // else if ( registrosVTable[i].archivo === 'Vídeo' ) {
                //     // let archivo = {
                //     //     'archivo': <video  src={registrosVTable[i].archivo} style={{ width: '100%', padding: '0px 192px', border: '0px', }}></video>
                //     // };
                //     // obj = [...obj, {'archivo': <video  src={registrosVTable[i].archivo} style={{ width: '100%', padding: '0px 192px', border: '0px', }}></video>}]
                // }
                productos = [...productos, obj];
                console.log(productos);
            }
            setData(productos);
        }
    }

    const handleClickImage = (item_index) => {
        const dataTmp = data.slice();
        dataTmp[item_index].clicked = true;
        setData(dataTmp);
    }

    const handleClickClose = (item_index) => {
        const dataTmp = data.slice();
        dataTmp[item_index].clicked = false;
        setData(dataTmp);
    }

    return (
        <div className={Styles.container}>
            {
                data.map((item, item_index) => (
                    <div key={item.id}>
                        <img 
                            className={Styles.img}
                            src={item.miniatura}
                            alt={item.nombre}  /* style="width:100%;max-width:300px" */ 
                            onClick={() => handleClickImage(item_index)}
                        />

                        <div className={Styles.modal} 
                             style={{
                                 display: item.clicked ? 'flex' : 'none',
                             }}>
                            <span className={Styles.close}
                                  onClick={() => handleClickClose(item_index)}
                                  style={{color: '#ffffff'}}
                            >
                                &times;
                            </span>

                            {/* {item.archivo} */}
                            {item.tipo === 'Imagen' && (
                                <img className={Styles.content}
                                    src={item.archivo}
                                    alt={item.nombre}
                                />
                            )}
                            {item.tipo === 'PDF' && (
                                <iframe src={item.archivo} 
                                        style={{
                                            width: '100%',
                                            padding: '0px 192px',
                                            border: '0px',
                                        }}
                                ></iframe>
                            
                            // <embed src={item.archivo} 
                            //     type="application/pdf" 
                            //     style={{
                            //         width: '100%',
                            //         padding: '0px 192px',
                            //         border: '0px',
                            //     }}
                            // />
                            )}
                            {item.tipo === 'Vídeo' && (
                                <video  src={item.archivo} 
                                        style={{
                                            width: '100%',
                                            padding: '0px 192px',
                                            border: '0px',
                                        }}
                                ></video>
                            )}


                        </div>

                        <p>{item.nombre} [Descargar]</p>
                        <p>{item.categoria}</p>
                    </div>
                ))
            }
        </div>
    );
}

export default ActividadesEnCasa;