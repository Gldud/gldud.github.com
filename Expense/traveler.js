function DrawChart(){function a(){if(0==budgetController.getExpense().totalExpense)return!1;var a=budgetController.getExpense().eatExpense,b=budgetController.getExpense().takeExpense,c=budgetController.getExpense().seeExpense,d=budgetController.getExpense().shopExpense,e=budgetController.getExpense().sleepExpense,f=budgetController.getExpense().etcExpense,g=google.visualization.arrayToDataTable([["Task","Hours per Day"],["Eat",a],["Take",b],["See",c],["Shop",d],["Sleep",e],["Etc",f]]),h={title:"STATISTICS",pieHole:.4,width:500,height:300,colors:["#ffcc33","#a840f4","#f7484e","#000066","#008080","#ff00ff"]};new google.visualization.PieChart(document.getElementById("donutchart")).draw(g,h)}google.charts.load("current",{packages:["corechart"]}),google.charts.setOnLoadCallback(a)}function DrawChart2(){function a(){if(0==budgetController.getExpense().totalExpense)return!1;var a=budgetController.getExpense().totalCardExpense,b=budgetController.getExpense().totalCashExpense,c=google.visualization.arrayToDataTable([["Task","Hours per Day"],["Card",a],["Cash",b]]),d={title:"Card or Cash",width:500,height:300};new google.visualization.PieChart(document.getElementById("piechart")).draw(c,d)}google.charts.load("current",{packages:["corechart"]}),google.charts.setOnLoadCallback(a)}function addChar(a){var b=document.getElementById("display").value;b+=a,document.getElementById("display").value=b}function addOperand(a){left=document.getElementById("display").value,operand=a,document.getElementById("display").value=""}function Calculate(){right=document.getElementById("display").value;var result=0;"+"==operand?result=eval(left)+eval(right):"-"==operand?result=eval(left)-eval(right):"*"==operand?result=eval(left)*eval(right):"/"==operand&&(result=eval(left)/eval(right)),document.getElementById("display").value=result}function Clear(){left="",right="",operand="",document.getElementById("display").value=""}function BackSpace(){var a=document.getElementById("display").value;a.length>0&&(a=a.substring(0,a.length-1)),document.getElementById("display").value=a}function DotProcess(){-1==document.getElementById("display").value.indexOf(".")&&addChar(".")}function changeSign(){var a=document.getElementById("display").value;-1==a.indexOf("-")?document.getElementById("display").value="-"+a:a=a.substring(1,a.length)}var left,right,operand,selectIdx=0,selectClass=".eat",selectTotalClass=".eatTotal",displayExpenseTotalClass=".displayEatTotal",budgetController=function(){function d(a){var b;return"0"==a?b=c.eat:"1"==a?b=c.take:"2"==a?b=c.see:"3"==a?b=c.shop:"4"==a?b=c.sleep:"5"==a&&(b=c.etc),b}var a=function(a,b,c){this.id=a,this.description=b,this.value=c},b=function(a,b,c){this.id=a,this.description=b,this.value=c},c={take:{allItems:{card:[],cash:[]},totals:{card:0,cash:0,totalExpense:0}},eat:{allItems:{card:[],cash:[]},totals:{card:0,cash:0,totalExpense:0}},see:{allItems:{card:[],cash:[]},totals:{card:0,cash:0,totalExpense:0}},shop:{allItems:{card:[],cash:[]},totals:{card:0,cash:0,totalExpense:0}},sleep:{allItems:{card:[],cash:[]},totals:{card:0,cash:0,totalExpense:0}},etc:{allItems:{card:[],cash:[]},totals:{card:0,cash:0,totalExpense:0}},travelExpenses:0},e=function(a){var b=0,c=d(selectIdx);c.allItems[a].forEach(function(a){b+=a.value}),c.totals[a]=b};return{addItem:function(c,e,f){var g,h,i=d(selectIdx);return h=i.allItems[c].length>0?i.allItems[c][i.allItems[c].length-1].id+1:0,"card"===c?g=new a(h,e,f):"cash"===c&&(g=new b(h,e,f)),i.allItems[c].push(g),g},deleteItem:function(a,b){var e,f,c=d(selectIdx);e=c.allItems[a].map(function(a){return a.id}),-1!==(f=e.indexOf(b))&&c.allItems[a].splice(f,1)},calculateBudget:function(){var a=d(selectIdx);e("card"),e("cash"),a.totals.totalExpense=a.totals.card+a.totals.cash,c.travelExpenses=c.etc.totals.totalExpense+c.take.totals.totalExpense+c.see.totals.totalExpense+c.shop.totals.totalExpense+c.eat.totals.totalExpense+c.sleep.totals.totalExpense},getExpense:function(){var a=d(selectIdx);return{totalExpense:a.totals.totalExpense,totalCard:a.totals.card,totalCash:a.totals.cash,travelExpense:c.travelExpenses,eatExpense:c.eat.totals.totalExpense,takeExpense:c.take.totals.totalExpense,seeExpense:c.see.totals.totalExpense,shopExpense:c.shop.totals.totalExpense,sleepExpense:c.sleep.totals.totalExpense,etcExpense:c.etc.totals.totalExpense,totalCardExpense:c.eat.totals.card+c.take.totals.card+c.see.totals.card+c.shop.totals.card+c.sleep.totals.card+c.etc.totals.card,totalCashExpense:c.eat.totals.cash+c.take.totals.cash+c.see.totals.cash+c.shop.totals.cash+c.sleep.totals.cash+c.etc.totals.cash}},testing:function(){console.log(c)}}}(),UIController=function(){var a={inputType:".add__type",inputDescription:".add__description",inputValue:"#display",inputBtn:".add__btn",container:".container",travelExpenses:".travel__expenses--value"};return{getInput:function(){return{type:document.querySelector(a.inputType).value,description:document.querySelector(a.inputDescription).value,value:parseFloat(document.querySelector(a.inputValue).value)}},addListItems:function(a,b){var c,d;"card"===b?c='<div class="item clearfix" id="card-%id%"><img src="image/credit-card.png"><div class="item_description down">%description%</div><div class="right clearfix down"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete-btn"><i class="ion-ios-trash-outline"></i></button></div></div></div>':"cash"===b&&(c='<div class="item clearfix" id="cash-%id%"><img src="image/piggy-bank.png"><div class="item_description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete-btn"><i class="ion-ios-trash-outline"></i></button></div></div></div>'),d=c.replace("%id%",a.id),d=d.replace("%description%",a.description),d=d.replace("%value%",a.value),document.querySelector(selectClass).insertAdjacentHTML("beforeend",d)},deleteListItem:function(a,b){var c=a.className.split(" ")[1],d=document.getElementsByClassName(c)[0],e=d.querySelector("#"+b);e.parentNode.removeChild(e)},clearFields:function(){var b,c;b=document.querySelectorAll(a.inputDescription+","+a.inputValue),c=Array.prototype.slice.call(b),c.forEach(function(a,b,c){a.value=""}),document.activeElement.blur()},displayBudget:function(b){document.querySelector(selectTotalClass).children[1].children[0].children[1].textContent=b.totalExpense,document.querySelector(selectTotalClass).children[0].children[0].children[1].children[1].textContent=b.totalCard,document.querySelector(selectTotalClass).children[0].children[1].children[1].children[1].textContent=b.totalCash,document.querySelector(a.travelExpenses).textContent=b.travelExpense,document.querySelector(displayExpenseTotalClass).textContent=b.totalExpense,document.querySelector(".card").textContent=b.totalCardExpense,document.querySelector(".cash").textContent=b.totalCashExpense},getDOMstring:function(){return a}}}(),controller=function(a,b){var c=function(){var a=b.getDOMstring();document.querySelector(a.inputBtn).addEventListener("click",e),document.addEventListener("keypress",function(a){13===a.keyCode&&(console.log("ENTER was pressed"),e())}),document.querySelector(a.container).addEventListener("click",f)},d=function(){a.calculateBudget();var c=a.getExpense();b.displayBudget(c),DrawChart(),DrawChart2()},e=function(){var c,e;c=b.getInput(),""!==c.description&&!isNaN(c.value)&&c.value>0&&(e=a.addItem(c.type,c.description,c.value),b.addListItems(e,c.type),b.clearFields(),d())},f=function(c){var e,f,g,h,i;i=c.target.parentNode.parentNode.parentNode.parentNode.parentNode,(e=c.target.parentNode.parentNode.parentNode.parentNode.id)&&(f=e.split("-"),g=f[0],h=parseInt(f[1]),a.deleteItem(g,h),b.deleteListItem(i,e),d())};return{init:function(){var e,f;c(),e=a.addItem("card","Lime juice",2e3),f=a.addItem("cash","hamburger",3500),b.addListItems(e,"card"),b.addListItems(f,"cash"),d()}}}(budgetController,UIController);controller.init();