pipeline {
    agent {
        docker { image 'node:18.16.0-alpine' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh "npm install"
                sh "npm build --prod"
            }
        }
    }
}

