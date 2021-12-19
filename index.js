//function untuk pemanggilan data / onclick

function submitForm(){
    // alert ("Belum ada data")
    let name = document.getElementById("input-name").value
    let email = document.getElementById("input-email").value
    let phone =document.getElementById("phone-number").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    //mengecek kondisi / perbandingan

    if(name == ''){
        alert("Nama Wajib di isi")
    }
    if(email == ''){
        alert("email Wajib di isi")
    }
    if(phone == ''){
        alert("phone Wajib di isi")
    }
    if(subject == ''){
        alert("subject Wajib di isi")
    }
    if(message == ''){
        alert("alamat Wajib di isi")
    }

    console.log (`name: ${name}`)
    console.log (`email: ${email}`)
    console.log (`phone: ${phone}`)
    console.log (`subject: ${subject}`)
    console.log (`message: ${message}`)

    //penambahan email ketika di submit

    let emailReceiver = 'asyibitriwibowo1996.atb@gmail.com'

    let a = document.createElement('a')
    a.href =`mailto:${emailReceiver}?subject=${subject}&body=hallo my name ${name}, ${message}`
    a.click()
}
