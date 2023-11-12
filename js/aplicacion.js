
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