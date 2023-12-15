// document.addEventListener("DOMContentLoaded", function () {
//     const recipeForm = document.getElementById("recipeForm");
  
//     recipeForm.addEventListener("submit", function (event) {
//       event.preventDefault();
  
//       // Get the form values
//       const title = document.getElementById("recipeTitle").value;
//       const category = document.getElementById("recipeCategory").value;
//       const price = document.getElementById("recipePrice").value;
  
//       // Validate the values (add your own validation logic)
//       if (!title || !category || !price) {
//         alert("Please fill in all fields");
//         return;
//       }
  
//       // Create a new recipe object
//       const newRecipe = {
//         id: generateUniqueId(), // You need to implement this function to generate unique IDs
//         title: title,
//         category: category,
//         price: parseFloat(price),
//         // Add other properties as needed
//       };
  
//       // Add the new recipe to your menu array
//       menu.push(newRecipe);
  
//       // Update the displayed menu
//       displayMenuItems(menu);
  
//       // Reset the form
//       recipeForm.reset();
  
//       // Optionally, you can redirect back to the menu page
//       window.location.href = "index.html";
//     });
  
//     // Function to generate a unique ID (you can use a library or implement your own logic)
//     function generateUniqueId() {
//       // Implementation to generate a unique ID
//       // ...
//     }
//   });
  