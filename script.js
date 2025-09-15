let inputname = document.getElementById("inputname")
let inputurl = document.getElementById("inputurl")
let tablecontent = document.getElementById("tablecontent")
let arr = JSON.parse(localStorage.getItem("link")) || []
display()
  let regex = /^[a-z]{3}/
let regex2 = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?$/;

function savedata() {

  let link = {
    inputName: inputname.value,
    inputUrl: inputurl.value
  }


  if (regex.test(inputname.value) == false || regex2.test(inputurl.value) == false) {

    ALERT()
  } else {

    arr.push(link)
    localStorage.setItem("link", JSON.stringify(arr))
    clear()

    display()
  }
}

function clear() {
  inputname.value = null
  inputurl.value = null
}

function display() {
  let cartona = ""
  for (let i = 0; i < arr.length; i++) {
    cartona += `<tr>
                <th  class="px-5 py-3"scope="row">${i + 1}</th>
                <td>${arr[i].inputName}</td>
             <td>
  <a class="btn btn-success text-white px-3 py-2 text-decoration-none" 
     href="${arr[i].inputUrl}" target="_blank">
    <i class="fa-solid fa-eye pe-2"></i> Visit
  </a>
</td>
<td>
  <button id="Delete" onclick="deleteitem(${i})" class="border-0 px-3 py-2 bg-danger text-white">
    <i class="fa-solid fa-trash-can"></i> Delete
  </button>
</td>
                    </tr>`
  }
  tablecontent.innerHTML = cartona
}

function deleteitem(index) {
  arr.splice(index, 1)
  localStorage.setItem("link", JSON.stringify(arr))
  display()
}

function ALERT() {
  Swal.fire({
    title: `<div class="d-flex gap-2">
    <div  class="one "></div>
    <div class=" one two"></div>
    <div class=" one three"></div>
</div>`,

    html: `
    <h2  class="fs-5 text-start">Site Name or Url is not valid, Please follow the rules below :</h2>
    <p class="fs-5 text-start text-black mt-4 fs-5"> <i class="fa-regular fa-circle-right p-2"></i> Site name must contain at least 3 characters</p>
    <p class="fs-5 text-start text-black" > <i class="fa-regular fa-circle-right  p-2"></i> Site URL must be a valid one</p>
  `,
    showCloseButton: true,

  });
}


function Validname(){
  if(regex.test(inputname.value) == false){
    inputname.classList.add("is-invalid")
    inputname.classList.remove("valed")
  }
else if(regex.test(inputname.value) == true){
    inputname.classList.remove("is-invalid")
     inputname.classList.add("valed")

}
}
function Validurl(){
  if(regex2.test(inputurl.value) == false){
    inputurl.classList.add("is-invalid")
     inputurl.classList.remove("valed")
  }
else if(regex2.test(inputurl.value) == true){
    inputurl.classList.remove("is-invalid")
     inputurl.classList.add("valed")

}
}