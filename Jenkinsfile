pipeline {
    agent {
        docker { image 'node:18.16.0-alpine' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh "sudo chown -R 128:137 "/.npm""
                sh "npm install"
                sh "npm build --prod"
            }
        }
    }
}

