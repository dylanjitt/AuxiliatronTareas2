pipeline {
    agent any
    tools {
        nodejs 'elpepeNode'
    }
    stages {
        stage('Dependencies') {
            steps {
                echo 'Deploying....'
                //sh 'cd auxiliatron/client/admin && npm install'
            }
        }
        stage('Build') {
            steps {
                echo 'Deploying....'
                //sh 'cd client/admin'
            }
        }
        stage('Test') {
            steps {
                echo 'Deploying....'
                //sh 'cd client/admin && npm run test' 
            }
        }
        stage('Test e2e') {
            steps {
              echo 'Deploying....'
               //sh 'cd client/admin && npm run e2e'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}