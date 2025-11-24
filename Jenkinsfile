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
    }
}
