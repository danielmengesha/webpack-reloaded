class User{
    constructor(language){
        this.language = language;
        if (this.language == undefined){
            this.language = this.detectLanguage();
        }
        this.wellCome();
    }
    detectLanguage(){
        if (!navigator) {
            return null;
        }
 
        switch (navigator.language) {
            case 'en-US':
                return 'en';
                break;
        }
 
        return 'de';
    }
    
   wellCome(){
        if (this.language == 'en') {
            document.getElementById('willkommen').innerHTML = 'The site is still under construction.Stay tuned !!';
        } else if(this.language == 'de') {
            document.getElementById('willkommen').innerHTML = 'Willkommen auf meine Spielseite';
        } else {
            document.getElementById('willkommen').innerHTML = 'The site is still under construction.Stay tuned !!';
        }

    }

}

let userOne = new User();
let x = document.getElementById('eins'); document.querySelector('.brett');
       let y = document.querySelector('.willkommen');
       let z = document.getElementById('eins');
       let btn = document.getElementById('button');
       let playerOne = document.querySelector('.spieler_1');
       let playerTwo = document.querySelector('.spieler_2');
       btn.addEventListener("mouseover", changes);
       btn.addEventListener("mouseout", noChanges);
       let btnTopic = document.querySelectorAll('.katigorie');


       function changes() {
                x.style.opacity = '1';
                z.style.opacity = '1';
                /*x.style.visibility = 'visible';  */
                x.style.transition = 'all 1s linear 2s';
                 /* x.style.transitionDelay = '2s'; */               
                x.style.color = 'rgba(128, 191, 1)';
                x.style.fontSize = '40px';
                y.style.transition = 'all 3.5s linear 0s';
                y.style.color = 'white';
                z.style.backgroundColor = 'rgba(64, 64, 64, 0.5)';
                playerOne.style.color = 'rgb(229, 131, 39)';
                /* btnTopic.style.opacity ='1';
                btnTopic.style.visibility = 'visible';
                btnTopic.style.transition = 'all 3s linear 1s' */;
              /*   playerOne.style.left = '20px';
                playerTwo.style.right = '20px'; */
       }

       function noChanges() {
           btn.style.visibility = 'hidden';
           // break;

               //  x.style.visibility = 'hidden';

               // x.style.transition= '1s';
               // // x.style.color = '#4268d1';
               // x.style.fontSize = '12px';

               // y.style.transition = '1.5s';
               // y.style.color = 'red';


               // z.style.backgroundColor = 'rgba(64, 64, 64, 0.4)';




       }
       const translation = {
           btnGeo: {
               de:'physik',
               en:'GEOGRAFIE'
           }
       }
       function trans (key){
           return translation[key][userOne.language];

       }
       document.querySelectorAll('.translateble').forEach(element => {
           element.innerHTML = trans(element.id);
           
       });
console.log(document.querySelectorAll('.translateble'));