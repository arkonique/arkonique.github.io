#!/bin/bash
todegrees() {
	pi=3.1415926539;
	echo $1 $pi | awk '{print $1*180/$2}'
}

toradians() {
	pi=3.1415926539;
	echo $1 $pi | awk '{print $1*$2/180}'
}
distance() {
	a_x=$1;
	a_y=$2;
	b_x=$3;
	b_y=$4;
	pi=3.14159265359;
	x1=`echo $a_x $pi | awk '{print $1*$2/180}'`;
	y1=`echo $a_y $pi | awk '{print $1*$2/180}'`;
	x2=`echo $b_x $pi | awk '{print $1*$2/180}'`;
	y2=`echo $b_y $pi | awk '{print $1*$2/180}'`;
	dx=`echo $a_x $b_x $pi | awk '{print ($2-$1)*$3/180}'`;
	dy=`echo $a_y $b_y $pi | awk '{print ($2-$1)*$3/180}'`;
	R=6371e3;
	a=`echo  $x1 $y1 $x2 $y2 $dx $dy | awk '{print ((sin($6/2))^2)+(cos($2)*cos($4)*(sin($5/2))^2)}'`
	c=`echo $a | awk '{print 2*atan2(sqrt($1),sqrt(1-$1))}'`
	d=`echo $R $c | awk '{print $1*$2}'`
	deg=`echo $c $pi | awk '{print $1*180/$2}'`
	echo $deg
}

numCompare() {
   awk -v n1="$1" -v n2="$2" 'BEGIN {printf (n1<n2?"1":"0")}'
}

primefactors() {
	n=$1;
	factors=();
	while [[ `echo $n | awk '{print $1%2}'` -eq 0 ]]; do
		factors+=(2);
		temp=`echo $n | awk '{print $1/2}'`
		n=$temp;
	done
	sqrt_n=`echo $n | awk '{print sqrt($1)}'`
	end=${sqrt_n%.*}
	for (( i=3; i<=$end ; i=$((i+2)) )); do
		while [[ `echo $n $i | awk '{print $1%$2}'` -eq 0 ]]; do
			factors+=($i);
			temp=`echo $n $i | awk '{print $1/$2}'`
			n=$temp;
		done
	done
	if [[ $n -gt 2 ]]; then
		factors+=($n)
	fi
	echo ${factors[*]}
}