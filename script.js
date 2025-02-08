// document.getElementById('favcolor').addEventListener('input', getColor)
document.getElementById('favcolor1').addEventListener('input', getColor1)
document.getElementById('favcolor2').addEventListener('input', getColor2)
document.getElementById('favcolor3').addEventListener('input', getColor3)
document.getElementById('favcolor4').addEventListener('input', getColor4)
document.getElementById('favcolor5').addEventListener('input', getColor5)

document.getElementById('favcolor11').addEventListener('input',navColors1)
document.getElementById('favcolor22').addEventListener('input',navColors2)
document.getElementById('favcolor33').addEventListener('input',navColors3)
document.getElementById('favcolor44').addEventListener('input',navColors4)
document.getElementById('favcolor55').addEventListener('input',navColors5)
 

 



document.getElementById('locker1').addEventListener('click', click1)
document.getElementById('locker2').addEventListener('click', click2)
document.getElementById('locker3').addEventListener('click', click3)
document.getElementById('locker4').addEventListener('click', click4)
document.getElementById('locker5').addEventListener('click', click5)





 




//EXEMPLO DE CIMA
// function getColor(){
//     const color = document.getElementById('favcolor').value
//     document.getElementById('hexValue').textContent = color;
//     document.getElementById('rgbValue').textContent = hexToRgb(color);
//     document.getElementById('color').style.backgroundColor = `${color}` 



// }


//Variável para colocar na data



function hexToRgbInit(hex) {

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const value = [r, g, b]
    return value


}



let data1 = hexToRgbInit(document.getElementById('hexValue1').innerText)
let data2 = hexToRgbInit(document.getElementById('hexValue2').innerText)
let data3 = hexToRgbInit(document.getElementById('hexValue3').innerText)
let data4 = hexToRgbInit(document.getElementById('hexValue4').innerText)
let data5 = hexToRgbInit(document.getElementById('hexValue5').innerText)














 






// coleta de dados primeiro
function coletaDadosPrimeiro(){ 
if (document.getElementById(`lockerConfirm1`).textContent === 'Unlocked') {
     
    data1 = "N"
}

else if (document.getElementById(`lockerConfirm1`).textContent === 'Locked') { 
     
    data1 = hexToRgbInit(document.getElementById('hexValue1').innerText)
}





if (document.getElementById(`lockerConfirm2`).textContent === 'Unlocked') {
     
    data2  = "N"
    
}

else if (document.getElementById(`lockerConfirm2`).textContent === 'Locked') {
     
    data2  = hexToRgbInit(document.getElementById('hexValue2').innerText)
}






if (document.getElementById(`lockerConfirm3`).textContent === 'Unlocked') {
    data3 = 'N'
     
     
}

else if (document.getElementById(`lockerConfirm3`).textContent === 'Locked') {
     
    data3 = hexToRgbInit(document.getElementById('hexValue3').innerText)
}




if (document.getElementById(`lockerConfirm4`).textContent === 'Unlocked') {
   
    data4 = 'N'
}

else if (document.getElementById(`lockerConfirm4`).textContent === 'Locked') {
    
     
    data4 = hexToRgbInit(document.getElementById('hexValue4').innerText)
}




if (document.getElementById(`lockerConfirm5`).textContent === 'Unlocked') {
     
    data5 = 'N'
}

else if (document.getElementById(`lockerConfirm5`).textContent === 'Locked') {
     
    data5 = hexToRgbInit(document.getElementById('hexValue5').innerText)
}
}
// coleta de dados primeiro
 


coletaDadosPrimeiro()




// document.documentElement.style.setProperty('--bs-primary',document.getElementById('hexValue1').innerText);
//         document.documentElement.style.setProperty('--bs-secondary',document.getElementById('hexValue2').innerText);
//         document.documentElement.style.setProperty('--bs-success',document.getElementById('hexValue3').innerText);
//         document.documentElement.style.setProperty('--bs-danger',document.getElementById('hexValue4').innerText);
//         document.documentElement.style.setProperty('--bs-warning',document.getElementById('hexValue5').innerText);




