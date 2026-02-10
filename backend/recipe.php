<?php
// 🔥 SHOW ERRORS (remove in production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");


// ✅ DATABASE CONNECTION
$host = "localhost";
$user = "u219254479_anubhooteeuser";
$pass = "MauliNiwas@@2025";
$db   = "u219254479_Soulkadhi_DB";

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    die(json_encode(["error" => "Database connection failed"]));
}

$all_recipes = [];

// ✅ GET ALL RECIPES
$result = $conn->query("SELECT * FROM recipes ORDER BY id DESC");

if (!$result || $result->num_rows == 0) {
    echo json_encode(["error" => "No recipes found"]);
    exit;
}

while ($recipe = $result->fetch_assoc()) {

    $recipe_id = (int)$recipe['id'];

    // 🔹 SLIDER IMAGES
    $images = [];
    $stmt = $conn->prepare("SELECT image_url FROM recipe_images WHERE recipe_id=? ORDER BY position ASC");
    $stmt->bind_param("i", $recipe_id);
    $stmt->execute();
    $res = $stmt->get_result();
    while ($row = $res->fetch_assoc()) {
        $images[] = $row['image_url'];
    }
    $recipe['slider_images'] = $images;

    // 🔹 INGREDIENTS
    $ingredients = [];
    $stmt = $conn->prepare("SELECT name, quantity FROM ingredients WHERE recipe_id=?");
    $stmt->bind_param("i", $recipe_id);
    $stmt->execute();
    $res = $stmt->get_result();
    while ($row = $res->fetch_assoc()) {
        $ingredients[] = $row;
    }
    $recipe['ingredients'] = $ingredients;

    // 🔹 STEPS
    $steps = [];
    $stmt = $conn->prepare("SELECT step_no, title, description, image FROM recipe_steps WHERE recipe_id=? ORDER BY step_no ASC");
    $stmt->bind_param("i", $recipe_id);
    $stmt->execute();
    $res = $stmt->get_result();
    while ($row = $res->fetch_assoc()) {
        $steps[] = $row;
    }
    $recipe['steps'] = $steps;

    // 🔹 MAIN INGREDIENTS
    $main_ing = [];
    $stmt = $conn->prepare("SELECT name, image, info FROM main_ingredients WHERE recipe_id=?");
    $stmt->bind_param("i", $recipe_id);
    $stmt->execute();
    $res = $stmt->get_result();
    while ($row = $res->fetch_assoc()) {
        $main_ing[] = $row;
    }
    $recipe['main_ingredients'] = $main_ing;

    // 🔹 REGION / WEATHER
    $stmt = $conn->prepare("SELECT region, weather, weather_icon, info FROM recipe_regions WHERE recipe_id=?");
    $stmt->bind_param("i", $recipe_id);
    $stmt->execute();
    $res = $stmt->get_result();
    $recipe['geography_weather'] = $res->fetch_assoc();

    // 🔹 HEALTH BENEFITS
    $health = [];
    $stmt = $conn->prepare("SELECT title, icon FROM health_benefits WHERE recipe_id=?");
    $stmt->bind_param("i", $recipe_id);
    $stmt->execute();
    $res = $stmt->get_result();
    while ($row = $res->fetch_assoc()) {
        $health[] = $row;
    }
    $recipe['health_benefits'] = $health;

    // 🔹 COMPLIMENTARY FOODS
    $foods = [];
    $stmt = $conn->prepare("SELECT name, image FROM complimentary_foods WHERE recipe_id=?");
    $stmt->bind_param("i", $recipe_id);
    $stmt->execute();
    $res = $stmt->get_result();
    while ($row = $res->fetch_assoc()) {
        $foods[] = $row;
    }
    $recipe['complimentary_foods'] = $foods;

    // 🔹 CATEGORIES
    $cats = [];
    $stmt = $conn->prepare("
        SELECT c.name 
        FROM categories c
        JOIN recipe_categories rc ON rc.category_id = c.id
        WHERE rc.recipe_id = ?
    ");
    $stmt->bind_param("i", $recipe_id);
    $stmt->execute();
    $res = $stmt->get_result();
    while ($row = $res->fetch_assoc()) {
        $cats[] = $row['name'];
    }
    $recipe['category'] = $cats;

    // 🔹 VIDEO
    $recipe['recipe_video'] = [
        "platform"  => $recipe['recipe_video_platform'],
        "url"       => $recipe['recipe_video_url'],
        "thumbnail" => $recipe['recipe_video_thumbnail']
    ];

    $all_recipes[] = $recipe;
}

// ✅ OUTPUT JSON
echo json_encode($all_recipes, JSON_PRETTY_PRINT);

$conn->close();
?>
