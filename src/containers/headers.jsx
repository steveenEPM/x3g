
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default function () {

    return (
        <header className="sc-400fb3e-0 bWWaGg" style={{}}>
            <div className="sc-c592f796-0 chTJIG">
                <div className="TabGroup__Container-sc-1k1eo94-0 eIWsfq sc-c592f796-1 ktHNXA">
                    <img src={require('../img/UTM-logo.png')} alt="UTM-logo" width="200"></img>
                    <div className="TabGroup__Wrapper-sc-1k1eo94-1 bDzWUZ">
                        <a href="index.html" className="TabLink__TabAnchor-sc-e9hfzw-0 fRDGyE sc-ed9d1b1-0 gJLgIT">Inicio</a>
                    </div>
                </div>
            </div>
            <div className="sc-3c285138-0 euyxOI ml-8 d-none d-laptop-flex">
                <div className="sc-3c285138-2 gzCmhI hide-empty" id="">
                    <button type="button" className="Button__StyledButton-sc-1gfts8g-0 gMZAES btn_loing" onClick={()=> sweetAlert()}>
                        Iniciar sesión
                    </button>
                </div>
            </div>
            <div className="sc-3c285138-0 euyxOI ml-auto d-none d-tablet-flex d-laptop-none">
                <div className="sc-3c285138-2 gzCmhI hide-empty">
                    <button type="button" className="Button__StyledButton-sc-1gfts8g-0 gMZAES btn_loing" onClick={()=> sweetAlert()}>
                        Iniciar sesión
                    </button>
                </div>
            </div>
            <div className="sc-3f224cfc-0 iBuIbN ml-24 mr-16 d-none d-tablet-flex d-laptop-none">
                <button type="button" aria-label="Abrir navegación" className="IconButton__StyledIconButton-sc-o4nnl7-0 dMqGsV">
                    <svg color="rgba(35, 35, 35, 1)" width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="true" className="Icon-sc-2q4m72-0 ktcoGv">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6ZM2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12ZM3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H3Z" fill="currentColor"></path>
                    </svg>
                </button>
            </div>
            <div className="sc-3f224cfc-0 iBuIbN ml-auto mr-16 d-tablet-none">
                <button type="button" aria-label="Abrir navegación" className="IconButton__StyledIconButton-sc-o4nnl7-0 dMqGsV">
                    <svg color="rgba(35, 35, 35, 1)" width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="true" className="Icon-sc-2q4m72-0 ktcoGv">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6ZM2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12ZM3 17C2.44772 17 2 17.4477 2 18C2 18.5523 2.44772 19 3 19H21C21.5523 19 22 18.5523 22 18C22 17.4477 21.5523 17 21 17H3Z" fill="currentColor"></path>
                    </svg>
                </button>
            </div>
        </header>
    )

}





function sweetAlert() {
    Swal.fire({
        title: 'Iniciar Sesión',
        html:
            '<input id="swal-input1" class="swal2-input" placeholder="Correo">' +
            '<input id="swal-input2" class="swal2-input" placeholder="Contraseña" type="password">' +
            '<div id="google-login-container" style="text-align: center; margin-top: 20px;">' +
            '<button id="google-login" class="swal2-confirm swal2-styled" style="background-color: #4285F4; color: white; border: none; cursor: pointer; padding: 10px 20px; font-size: 14px; border-radius: 5px;">' +
            '<i class="fab fa-google"></i> Iniciar con Google' +
            '</button>' +
            '</div>',
        showCancelButton: true,
        confirmButtonText: 'Iniciar Sección',
        cancelButtonText: 'Cancelar',
        showLoaderOnConfirm: true,
        preConfirm: () => {
            const username = document.getElementById('swal-input1').value;
            const password = document.getElementById('swal-input2').value;

            // Simulate authentication logic
            return new Promise((resolve, reject) => {
                // Simulate a delay for authentication
                setTimeout(() => {
                    if (username === "fci@utm.edu.ec" && password === "password") {
                        resolve({ username });
                    } else {
                        reject('Correo o contraseña inválidos');
                    }
                }, 1000);
            });
        },
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            // Handle success login
            Swal.fire({
                icon: 'success',
                title: 'Inicio de sesión exitoso',
                text: 'Bienvenido de nuevo, ' + result.value.username + '!',
            });
        }
    }).catch((error) => {
        // Handle authentication error
        Swal.fire({
            icon: 'error',
            title: 'Autenticación Fallida',
            text: error,
        });
    });

    // Add event listener to Google login button
    document.addEventListener('click', function (event) {
        if (event.target && event.target.id === 'google-login') {
            Swal.fire({
                icon: 'info',
                title: 'Iniciar con Google',
                text: 'Redirigiendo a la página de inicio de sesión de Google...',
            }).then(() => {
                // Simulate redirection to Google login
                //window.location.href = 'https://accounts.google.com/signin';
            });
        }
    });
}