function navColors1() {  
    const color = document.getElementById('favcolor11').value
    document.getElementById('favcolor1').value = color
      

    document.documentElement.style.setProperty('--bs-primary',document.getElementById('hexValue1').innerText);
    document.getElementById('sukuna').style.backgroundColor = hexToRgb(document.getElementById('hexValue1').textContent)

    document.getElementById('hexValue1').textContent = color;
    document.getElementById('rgbValue1').textContent = hexToRgb(color);
    document.getElementById('color').style.backgroundColor = hexToRgb(color);

    if (document.getElementById(`lockerConfirm1`).textContent === 'Unlocked') {
        data1 = "N"
    }
    
    else if (document.getElementById(`lockerConfirm1`).textContent === 'Locked') { 
        hexToRgbData(color)
    }
     
     
}


  function navColors2(){
    const color = document.getElementById('favcolor22').value
    document.getElementById('favcolor2').value = color

    document.documentElement.style.setProperty('--bs-secondary',document.getElementById('hexValue2').innerText);

    document.getElementById('hexValue2').textContent = color;
    document.getElementById('rgbValue2').textContent = hexToRgb(color);
    document.getElementById('color1').style.backgroundColor = hexToRgb(color);

    if (document.getElementById(`lockerConfirm2`).textContent === 'Unlocked') {
        data2 = "N"
    }
    
    else if (document.getElementById(`lockerConfirm2`).textContent === 'Locked') { 
        hexToRgbData1(color)
    }
  }

  function navColors3(){
    const color = document.getElementById('favcolor33').value
    document.getElementById('favcolor3').value = color


    document.documentElement.style.setProperty('--bs-success',document.getElementById('hexValue3').innerText);

    document.getElementById('hexValue3').textContent = color;
    document.getElementById('rgbValue3').textContent = hexToRgb(color);
    document.getElementById('color2').style.backgroundColor = hexToRgb(color);

    if (document.getElementById(`lockerConfirm3`).textContent === 'Unlocked') {
        data3 = "N"
    }
    
    else if (document.getElementById(`lockerConfirm3`).textContent === 'Locked') { 
        hexToRgbData2(color)
    }
  }

  function navColors4(){
    const color = document.getElementById('favcolor44').value
    document.getElementById('favcolor4').value = color

    document.documentElement.style.setProperty('--bs-danger',document.getElementById('hexValue4').innerText);

    document.getElementById('hexValue4').textContent = color;
    document.getElementById('rgbValue4').textContent = hexToRgb(color);
    document.getElementById('color3').style.backgroundColor = hexToRgb(color);

    if (document.getElementById(`lockerConfirm4`).textContent === 'Unlocked') {
        data4 = "N"
    }
    
    else if (document.getElementById(`lockerConfirm4`).textContent === 'Locked') { 
        hexToRgbData3(color)
    }
  }

  function navColors5(){
    const color = document.getElementById('favcolor55').value
    document.getElementById('favcolor5').value = color

    document.documentElement.style.setProperty('--bs-warning',document.getElementById('hexValue5').innerText);
    document.getElementById('gojo').style.backgroundColor = hexToRgb(document.getElementById('hexValue5').textContent)

    document.getElementById('hexValue5').textContent = color;
    document.getElementById('rgbValue5').textContent = hexToRgb(color);
    document.getElementById('color4').style.backgroundColor = hexToRgb(color);

    if (document.getElementById(`lockerConfirm5`).textContent === 'Unlocked') {
        data5 = "N"
    }
    
    else if (document.getElementById(`lockerConfirm5`).textContent === 'Locked') { 
        hexToRgbData4(color)
    }
  }














function getColor1() {
     
    const color = document.getElementById('favcolor1').value
    document.getElementById('favcolor11').value = color
      

    document.documentElement.style.setProperty('--bs-primary',document.getElementById('hexValue1').innerText);
    document.getElementById('sukuna').style.backgroundColor = hexToRgb(document.getElementById('hexValue1').textContent)

    document.getElementById('hexValue1').textContent = color;
    document.getElementById('rgbValue1').textContent = hexToRgb(color);
    document.getElementById('color').style.backgroundColor = hexToRgb(color);

    if (document.getElementById(`lockerConfirm1`).textContent === 'Unlocked') {
        data1 = "N"
    }
    
    else if (document.getElementById(`lockerConfirm1`).textContent === 'Locked') { 
        hexToRgbData(color)
    }
     

     




}

