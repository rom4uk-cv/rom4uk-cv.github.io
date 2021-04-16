document.addEventListener('DOMContentLoaded', () => {

    const inputRadio = document.querySelectorAll ('[type="radio"]'),
        labelRadio = document.querySelectorAll ('.form__currency-label'),
        tableRow = document.querySelectorAll ('.table__row'),
        checkbox = document.querySelectorAll ('[type="checkbox"]'),
        total = document.querySelector ('#total');

    window.addEventListener('scroll', () =>{
        if (window.pageYOffset > 40) {
            document.querySelector ('.header').classList.add('header_scroll');
        } else {
            document.querySelector ('.header').classList.remove('header_scroll');
        }
    }); 

    inputRadio.forEach((item, i) => {

        if (item.checked) {
            labelRadio[i].classList.add('form__currency-label_active');
        }

        item.addEventListener('click', () => {
            if (item.checked) {
                labelRadio.forEach(item => {
                    item.classList.remove('form__currency-label_active');
                    labelRadio[i].classList.add('form__currency-label_active');
                });
            }
        });
    });

    checkbox.forEach(item => { 
        
        item.addEventListener('click', (e) => { 
                const target = e.target;
                let parentCheck = target.parentElement.parentElement, 
                    labelCheckbox = parentCheck.querySelectorAll ('.table__cell'), 
                    check = parentCheck.querySelectorAll ('[type="checkbox"]');
                
                parentCheck.style.height = `${parentCheck.parentElement.offsetHeight}px`;
                
                labelCheckbox.forEach(item => { 
                    item.classList.remove('table__cell_active');
                });

                if (target.checked) {
                    check.forEach(item => { 
                        item.checked = false;
                    });
                    target.parentElement.classList.add('table__cell_active');
                    target.checked = true;
                }
                totalSum();
            });
        });

    tableRow.forEach((item, i) => {
        if (i % 2 == 0) {
            item.classList.add('table__row_background');
        }
    });

    function totalSum() {
        let totalChecked = document.querySelectorAll('.table__cell_active'),
            sum = 0;
            
        totalChecked.forEach(num => {
            sum += +num.textContent.replace(/\D+/g,"");
        });
        total.textContent = `$${sum}`;
    }
});