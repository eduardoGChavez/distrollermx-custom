import React, { useEffect, useState } from 'react';
import { Input, InputPassword, Button } from 'vtex.styleguide'

const Login = () => {
    const [displayForm, setDisplayBlock] = useState("block");
    const [formLogin, setFormLogin] = useState({
      'user' : '',
      'password' : '',
    })
    const [formCont, setFormCont] = useState<any>();
    let abc:any;

    useEffect(() => {
        const classForm = document.getElementsByClassName("vtex-flex-layout-0-x-flexRow--form-actividad-casa")[0] as HTMLElement;
        const form = classForm.getElementsByClassName("vtex-store-components-3-x-container")[0] as HTMLElement;
        abc = form;
        setFormCont(form);
    }, []);
    
    const handleClickButton = () => {
        const classForm = document.getElementsByClassName("vtex-flex-layout-0-x-flexRow--form-actividad-casa")[0] as HTMLElement;
        console.log(classForm);
        console.log(abc);
        classForm.append(abc);
        classForm.style.display = "block";
    }
    const handleClickButton2 = () => {
        const classForm = document.getElementsByClassName("vtex-flex-layout-0-x-flexRow--form-actividad-casa")[0] as HTMLElement;
        const form = classForm.getElementsByClassName("vtex-store-components-3-x-container")[0] as HTMLElement;
        form.remove();
    }
    const handleChangeFormLogin = async (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setFormLogin({
            ...formLogin,
            [name]: value,
        });
    }

    const handleIniciarSesion = () => {
        // if (formLogin.user === '' || formLogin.user === null) {
        //     alert('Ingresa tu usuario');
        //     return;
        // }
        // if (formLogin.password === '' || formLogin.password === null) {
        //     alert('Ingresa tu contraseña');
        //     return;
        // }
      
        
        if ( true ) {
            console.log('-------abc--------');
            console.log(abc);
            console.log(formCont);
            console.log(abc === formCont)
            console.log('-------abc--------');
            const classForm = document.getElementsByClassName("vtex-flex-layout-0-x-flexRow--form-actividad-casa")[0] as HTMLElement;
            classForm.append(formCont);
            classForm.style.display = "block";
            setDisplayBlock("block");
        }
    }

    return (
        <div style={{display: displayForm}}>
            <button onClick={handleClickButton2}>
                Eliminar Formulario
            </button>
            <button onClick={handleClickButton}>
                Activar Form
            </button>
            <Input  placeholder="Usuario" 
                    size="small" 
                    label="Usuario:"
                    onChange={handleChangeFormLogin} 
                    value={formLogin.user || ''} 
                    name="user"
                    autoComplete="off"
            />
            <InputPassword  placeholder="Contraseña" 
                            size="small" 
                            label="Contraseña"
                            onChange={handleChangeFormLogin} 
                            value={formLogin.password || ''}
                            name="password"
                            autoComplete="off"
            />
            <Button variation="primary" block onClick={() => handleIniciarSesion()}>Iniciar Sesión</Button>
        </div>
    );
}

export default Login;