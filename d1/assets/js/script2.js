var dataOggi = new Date();

    if(dataOggi.getHours()>=6 && dataOggi.getHours()<14){
       document.getElementById('saluto').innerHTML = 'Buongiorno';
    } else if(dataOggi.getHours()>=14 && dataOggi.getHours()<19 ){
        document.getElementById('saluto').innerHTML = 'Buon Pomeriggio';
    } else if(dataOggi.getHours()>=19 && dataOggi.getHours()<23 ){
        document.getElementById('saluto').innerHTML = 'Buona sera';
    } else{
        document.getElementById('saluto').innerHTML = 'Buonanotte';
    }

