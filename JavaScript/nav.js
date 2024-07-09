let clientes = JSON.parse(localStorage.getItem('clientes')) || [];

//Menu hamburguesa
//Para abrirlo
function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

//Para cerrarlo
function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}

//Para cerrarlo al hacer click en un link
function closeNavAndScrollTo(sectionId) {
    document.getElementById("mobile-menu").style.width = "0";
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

//Formulario contacto login y registro
document.addEventListener('DOMContentLoaded', function() {
    const formularioLogin = document.getElementById('formulario-login');
    const formularioSingUp = document.getElementById('formulario-singUp');
    const formularioLegal = document.getElementById('legal');
    const formularioRecuperar = document.getElementById('formulario-recuperar');
    const botonUsuario = document.querySelector('.nav-icons #login-btn');
    const botonExitLogin = document.querySelector('.formulario-login .cerrar')
    const botonExitSingUp = document.querySelector('.formulario-singUp .cerrar')
    const botonExitLegal = document.querySelector('.legal .cerrar')
    const botonExitRecuperar = document.querySelector('.formulario-recuperar .cerrar')

    const mostrarFormulario = (formulario) => {
        formulario.style.display = 'block';
    };

    const ocultarFormulario = (formulario) => {
        formulario.style.display = 'none';
    };

    // Mostrar formulario de login al hacer clic en el botón de usuario
    botonUsuario.addEventListener('click', function() {
        mostrarFormulario(formularioLogin);
    });
    
    // Salir del formulario de login al hacer clic en el botón con X
    botonExitLogin.addEventListener('click', function() {
        ocultarFormulario(formularioLogin);
    });

    //Mostrar formulario de recuperar la contraseña al hacer clic en en link del formulario de login
    document.querySelector('.login .recordar a[href="#formulario-recuperar"]').addEventListener('click', function() {
        ocultarFormulario(formularioLogin);
        mostrarFormulario(formularioRecuperar);
    });

    // Salir del formulario de recuperar la contraseña al hacer clic en el botón con X
    botonExitRecuperar.addEventListener('click', function() {
        ocultarFormulario(formularioRecuperar);
        mostrarFormulario(formularioLogin);
    });

    // Mostrar formulario de registro al hacer clic en el enlace
    document.querySelector('.registrarse a').addEventListener('click', function() {
        ocultarFormulario(formularioLogin);
        mostrarFormulario(formularioSingUp);
    });

    // Salir del formulario de registro al hacer clic en el botón con X
    botonExitSingUp.addEventListener('click', function() {
        ocultarFormulario(formularioSingUp);
    });

    // Mostrar formulario de login al hacer clic en el enlace del formulario de registro
    document.querySelector('.formulario-singUp .cuenta a').addEventListener('click', function() {
        ocultarFormulario(formularioSingUp);
        mostrarFormulario(formularioLogin);
    });

    //Mostrar Terminos y Condiciones al hacer clic en en link del formulario de registro
    document.querySelector('.singUp a[href="#legal"]').addEventListener('click', function() {
        ocultarFormulario(formularioSingUp);
        mostrarFormulario(formularioLegal);
    });

    // Salir de Terminos y Condiciones al hacer clic en el botón con X
    botonExitLegal.addEventListener('click', function() {
        ocultarFormulario(formularioLegal);
        mostrarFormulario(formularioSingUp);
    });

});

//Funcion registrar cliente
function agregarCliente(){

    const form = document.getElementById('singUp')
    //form.preventDefault();
    
    let cliente = {
        numeroCliente: Math.random().toString().substring(14),
        nombre: form.nombre.value,
        apellidos: form.apellidos.value,
        telefono: form.telefono.value,
        email: form.email.value,
        password: form.password.value,
        edad: form.edad.value,
    }
    //console.log(cliente)

if(cliente.nombre && cliente.apellidos && cliente.telefono && cliente.email 
    && cliente.password && cliente.edad){

        clientes.push(cliente);
            
            localStorage.setItem("clientes", JSON.stringify(clientes));
            
            alert('Cliente añadido correctamente')
            form.reset();
    }
}

//Funcion para borrar un cliente (Hay que llamarla en algun sitio)
function borrarLocalStorage() {
    localStorage.removeItem("clientes");
    location.reload();
    clientes = [];
}

//Funcion para mostar los clientes (Hay que llamarla en algun sitio)
function listarClientes(){
    
    var listadoClientes = document.getElementById('listaCliente');

    listadoClientes.innerHTML = '';

    if(clientes.length === 0) {
        listadoClientes.textContent = 'No hay clientes almacenados';
    }else{
        clientes.forEach((cliente, index) => {
            var clienteDiv = document.createElement('div')
            clienteDiv.classList.add('cliente-item')

            clienteDiv.innerHTML =  `
                                    <h3>Cliente ${index + 1}</h3>
                                    <p><strong>Nombre:</strong> ${cliente.nombre} ${cliente.apellidos}</p>
                                    <p><strong>Teléfono:</strong> ${client.telefono}</p>
                                    <p><strong>Email:</strong> ${cliente.email}</p>
                                    <p><strong>Password:</strong> ${cliente.password}</p>
                                    <p><strong>Edad:</strong> ${cliente.edad}</p>                                    
                                    `;
        
            listadoClientes.appendChild(clienteDiv);
        });
    }
}

//buscador
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    login.classList.remove('active');
    /*forgot.classList.remove('active')
    register.classList.remove('active');
    legal.classList.remove('active');*/
    cartItem.classList.remove('active');
}

