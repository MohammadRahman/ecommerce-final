import React from 'react'
import './docs.scss';
export const Docs = () => {
    return (
        <div className="docs-container">
            <h2>Requirements</h2>
            <p>You need node and any IDE installed on your local machine to run the git-hub file. If you have those then you are good to go. If you don't have follow the link below to install <br /> <a href="https://nodejs.org/en/">install node </a>
            <a href="https://visualstudio.microsoft.com/">| install vs code</a>
            </p>
            <h2>git basics</h2>
            
            <p>To clone a repo and run to your own machine first move to the git-hub link then on the top-right side you will find fork press the fork-button first. Then clone the repo and come back to console choose a suitable directory where you want to store. Here some git commands to complete the process. <br />
            <a href="https://github.com/MohammadRahman/ecommerce-final">go to git repo</a> <br/>
            #  git clone "repo-address" "any_name" <br />
            # cd "to directory" <br />
            # npm install <br />
            # npm start
                <br />
                <p>your local server will start with the project</p>
                <a href="https://drive.google.com/file/d/1jGvcZzSD0FyDG9jDxVUD-bNfOvnGQv0g/view?usp=sharing">check the video</a>
            </p>
            <h4>Auth functionality</h4>
             <a href="https://app.diagrams.net?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&title=Untitled%20Diagram.drawio#R%3Cmxfile%3E%3Cdiagram%20id%3D%22gtArLbJ3F4rAEhDv5h2e%22%20name%3D%22Page-1%22%3E7VdRb9owEP41eUQiCYTwGCjt1g1pEg9THw05ErdOnDkOhP36XWKbJAtFoE6iavcC9uez7%2Fx9d4ex3HlSPgiSxUseArOcYVha7p3lONORh58VcFCA7dsThUSChhprgBX9DRocarSgIeQdQ8k5kzTrghueprCRHYwIwfddsy1nXa8ZiaAHrDaE9dGfNJSxQn1n0uBfgEax8Wx7U7WSEGOsb5LHJOT7FuQuLHcuOJdqlJRzYBV5hhe17%2F6V1WNgAlJ5yYblw7eXoHx8Cuzl%2BuUpfPSefX%2FgqlN2hBX6wjpYeTAMQIiE6CkXMuYRTwlbNOhM8CINoXIzxFlj853zDEEbwWeQ8qDVJYXkCMUyYXpV%2BawcvXo3DeW8EBs4cyGTI0REIM%2FYOUcFMHWBJyDFAfcJYETSXTcOonMoOtrprYEQ5NAyyDhNZd46%2BUcFoIEuB3esc8FUw%2Bgvya6zx4GKwMxaV2mgOg2uSAm7lxL3VMCa5NBLja7w%2B5hKWGWk1meP7eCUyDsQEsrzMvdlMXzYXT4MPfumMm1TbnGrKr0zQrbIvJ6r8UcrH%2BfC8hm9sXzexLr%2FWVmf3JJ1p8c6%2FuZuafTuuoI9tW%2FcFib%2FW%2BjFXI16XAVZ9u5ocl3nxjxNTzQ9j6HX2ZbXb4aGLe9Xwc3CIK%2F7V4AGtp%2BVzSKOour7a5pLUrvfHnN0yOhakCpo5QEDVk7Ulp46yLPsSkAYjVIcb5BvEAhUalB8Vgd6IaFhqPowYIRkXR9VaavfUHjueGaN76qzsPWqW%2FwrdR2%2Fq%2B7AO1EF0xPqGsWvUBenzRtfvdGaf0ru4g8%3D%3C%2Fdiagram%3E%3Cdiagram%20id%3D%22eQru4Gr0_HZ3wsp4vXGv%22%20name%3D%22Page-2%22%3EldFBD4IgFADgX8PRraSRns20lofmWls3JqRs6DOkaf36dGjGutSFwcfjwXsgHJRdpGhdJMC4RO6CdQhvkOv6K9KPAzwMkJVnIFeCGVrOkIonH3Ex6l0w3liBGkBqUduYQVXxTFtGlYLWDruCtG%2Btac6%2FIM2o%2FNazYLow6rnr2WMu8mK6eUl8s1PSKXispCkog%2FaDcIhwoAC0mZVdwOXQu6kvDjvtkuiyJ9GB3bw2JfHh6Jhk23%2BOvEtQvNK%2Fpu4n89P6hfW%2FOHwB%3C%2Fdiagram%3E%3C%2Fmxfile%3E">look at the diagram to understnad the flow</a>
            <p>For settings we first need to add the api key to connect the respective project from the firebase. Then initialize the config file, now your app is connected with firebase.</p>

            <h4>Storing user</h4>
            <p>we can store a user to firebase by using auth functionality very easily. First we need to create a veriable what will take two parameter one in userAuth and other one is additional data if need. then we can conditionaly check if there are any user or not <br />
            if there are no user then we just exit, but if there are user then we will take userRef from the user doc <br />
            #userRef = firestore.doc(then the usersdocment with uid). we also need a snapshot for that <br />
            #snapShot = userRef.get() it will give us the snap shot. and agani we will conditionaly check if the snapshot is already in database or not.
            if not then will store the user <br />
            #if(!snapShot.exist) store the user inside try-catch block with necessary info like userName, email, timeStamp</p>
             
            <h4>user behaviour in the app</h4>
            <a href="https://app.diagrams.net?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1#R5VlNj9owEP01HFnhhBA4tsBuK3UlJKp2e%2FSS2cRdE6fOAEl%2FfR3ikC%2BWsoJiRC%2FI8zKO7TfPM3bo2ONl8iBpFDwKD3jH6nlJx550LGvUH6jfDEhzYED6OeBL5uUQKYE5%2Bw0a7Gl0xTyIa44oBEcW1cGFCENYYA2jUopN3e1F8PqoEfWhBcwXlLfR78zDIEeHllvin4D5QTEyGYzyJ0taOOuVxAH1xKYC2dOOPZZCYN5aJmPgGXcFL3m%2F%2Bzee7iYmIcRjOiT24%2BQz682%2BPv8i3x7m7CVE3tXRWVO%2B0gvWk8W0YAA8RYg2hcRA%2BCKkfFqiH6VYhR5kw%2FSUVfp8ESJSIFHgT0BMdXTpCoWCAlxy%2FTQfMxvozbVpKBYruYADC9LqQip9wAN%2Bzi4CSrkgloAyVf0kcIpsXZ8H1Rryd34lzaqhmX4H68P%2FlXXXJOv9FuuLAF6zaQeQjRdF2xBQhFY06lxvAoYwj%2BiWko1Ke%2Ft4XYNESA4z22ZCd7CLpKGz5lCbmzIFkcIlqKSfQe8fcVek49uRrHukZEcmJeu2WF%2FFIK9OnrsaZ06f1q3pc3SkPskboTpaoNuuH6SkacUhEizEuPLmWQaUChi4DQW4jcPH%2B%2FxVI59BqYDdUk4QxcCEBiBh%2BFRp%2F8hedWc52pwk%2BtVbI9XGuYVzqh5aAXSH9QASt7GVc6HqXo3dfIZYjvYV78UrC%2F2Mk5BGcSDQeGJ0ri4xWjdXuElxDfxrZjRauotpVogPBXbpmjJOn7n5M6bb1GrfuFavo4gr%2FmT6tM3aztAugCyNk7ueU9hlHt9aadWagWSKEnVSO3t2J0efC069a%2B2vA6OGavrksnWAtAvBHIWE3TXuKg7Izb1lm7%2FA3dw3B2JfaiecRrzdIv56awAhxnXavvJ6LI54dju59wAVc7Fx2ppJ0Dxtzp7Dhk6G3eyiYZwy4lzsi5Yyy6%2Fqed0p%2F5qwp38A">diagram</a>
            <p>Checking the current user status, in the very first step the app state check the current user status if there are any user or not 
            if there are no user it won,t let you do further process. but if there are user then the first thing it will check the user is already are in the database or not if the user already in the databse then it will show the user info if not then it will store the user.</p>
             
            <h4>login functionality</h4>
            <p>login with email and password using auth library. it's simple process we need to call auth from the config file then onSubmit handling we will send the user to the database. <br />
            #auth.signInWithEmailAndPassword(email,password), if there are any error it will throw errors.
            </p>
            <h4>Register functionality</h4>
            <p>if there are no error then it will allow you to register. Once it checks all the error then in try-catch block call the user store functionality from firbase config and store to the database.</p>
        
            <h4>Redux</h4>
            Redux is the most popular for state management mostly in enterprise level software. It has lot's of settings. Look at the diagram <br/>
            <a href="https://app.diagrams.net?lightbox=1&highlight=0000ff&edit=_blank&layers=1&nav=1&page-id=TPUGQ6HMb8FZv7o2bhft#R%3Cmxfile%3E%3Cdiagram%20id%3D%22G_2INlhcqzIAo9laamXt%22%20name%3D%22Page-1%22%3E5VlNj9owEP01HFnhhBA4tsBuK3UlJKp2e%2FSS2cRdE6fOAEl%2FfR3ikC%2BWsoJiRC%2FI8zKO7TfPM3bo2ONl8iBpFDwKD3jH6nlJx550LGvUH6jfDEhzYED6OeBL5uUQKYE5%2Bw0a7Gl0xTyIa44oBEcW1cGFCENYYA2jUopN3e1F8PqoEfWhBcwXlLfR78zDIEeHllvin4D5QTEyGYzyJ0taOOuVxAH1xKYC2dOOPZZCYN5aJmPgGXcFL3m%2F%2Bzee7iYmIcRjOiT24%2BQz682%2BPv8i3x7m7CVE3tXRWVO%2B0gvWk8W0YAA8RYg2hcRA%2BCKkfFqiH6VYhR5kw%2FSUVfp8ESJSIFHgT0BMdXTpCoWCAlxy%2FTQfMxvozbVpKBYruYADC9LqQip9wAN%2Bzi4CSrkgloAyVf0kcIpsXZ8H1Rryd34lzaqhmX4H68P%2FlXXXJOv9FuuLAF6zaQeQjRdF2xBQhFY06lxvAoYwj%2BiWko1Ke%2Ft4XYNESA4z22ZCd7CLpKGz5lCbmzIFkcIlqKSfQe8fcVek49uRrHukZEcmJeu2WF%2FFIK9OnrsaZ06f1q3pc3SkPskboTpaoNuuH6SkacUhEizEuPLmWQaUChi4DQW4jcPH%2B%2FxVI59BqYDdUk4QxcCEBiBh%2BFRp%2F8hedWc52pwk%2BtVbI9XGuYVzqh5aAXSH9QASt7GVc6HqXo3dfIZYjvYV78UrC%2F2Mk5BGcSDQeGJ0ri4xWjdXuElxDfxrZjRauotpVogPBXbpmjJOn7n5M6bb1GrfuFavo4gr%2FmT6tM3aztAugCyNk7ueU9hlHt9aadWagWSKEnVSO3t2J0efC069a%2B2vA6OGavrksnWAtAvBHIWE3TXuKg7Izb1lm7%2FA3dw3B2JfaiecRrzdIv56awAhxnXavvJ6LI54dju59wAVc7Fx2ppJ0Dxtzp7Dhk6G3eyiYZwy4lzsi5Yyy6%2Fqed0p%2F5qwp38A%3C%2Fdiagram%3E%3Cdiagram%20id%3D%22TPUGQ6HMb8FZv7o2bhft%22%20name%3D%22Page-2%22%3E7Vrfd5owFP5rfHQHwg%2FrY7W6Pmw7PevO6faYQgpsQFiMivvrd2OCQOJWW7Wwdk8mN8kNfN%2FNd5PgwJlm5XuGi%2FgjDUk6QFZYDpyrAUL22LXgR1g2ynIxtqUlYkmobLXhNvlFlFENjJZJSBatjpzSlCdF2xjQPCcBb9kwY3Td7vZA0%2FasBY6IYbgNcGpa75KQx9J6gUa1%2FZokUVzNbPtj2ZLhqrN6k0WMQ7pumJzZwJkySrksZeWUpAK9Cpc1u17YP%2BbzyWz%2BaTi547kfZUPpbP6UIbtXYCTnp3WNpOsVTpcKrwHyU5hk8kBhLnhpvlFI%2Bj%2BXtGoYLrY8X0IH5BZl3QilSPx%2BJuGyrFzBM0lvsk2huXOMOCmFPeZZCgYbijhNohzKAbwwYWBYEcYTIPVSNWRJGIrhE0bgUfD91pUF9YImOd%2BGjDcZeFfC15JT%2Bbhb1%2BqFwR8ptQh5BF57xzmsFkIzwtkGxikvnq%2FCRC2UoVOtgHUj7JQpbkRcFV5YBXq0c12TCQXF51PCxt5DrgY9CWGxqCplPKYRzXE6q60TRpd5SEIFb93nA6WFgvQ74XyjVr5Au82lnFNM9Ay4QSwwi8hf%2B1n7eWEkxTxZtWfdB7IaeiMip%2BbTdlCLTzTWeFrQJQuIGqVRtXuM57OH3C7IAkrY5qsY%2F27kVfVvzcarUnmXtY2qnZtl5JyH5bHGsn8Yy5eM4U2jm5Kdg%2BexfU2s9f6ammj9oSCf4KQh5xp6IZKbkPIARFiPxnasreOEk9sCB6J1DXuJfSJwetW1kbWfv4bo7vo0VVfn%2BXSq67wG1ZVh%2F6jqHiLP6MiFexwb3n82Wh3dTtkYvSE2Tp6rgDxN7PQtiaT%2FbFuSKsoa9AU0u09y0uscMfR7lyN8A0jKY8L6DSPqH47mjiXAjPcUPw0%2B1%2BocPvP0D2IZ%2Fxvw7aDqDD7HMpDq8oRWn8nOckJ7NOuhQ%2Fcgx25B9mdHx2vHh2O9bHJEZnJkUs4X%2FVxQ7kjXo47XEzLvq3DAE5r3FEDf6xuA5raiC4U6u9A4BwoN8o5UmuPYMC8CFpwy0s9g1sSg8%2BSKLt5GLB8bon%2B6PkQtOiE7vXA2NO9dehz8tqXB1f3mEplXJTeMrpJQHA%2FnuCjuAJ2ir2dFA9Duz4pobAD6RXx31PF7FR8jUSWf1WHJ8wz43T3oP%2BNbJFTrT%2BBSPup%2FEjiz3w%3D%3D%3C%2Fdiagram%3E%3C%2Fmxfile%3E">diagram</a>
        
        </div>
    )
}
