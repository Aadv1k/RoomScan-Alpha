# Untitled project 

## Tech

Authentication is going to be handled via JWT, This isn't the most secure but will get the initial job done, We would set an expiry on the token 

We are going to be using MySQL as our primary database since we need to associate scenes, user perms, allowed actions  The videos are going to be stored in some kind of bucket. We might need to use some other mechanism to store the 3D scene data. An idea that comes to mind is **3DScript**, essentially we create our own implementation of a 3D renderer and have it be controlled by a 3D script 

The Front-End is initially going to be extremely minimal -- basic workflow as highlighted, we will use TailwindCSS with React(?), Vue(?). For the bundler Vite takes the cake for robustness

## Idea

We consume a stereo video of a closed enviorment, we put this in a queue to be processed and eventually we make a sharable iframe(?) or a link avaliable such that the user can view a 3D virtual version of the enviorment

here is what the MVP will look like

> Upload Video -> **Processing** -> Explorable 3D Scene, with a rudimentary character controller, share link with anyone (eg Make it public)

### Definition

#### Login/Sign-Up workflow

The goal is to have a relatively unobstructive workflow, in our case we will be using [Auth0](https://auth0.com/)

#### Scene creation workflow

We allow upto 3 scenes (?) this may change as I outline the database and the infra 

#### Pricing

There is initially no-pricing, although there will be limits set for each user on the features they are able to control

### Challenges

> Getting decent quality video

We assert that the quality is above a certain threshold, most modern phone cameras are decent and iPhone has a [measure app](https://support.apple.com/en-in/HT208924) although it uses LiDAR, but we can take a page from it's book and find some way to get this done

> Dealing with blind spots or voids

It is expected that certain areas might be obstructed due to a wall or other object, dealing with this is going to be tough, I am currently thinking a frame-by-frame edit of the video where we remove the object and use a **Generative AI** to fill in the gap and only then pass this data on for further processing

> Definition of a 3D scene

We would likely need an intermediary representation of 3D data, such that it can be re-intepreted in the Front-End via something like [Three.js](https://threejs.org/) and can also be stored in the Back-End for quick extraction. We might also need some way to inject new information into the scene eg editing the scene to be different, or adding extra text/info to the scene

> Sharing a 3D scene

Taking a page from the GSuite we can control the visibility of a particular scene, and on sharing one we essentially present the same view as seen by creator (with limited permissions)
