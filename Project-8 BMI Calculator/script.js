const forms = document.querySelector('form')

// This Use Case will give you empty value 
// parseInt(document.querySelector('#height').value)

forms.addEventListener('submit', function(e) {
    e.preventDefault()

    const hei = parseInt(document.querySelector('#height').value)
    const wei = parseInt(document.querySelector('#weight').value)
    const Res = document.querySelector('.result')
    const Res2 = document.querySelector(".result2")

    if(hei === '' || hei < 0 || isNaN(hei)){
        Res.innerHTML = `Please Give a Valid Height ${hei}`
        Res.style.color = 'red'
    } else if(wei === '' || wei < 0 || isNaN(wei)){
        Res.innerHTML = `Please Give a Valid Weight ${wei}`
        Res.style.color = 'red'
    } 

    else {
        const bmi = (wei / ((hei * hei) / 10000)).toFixed(2)

        Res.innerHTML = `<span>${bmi}</span>`
        Res.style.color = 'black'
        Res.style.border =  '2px solid blue' 
        Res.style.backgroundColor =  'yellow' 
        Res.style.textAlign =  'center' 
         if (bmi < 18.6) {
            Res2.innerHTML = 'Under-Weight'
        }
         else if (bmi >= 18.6 ) {
            Res2.innerHTML = 'Normal-Weight'
        
        } else if (bmi <= 24.9) {
            Res2.innerHTML = 'Under-Weight'
    
        } else if (bmi >= 24.9) {
            Res2.innerHTML = 'Over-Weight'
        }   
    }
})