function getColor2() {
    const color = document.getElementById('favcolor2').value
    document.getElementById('favcolor22').value = color

    document.documentElement.style.setProperty('--bs-secondary',document.getElementById('hexValue2').innerText);

    document.getElementById('hexValue2').textContent = color;
    document.getElementById('rgbValue2').textContent = hexToRgb(color);
    document.getElementById('color1').style.backgroundColor = hexToRgb(color);

    if (document.getElementById(`lockerConfirm2`).textContent === 'Unlocked') {
        data2 = "N"
    }
    
    else if (document.getElementById(`lockerConfirm2`).textContent === 'Locked') { 
        hexToRgbData1(color)
    }
     

     
}





function getColor3() {
    const color = document.getElementById('favcolor3').value
    document.getElementById('favcolor33').value = color


    document.documentElement.style.setProperty('--bs-success',document.getElementById('hexValue3').innerText);

    document.getElementById('hexValue3').textContent = color;
    document.getElementById('rgbValue3').textContent = hexToRgb(color);
    document.getElementById('color2').style.backgroundColor = hexToRgb(color);

    if (document.getElementById(`lockerConfirm3`).textContent === 'Unlocked') {
        data3 = "N"
    }
    
    else if (document.getElementById(`lockerConfirm3`).textContent === 'Locked') { 
        hexToRgbData2(color)
    }
     

     
}




function getColor4() {
    const color = document.getElementById('favcolor4').value
    document.getElementById('favcolor44').value = color

    document.documentElement.style.setProperty('--bs-danger',document.getElementById('hexValue4').innerText);

    document.getElementById('hexValue4').textContent = color;
    document.getElementById('rgbValue4').textContent = hexToRgb(color);
    document.getElementById('color3').style.backgroundColor = hexToRgb(color);

    if (document.getElementById(`lockerConfirm4`).textContent === 'Unlocked') {
        data4 = "N"
    }
    
    else if (document.getElementById(`lockerConfirm4`).textContent === 'Locked') { 
        hexToRgbData3(color)
    }
     

    
}





function getColor5() {
    const color = document.getElementById('favcolor5').value
    document.getElementById('favcolor55').value = color

    document.documentElement.style.setProperty('--bs-warning',document.getElementById('hexValue5').innerText);
    document.getElementById('gojo').style.backgroundColor = hexToRgb(document.getElementById('hexValue5').textContent)

    document.getElementById('hexValue5').textContent = color;
    document.getElementById('rgbValue5').textContent = hexToRgb(color);
    document.getElementById('color4').style.backgroundColor = hexToRgb(color);

    if (document.getElementById(`lockerConfirm5`).textContent === 'Unlocked') {
        data5 = "N"
    }
    
    else if (document.getElementById(`lockerConfirm5`).textContent === 'Locked') { 
        hexToRgbData4(color)
    }
     

     
}














