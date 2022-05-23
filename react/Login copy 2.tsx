import React, { useEffect } from 'react';

const Login = () => {
    let abc:any;

    useEffect(() => {
        const classForm = document.getElementsByClassName("vtex-flex-layout-0-x-flexRow--form-actividad-casa")[0] as HTMLElement;
        const form = classForm.getElementsByClassName("vtex-store-components-3-x-container")[0] as HTMLElement;
        abc = form;
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

    return (
        <div>
            <button onClick={handleClickButton2}>
                Eliminar Formulario
            </button>
            <button onClick={handleClickButton}>
                Activar Form
            </button>
        </div>
    );
}

export default Login;