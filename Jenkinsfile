pipeline {
    agent any

    environment {
        IMG_NAME = 'maheshbharambe45/react_img'
        PORT_MAPPING = '8081:3000'
        MINIKUBE_IP = '3.110.138.250'
    }

    stages {
        stage('check_files') {
            steps {
                sh 'ls -l'  
            }
        }

        stage('Install_dependencies') {
            steps {
                echo "Installing the dependencies"
                sh 'npm install'  
            }
        }

        stage('test some parameters') {
            steps {
                echo "test"
                sh 'npm test'  
            }
        }

        stage('build the app') {
            steps {
                echo "app-build"
                sh 'npm run build'
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }

        stage('build the app') {
            steps {
                echo "app-build"
                sh 'npm run build'
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }

    }
}
