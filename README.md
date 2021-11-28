# Crossings mobile app



**The Crossings app is a mobile application for iOS and Android created for the Newcastle Poetry Festival 2018, and was used to showcase the work of eight poets commissioned to write poems in response to the work of artist Sean Scully. It allows users to read and hear the poems and view the artwork that inspired them, acting as a digital representation of the exhibitions that ran alongside the festival at the Hatton and Laing art galleries. It also provides information about the poets and the artist.**



### Content

This code repository contains the files for building the Crossings app.

An idea of the stucture of the the app's interface can be found in the index.html file. The app uses a single-page model for its HTML, and so each of the app's pages are represented as top-level divs within the body of this HTML. 

The app's functions are all controlled from the index.js file within the 'js' folder. The function of each segment of code is indicated by comments within the file. 

Image assets for the app's interface can be found in the 'img' and 'themes' folders. The 'img' folder should be used for assets such as artworks, logos and custom buttons, all of which have been removed from this repository. The 'img' folder also contains the 'author photos' folder, which is used for the photos displayed in the author biographies. 

Audio assets (recordings of poems being read) should be placed in the 'audio' folder.

Within the HTML and JS files, references to image and audio placeholders are indicated FILENAMES IN CAPITALS. 



### Framework

The app was built using the Cordova framework, and this folder sits within the 'www' folder of a Cordova build. Instructions on using Cordova to build a mobile application can be found at: 

https://cordova.apache.org/docs/en/latest/guide/cli/index.html



### Third-party software used

The app uses and builds upon the following open source libraries for some of its functions:

- **Fastclick.js** - used to improve touchscreen responsiveness (MIT License - Copyright can be found in js/fastclick.js, license at https://opensource.org/licenses/MIT)
- **JQuery / JQuery Mobile** - used throughout for UI design (MIT License - Copyright and license can be found in js/jquery-1.11.1.min.js)
- **Velocity.js** - used to improve touchscreen responsiveness (MIT License - Copyright and license can be found in js/velocity.min.js)
- **Hammer.js** - used to improve touchscreen responsiveness (MIT License - Copyright can be found in js/hammer.js, license at https://opensource.org/licenses/MIT)



### Attribution

This code repository is part of the PhD thesis 'Poetry in Digital Media' by Peter Hebden, Newcastle University 2021. This source code is shared under the MIT License. A copy of the license is included in the root folder of this project.













