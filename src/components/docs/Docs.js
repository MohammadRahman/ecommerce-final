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
             <a href="">check the diagram to understnad the flow</a>
        </div>
    )
}
