let form = document.querySelector("form");
    let main = document.querySelector(".main");
    form.addEventListener("submit",(evt)=>{
        name = evt.target.name.value;
        age = evt.target.age.value;
        address = evt.target.address.value;
        phone = evt.target.phone.value;
    
        let userData = JSON.parse(localStorage.getItem("userdetails"))??[];
        userData.push({
            'name':name,
            'age':age,
            'address':address,
            'phone':phone,
        });
        localStorage.setItem("userdetails",JSON.stringify(userData));
    });

    let displayData =()=>{
        let userData = JSON.parse(localStorage.getItem("userdetails"))??[];
        let finalData = "";
        userData.forEach((element,idx) => {
           
            finalData+=`
            <div class="child">
            <label for="">Name</label>
            <p>${element.name}</p>
            <label for="">Age</label>
            <p>${element.age}</p>
            <label for="">Addresss</label>
            <p>${element.address}</p>
            <label for="">Phone</label>
            <p>${element.phone}</p>
            <label for="">Action</label>
               <p><i class="fa-solid fa-trash" id="del" onclick="removeData(${idx})"></i></p>

        </div>
            `
        });
        main.innerHTML = finalData;
    }

    let removeData =(index)=>{
            let userData = JSON.parse(localStorage.getItem("userdetails"));
            userData.splice(index,1);
            localStorage.setItem("userdetails",JSON.stringify(userData))
            displayData()
        }
    displayData();