function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgb(${r}, ${g}, ${b})`;
}


const componentToHex = (c) => {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}













function hexToRgbData(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    data1 = [r, g, b]
    data.input[0] = data1

}

function hexToRgbData1(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    data2 = [r, g, b]
    data.input[1] = data2

}

function hexToRgbData2(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    data3 = [r, g, b]
    data.input[2] = data3

}

function hexToRgbData3(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    data4 = [r, g, b]
    data.input[3] = data4

}

function hexToRgbData4(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    data5 = [r, g, b]
    data.input[4] = data5

}




















function click1() {
    if (document.getElementById(`lockerConfirm1`).textContent === 'Unlocked') {

        document.getElementById(`lockerConfirm1`).innerText = 'Locked'
        document.getElementById(`lockedUnlockedImage1`).src = 'img/padlock_6269207.png'
        data.input[0] = hexToRgbInit(document.getElementById('hexValue1').innerText)
        data1 = data.input[0]
         


    }

    else if (document.getElementById(`lockerConfirm1`).textContent === 'Locked') {

        document.getElementById(`lockedUnlockedImage1`).src = 'img/unlock_3917606.png'
        document.getElementById(`lockerConfirm1`).innerText = 'Unlocked'
        data.input[0] = "N"
         

    }
}






function click2() {
    if (document.getElementById(`lockerConfirm2`).textContent === 'Unlocked') {

        document.getElementById(`lockedUnlockedImage2`).src = 'img/padlock_6269207.png'
        document.getElementById(`lockerConfirm2`).innerText = 'Locked'
        data.input[1] = hexToRgbInit(document.getElementById('hexValue2').innerText)
        data2 = data.input[1]
    }

    else if (document.getElementById(`lockerConfirm2`).textContent === 'Locked') {

        document.getElementById(`lockedUnlockedImage2`).src = 'img/unlock_3917606.png'
        document.getElementById(`lockerConfirm2`).innerText = 'Unlocked'
        data.input[1] = "N"
    }
}






function click3() {
    if (document.getElementById(`lockerConfirm3`).textContent === 'Unlocked') {

        document.getElementById(`lockedUnlockedImage3`).src = 'img/padlock_6269207.png'
        document.getElementById(`lockerConfirm3`).innerText = 'Locked'
        data.input[2] = hexToRgbInit(document.getElementById('hexValue3').innerText)
        data3 = data.input[2]
    }

    else if (document.getElementById(`lockerConfirm3`).textContent === 'Locked') {

        document.getElementById(`lockedUnlockedImage3`).src = 'img/unlock_3917606.png'
        document.getElementById(`lockerConfirm3`).innerText = 'Unlocked'
        data.input[2] = 'N'
    }
}






function click4() {
    if (document.getElementById(`lockerConfirm4`).textContent === 'Unlocked') {

        document.getElementById(`lockedUnlockedImage4`).src = 'img/padlock_6269207.png'
        document.getElementById(`lockerConfirm4`).innerText = 'Locked'
        data.input[3] = hexToRgbInit(document.getElementById('hexValue4').innerText)
        data4 = data.input[3]
    }

    else if (document.getElementById(`lockerConfirm4`).textContent === 'Locked') {

        document.getElementById(`lockedUnlockedImage4`).src = 'img/unlock_3917606.png'
        document.getElementById(`lockerConfirm4`).innerText = 'Unlocked'
        data.input[3] = 'N'
    }
}





function click5() {
    if (document.getElementById(`lockerConfirm5`).textContent === 'Unlocked') {

        document.getElementById(`lockedUnlockedImage5`).src = 'img/padlock_6269207.png'
        document.getElementById(`lockerConfirm5`).innerText = 'Locked'
        data.input[4] = hexToRgbInit(document.getElementById('hexValue5').innerText)
        data5 = data.input[4]
    }

    else if (document.getElementById(`lockerConfirm5`).textContent === 'Locked') {

        document.getElementById(`lockedUnlockedImage5`).src = 'img/unlock_3917606.png'
        document.getElementById(`lockerConfirm5`).innerText = 'Unlocked'
        data.input[4] = 'N'
    }
}




















var url = "http://colormind.io/api/";
var data = {
    model: "default",
    input: [data1, data2, data3, data4, data5]  //N = locker
}

var http = new XMLHttpRequest();

http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
        var palette = JSON.parse(http.responseText).result;


        console.log('da0',data.input[0])
        console.log('da1',data.input[1])
        console.log('da2',data.input[2])
        console.log('da3',data.input[3])
        console.log('da4',data.input[4])

        console.log('pa0',palette[0])
        console.log('pa1',palette[1])
        console.log('pa2',palette[2])
        console.log('pa3',palette[3])
        console.log('pa4',palette[4])

         




        if (data.input[0] === 'N') {
            document.getElementById('color').style.backgroundColor = `rgb(${palette[0]})`
            document.getElementById('favcolor1').value = rgbToHex(palette[0][0], palette[0][1], palette[0][2])
            document.getElementById('hexValue1').textContent = rgbToHex(palette[0][0], palette[0][1], palette[0][2])
            document.getElementById('rgbValue1').textContent = `rgb(${palette[0][0]},${palette[0][1]},${palette[0][2]})`
        }

        if (data.input[1] === 'N') {
            document.getElementById('color1').style.backgroundColor = `rgb(${palette[1]})`
            document.getElementById('favcolor2').value = rgbToHex(palette[1][0], palette[1][1], palette[1][2])
            document.getElementById('hexValue2').textContent = rgbToHex(palette[1][0], palette[1][1], palette[1][2])
            document.getElementById('rgbValue2').textContent = `rgb(${palette[1][0]},${palette[1][1]},${palette[1][2]})`
        }

        if (data.input[2] === 'N') {
            document.getElementById('color2').style.backgroundColor = `rgb(${palette[2]})`
            document.getElementById('favcolor3').value = rgbToHex(palette[2][0], palette[2][1], palette[2][2])
            document.getElementById('hexValue3').textContent = rgbToHex(palette[2][0], palette[2][1], palette[2][2])
            document.getElementById('rgbValue3').textContent = `rgb(${palette[2][0]},${palette[2][1]},${palette[2][2]})`
        }

        if (data.input[3] === 'N') {
            document.getElementById('color3').style.backgroundColor = `rgb(${palette[3]})`
            document.getElementById('favcolor4').value = rgbToHex(palette[3][0], palette[3][1], palette[3][2])
            document.getElementById('hexValue4').textContent = rgbToHex(palette[3][0], palette[3][1], palette[3][2])
            document.getElementById('rgbValue4').textContent = `rgb(${palette[3][0]},${palette[3][1]},${palette[3][2]})`
        }

        if (data.input[4] === 'N') {
            document.getElementById('color4').style.backgroundColor = `rgb(${palette[4]})`
            document.getElementById('favcolor5').value = rgbToHex(palette[4][0], palette[4][1], palette[4][2])
            document.getElementById('hexValue5').textContent = rgbToHex(palette[4][0], palette[4][1], palette[4][2])
            document.getElementById('rgbValue5').textContent = `rgb(${palette[4][0]},${palette[4][1]},${palette[4][2]})`
        }


        //muda o gojo e o sukuna
        document.getElementById('gojo').style.backgroundColor = hexToRgb(document.getElementById('hexValue5').textContent)
        document.getElementById('sukuna').style.backgroundColor = hexToRgb(document.getElementById('hexValue1').textContent)

        document.documentElement.style.setProperty('--bs-primary',document.getElementById('hexValue1').innerText);
        document.documentElement.style.setProperty('--bs-secondary',document.getElementById('hexValue2').innerText);
        document.documentElement.style.setProperty('--bs-success',document.getElementById('hexValue3').innerText);
        document.documentElement.style.setProperty('--bs-danger',document.getElementById('hexValue4').innerText);
        document.documentElement.style.setProperty('--bs-warning',document.getElementById('hexValue5').innerText);

         document.getElementById('box1').style.backgroundColor = document.getElementById('hexValue1').innerText
         document.getElementById('box2').style.backgroundColor = document.getElementById('hexValue5').innerText
         document.getElementById('body').style.backgroundColor =  document.getElementById('hexValue5').innerText
         document.getElementById('featuresTitle').style.color =  document.getElementById('hexValue1').innerText
         document.getElementById('navbar').style.backgroundColor =  document.getElementById('hexValue4').innerText
         document.getElementById('usageTips1').style.backgroundColor =  document.getElementById('hexValue1').innerText
         document.getElementById('usageTips2').style.backgroundColor =  document.getElementById('hexValue1').innerText
         document.getElementById('usageTips3').style.backgroundColor =  document.getElementById('hexValue1').innerText

         document.getElementById('favcolor11').value = document.getElementById('favcolor1').value
         document.getElementById('favcolor22').value = document.getElementById('favcolor2').value
         document.getElementById('favcolor33').value = document.getElementById('favcolor3').value
         document.getElementById('favcolor44').value = document.getElementById('favcolor4').value
         document.getElementById('favcolor55').value = document.getElementById('favcolor5').value



         
       
         

         
         



    }
}


document.getElementById('generate').addEventListener('click', function() {setTimeout(trigger, 2000);
});
document.getElementById('generate').addEventListener('click', spinner)

 


 
function trigger() {
    http.open("POST", url, true);
    http.send(JSON.stringify(data));

    //muda o botao na hora de carregar as informações
    document.getElementById('generate').className = "btn btn-light";
    document.getElementById('changeVisbilityText').className= "emptyForNow"
    document.getElementById('generate').style = " ";

     
  
    
}

 

function spinner(){
    document.getElementById('generate').className = "spinner-border";
    document.getElementById('changeVisbilityText').className= "visually-hidden"
    document.getElementById('generate').style = "background-color: transparent; color: var(--bs-secondary) ;margin-left: 1rem;margin-top: 5px";

     
      
}








//SÓ FUNCIONA DENTRO DO HTTP.ONREADYSTATECHANGE

// function showPalette(){
//     document.getElementById('paletteSchema').innerText = paletteSchema[0]
// }
//http://colormind.io/api-access/
