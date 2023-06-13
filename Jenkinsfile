pipeline {
    agent {
        docker { image 'node:16-alpine' } //node:18.16.0-alpine
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh "chown -R 128:137 '/.npm'"
                sh "npm install"
                sh "npm build"
                sh "npm build --prod"
            }
        }
    }
}

