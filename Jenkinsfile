pipeline {
    agent any
    tools {
        nodejs 'elpepeNode'
    }
    stages {
        stage('Dependencies') {
            steps {
                sh 'cd auxiliatron/client/admin && npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'cd auxiliatron/client/admin'
            }
        }
        stage('Test') {
            steps {
                sh 'cd auxiliatron/client/admin && npm run test' 
            }
        }
        stage('Test e2e') {
            steps {
               sh 'cd auxiliatron/client/admin && npm run e2e'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}