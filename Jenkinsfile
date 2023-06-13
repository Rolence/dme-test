pipeline {
    agent {
        docker { image 'node:16-alpine'
                 args '--user root -v /var/run/docker.sock:/var/run/docker.sock' // mount Docker socket to access the host's Docker daemon
               
               } //node:18.16.0-alpine
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                //sh "chown -R 128:137 '/.npm'"
                sh "npm install"
                sh "npm build"
                sh "npm build --prod"
            }
        }
    }
}

