const billamount = document.querySelector('#bill')
const tipvalue = document.querySelectorAll('.tipvalue')
const custom_tip = document.querySelector('#c_tip')
const no_of_people = document.querySelector('#no_of_people')
const tip_total = document.querySelector('#tip_total')
const bill_total = document.querySelector('#bill_total')
const reset = document.querySelector('#reset')
let tip_perc = ''
tipvalue.forEach((btn) => {
    btn.addEventListener('click', () => {
        tip_perc = parseInt(btn.innerText.split('%')[0])
    })

})
no_of_people.addEventListener('change', () => {
    if (tip_perc !== '' && billamount.value !== '') {
        let tipamount = (parseInt(billamount.value) * tip_perc / 100) / parseInt(no_of_people.value)
        tip_total.innerHTML = '$' + tipamount
        bill_total.innerHTML = `$ ${parseInt(billamount.value) + tipamount} `
    } else if (parseInt(custom_tip.value) > 0 && billamount.value !== '') {
        let tipamount = (parseInt(billamount.value) * parseInt(custom_tip.value) / 100) / parseInt(no_of_people.value)
        tip_total.innerHTML = '$' + tipamount
        bill_total.innerHTML = `$ ${parseInt(billamount.value) + tipamount} `
    }

})


reset.addEventListener('click', () => {
    tip_perc = ''
    billamount.value = ''
    no_of_people.value = ''
    tip_total.innerHTML = '$ 0.00'
    bill_total.innerHTML = '$ 0.00'
    custom_tip.value = ''
})
