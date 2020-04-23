function submitForm() {
     
    let name = document.getElementById('name').value;
    let uCity = document.getElementById('uc').value;
    let uState = document.getElementById('us').value;
    let cnumber = document.getElementById('cnumber').value;
    let userAddress = document.getElementById('userAddress').value;
    let checkbox = document.getElementById('tnc')
    let mobError = false;
    let nameError = false;
    let addressError = false;
    let cityError = false;
    let stateError = false;
    let checkboxError = false;
    if (checkbox.checked == true){
     checkboxError=false;
    } else {
      document.getElementById('checkErr').style.visibility = "visible"
      checkboxError = true;
    }
    if (name === '') {
      document.getElementById('nameErr').style.visibility = "visible"
      nameError = true;
    }
    if (uCity === '') {
      document.getElementById('cityErr').style.visibility = "visible"
      cityError = true;
    } if (uState === '') {
      document.getElementById('stateErr').style.visibility = "visible"
      stateError = true
    } if (cnumber === '') {
      document.getElementById('mobileErr').style.visibility = "visible"
      mobError = true
    } if (userAddress === '') {
      document.getElementById('addressErr').style.visibility = "visible"
      addressError = true
    }
    if (cnumber.length < 10) {

      document.getElementById('mobileErr').innerHTML = "Please enter a 10 digit mobile number"
      document.getElementById('mobileErr').style.visibility = "visible"
      mobError = true
    }
    if (mobError == false && nameError == false && addressError == false && cityError == false && stateError == false && checkboxError==false) {
      let obj = {
        "name": name,
        "mobileNumber": cnumber,
        "address": userAddress,
        "city": uCity,
        "state": uState
      }
      console.log(obj)
      document.getElementById("loading").style.visibility = "visible"
      fetch('https://us-central1-corona-portal.cloudfunctions.net/app/api/createUser', {
        method: 'POST',
        body: JSON.stringify(obj), // string or object
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => res.json()).then(resData => {
        console.log(resData)
        document.getElementById("loading").style.color = "green"
        document.getElementById("loading").innerHTML = "Thankyou for showing your intrest, we will get back to you soon."
        document.getElementById('name').value = '';
        document.getElementById('uc').value = '';
        document.getElementById('us').value = '';
        document.getElementById('cnumber').value = '';
        document.getElementById('userAddress').value = '';
        document.getElementById('tnc').checked=false;
        document.getElementById('nameErr').style.visibility = "hidden"
        document.getElementById('cityErr').style.visibility = "hidden"
        document.getElementById('stateErr').style.visibility = "hidden"
        document.getElementById('mobileErr').style.visibility = "hidden"
        document.getElementById('addressErr').style.visibility = "hidden"
        document.getElementById('checkErr').style.visibility = "hidden"
      }).catch(error => {
        document.getElementById("loading").style.color = "red"
        document.getElementById("loading").innerHTML = "oops, something went wrong!"
        document.getElementById('name').value;
        console.log(error)
      })

    }

  }