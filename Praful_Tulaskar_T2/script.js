let Min = document.getElementById('min');
let Max = document.getElementById('max');
let Mul = document.getElementById('mul');
let Btn = document.getElementsByClassName('btn')[0];


function validate() {

    if (isNaN(Min.value) == true) {
        Min.style.backgroundColor = 'red';
    }
    if (isNaN(Max.value) == true) {
        Max.style.backgroundColor = 'red';
    }
    if (isNaN(Mul.value) == true) {
        Mul.style.backgroundColor = 'red';
    }

    if (((Min.value % Mul.value) != 0) && ((Max.value % Mul.value) != 0)) {
        Mul.style.backgroundColor = 'red';
    }

    else {
        if ((Min.value % Mul.value) != 0) {
            Min.style.backgroundColor = 'red';
        }

        else if ((Max.value % Mul.value) != 0) {
            Max.style.backgroundColor = 'red';
        }

        else {

            if (parseInt(Max.value) < parseInt(Min.value)) {
                Min.style.borderColor = 'red';
            }
            if (parseInt(Max.value) < parseInt(Mul.value)) {
                Mul.style.borderColor = 'red';
            }
            if (parseInt(Min.value) < parseInt(Mul.value)) {
                Mul.style.borderColor = 'red';
            }
        }
    }

}

Btn.addEventListener('click', () => {
    validate();
})