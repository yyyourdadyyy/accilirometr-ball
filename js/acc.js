// window.addEventListener('deviceorientation', e =>{
//     console.log(e.alpha);

//     var alpha = e.alpha;
//     var gamma = e.gamma;
//     var pElement = document.getElementById('output');
//     pElement.innerHTML = String(alpha) + '<br>' + String(gamma);

//     Object.assign(document.documentElement, {
//                 style: `
//                 --move-x: ${(e.alpha *-1)}deg;
//                 --move-y: ${(e.gamma ) *-1}deg;
//                 `
//          })
//         })
// var ball = document.querySelector('.ball');
//         var isDeviceOrientationSupported = 'DeviceOrientationEvent' in window;

//         if (isDeviceOrientationSupported) {
//             window.addEventListener('deviceorientation', function(event) {
//                 var gamma = event.gamma;
//                 ball.style.transform = 'rotate(' + gamma + 'deg)';
//             });
//         } else {
//             window.addEventListener('devicemotion', function(event) {
//                 var acceleration = event.accelerationIncludingGravity;
//                 var gamma = (Math.atan2(-acceleration.x, acceleration.y) * (180 / Math.PI)) + 180;
//                 ball.style.transform = 'rotate(' + gamma + 'deg)';
//             });
//         }

//         if (!isDeviceOrientationSupported && !('ondevicemotion' in window)) {
//             alert('Это устройство не поддерживает события ориентации или движения.');
//         }






//         var ball = document.querySelector('.ball');

//         window.addEventListener('deviceorientation', function(event) {
//             var beta = event.beta;
//             var gamma = event.gamma;




// Выбираем элемент .ball
const ball = document.querySelector('.ball');

// Функция для обновления вращения объекта .ball
function handleMotion(event) {
  // Получаем данные об ускорении по осям X, Y, Z
  const x = event.accelerationIncludingGravity.x;
  const y = event.accelerationIncludingGravity.y;

  // Преобразуем ускорения в углы
  const angleX = Math.atan2(y, -x) * (180 / Math.PI);
  const angleY = 0; // Можно изменить для угла наклона по Y

  // Применяем углы к объекту .ball
  ball.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
}

// Слушаем событие изменения ускорения устройства
window.addEventListener('devicemotion', handleMotion);
    