//login
let login = document.querySelector('.formulario-login');

document.querySelector('#login-btn').onclick = () =>{
    searchForm.classList.remove('active');
    login.classList.toggle('active');
    /*forgot.classList.remove('active')
    register.classList.remove('active');
    legal.classList.remove('active');*/
    cartItem.classList.remove('active');
}

//forgot
/*let forgot = document.querySelector('.formulario-recuperar');

document.querySelector('#login-btn').onclick = () =>{
    searchForm.classList.remove('active');
    login.classList.remove('active');
    forgot.classList.toggle('active')
    register.classList.remove('active');
    legal.classList.remove('active');
    cartItem.classList.remove('active');
}

//register
let register = document.querySelector('.formulario-singUp');

document.querySelector('#login-btn').onclick = () =>{
    searchForm.classList.remove('active');
    login.classList.remove('active');
    forgot.classList.remove('active')
    register.classList.toggle('active');
    legal.classList.remove('active');
    cartItem.classList.remove('active');
}

//legal
let legal = document.querySelector('.legal');

document.querySelector('#login-btn').onclick = () =>{
    searchForm.classList.remove('active');
    login.classList.remove('active');
    forgot.classList.remove('active')
    register.classList.remove('active');
    legal.classList.toggle('active');
    cartItem.classList.remove('active');
}*/

//carrito
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    searchForm.classList.remove('active');
    login.classList.remove('active');
    /*forgot.classList.remove('active')
    register.classList.remove('active');
    legal.classList.remove('active');*/
    cartItem.classList.toggle('active');
    }

    
/*
//Añadir productos al carrito
const btnCart = document.querySelector('')
const containerCartProducts = document.querySelector('')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('')
})

//Lista de todos los contenedores de productos
const productsList = document.querySelector('.products')

//Variable de arreglos de Productos
let allProducts = [];

const valorTotal = document.querySelector('.total-pagar')

const countProducts = document.querySelector('#contador-productos')

productsList.addEventListener('click', e => {
    if(e.target.classList.contains('btn-add-cart')){
        const product = e.target.parentElement

        const infoProduct = {
            quantity: 1,
            title: product.querySelector('h3').textContent,
            price: product.querySelector('.price').textContent,
        };

        const exits = allProducts.some(product => product.title === infoProduct.title)

        if(exits){
            const products = allProducts.map(product => {
                if(product.title === infoProduct.title){
                    product.quantity++;
                    return product
                } else{
                    return product
                }
            })
            allProducts = [...products]
        }else{

            allProducts = [...allProducts, infoProduct];
        }


        showHTML();
    }
});

rowProduct.addEventListener('click', () => {
    if(e.target.classList.contains('icon-close')){
        const product = e.target.parentElement
        const title = product.querySelecor('p').textContent 

        allProducts = allProducts.filter(product => product.title !== title);

        showHTML()
    }
})

//Funcion para mostrar HTML
const showHTML = () => {

    if(!allProducts.length){
        containerCartProducts.innerHTML=`<p class="cart-empty">El carrito está vacío</p>`
    }

    //Limpiar HTML
    rowProduct.innerHTML = '';

    let  total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product => {
        const containerProduct = document.createElement('div')
        containerProduct.classList.add('cart-product')

        containerProduct.innerHTML = `            
            <div class="cart-item">
                <span class="fas fa-times"></span>
                <img src="./img/pan.avif" alt="">
                <div class="content">
                    <h3>${product.title}</h3>
                    <div class="price">${product.price}</div>
                </div>
            </div>
        `

    rowProduct.append(containerProduct);

    total = total + parseInt(product.quantity * product.price.slice(1))
    totalOfProducts = totalOfProducts + product.quantity;

    });

    valorTotal.innerText = `€${total}`
    countProducts.innerText = totalOfProducts;
};
*/


//scroll
window.onscroll = () =>{
//  navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

//Scroll navegador
let ubicacionPrincipal = window.scrollY;
let $nav = document.querySelector('#nav');

window.addEventListener('scroll', function() {
    let ubicacionActual = window.scrollY;

    if(ubicacionPrincipal >= ubicacionActual){
        $nav.style.top = "0px"
    } else {
        $nav.style.top = "-150px"
    }

    ubicacionPrincipal = ubicacionActual
});

//Fecha nacimiento actualizable cada día: 120 años
document.addEventListener('DOMContentLoaded', (event) => {
    const today = new Date().toISOString().split('T')[0];
    const minDateString = new Date(new Date().setFullYear(new Date().getFullYear() - 120)).toISOString().split('T')[0];

    document.getElementById('edad').setAttribute('max', today);
    document.getElementById('edad').setAttribute('min', minDateString);
});
