#!/bin/bash

# script to plot stations in a focal sphere
# see command line at end for how to generate takeoff angle

if [ "$#" -ne 4 ] ; then
	echo "SYNTAX:  focal_sphere_locations.sh evname strike dip rake"
	exit
fi

#########
evname=$1
strike=$2
dip=$3
rake=$4
#########

epsfile="beachball_BHZ.eps"

##################################################################

cd ${evname}
cat /dev/null > polarities.pspolar
cat /dev/null > station_info

echo "Extracting station information..."

for file in *.BHZ
do
	echo $file
	sta=`sac <<! |grep "KSTNM" | awk '{ print $3 }'
r $file
lh KSTNM
q
!`
	az=`sac <<! |grep "AZ" | awk '{ printf("%.1f",$3) }'
r $file
lh AZ
q
!`
	gcarc=`sac <<! |grep "GCARC" | awk '{ printf("%.3f",$3) }'
r $file
lh GCARC
q
!`
	takeoff=`udtdd -GCARC $gcarc -EVDP 33 | awk '{ print 6*$1 }' | awk '{ print 57.2957795*atan2($1,sqrt(1-$1**2)) }'`
	echo "$sta  $az $takeoff ?" >> polarities.pspolar
	echo -e "$sta\t$az\t$gcarc" >> station_info
done

##################################################################
echo "Plotting focal sphere..."
# basemap specs
projection="X15"
bounds="0/10/0/10"
ticks="f5sewn"

gmt psbasemap -J${projection} -R${bounds} -B${ticks} -X7.35 -Y3.0 -K >  ${epsfile}

echo 5 4.8 15 $strike $dip $rake 5 0 0 $evname:  $strike/$dip/$rake BHZ | gmt psmeca -J${projection} -R${bounds} -Bf5 -Bwsne -Sa14c/20 -G128/128/128 -Fa0.6c/cc -O -K -V >> ${epsfile}

gmt pspolar polarities.pspolar -J -R -D5/4.8 -M14c -St0.5c -B -T0/0/6/8 -O -K -V >> ${epsfile}

evince ${epsfile}
\rm .gmtcommands4
if [ -e .gmtdefaults4 ] ; then \rm .gmtdefaults4 ; fi
echo "Output file is `pwd`/${epsfile}"

cd ../../

# command line to calculate takeoff angle, using v=6km/s and h=15km
# note hack b/c awk hasn't got an arcsin
# udtdd -GCARC 47.168 -EVDP 15 | awk '{ print 6*$1 }' | awk '{ print 57.2957795*atan2($1,sqrt(1-$1**2)) }'
