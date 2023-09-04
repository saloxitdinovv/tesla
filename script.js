let wheel1 = document.getElementById('first');
let wheel2 = document.getElementById('second');
let speedElement = document.querySelector('.info_title span');
let meterLeft = document.querySelector('.title span')
let speedUp = document.querySelector('.up')
let speedDown = document.querySelector('.down')
let tempInfo = document.querySelector('.temp')
let tempUp = document.querySelector('#temp_up')
let tempDown = document.querySelector('#temp_down')
let diskUp = document.querySelector('#disk_up')
let diskDown = document.querySelector('#disk_down')
let diskInfo = document.querySelector('.disk')
let wheels = document.querySelectorAll('.wheel')
let openCar = document.querySelector('.open')
let door = document.querySelector('.door img')
let salon = document.querySelector('.tesla_salon')
let tesla = document.querySelector('.tesla_image')
let price = document.querySelector('#price')
let air = document.querySelector('.air')
let longRange = document.querySelector('.long_range')
let hides = document.querySelectorAll('.hide')
let infos = document.querySelectorAll('.info')
let colors = document.querySelector('.salon_color')

wheel1.style.animation = `rotation .4s linear infinite`;
wheel2.style.animation = `rotation .4s linear infinite`;

let speed = 60
let meter = 750
let temperature = 20
let disk = 19

speedUp.onclick = () => {
    if (speed < 70) {
        speed += 5;
        if (speed >= 70) {
            speed = 70;
        }
        meter -= 23;
        meterLeft.innerHTML = meter;
        speedElement.innerHTML = speed;
        updateSpeed(speed);
    }
}
speedDown.onclick = () => {
    if (speed > 50) {
        speed -= 5;
        if (speed <= 50) {
            speed = 50;
        }
        meter += 23;
        meterLeft.innerHTML = meter;
        speedElement.innerHTML = speed;
        updateSpeed(speed);
    }
}


tempUp.onclick = () => {
    if (temperature < 40) {
        temperature += 10;
        if (temperature >= 40) {
            temperature = 40;
        }
        meter -= 8;
        meterLeft.innerHTML = meter;
        tempInfo.innerHTML = temperature;
    }
}

tempDown.onclick = () => {
    if (temperature > -10) {
        temperature -= 10;
        if (temperature <= -10) {
            temperature = -10;
        }
        meter += 2;
        meterLeft.innerHTML = meter;
        tempInfo.innerHTML = temperature;
    }
}


diskUp.onclick = () => {
    disk = 21
    diskInfo.innerHTML = disk
    wheels.forEach(wheel => {
        wheel.setAttribute('src', 'images/wheel21.png')
    })
    meter = 740
    meterLeft.innerHTML = meter
}
diskDown.onclick = () => {
    disk = 19
    diskInfo.innerHTML = disk
    wheels.forEach(wheel => {
        wheel.setAttribute('src', 'images/wheel19.png')
    })
    meter = 750
    meterLeft.innerHTML = meter
}


function updateSpeed() {
    if (speed === 50) {
        wheel1.style.animation = `rotation .6s linear infinite`;
        wheel2.style.animation = `rotation .6s linear infinite`;
    } else if (speed === 55) {
        wheel1.style.animation = `rotation .5s linear infinite`;
        wheel2.style.animation = `rotation .5s linear infinite`;
    } else if (speed === 60) {
        wheel1.style.animation = `rotation .4s linear infinite`;
        wheel2.style.animation = `rotation .4s linear infinite`;
    } else if (speed === 65) {
        wheel1.style.animation = `rotation .3s linear infinite`;
        wheel2.style.animation = `rotation .3s linear infinite`;
    } else if (speed === 70) {
        wheel1.style.animation = `rotation .2s linear infinite`;
        wheel2.style.animation = `rotation .2s linear infinite`;
    }
}
longRange.addEventListener('change', function () {
    if (this.checked) {
        price.innerHTML = '$100,000'
    } else {
        price.innerHTML = '$89, 990'
    }
})


air.addEventListener('change', function () {
    if (this.checked) {
        meterLeft.innerHTML = meter - 10
    } else {
        meterLeft.innerHTML = meter
    }
})


openCar.addEventListener('change', function () {

    if (this.checked) {
        closingCar()
    } else {
        openingCar()
    }
})


door.onclick = () => {
    openingCar()
    openCar.removeAttribute('checked', true)
}

function closingCar() {
    salon.classList.remove('unscale')
    salon.classList.add('scale')
    setTimeout(() => {
        colors.style.display = 'none'
        infos.forEach(info => info.style.display = 'flex')
        hides.forEach(hide => hide.style.display = 'block')
        salon.style.display = 'none'
        tesla.style.display = 'block'
        tesla.classList.add('unscale')
        door.style.animation = 'perspectiveLeft 2s reverse'
    }, 2000);
}

function openingCar() {
    tesla.classList.add('scale')
    door.classList.add('door_animation')
    setTimeout(() => {
        hides.forEach(hide => hide.style.display = 'none')
        infos.forEach(info => info.style.display = 'none')
        colors.style.display = 'flex'
        tesla.style.display = 'none'
        salon.style.display = 'block'
        salon.classList.add('unscale')
    }, 2000);
}

let colorButtons = document.querySelectorAll('.color')

let color = {
    black: './images/black_salon.png',
    white: './images/white_salon.png',
    gold: './images/gold_salon.png',
}

colorButtons.forEach(btn => {
    btn.addEventListener('click', function () {
        let btnColor = btn.getAttribute('data-color');
        if (color[btnColor]) {
            salon.style.transition = '.5s'
            setTimeout(() => {
                salon.style.backgroundImage = `url(${color[btnColor]})`;
            }, 500);
        }
    });
});