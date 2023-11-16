
// Gestion de páginas

const botonesMenu = document.querySelectorAll('.link-menu')
const paginasSection = document.querySelectorAll('.ctn-section');

botonesMenu.forEach((btnSelect) => {
    btnSelect.addEventListener('click', (click) => {

        botonesMenu.forEach((btn) => {
            btn.classList.remove('link-active');
        })

        click.currentTarget.classList.add('link-active');

        /* console.log(click.currentTarget.dataset.seccion); */
        
        paginasSection.forEach((pag) => {
            pag.classList.remove('active')
            if (click.currentTarget.dataset.seccion == pag.dataset.seccion) {
                pag.classList.add('active')
            }
            /* console.log(pag.dataset.seccion) */
        })

        if (window.innerWidth < 850) {
            ctnPagina.classList.add('active');
            ctnMenu.classList.add('active');
        }
    });
});


// Gestión de mostrar apps

const botonesSlots = document.querySelectorAll('.slot-grid');
const ctnApps = document.querySelectorAll('.ctn-app');

const accSection = document.querySelectorAll('.acc-section')


botonesSlots.forEach((btnSlot) => {

    /* console.log(btnSlot); */
    btnSlot.addEventListener('click', (click) => {

        accSection.forEach((cr) => {
            cr.classList.add('active');
            console.log('Funciona cerrar acc section')
        });

        /* console.log(click.currentTarget.dataset.slot); */

        ctnApps.forEach((ctnapp) => {
            /* console.log(ctnapp.dataset.app) */

            if (click.currentTarget.dataset.slot == ctnapp.dataset.app) {
                ctnapp.classList.add('active');
                console.log('Funciona mostrar app')
            };
        });
    });
});

// Gestión de cerrar apps

const botonesBack = document.querySelectorAll('.btn-back');

botonesBack.forEach((b) => {
    b.addEventListener('click', (click) => {

        accSection.forEach((cr) => {
            cr.classList.remove('active');
            console.log('Funciona abrir acc section')
        });

        ctnApps.forEach((sc) => {
            if (click.currentTarget.dataset.back == sc.dataset.app) {
                sc.classList.remove('active');
                console.log('funciona cerrar app')

            };
        });
    });
});

// Acciones para boton bar 

const botonBar = document.getElementById('btn-bar');
const ctnMenu = document.getElementById('ctn-menu');
const ctnPagina = document.getElementById('ctn-pagina');

if (window.innerWidth < 850) {
    ctnMenu.classList.add('active');
    ctnPagina.classList.add('active');
}

window.addEventListener('resize', () => {
    if (window.innerWidth < 850) {
        ctnMenu.classList.add('active');
        ctnPagina.classList.add('active');
    } /* else if (window.innerWidth > 850) {
    ctnMenu.classList.remove('active');
    ctnPagina.classList.remove('active');
} */
})


botonBar.addEventListener('click', () => {
    ctnMenu.classList.toggle('active');

    if (window.innerWidth < 850) {
        ctnPagina.classList.add('active');
    } else if (window.innerWidth > 850) {
        ctnPagina.classList.toggle('active');
    }
})


// Acciones para boton buscador mostrar


const btnMostrarBuscador = document.getElementById('mostrar-buscador');
const btnBuscador = document.querySelectorAll('.ctn-btn-buscador');
const btnMicrofono = document.getElementById('btn-microfono');
const ctnBuscador = document.getElementById('ctn-buscador');
const ctnLogo = document.getElementById('logo');
const ctnBotones = document.getElementById('ctn-botones')

const btnCerrarBuscador = document.getElementById('btn-cerrar-buscador')
const ctnBuscadorInput = document.getElementById('buscador')

btnMostrarBuscador.addEventListener('click', () => {

    ctnBuscador.classList.add('active');
    ctnBotones.classList.add('active');
    ctnLogo.classList.add('active');
    ctnBuscadorInput.classList.add('active');

    btnBuscador.forEach((e) => {
        e.classList.add('active');
    })
})

