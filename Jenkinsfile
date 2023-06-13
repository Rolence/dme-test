pipeline {
    
    agent any
  
    stages {
        stage('Build') {
          agent {
        docker { 
            image 'node:lts-bullseye-slim'
            args '-p 4200:4200'
            label 'node-image'
        }
    }
            steps {
                sh 'npm install'
            }
        }
        stage('Build-prod') {
            steps {
                sh 'npm build --prod'
            }
        }
    }
}
