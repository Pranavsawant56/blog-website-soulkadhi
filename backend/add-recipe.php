<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Add Recipe</title>

<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Arial,sans-serif;max-width:900px;margin:20px auto;padding:20px;background:#f9f9f9}
h1{text-align:center;margin-bottom:25px}
label{font-weight:bold;margin-top:20px;display:block}
input,textarea{width:100%;padding:10px;margin-top:6px;border:1px solid #ccc;border-radius:6px}
textarea{resize:vertical}
button{margin-top:10px;padding:8px 14px;border:none;border-radius:6px;cursor:pointer}
.add-btn{background:#555;color:#fff}
.remove-btn{background:#d9534f;color:#fff}
.submit-btn{background:#28a745;color:#fff;width:100%;padding:14px;font-size:16px;margin-top:30px}
.row{display:flex;gap:10px;flex-wrap:wrap;margin-top:10px}
.row input{flex:1}
.preview img{width:150px;height:100px;object-fit:cover;margin-top:10px;border:1px solid #ccc}
</style>
</head>

<body>

<h1>Add New Recipe</h1>

<form action="save_recipe.php" method="post" enctype="multipart/form-data">

<label>Dish Name *</label>
<input type="text" name="dish_name" required>

<label>Short Info *</label>
<textarea name="short_info" required></textarea>

<label>Thumbnail Image *</label>
<input type="file" name="thumbnail_image" required>

<label>Slider Images (3–4)</label>
<div id="slider-wrapper"></div>
<button type="button" class="add-btn" onclick="addSlider()">➕ Add Slider</button>

<label>Ingredients *</label>
<div id="ingredients-wrapper">
  <div class="row">
    <input type="text" name="ingredients[0][name]" placeholder="Ingredient">
    <input type="text" name="ingredients[0][measurement]" placeholder="Measurement">
  </div>
</div>
<button type="button" class="add-btn" onclick="addIngredient()">➕ Add Ingredient</button>

<label>Introduction *</label>
<textarea name="introduction" required></textarea>

<label>Steps</label>
<div id="steps-wrapper"></div>
<button type="button" class="add-btn" onclick="addStep()">➕ Add Step</button>

<label>Main Ingredient Name</label>
<input type="text" name="main_ingredient_name">

<label>Main Ingredient Info</label>
<textarea name="main_ingredient_info"></textarea>

<label>Main Ingredient Image</label>
<input type="file" name="main_ingredient_image">

<label>YouTube Recipe Video</label>
<input type="text" name="recipe_video">

<label>History</label>
<textarea name="history"></textarea>

<label>Geography Info</label>
<textarea name="geography_info"></textarea>

<label>Geography Icon</label>
<input type="file" name="geography_icon">

<label>Health Benefits</label>
<div id="health-wrapper"></div>
<button type="button" class="add-btn" onclick="addHealth()">➕ Add Benefit</button>

<label>Complimentary Foods</label>
<div id="complimentary-wrapper"></div>
<button type="button" class="add-btn" onclick="addComplimentary()">➕ Add Food</button>

<button class="submit-btn">Save Recipe</button>
</form>

<script>
let ingIndex=1;
function addIngredient(){
  document.getElementById("ingredients-wrapper").insertAdjacentHTML("beforeend",
  `<div class="row">
    <input type="text" name="ingredients[${ingIndex}][name]" placeholder="Ingredient">
    <input type="text" name="ingredients[${ingIndex}][measurement]" placeholder="Measurement">
    <button type="button" class="remove-btn" onclick="this.parentElement.remove()">❌</button>
  </div>`);
  ingIndex++;
}

function addSlider(){
  document.getElementById("slider-wrapper").insertAdjacentHTML("beforeend",
  `<div class="row">
    <input type="file" name="slider_images[]">
    <button type="button" class="remove-btn" onclick="this.parentElement.remove()">❌</button>
  </div>`);
}

function addStep(){
  document.getElementById("steps-wrapper").insertAdjacentHTML("beforeend",
  `<div class="row">
    <input type="text" name="step_text[]" placeholder="Step description">
    <input type="file" name="step_image[]">
    <button type="button" class="remove-btn" onclick="this.parentElement.remove()">❌</button>
  </div>`);
}

function addHealth(){
  document.getElementById("health-wrapper").insertAdjacentHTML("beforeend",
  `<div class="row">
    <input type="text" name="health_name[]" placeholder="Benefit name">
    <input type="file" name="health_images[]">
    <button type="button" class="remove-btn" onclick="this.parentElement.remove()">❌</button>
  </div>`);
}

function addComplimentary(){
  document.getElementById("complimentary-wrapper").insertAdjacentHTML("beforeend",
  `<div class="row">
    <input type="text" name="complimentary_name[]" placeholder="Food name">
    <input type="file" name="complimentary_images[]">
    <button type="button" class="remove-btn" onclick="this.parentElement.remove()">❌</button>
  </div>`);
}
</script>

</body>
</html>
