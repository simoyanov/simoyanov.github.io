
// js-framework для работы CSS классов с DOM элементами
//Вызов функции осуществляется с помощью
//onclick="Mini.init({параметр: значение, параметр: значение, параметр: значение,});"
//onclick="Mini.init({type: тип метода, obj: элемент, val: значение,});Obj.method();"

'use strict';

var Mini = { //создаем объект
    init: function(params) {
        // тип метода
        this.type = params.type;
        
        // Проверка типа obj
        if (params.obj.charAt(0) == '.'){
            //тип class
            this.obj = document.querySelector(params.obj);
        } else if(params.obj.charAt(0) == '#'){
            //тип id
            var str = params.obj.substr(1);
            this.obj = document.getElementById(str);
        } else if(typeof params.obj == 'string'){
            //тип teg
            this.objs = document.getElementsByTagName(params.obj);
            this.obj = this.objs[0];
        }
        
        // значение
        this.val = params.val;
        
        // Выбор метода
        switch(this.type){
            case 'add':
                this.addClass();
                break;
            case 'remove':
                this.removeClass();
                break;
            case 'change':
                this.changeClass();
                break;
            case 'check':
                this.checkClass();
                break;
        }
        
	},
    
    // метод добавления класса
    addClass: function(){
        if(typeof this.val == 'string'){
            this.obj.classList.add(this.val);
        } else if(typeof this.val == 'object'){
            for(var i = 0; i < this.val.length; i++){
                this.obj.classList.add(this.val[i]);
            }
        }
    },
    
    // метод удаления класса
    removeClass: function(){
        this.obj.classList.remove(this.val);
    },
    
    
    // метод изменения класса
    changeClass: function(){
        this.obj.classList.toggle(this.val);
    },
    
    // метод проверки наличия класса
    checkClass: function(){
        return this.obj.classList.contains(this.val);
    }
}
