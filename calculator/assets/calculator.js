let input = document.getElementById("input")
 console.log(input)

 function display(number) {
   input.value += number; 
  }

  function result(){
    input.value = eval(input.value);
  }

  function clears() {
    input.value = "";
  }

  function del() {
    input.value = input.value.slice(0, -1);
  }