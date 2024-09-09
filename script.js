// script.js

// Function to execute when the "Shop Now" button is clicked
function toTheRight() {
    alert("Shop Now button clicked! Function executed.");
}

// Add event listener for the "Shop Now" button
document.addEventListener('DOMContentLoaded', function() {
    const shopNowButton = document.querySelector('.main-btn');
    if (shopNowButton) {
        shopNowButton.addEventListener('click', toTheRight);
    }
});


  // Navigation Click Listener
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
      link.addEventListener("click", (event) => {
          console.log(`Navigating to: ${event.target.textContent}`);
      });
  });

  // Product Like Listener
  const heartIcons = document.querySelectorAll(".heart-icon i");
  heartIcons.forEach(icon => {
      icon.addEventListener("click", () => {
          icon.classList.toggle("liked");
      });
  });

  // Scroll to Section
  const downArrow = document.querySelector(".down-arrow a");
  downArrow.addEventListener("click", (event) => {
      event.preventDefault();
      document.getElementById("trending").scrollIntoView({ behavior: "smooth" });
  });

  // Dynamic Welcome Message
  const welcomeMessage = document.querySelector(".animated-element h2");
  const now = new Date();
  const hours = now.getHours();
  let greeting;
  if (hours < 12) {
      greeting = "Good Morning!";
  } else if (hours < 18) {
      greeting = "Good Afternoon!";
  } else {
      greeting = "Good Evening!";
  }
  welcomeMessage.textContent = greeting;

  // Form Validation
  const subscriptionForm = document.querySelector(".contact .five");
  const emailInput = subscriptionForm.querySelector("input[type='email']");
  subscriptionForm.addEventListener("submit", (event) => {
      if (!validateEmail(emailInput.value)) {
          event.preventDefault();
          alert("Please enter a valid email address.");
      }
  });


  // Image Hover Effect
  const productRows = document.querySelectorAll(".products .row");
  productRows.forEach(row => {
      row.addEventListener("mouseover", () => {
          row.querySelector(".product-text").style.display = "block";
      });
      row.addEventListener("mouseout", () => {
          row.querySelector(".product-text").style.display = "none";
      });
  });

  // Add to Cart Animation
  const addToCartButtons = document.querySelectorAll(".main-btn");
  addToCartButtons.forEach(button => {
      button.addEventListener("click", (event) => {
          event.preventDefault();
          button.textContent = "Added to Cart";
          button.classList.add("added");
          setTimeout(() => {
              button.textContent = "Shop Now";
              button.classList.remove("added");
          }, 2000);
      });
  });

  // Back to Top Button
  const backToTopButton = document.createElement("button");
  backToTopButton.textContent = "Top";
  backToTopButton.classList.add("back-to-top");
  document.body.appendChild(backToTopButton);
  
  backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
          backToTopButton.style.display = "block";
      } else {
          backToTopButton.style.display = "none";
      }
  });
  document.getElementById('shop-now-btn').addEventListener('click', function() {
    window.location.href = 'shop.html';
});


var app=new function(){
    this.el=document.getElementById('tasks');
    this.tasks=[]
    this.fetchall=function(){
      var data='';
      console.log(tasks);
      if(this.tasks.length>0){
        for(i=0;i<this.tasks.length;i++){
            data+='<tr>';
            data+='<td>'+(i+1)+' . '+this.tasks[i]+"</td>";
            data+='<td><button onclick="app.edit('+i+')" class="btn btn-warning">edit</button></td>';
            data+='<td><button onclick="app.delete('+i+')" class="btn btn-danger">delete</button></td>';
            data+='</tr>';
        }
      }
      this.count(this.tasks.length);
      return this.el.innerHTML=data
    };
    this.add=function(){
     el=document.getElementById('add-To-Do');
     var task=el.value;
     if(task){
        this.tasks.push(task.trim())
        this.el.value='';
        this.fetchall();
     }
    };
    this.edit=function(item){
      el=document.getElementById('edit to-do');
      el.value=this.tasks[item];
      document.getElementById('editbox').style.display="block";
      self=this;
      document.getElementById('save-edit').onsubmit=function(){
        var task=el.value;
        if(task){
            self.tasks.splice(item,1,task.trim());
            self.fetchall();
             closeinput();
        }
      }
    };
    this.delete=function(item){
      this.tasks.splice(item,1)
      this.fetchall();
    };
    this.count=function(data){
      var el=document.getElementById('counter');
      var name='tasks';
      if(data){
        if(data==1){
          name='task';
        }
        el.innerHTML=data+' '+name;
      }
      else{
        el.innerHTML="no"+" "+name;
      }
    };

}
app.fetchall();

function closeinput(){
    document.getElementById('editbox').style.display='none';
}
   