btnCerrarBuscador.addEventListener('click', () => {
    ctnBuscador.classList.remove('active');
    ctnBotones.classList.remove('active');
    ctnLogo.classList.remove('active');
    ctnBuscadorInput.classList.remove('active');

    btnBuscador.forEach((e) => {
        e.classList.remove('active');
    })
})

/* window.addEventListener('resize', () => {

    if (window.innerWidth > 560) {
        ctnBuscador.classList.remove('active');
        ctnBotones.classList.remove('active');
        ctnLogo.classList.remove('active');
        ctnBuscadorInput.classList.remove('active');

        btnBuscador.forEach((e) => {
            e.classList.remove('active');
        })
    }

}) */


// Aplicación CALCULADORA DE CALORÍAS

/* La fórmula Harris revisada por Roza y Shizgall (1994) 2 :

        Hombre: 13,707 x Peso(kg) + 492,3 x Altura(m) - 6,673 x Edad(años) + 77,607005
        Mujer: 9.740 x Peso(kg) + 172.9 x Talla(m) - 4.737 x Edad(años) + 667.051005 */

const valorPeso = document.getElementById('text-peso');
const valorAltura = document.getElementById('text-peso');
const valorEdad = document.getElementById('text-edad');
const btnCalcular = document.getElementById('btn-calcular-cal')
const resultadoCalorias = document.getElementById('num-calorias')

/* let resultadoEdad = 0
let resultadoPeso = 0
let resultadoAltura = 0 */
let resultadoCalculo = 0

btnCalcular.addEventListener('click', () => {

    if (true) {
        resultadoCalculo = ((13.707 *(valorPeso.value*1)) + ((492.3/100) * (valorAltura.value*1)) + (6.673*(valorEdad.value*1)) - 77.607005)/*  * 1.375 */

        /* resultadoCalculo.toFixed(0); */

        resultadoCalorias.innerHTML = resultadoCalculo.toFixed(0)
    }
})

const valorGenero = document.getElementById('text-genero')

console.log(valorGenero.value)




// Código prueba
 
/* let indicador = 0
let indicador2 = 0

botonBar.addEventListener('click', () => {

    if (window.innerWidth > 850 && indicador == 0) {
        ctnMenu.style.width = '42px'
        ctnPagina.style.width = 'calc(100% - 47px)'
        ctnPagina.style.marginLeft = '47px'
        
        console.log('func')
        indicador = 1
    } else if (indicador == 1) {
        ctnMenu.style.width = '190px'
        ctnPagina.style.width = 'calc(100% - 195px)'
        ctnPagina.style.marginLeft = '195px'
        indicador = 0
    }
    
    if (window.innerWidth < 850  && indicador2 == 0) {
        ctnMenu.style.width = '190px'
        ctnPagina.style.width = 'calc(100% - 47px)'
        ctnPagina.style.marginLeft = '47px'
        
        indicador2 = 1

    } else if (window.innerWidth < 850  && indicador2 == 1) {
        ctnMenu.style.width = '42px'
        ctnPagina.style.width = 'calc(100% - 47px)'
        ctnPagina.style.marginLeft = '47px'
        
        indicador2 = 0
    }
}); */


/* window.addEventListener('resize', (evento) => {
    console.log(evento)
}) */

console.log(window.innerWidth)

// Código prueba

/* const btnCalCalorias = document.getElementById('slot-cal-calorias');
const backCalCalorias = document.getElementById('back-cal-calorias');
const ctnCalCalorias = document.getElementById('ctn-cal-calorias');

btnCalCalorias.addEventListener('click', () => {
    console.log('Hola');
    ctnCalCalorias.classList.add('active');
})

backCalCalorias.addEventListener('click', () => {
    console.log('hola')
    ctnCalCalorias.classList.remove('active');
}) */