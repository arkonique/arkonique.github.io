#!/bin/bash
source ./libraries/lib.sh

mkdir stage_0
mkdir stage_1
mkdir stage_2
mkdir stage_3
mkdir stage_4
mkdir unstaged

d_1=0;
d_2=0;
d_3=0;
d_4=0;
d_5=0;

echo "This is the preprocessing script for using the Back Projection packages. Make sure you have SAC (Seismic Analysis Code) installed. This script will do the following in this order: "
echo "1. Remove stations with GCARC <30 and >90"
echo "2. Display all the available seismograms one by one and let you mark the P wave.  Give you the option if you want to use the seismogram in your final analysis or not."
echo "3. Cut all the seismograms in the window you specify"
#echo "4. Decimate all signals"
echo "4. Group stations into virtual networks"
echo "5. Make final files for MATLAB"
echo "Please use the a marker to mark the P wave";
read -p "Please enter the step from where you want to continue: " step;

echo -n "Enter event UTC time (HH.MM.SS): ";
read ev_time;
for i in ./data/*.${ev_time}.*.00.BHZ.M.SAC; do   ###### Enter event hour in UTC
	cp $i ./stage_0/;
done
for i in ./data/*.${ev_time}.*..BHZ.M.SAC; do   ###### Enter event hour in UTC
	cp $i ./stage_0/;
done
if [[ $step -eq 1 ]]; then
	bash ./libraries/range-separation 30 90 ##### Separate seismograms outside the 30 to 90 range
	d_1=1;
	echo -n "Do you want to continue on to the next step? (y/n): ";
	read $yn
	if [[ "$yn" == "n" ]] || [[ "$yn" == "N" ]]; then
		exit 1;
		d_1=0;
	fi
fi

if [[ $step -eq 2 ]] || [[ $d_1 -eq 1 ]]; then
	bash ./libraries/mark-select #### Mark P wave arrival and select seismograms
	d_2=1;
	echo -n "Do you want to continue on to the next step? (y/n): ";
	read $yn
	if [[ "$yn" == "n" ]] || [[ "$yn" == "N" ]]; then
		exit 1;
		d_2=0;
	fi
fi

if [[ $step -eq 3 ]] || [[ $d_2 -eq 1 ]]; then
	bash ./libraries/cut-window #### Cut a specified time window from the seismogram
	d_3=1;
	echo -n "Do you want to continue on to the next step? (y/n): ";
	read $yn
	if [[ "$yn" == "n" ]] || [[ "$yn" == "N" ]]; then
		exit 1;
		d_3=0;
	fi

fi

if [[ $step -eq 4 ]] || [[ $d_3 -eq 1 ]]; then
	d_4=1;
	bash ./libraries/make-network #### Make virtual network
	echo -n "Do you want to continue on to the next step? (y/n): ";
	read $yn
	if [[ "$yn" == "n" ]] || [[ "$yn" == "N" ]]; then
		exit 1;
		d_4=0;
	fi
fi
echo "Pause the code here and make any manual adjusments to the generated virtual networks. Press enter once you are done";
read;
if [[ $step -eq 5 ]] || [[ $d_4 -eq 1 ]]; then
	bash ./libraries/equalize
	bash ./libraries/finalfiles ### Make final files for MATLAB processing
	bash ./libraries/copy
	basj ./libraries/cleanup
fi
