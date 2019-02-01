var inputString = "";

function updateString(value) {

    inputString += value;

    document.forms[0].input.value = inputString;

}

		var innerform = document.querySelector("#form");
    innerform.innerHTML = `
    <form id="innerform" action=""> 
    <input type="button" name="seven" class="bu" value="7" onclick="updateString('7')" />
    
    <input type="button" name="eight" class="bu" value="8" onclick="updateString('8')" />
    
    <input type="button" name="nine" class="bu" value="9" onclick="updateString('9')" />
    
    <input type="button" name="div" class="bu" value="/" onclick="updateString('/')" />
    <br />
    <br />
    
    <input type="button" name="four" class="bu" value="4" onclick="updateString('4')" />
    
    <input type="button" name="five" class="bu" value="5" onclick="updateString('5')" />
    
    <input type="button" name="six" class="bu" value="6" onclick="updateString('6')" />
    
    <input type="button" name="mult" class="bu" value="*" onclick="updateString('*')" />
    <br />
    <br />
    
    <input type="button" name="one" class="bu" value="1" onclick="updateString('1')" />
    
    <input type="button" name="two" class="bu" value="2" onclick="updateString('2')" />
    
    <input type="button" name="three" class="bu" value="3" onclick="updateString('3')" />
    
    <input type="button" name="plus" class="bu" value="+" onclick="updateString('+')" />
    <br />
    <br />
    
    <input type="button" name="openparenth" class="bu" value="(" onclick="updateString('(')" />
    
    <input type="button" name="closeparenth" class="bu" value=")" onclick="updateString(')')" />
    
    <input type="button" name="power" class="bu" value="^" onclick="updateString('^')" />
    
    <input type="button" name="modulus" class="bu" value=":-)" onclick="updateString(':-\)')" />
    <br />
    <br />
    
    <input type="button" name="zero" class="bu" value="0" onclick="updateString('0')" />
    
    <input type="button" name="dot" class="bu" value="." onclick="updateString('.')" />
    
    <input type="button" name="clear" class="bu" value="C" onclick="document.forms[0].input.value='';inputString=''" />
    
    <input type="button" name="minus" class="bu" value="-" onclick="updateString('-')" />
    <br />
    <br />
    
    <input type="button" style=" color:white;" name="calc" class="bu" value="=" onclick="document.forms[0].input.value = eval(inputString); inputString=''"
    />
    
    <input type="button" name="mem" class="bu" value="M +" onclick="document.forms[0].storedValue.value = parseInt(document.forms[0].storedValue.value) + parseInt(document.forms[0].input.value)"
    />
    
    <input type="button" name="recall" class="bu" value="MRC" onclick="updateString(document.forms[0].storedValue.value)" />
    
    <input type="button" name="memClear" class="bu" value="MC" onclick="document.forms[0].storedValue.value=0" /><br />
    
    <input type="hidden" name="storedValue" value="0" />
    
    <input id="window" style="background-color: #503fee !important;color:white !important;" type="text" name="input" /> 
    
    </form>


    `