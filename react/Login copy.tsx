import React, { useEffect, useState } from 'react';
import { Input, InputPassword, Button } from 'vtex.styleguide'

const Login = () => {
    const [displayForm, setDisplayBlock] = useState("block");
    const [formLogin, setFormLogin] = useState({
      'user' : '',
      'password' : '',
    })
    let abc:any;

    useEffect(() => {
        const classForm = document.getElementsByClassName("vtex-flex-layout-0-x-flexRow--form-actividad-casa")[0] as HTMLElement;
        const form = classForm.getElementsByClassName("vtex-store-components-3-x-container")[0] as HTMLElement;
        form.remove();
        abc = form;
    }, []);

    const handleChangeFormLogin = async (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setFormLogin({
            ...formLogin,
            [name]: value,
        });
    }

    const handleIniciarSesion = () => {
        if (formLogin.user === '' || formLogin.user === null) {
            alert('Ingresa tu usuario');
            return;
        }
        if (formLogin.password === '' || formLogin.password === null) {
            alert('Ingresa tu contraseña');
            return;
        }
      
        //   var flag : boolean = false
        //   var textProducts = ''
        //   var listProducts : any = []
        //   for (var i = 0; i < itemsTable.length; ++i) {
        //     if (itemsTable[i]['select'] === true) {
        //       flag = true
      
        //       if (itemsTable[i]['quality'] === '' || itemsTable[i]['quality'] === 0 || itemsTable[i]['quality'] <= 0) {
        //          alert('Ingresa la cantidad')
        //          return false
        //       }
      
        //       var array = {
        //         'productName' : itemsTable[i]['productName'],
        //         'descriptionProduct' : itemsTable[i]['descriptionProduct'],
        //         'quality' : itemsTable[i]['quality'],
        //         'comments' : itemsTable[i]['comments'],
        //         'linkImg' : itemsTable[i]['img'],
        //         'refId' : itemsTable[i]['refId']
        //       } 
      
        //       listProducts.push(array)
        //       if (i !== 0) {
        //         textProducts += "   |   "
        //       }
      
        //       textProducts += "Producto: " +  itemsTable[i]['productName'] + 
        //                       ", cantidad: " + itemsTable[i]['quality']
      
        //       if (itemsTable[i]['comments'] !== '' ||  itemsTable[i]['comments'] !== 0) {
        //         textProducts += ", comentarios: " + itemsTable[i]['comments']
        //       }
      
        //     }
        //   }
        
        if ( true ) {
            const classForm = document.getElementsByClassName("vtex-flex-layout-0-x-flexRow--form-actividad-casa")[0] as HTMLElement;
            classForm.append(abc);
            classForm.style.display = "block";
            setDisplayBlock("none");
        }
    }

    return (
        <div style={{display: displayForm}}>
            <Input  placeholder="Usuario" 
                    size="small" 
                    label="Usuario:"
                    onChange={handleChangeFormLogin} 
                    value={formLogin.user || ''} 
                    name="address"
                    autoComplete="off"
            />
            <InputPassword  placeholder="Contraseña" 
                            size="small" 
                            label="Contraseña"
                            onChange={handleChangeFormLogin} 
                            value={formLogin.password || ''}
                            name="address"
                            autoComplete="off"
            />
            <Button variation="primary" block onClick={() => handleIniciarSesion()}>Enviar Cotización</Button>
        </div>
    );
}

export default Login;