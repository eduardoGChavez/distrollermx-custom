import React, { useEffect, useState } from 'react';
import { Input, InputPassword, Button } from 'vtex.styleguide'

const Login = () => {
    const [displayForm, setDisplayBlock] = useState("block");
    const [formLogin, setFormLogin] = useState({
      'user' : '',
      'password' : '',
    })
    const [formCont, setFormCont] = useState<any>();

    useEffect(() => {
        const classForm = document.getElementsByClassName("vtex-flex-layout-0-x-flexRow--form-actividad-casa")[0] as HTMLElement;
        const form = classForm.getElementsByClassName("vtex-store-components-3-x-container")[0] as HTMLElement;
        setFormCont(form);
    }, []);
    
    const handleChangeFormLogin = async (e: React.FormEvent<HTMLInputElement>) => {
        const { name, value } = e.currentTarget;
        setFormLogin({
            ...formLogin,
            [name]: value,
        });
    }

    const handleIniciarSesion = async () => {
        if (formLogin.user === '' || formLogin.user === null) {
            alert('Ingresa tu usuario');
            return;
        }
        if (formLogin.password === '' || formLogin.password === null) {
            alert('Ingresa tu contraseña');
            return;
        }
        
        // const res = await fetch(`/api/dataentities/dataEmployee/search?_fields=usuario%2Ccontrasena&_where=usuario%3D${formLogin.user}&_schema=dataEmployee`);
        const res = await fetch(`/api/dataentities/dataEmployee/search?_where=usuario=${formLogin.user} AND contrasena=${formLogin.password}&_schema=dataEmployee`);
        const registrosVTable = await res.json();

        if( registrosVTable.length > 0 ){
            const classForm = document.getElementsByClassName("vtex-flex-layout-0-x-flexRow--form-actividad-casa")[0] as HTMLElement;
            classForm.append(formCont);
            classForm.style.display = "block";
            setDisplayBlock("none");
        }
        else 
            alert('Usuario o contraseña incorrecto');
    }

    return (
        <div style={{display: displayForm}}>
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