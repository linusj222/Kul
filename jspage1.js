let landSelected = false;
let buttonName;



$('.button').click(function(){

    landSelected = true;

    let buttonName = $('this').html();

    $('big_button').html("Gå till " + buttonName);
})

$('.big_button').click(function(){

    if(landSelected){
        
        $('#content').load( 'html.html' );
        
        switch(buttonName){
            case "Sverige":
                addInfo({LndName: button, Huvudstad: "Stockholm", Inv: 10, text: "Unpacked reserved sir offering bed judgment may and quitting speaking. Is do be improved raptures offering required in replying raillery. Stairs ladies friend by in mutual an no. Mr hence chief he cause. Whole no doors on hoped. Mile tell if help they ye full name. " })
                break;
            case "Spanien":
                addInfo({LndName: button, Huvudstad: "Madrid", Inv: 90, text: "Unpacked reserved sir offering bed judgment may and quitting speaking. Is do be improved raptures offering required in replying raillery. Stairs ladies friend by in mutual an no. Mr hence chief he cause. Whole no doors on hoped. Mile tell if help they ye full name. " })
                break;
            case "Schwiez":
                addInfo({LndName: button, Huvudstad: "Bern", Inv: 30, text: "Unpacked reserved sir offering bed judgment may and quitting speaking. Is do be improved raptures offering required in replying raillery. Stairs ladies friend by in mutual an no. Mr hence chief he cause. Whole no doors on hoped. Mile tell if help they ye full name. " })
                break;
        } 
    }
})

function addInfo(Land) {
    
    $('.land').html(Land.LndName);

    $('.huvudstad').html(Land.Huvudstad);

    $('.invanare').html(Land.Inv);

    $('.text').html(Land.text);
}