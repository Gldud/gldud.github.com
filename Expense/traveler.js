 var left;
 var right;
 var operand;
 var selectIdx = 0;
 var selectClass=".eat";
 var selectTotalClass = ".eatTotal";
 var displayExpenseTotalClass='.displayEatTotal';
 var budgetController = (function(){
    var ExpenseCard = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }
     
    var ExpenseCash = function(id, description, value){
        this.id = id;
        this.description = description;
        this.value = value;
    }
    
    
    var data = {
       take:{
            allItems:{
            card:[],
            cash:[]
             },
            totals:{
            card:0,
            cash:0,
            totalExpense:0
            }
         },
        eat:{
            allItems:{
            card:[],
            cash:[]
             },
            totals:{
            card:0,
            cash:0,
            totalExpense:0
            }
        },
        see:{
            allItems:{
            card:[],
            cash:[]
             },
            totals:{
            card:0,
            cash:0,
            totalExpense:0
            }
        },
        shop:{
            allItems:{
            card:[],
            cash:[]
             },
            totals:{
            card:0,
            cash:0,
            totalExpense:0
            }
        },
        sleep:{
            allItems:{
            card:[],
            cash:[]
             },
            totals:{
            card:0,
            cash:0,
            totalExpense:0
            }
        },
        etc:{
            allItems:{
            card:[],
            cash:[]
             },
            totals:{
            card:0,
            cash:0,
            totalExpense:0
            } 
        },
        travelExpenses:0
 
    };
    
   
   
 function GetClass(selectIdx)
 {
    var temp;
    if( selectIdx=='0')
        temp = data.eat;
    else if( selectIdx=='1')
        temp = data.take;
    else if( selectIdx=='2')
        temp = data.see;
    else if( selectIdx=='3')
        temp = data.shop;
    else if( selectIdx=='4')
        temp = data.sleep;
    else if(selectIdx=='5')
        temp = data.etc;
    return temp;
            
 }
 
 
 
    var calculateTotal = function(type){
         var sum = 0;
         var temp = GetClass(selectIdx);
            
            temp.allItems[type].forEach(function(cur){
                sum += cur.value;
            });
            temp.totals[type] = sum;
    };
    
    return{
        addItem:function(type,des,val){
            var newItem, ID
            //create new ID
            
            var temp=GetClass(selectIdx);
            
            if(temp.allItems[type].length>0){
            ID = temp.allItems[type][temp.allItems[type].length-1].id+1;    
            }else{
                ID = 0;
            }
            
            //ID = last ID +1
            //Create new item 
            if(type === 'card'){
                newItem = new ExpenseCard(ID,des,val);
            }else if(type === 'cash'){
                newItem = new ExpenseCash(ID,des,val);
            }
            
            
            //Push it into data structure
            temp.allItems[type].push(newItem);
            //Return the new element
            return newItem;
        },
        deleteItem:function(type,id){
            var temp=GetClass(selectIdx);
            var ids,index;
            //위에 있는 id 현재 들어온 id
            ids = temp.allItems[type].map(function(current){
                return current.id;//현재 id들을 배열로 만들어줌
            })
            
            index = ids.indexOf(id); //들어온 id의 위치
            if(index !== -1){
               temp.allItems[type].splice(index,1); 
            }
        },
        
        calculateBudget:function(){
         var temp=GetClass(selectIdx);
           calculateTotal('card');
           calculateTotal('cash');
           temp.totals.totalExpense = temp.totals.card+temp.totals.cash;
           data.travelExpenses = data.etc.totals.totalExpense+ data.take.totals.totalExpense
           + data.see.totals.totalExpense+ data.shop.totals.totalExpense+ data.eat.totals.totalExpense
           + data.sleep.totals.totalExpense
        },
        getExpense:function(){
             var temp=GetClass(selectIdx);
          return{
              totalExpense:temp.totals.totalExpense,
              totalCard:temp.totals.card,
              totalCash:temp.totals.cash,
              travelExpense:data.travelExpenses,
              eatExpense:data.eat.totals.totalExpense,
              takeExpense:data.take.totals.totalExpense,
              seeExpense:data.see.totals.totalExpense,
              shopExpense:data.shop.totals.totalExpense,
              sleepExpense:data.sleep.totals.totalExpense,
              etcExpense:data.etc.totals.totalExpense,
              totalCardExpense:data.eat.totals.card+data.take.totals.card+data.see.totals.card
              +data.shop.totals.card+data.sleep.totals.card+data.etc.totals.card,
              totalCashExpense:data.eat.totals.cash+data.take.totals.cash+data.see.totals.cash+
              data.shop.totals.cash+data.sleep.totals.cash+data.etc.totals.cash
          }
         },
          
       
        testing:function(){
            console.log(data);
            
        }
    };
})();


