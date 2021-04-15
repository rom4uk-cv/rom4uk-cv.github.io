const inputRadio = document.querySelectorAll ('[type="radio"]'),
      labelRadio = document.querySelectorAll ('.form__currency-label'),
      tableRow = document.querySelectorAll ('.table__row'),
      checkbox = document.querySelectorAll ('[type="checkbox"]'),
      contentLabel = document.querySelectorAll ('.table__cell'),
      current = document.querySelectorAll ('[data-current]'),
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

checkbox.forEach(item => { //получил все чекбоксы (8шт)
    // setCurrent(item.parentElement);

    item.addEventListener('click', (e) => { //обработчик клика на чекбокс
            const target = e.target;
            let parentCheck = item.parentElement.parentElement, //переменная с прородителем в нем находится дейбл
                labelCheckbox = parentCheck.querySelectorAll ('.table__cell'), //нодлист с ячейками конкретной строки
                check = parentCheck.querySelectorAll ('[type="checkbox"]'); //нодлист с чекбоксами уже конкретной строки
            
            labelCheckbox.forEach(item => { 
                item.classList.remove('table__cell_active'); //убрать все классы с бекграундом
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

tableRow.forEach((item, i) => { //получил все строки таблицы
    if (i % 2 == 0) {
        item.style.backgroundColor = '#f8f9f9';
        item.style.borderRadius = '10px';
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

function setCurrent(item) {
    let noSpace = item.textContent.trim();
    item.textContent = `$${noSpace}`;
}

function changeCurrent(current) {
    
    contentLabel.forEach((item) => {
        item.textContent = `$${item.textContent}`;
    });
}