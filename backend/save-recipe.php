<?php
// -------------------------------
// 1️⃣ Database Connection
// -------------------------------
$servername = "localhost";
$username   = "root"; // your DB username
$password   = "";     // your DB password
$dbname     = "your_database_name"; // your DB name

$conn=new mysqli($servername,$username,$password,$dbname);
if($conn->connect_error){die("DB Error");}

// ---------- FUNCTIONS ----------
function slug($s){
  return trim(preg_replace('/[^a-z0-9]+/','-',strtolower($s)),'-');
}

function uploadSingle($file,$path){
  if($file['error']!==0)return "";
  $name=time().'_'.basename($file['name']);
  move_uploaded_file($file['tmp_name'],$path.'/'.$name);
  return $path.'/'.$name;
}

function uploadMultiple($files,$path){
  $out=[];
  foreach($files['name'] as $i=>$n){
    if($files['error'][$i]==0){
      $name=time().'_'.$n;
      move_uploaded_file($files['tmp_name'][$i],$path.'/'.$name);
      $out[]=$path.'/'.$name;
    }
  }
  return implode(',',$out);
}

// ---------- DATA ----------
$dish=$_POST['dish_name'];
$slug=slug($dish);
$base="soulkadhi/$slug";

$dirs=["thumbnail","slider","steps","main","geo","health","complimentary"];
foreach($dirs as $d){ if(!is_dir("$base/$d")) mkdir("$base/$d",0755,true); }

// ---------- UPLOADS ----------
$thumb=uploadSingle($_FILES['thumbnail_image'],"$base/thumbnail");
$slider=uploadMultiple($_FILES['slider_images'],"$base/slider");
$mainImg=uploadSingle($_FILES['main_ingredient_image'],"$base/main");
$geoIcon=uploadSingle($_FILES['geography_icon'],"$base/geo");
$healthImgs=uploadMultiple($_FILES['health_images'],"$base/health");
$compImgs=uploadMultiple($_FILES['complimentary_images'],"$base/complimentary");

// ---------- INGREDIENTS ----------
$ings=[];
foreach($_POST['ingredients'] as $i){
  if($i['name'])
    $ings[]=$i['name']." (".$i['measurement'].")";
}
$ingredients=implode(',',$ings);

// ---------- STEPS ----------
$stepsTxt=implode("||",$_POST['step_text']??[]);
$stepImgs=uploadMultiple($_FILES['step_image'],"$base/steps");

// ---------- TEXT ----------
$healthTxt=implode(',',$_POST['health_name']??[]);
$compTxt=implode(',',$_POST['complimentary_name']??[]);

// ---------- INSERT ----------
$stmt=$conn->prepare("
INSERT INTO recipes
(dish_name,dish_slug,short_info,thumbnail_image,slider_images,ingredients,introduction,how_to_make,step_images,recipe_video,main_ingredient_name,main_ingredient_info,main_ingredient_image,history,geography_info,geography_icon,health_text,health_images,complimentary_text,complimentary_images)
VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
");

$stmt->bind_param(
"ssssssssssssssssssss",
$_POST['dish_name'],$slug,$_POST['short_info'],$thumb,$slider,$ingredients,
$_POST['introduction'],$stepsTxt,$stepImgs,$_POST['recipe_video'],
$_POST['main_ingredient_name'],$_POST['main_ingredient_info'],$mainImg,
$_POST['history'],$_POST['geography_info'],$geoIcon,
$healthTxt,$healthImgs,$compTxt,$compImgs
);

if($stmt->execute()){
  echo "✅ Recipe Saved Successfully";
}else{
  echo "❌ Error";
}

$stmt->close();
$conn->close();
?>