var UIController = (function(){
    var DOMstrings = {
      inputType:'.add__type',
      inputDescription:'.add__description',
      inputValue:'#display',
      inputBtn:'.add__btn',
      container:'.container',
      travelExpenses:'.travel__expenses--value'
    };
    
    return{
        getInput:function(){
            return{
                type:document.querySelector(DOMstrings.inputType).value, //Will be either card or cash
                description:document.querySelector(DOMstrings.inputDescription).value,
                value:parseFloat(document.querySelector(DOMstrings.inputValue).value)   
            };
        },
        addListItems:function(obj,type){
            var html,newHtml,element;
          ///Create HTML String
         
          if(type === 'card'){
               html = '<div class="item clearfix" id="card-%id%"><img src="image/credit-card.png"><div class="item_description down">%description%</div><div class="right clearfix down"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-trash-outline"></i></button></div></div></div>'
          }else if(type ==='cash'){
               html = '<div class="item clearfix" id="cash-%id%"><img src="image/piggy-bank.png"><div class="item_description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-trash-outline"></i></button></div></div></div>'    
          }
           newHtml = html.replace('%id%',obj.id);
           newHtml = newHtml.replace('%description%',obj.description);
           newHtml = newHtml.replace('%value%',obj.value);
           
          document.querySelector(selectClass).insertAdjacentHTML('beforeend',newHtml);
        },
        
        deleteListItem:function(itemParent,seletorID){
            var elParentName = itemParent.className.split(" ")[1];  
            var elParent =  document.getElementsByClassName(elParentName)[0];
            var el = elParent.querySelector('#'+seletorID);
            el.parentNode.removeChild(el);
        },
        
        clearFields:function(){
            var fields,fieldsArr;
          fields = document.querySelectorAll(DOMstrings.inputDescription + ',' +DOMstrings.inputValue);
          //fields.slice() 안먹음
          fieldsArr = Array.prototype.slice.call(fields);
          fieldsArr.forEach(function(current,index,array){
              current.value = "";
          });
          document.activeElement.blur();
        },
        displayBudget:function(obj){
            document.querySelector(selectTotalClass).children[1].children[0].children[1].textContent = obj.totalExpense;
            document.querySelector(selectTotalClass).children[0].children[0].children[1].children[1].textContent = obj.totalCard;
            document.querySelector(selectTotalClass).children[0].children[1].children[1].children[1].textContent = obj.totalCash;
            document.querySelector(DOMstrings.travelExpenses).textContent=obj.travelExpense;
            document.querySelector(displayExpenseTotalClass).textContent=obj.totalExpense;
            document.querySelector(".card").textContent = obj.totalCardExpense;
            document.querySelector(".cash").textContent=obj.totalCashExpense;
        },
        
        getDOMstring:function(){
            return DOMstrings;
        }
    }
})();

