window.addEventListener('deviceorientation', e =>{
       console.log(e.alpha);
   
       var alpha = e.alpha;
       var gamma = e.gamma;
       var beta = e.beta;
       var pElement = document.getElementById('output');
       pElement.innerHTML = 'Z: '+String(alpha) + '<br>' +'Y: '+ String(gamma) + '<br>' +'X: '+ String(beta);
   
       
            if(beta == 0){
               Object.assign(document.documentElement, {
                  style: `
                  --move-x: 0deg;
                  `
               })
            }else{
               Object.assign(document.documentElement, {
                  style: `
                  --move-x: ${(e.beta -90)*-0.5}deg;
                  --move-y: ${(e.gamma ) *-0.5}deg;
                  --move-z: ${(e.alpha ) *-1}deg;
                  `
           })
            }

           })