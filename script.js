// Data
//querySelectorAll crea un NodeList con todos los elementos que contengand el selector mencionado

const buttonNumber = document.querySelectorAll('[data-number]') //querySelectorAll trae todos los elementos que contienen "data-number"
const buttonOperation = document.querySelectorAll('[data-operador]')
const buttonSame = document.querySelector('[data-same]')
const buttonDeleteAll = document.querySelector('[data-delete-all]')
const buttonDelete = document.querySelector('[data-delete]')
const textValueHigher = document.querySelector('[data-values-higher]')
const textValueLower = document.querySelector('[data-values-lower]')



class Calculator {
    constructor(textValueLower,textValueHigher){
        this.textValueLower = textValueLower
        this.textValueHigher = textValueHigher
        this.valuesLower = ''
        this.valuesHigher = ''
        this.operador = undefined
    }

    addNumber(number){
        if(number === '.' && this.valorInferior.includes('.')) return
        this.valuesLower = this.valuesLower + number
        
    }
    printDisplay(){
        this.textValueLower.innerText = this.valuesLower
        this.textValueHigher.innerText = this.valuesHigher
    }
    delete(){
        this.valuesLower = this.valuesLower.slice(0,-1)
    }
    elegirOperacion(operador) {
        if(this.valuesLower == '') return
        if(this.valuesHigher != '') {
            this.realizarCalculo()
        }
        this.operador = operador
        this.valuesHigher = this.valuesLower
        this.valuesLower = ''
    }
    
realizarCalculo(){
    let resultado
    let conversionValuesHigher = parseFloat(this.valuesHigher)
    let conversionValuesLower = parseFloat(this.valuesLower)
    if(isNaN(conversionValuesHigher) || isNaN(conversionValuesLower)) return
    switch(this.operador){
        case '+': resultado = conversionValuesHigher + conversionValuesLower
        break
        case '-': resultado = conversionValuesHigher - conversionValuesLower
        break
        case '*': resultado = conversionValuesHigher * conversionValuesLower
        break
        case '/': resultado = conversionValuesHigher / conversionValuesLower
        break
        default: return
    }

    this.valuesLower = resultado
    this.operador = undefined
    this.valuesHigher = ''
}
cleanScreen(){
    this.valuesLower = ''
    this.valuesHigher = ''
    this.operador = undefined
}

}

const calculator = new Calculator (textValueLower,textValueHigher)



//función para impirmir cada button al hacer click
buttonNumber.forEach(button =>{
    button.addEventListener('click', ()=>{
        calculator.addNumber(button.innerText)
        calculator.printDisplay()
    })
})

buttonDelete.addEventListener('click', () =>{
    calculator.delete()
    calculator.printDisplay()
})


buttonOperation.forEach(button =>{
    button.addEventListener('click', ()=>{
        calculator.elegirOperacion(button.innerText)
        calculator.printDisplay()
    })
})

buttonSame.addEventListener('click', () =>{
    calculator.realizarCalculo()
    calculator.printDisplay()
})

buttonDeleteAll.addEventListener('click', () =>{
    calculator.cleanScreen()
    calculator.printDisplay()
})
