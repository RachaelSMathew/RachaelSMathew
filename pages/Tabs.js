import { useState } from "react";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="containerExperience">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
         iRobot
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
         Nuance
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Center for Youth Engagement 
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Software DevOps Co-op</h2>
          <centern><hr /></center>
          <p>
            Created automated Jenkins pipelines using EC2 instances and executed tasks in a Docker container using an ECR image. 
            Automated tasks such as configuring repositories, producing and uploading build files to Artifactory, syncing files between repositories, running tests on robots, and printing the test results to Slack 
            Developed a feature for Bitbucket pull request pages using ScriptRunner and Groovy, which sends requests from Bitbucket to Jenkins to trigger a pipeline. 
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>iOS Mobile Development Intern</h2>
          <centern><hr /></center>
          <p>
            Used YAML pipelines in Azure DevOps to create Xcode simulator builds and run snapshot tests.
            Created Veracode Archive and uploaded the scan, created a streamlined YAML pipeline with multiple sub-tasks using parallel jobs and templates for clean, high-efficiency code.
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>iOS Developer</h2>
          <centern><hr /></center>
          <p>
           Created a calendar, which could have events created and added on as a part of the CYE iPad app using Swift and Xcode
           Transferred video files to AWS S3 storage and used AWS CLI to create a Bash script to download and upload video files  
           Sent iOS logs to AWS Cloudwatch using AWS Soto Swift Package Manager in Xcode 

          </p>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
