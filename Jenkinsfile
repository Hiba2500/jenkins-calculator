pipeline {
    agent any

    tools {
        //Global Tool Configuration
        nodejs 'my-node'
    }

    stages {
        stage('Installation') {
            steps {
               
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                bat 'npm test'
            }
        }
    }
    
    post {
        success {
            echo 'Bravo, déploiement réussi !'
        }
    }
}