

function renderProductListUser(productArr) {
  var contentHTML = "";
  for (var i = 0; i < productArr.length; i++) {
      var product = productArr[i];
      var trString = `
      <tr>
      <td>${product.emailUser}</td>
      <td>${product.Password}</td>
     
      <td >
         
          <button onclick="deleteUser('${product.id}')" class="btn btn-danger">Delete</button>     

      </td>
      
  </tr>
      `;
      contentHTML += trString;
  }
  document.getElementById("tblDanhSachUser").innerHTML = contentHTML;
}







const getDataFormDangKi = () => { 
    var emailUser = document.getElementById("emailUser").value;
    var mkUser = document.getElementById("mkUser").value;
   
   
    return {
      emailUser: emailUser,
      Password: mkUser,
      
    };
 }

const addToCart = () => { 
  Swal.fire("You have to login first!");
 }