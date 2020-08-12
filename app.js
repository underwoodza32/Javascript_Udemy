
// budget Controller
var budgetController = (function() {

        var x = 23;

        var add = function(a) {
          return x + a;
        }
        return {
          publicTest: function (b) {
            return add(b);
          }
        }
})();


// UI Controller
var UIController = (function(){

        var DOMStrings = {
          inputType: '.add__type',
          inputDescription: '.add__description',
          inputValue: '.add__value',
          inputBtn: '.add__btn'
        };

        return {
          getInput: function(){
            return{
              type: document.querySelector(DOMStrings.inputType).value,
              description: document.querySelector(DOMStrings.inputDescription).value,
              value: document.querySelector(DOMStrings.inputValue).value
            };
          },

          getDOMStrings: function(){
            return DOMStrings;
          }
        };


})();


// Global APP Controller
var controller = (function(budgetCtrl, UICtrl){
          var DOM = UICtrl.getDOMStrings();
          var ctrlAddItem = function(){
            // 1. get input data

            var input = UICtrl.getInput();
            console.log(input);
            // 2. add the item to the budget Controller
            // 3. add the item to UI
            // 4. calculate the budget
            // 5. display the budget on UI

          }

          document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);

          document.addEventListener('keypress', function(event){
                if (event.keycode == 13 || event.which == 13) {
                     ctrlAddItem();
                }


          });

})(budgetController, UIController);
