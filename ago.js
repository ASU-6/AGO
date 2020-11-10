const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
let s_victory_counter;
let boss_victory_counter;
let boss_reaching_counter;
let sally_counter;

const clickHandler = (e) =>{

    let event_id = e.target.textContent;
    
    switch(event_id){

        case 's-victory':
            s_victory_counter = document.getElementById('s-victory').value;
            if(s_victory_counter < 6){
                s_victory_counter++;
            }           
            document.getElementById('s-victory').value = s_victory_counter;
            break;

        case 'boss-victory':
            boss_victory_counter = document.getElementById('boss-victory').value;
            if(boss_victory_counter < 12){
                boss_victory_counter++;
            }
            document.getElementById('boss-victory').value = boss_victory_counter;
            break;
        case 'boss-reaching':
            boss_reaching_counter = document.getElementById('boss-reaching').value;
            if(boss_reaching_counter < 24){
                boss_reaching_counter++;
            }
            document.getElementById('boss-reaching').value = boss_reaching_counter;
            break;
        case 'sally':
            sally_counter = document.getElementById('sally').value;
            if(sally_counter < 36){
                sally_counter++;
            }
            document.getElementById('sally').value = sally_counter;
            break;
    }

    let achievement_s_victory;
    let achievement_boss_victory;
    let achievement_boss_reaching ;
    let achievement_sally;

    if(s_victory_counter  > 0){
        achievement_s_victory = s_victory_counter / 6 * 100;
    } else {
        achievement_s_victory = 0;
    }

    if(boss_victory_counter  > 0){
        achievement_boss_victory =  boss_victory_counter / 12 * 100;
    } else {
        achievement_boss_victory = 0;
    }

    if(boss_reaching_counter  > 0){
        achievement_boss_reaching = boss_reaching_counter /24 * 100;
    } else {
        achievement_boss_reaching = 0;
    }
    
    if(sally_counter  > 0){
        achievement_sally = sally_counter / 36 * 100;
    } else {
        achievement_sally = 0;
    }



    //console.log(achievement_s_victory);
    //console.log(achievement_boss_victory);

    let achievement = (achievement_s_victory + achievement_boss_victory + achievement_boss_reaching + achievement_sally ) / 4;
    

    //console.log(achievement);
    document.getElementById('achievement').innerText = Math.round(achievement) + "%";
}

let handlerIndex = 0;
while(handlerIndex < buttonLength){
    $button[handlerIndex].addEventListener('click',(e) =>{
        clickHandler(e);
    });
    handlerIndex++;
}