//일을 하는 부분 
var controller = (function(budgetCtrl, UICtrl){
    var setupEventListeners = function(){
        var DOM =UICtrl.getDOMstring();
        document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);
        document.addEventListener('keypress',function(event){
            if(event.keyCode === 13){
                console.log('ENTER was pressed');
                ctrlAddItem();
            }
        });
        document.querySelector(DOM.container).addEventListener('click',ctrlDeleteItem);
    };
    
    var updateBudget = function(){
            budgetCtrl.calculateBudget();
            var expense = budgetCtrl.getExpense();
            UICtrl.displayBudget(expense);
            //차트 다시 그리기 
            DrawChart();
            DrawChart2();
    };
    
    var ctrlAddItem = function(){
         var input,newItem;
        // 1. Get the field input data
           input = UICtrl.getInput();                                                           
         if(input.description !=="" && !isNaN(input.value) && input.value>0){
              newItem = budgetCtrl.addItem(input.type,input.description,input.value);
              UICtrl.addListItems(newItem,input.type);
              UICtrl.clearFields();
              updateBudget();
            
         }
        
    };
    
    var ctrlDeleteItem = function(event){
        var itemID,splitID,type,ID,item;
        item = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        if(itemID){
            splitID = itemID.split('-');
            type = splitID[0];
            ID = parseInt(splitID[1]); 
            budgetCtrl.deleteItem(type,ID);
            UICtrl.deleteListItem(item,itemID);
             updateBudget();
        }
    };
    
     
    return{
        init:function(){
            var alreadyItem,alreadyItem2;
            setupEventListeners();
            alreadyItem = budgetCtrl.addItem('card','Lime juice',2000);
            alreadyItem2 = budgetCtrl.addItem('cash','hamburger',3500)
            UICtrl.addListItems(alreadyItem,'card');
            UICtrl.addListItems(alreadyItem2,'cash');
            updateBudget();
    
        },
       
        
    }
    
})(budgetController,UIController);
controller.init();        

function DrawChart()
   {
        google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(drawChart);
       
     
       function drawChart() {
          //var eat=budgetController.getExpense().eatExpense;
          //alert(eat);
          
          if(budgetController.getExpense().totalExpense==0 )
          {
              return false;
          }
          
          var eat=budgetController.getExpense().eatExpense;
          var take=budgetController.getExpense().takeExpense;
          var see= budgetController.getExpense().seeExpense;
          var shop = budgetController.getExpense().shopExpense;
          var sleep=budgetController.getExpense().sleepExpense;
          var etc =budgetController.getExpense().etcExpense;
          
       
          var data2 = google.visualization.arrayToDataTable([
            ['Task', 'Hours per Day'],
            ['Eat', eat],
            ['Take',take],
            ['See', see],
            ['Shop',shop],
            ['Sleep',sleep],
            ['Etc',etc]
          ]);
  
          var options = {
            title: 'STATISTICS',
            pieHole: 0.4,
            width:500,
            height:300,
            colors:['#ffcc33','#a840f4','#f7484e','#000066','#008080','#ff00ff']
          };
          
  
          var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
         
          chart.draw(data2, options);
        }
    }
   
   function DrawChart2()
   {
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        if(budgetController.getExpense().totalExpense==0 )
          {
              return false;
          }
          
        var card = budgetController.getExpense().totalCardExpense;
        var cash = budgetController.getExpense().totalCashExpense;
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Card',     card],
          ['Cash',     cash],
          
        ]);

        var options = {
          title: 'Card or Cash',
          width:500,
          height:300,
          
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
        
      }
   }
function addChar(item){
     var ori = document.getElementById("display").value;
     ori = ori+item;
     document.getElementById("display").value = ori;
 }       
function addOperand(oper){
    left = document.getElementById("display").value;
    operand = oper;
    document.getElementById("display").value="";
}
function Calculate(){
    right = document.getElementById("display").value;
    var result = 0;
    if(operand == "+")
    result = eval(left)+eval(right);
    else if(operand == "-")
    result = eval(left)-eval(right);
    else if(operand == "*")
    result = eval(left)*eval(right);
    else if( operand =="/")
    result = eval(left)/eval(right);
    document.getElementById("display").value = result;
}    
 function Clear()
   {
	   left = "";
	   right="";
	   operand ="";
	   document.getElementById("display").value="";
   }   
function BackSpace()
   {
		var temp = document.getElementById("display").value;
		if( temp.length>0)
			temp = temp.substring(0, temp.length-1);
		document.getElementById("display").value=temp;
   }        
function DotProcess()
	{
		var temp = document.getElementById("display").value;
		var pos = temp.indexOf('.'); 
		if( pos == -1) 
			addChar('.');
	}         
     
function changeSign()
	{
		var temp = document.getElementById("display").value;
		var pos = temp.indexOf('-'); 
		if( pos == -1) 
			document.getElementById("display").value = "-"+temp;
		else  
		{
			temp = temp.substring(1, temp.length);
		}

	}
 
         
       
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
         
              




