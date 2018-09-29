<?php

$gallery="gallery";
$headings=array();
$divisions=array_diff(scandir($gallery), array('..', '.'));
foreach ($divisions as $head) {
	if(is_dir($gallery.'/'.$head)){
		array_push($headings,substr(strstr($head," "),1));
	}
}

$i=1;
$photolist=array();
foreach ($headings as $head) {
	$photos=array_values(array_diff(scandir($gallery.'/'.$i." ".$head),array('..','.')));
	array_push($photolist,$photos);
	$i++;
}


$fp=fopen('js/gallery.json','w');
fwrite($fp,"headings='".json_encode($headings)."'\n");
fwrite($fp,"photos='".json_encode($photolist)."'");
fclose($fp);

?>