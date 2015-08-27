// This API by simoyanov93@gmail.com

'use strict';

var CARDS = [
//    {type: 'flight',from: 'London City Airport',to: 'Paris Orly Airport',seat: '1A',gate: '26',baggage: 'YVCK',numb: 'UN556'},
//    {type: 'flight',from: 'Airport Palermo',to: 'Airport Milan',seat: '10F',gate: '4C',baggage: '56TTTR',numb: 'UN122'},
//    {type: 'flight',from: 'Geneve Airport',to: 'Airport Nice Cote Dazur',seat: '15B',gate: '3A',baggage: 'NNKLJ',numb: 'UN658'},
//    {type: 'flight',from: 'Airport Milan',to: 'Franfurkt Airport',seat: '11A',gate: '1A',baggage: '56TTTR',numb: 'UN446'},
//    {type: 'train',from: 'Paris Gare Lyon',to: 'Geneve CFF',seat: '90',gate: '',baggage: '',numb: '45C'},
//    {type: 'train',from: 'Franfurkt Hauptbahnhof',to: 'Berlin',seat: '',gate: '',baggage: '',numb: '46C'},
//    {type: 'train',from: 'test1',to: 'test2',seat: '',gate: '',baggage: '',numb: '47C'},
//    {type: 'train',from: 'Rome',to: 'Naples',seat: '42',gate: '',baggage: '',numb: '48C'},
//    {type: 'airport bus',from: 'Geneve CFF',to: 'Geneve Airport',seat: '',gate: '',baggage: '',numb: '12'},
//    {type: 'bus',from: 'Port Palermo',to: 'Airport Palermo',seat: '',gate: '',baggage: '',numb: '14'},
//    {type: 'bus',from: 'Paris Orly Airport',to: 'Paris Gare Lyon',seat: '',gate: '',baggage: '',numb: '16'},
//    {type: 'bus',from: 'Franfurkt Airport',to: 'Franfurkt Hauptbahnhof',seat: '',gate: '',baggage: '',numb: '17'},
//    {type: 'bus',from: 'Airport Nice Cote Dazur',to: 'Port de Nice',seat: '',gate: '',baggage: '',numb: '18'},
//    {type: 'bus',from: 'Port de Civitavecchia',to: 'Rome',seat: '',gate: '',baggage: '',numb: '19'},
//    {type: 'boat',from: 'Naples',to: 'Port Palermo',seat: '40',gate: '',baggage: '',numb: '20'},
//    {type: 'boat',from: 'Port de Nice',to: 'Port de Civitavecchia',seat: '12',gate: '',baggage: '',numb: '21'}

]

