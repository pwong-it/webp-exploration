# webp-Exploration
The goal is to convert jpeg and png images into webp which are a reduced image format for the web with minimal sacrifices in quality. 

# The Problem
My current portfolio is taking more than a few seconds to load the landing page. After using the LightHouse extension, I was able to find out it was because of the image sizes. Hopefully after converting these images, the site will be able to load faster. 

I understand there are websites that can convert the images for me, however my preference is to not upload my private images onto a site I have no control over. 

# Resources
I am following this tutorial on youtube here:
https://www.youtube.com/watch?v=i0_1IhcEm_4

# Process
Created a repo and added some test images into a folder. Downloaded the utilities and library from: https://developers.google.com/speed/webp/download. Extracted and placed into the directory of the test repo.</br>
![Process Image 01](/README%20images/process_01.png)
![Process Image 02](/README%20images/process_02.png)

Tried running the command, however zsh denied the command. </br>
![Process Image 03](/README%20images/process_03.png)

Found alternate solution using npm sharp. </br>
![Process Image 04](/README%20images/process_04.png)

First create a .js file and add the Sharp module code. The specific image file was specified:</br>
![Process Image 05](/README%20images/process_05.png)

Then in the terminal, run the .js file:</br>
![Process Image 07](/README%20images/process_07.png)

The size difference of the two files. A significant reduction and unnoticeable quality loss. The size of webp is 25x less than the png. </br>
![Process Image 06](/README%20images/process_06.png)

In order to convert the images in batch, a for loop was used:</br>
![Process Image 08](/README%20images/process_08.png)
![Process Image 09](/README%20images/process_09.png)
![Process Image 10](/README%20images/process_10.png)

I kept the directories in the same folder for the input and outputs as I want to only use one folder and I want to immediate see the size difference in the folder when looking at the GUI. I could then sort by file type if I wanted to in order to select the webp images easily. 