<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Content-Type: application/json");


// 🔹 DATABASE CONNECTION
$conn = new mysqli(
    "localhost",
    "u219254479_anubhooteeuser",
    "MauliNiwas@@2025",
    "u219254479_Soulkadhi_DB"
);

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed"]));
}

// 🔹 GET SLUG FROM URL
$slug = isset($_GET['slug']) ? $_GET['slug'] : '';

if (!$slug) {
    echo json_encode(["error" => "Slug is required"]);
    exit;
}

// 🔹 GET MAIN RECIPE
$stmt = $conn->prepare("SELECT * FROM recipes WHERE slug = ?");
$stmt->bind_param("s", $slug);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows == 0) {
    echo json_encode(["error" => "Recipe not found"]);
    exit;
}

$recipe = $result->fetch_assoc();
$recipe_id = $recipe['id'];


// 🔹 SLIDER IMAGES
$images = [];
$res = $conn->query("SELECT image_url FROM recipe_images WHERE recipe_id=$recipe_id ORDER BY position ASC");
while ($row = $res->fetch_assoc()) {
    $images[] = $row['image_url'];
}
$recipe['slider_images'] = $images;


// 🔹 INGREDIENTS
$ingredients = [];
$res = $conn->query("SELECT name, quantity FROM ingredients WHERE recipe_id=$recipe_id");
while ($row = $res->fetch_assoc()) {
    $ingredients[] = $row;
}
$recipe['ingredients'] = $ingredients;


// 🔹 STEPS
$steps = [];
$res = $conn->query("SELECT step_no, title, description, image FROM recipe_steps WHERE recipe_id=$recipe_id ORDER BY step_no ASC");
while ($row = $res->fetch_assoc()) {
    $steps[] = $row;
}
$recipe['steps'] = $steps;


// 🔹 MAIN INGREDIENTS
$main_ing = [];
$res = $conn->query("SELECT name, image, info FROM main_ingredients WHERE recipe_id=$recipe_id");
while ($row = $res->fetch_assoc()) {
    $main_ing[] = $row;
}
$recipe['main_ingredients'] = $main_ing;


// 🔹 REGION / WEATHER
$res = $conn->query("SELECT region, weather, weather_icon, info FROM recipe_regions WHERE recipe_id=$recipe_id");
$recipe['geography_weather'] = $res->fetch_assoc();


// 🔹 HEALTH BENEFITS
$health = [];
$res = $conn->query("SELECT title, icon FROM health_benefits WHERE recipe_id=$recipe_id");
while ($row = $res->fetch_assoc()) {
    $health[] = $row;
}
$recipe['health_benefits'] = $health;


// 🔹 COMPLIMENTARY FOODS
$foods = [];
$res = $conn->query("SELECT name, image FROM complimentary_foods WHERE recipe_id=$recipe_id");
while ($row = $res->fetch_assoc()) {
    $foods[] = $row;
}
$recipe['complimentary_foods'] = $foods;


// 🔹 CATEGORIES
$cats = [];
$res = $conn->query("
    SELECT c.name FROM categories c
    JOIN recipe_categories rc ON rc.category_id = c.id
    WHERE rc.recipe_id = $recipe_id
");
while ($row = $res->fetch_assoc()) {
    $cats[] = $row['name'];
}
$recipe['category'] = $cats;


// 🔹 VIDEO
$recipe['recipe_video'] = [
    "platform" => $recipe['recipe_video_platform'],
    "url" => $recipe['recipe_video_url'],
    "thumbnail" => $recipe['recipe_video_thumbnail']
];


// 🔹 FINAL OUTPUT
echo json_encode($recipe, JSON_PRETTY_PRINT);
$conn->close();
?>