// Функция сортировки и вывода
function createTrip(){
    //Создание массивов отправления и прибытия
    var fromArr = [], toArr = [];

    for(var k = 0; k < CARDS.length; k++){
        fromArr.unshift(CARDS[k].from);
        toArr.unshift(CARDS[k].to);
    }
    //Поиск одинаковых значений и запись их в массив
    var delArr = [];
    for(var i = 0; i < fromArr.length; i++) {
        for(var j = 0; j < toArr.length; j++) {
             if (fromArr[i] == toArr[j]){
                delArr.unshift(fromArr[i]);
            }
        }
    }
    //Удаление одинаковых значений
    for(var n = 0; n < delArr.length; n++){
        fromArr.splice(fromArr.indexOf(delArr[n]),1);
        toArr.splice(toArr.indexOf(delArr[n]),1);
    }

    // Поиск первого элемента
    for(var i = 0; i < fromArr.length; i++){
        for(var j = 0; j < CARDS.length; j++){
            if (fromArr[i] == CARDS[j].from){
                for(var y = 0; y < delArr.length; y++){
                    if(CARDS[j].to == delArr[y]){
                        var firstEl = CARDS[j].from;
                    }
                }
            }
        }
    }
    //Поиск последнего эллемента
    for(var i = 0; i < toArr.length; i++){
        for(var j = 0; j < CARDS.length; j++){
            if (toArr[i] == CARDS[j].to){
                for(var y = 0; y < delArr.length; y++){
                    if(CARDS[j].from == delArr[y]){
                        var lastEl = CARDS[j].to;
                    }
                }
            }
        }
    }

    
    // Создания массива с отсортированными данными
    var newArr = [];
    var newArrEl;
    //Функция записи данных в массив
    function rec(){
        if(newArrEl != lastEl){
            for(var j = 0; j < CARDS.length; j++){
                if (CARDS[j].from == firstEl){
                    newArr.push(CARDS[j]);
                    firstEl = CARDS[j].to;
                    newArrEl = CARDS[j].to;
                }
            }
            rec();
        }
    }
    rec();
    
    // Если во входных данных содержатся лишние карточки путь все равно будет создан, если это возможно. 
    if (CARDS.length !== newArr.length){
        alert("Not all cards are included in the route. Let's try to create a route from the valid options, if possible");
    } 
    
    //Вывод сообщения в way
    //@way - поле вывода сообщений, любой блочный элемент
    //При добавлении новых типов транспорта необходимо добавить новый case
    //case 'newType':
    //  var newLi = document.createElement('li');
    //  var seat = 'Seat ' + newArr[i].seat + '.';
    //  if(newArr[i].seat.length == 0){seat = 'No seat assignment.';}
    //  newLi.innerHTML = 'Take the newType ' + newArr[i].numb + ' from ' + newArr[i].from + ' to ' + newArr[i].to + '. ' + seat;
    //  way.appendChild(newLi);
    //  break;

    var way = document.getElementById('way');
    for(var i = 0; i < newArr.length; i++){   
        switch(newArr[i].type){
            case 'flight':
                var newLi = document.createElement('li');
                var bag =' Baggage drop at ticket counter ' + newArr[i].baggage + '.';
                if(i > 0 && typeof newArr[i-1].baggage !== undefined){
                    if (newArr[i].baggage == newArr[i-1].baggage){
                        bag = ' Baggage will be automatically transferred from your last leg.'
                    }
                }
                if(newArr[i].baggage.length == 0){bag = '';}
                var seat = 'Seat ' + newArr[i].seat + '.';
                if(newArr[i].seat.length == 0){seat = 'No seat assignment.';}
                newLi.innerHTML = 'From ' + newArr[i].from + ', take flight ' + newArr[i].numb + ' to ' + newArr[i].to + '. Gate ' + newArr[i].gate + '. ' + seat + bag;
                way.appendChild(newLi);
                break;
            case 'bus':
                var newLi = document.createElement('li');
                var seat = 'Seat ' + newArr[i].seat + '.';
                if(newArr[i].seat.length == 0){seat = 'No seat assignment.';}
                newLi.innerHTML = 'Take the bus ' + newArr[i].numb + ' from ' + newArr[i].from + ' to ' + newArr[i].to + '. ' + seat;
                way.appendChild(newLi);
                break;
            case 'train':
                var newLi = document.createElement('li');
                var seat = 'Seat ' + newArr[i].seat + '.';
                if(newArr[i].seat.length == 0){seat = 'No seat assignment.';}
                newLi.innerHTML = 'Take train ' + newArr[i].numb + ' from ' + newArr[i].from + ' to ' + newArr[i].to + '. ' + seat;
                way.appendChild(newLi);
                break;
            case 'boat':
                var newLi = document.createElement('li');
                var seat = 'Seat ' + newArr[i].seat + '.';
                if(newArr[i].seat.length == 0){seat = 'No seat assignment.';}
                newLi.innerHTML = 'Take boat ' + newArr[i].numb + ' from ' + newArr[i].from + ' to ' + newArr[i].to + '. ' + seat;
                way.appendChild(newLi);
                break;
            case 'airport bus':
                var newLi = document.createElement('li');
                var seat = 'Seat ' + newArr[i].seat + '.';
                if(newArr[i].seat.length == 0){seat = 'No seat assignment.';}
                newLi.innerHTML = 'Take the airport bus ' + newArr[i].numb + ' from ' + newArr[i].from + ' to ' + newArr[i].to + '. ' + seat;
                way.appendChild(newLi);
                break;
        }
    }

    console.log(newArr);

}

document.getElementById('createtrip').onclick = createTrip;

//Функция ввода данных из формы
function createCard(){
    //Проверка на пустые поля FORM и TO
    if(document.getElementById('from').value == '' || document.getElementById('to').value == ''){
        alert('Please fill out fields "from" and "to"');
    } else {
        // Создание объекта с данными
        var newEl = {};
        newEl.type = document.getElementById('type').value;
        newEl.from = document.getElementById('from').value;
        newEl.to = document.getElementById('to').value;
        newEl.seat = document.getElementById('seat').value;
        newEl.gate = document.getElementById('gate').value;
        newEl.baggage = document.getElementById('baggage').value;
        newEl.numb = document.getElementById('numb').value;
        // Добавление объекта в массив
        CARDS[CARDS.length] = newEl;
        //Вывод карточки в блочный эллемент с классом cards
        var div = document.createElement('div');
        div.className ='card';
        div.innerHTML = '<div class="type">' + newEl.type + '</div><div class="from"> ' + newEl.from + '</div><div class="to">' + newEl.to + '</div><div class="seat">' + newEl.seat + '</div><div class="gate">' + newEl.gate + '</div><div class="baggage">' + newEl.baggage + '</div><div class="numb">' + newEl.numb + '</div>';
        var cc = document.getElementById('cards');
        cc.appendChild(div);
        // Очистка формы
        document.getElementById('from').value = '';
        document.getElementById('to').value = '';
        document.getElementById('seat').value = '';
        document.getElementById('gate').value = '';
        document.getElementById('baggage').value = '';
        document.getElementById('numb').value = '';
    }  
}

document.getElementById('addcard').onclick = createCard;
// Функция очистки блока cards с помощью перезагрзуки страницы
function removeCards(){
    location.reload();
}

document.getElementById('delcards').onclick = removeCards;