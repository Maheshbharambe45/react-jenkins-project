pipeline {
    agent any

    environment {
        IMG_NAME = 'maheshbharambe45/react_img'
        PORT_MAPPING = '8081:5000'
        MINIKUBE_IP = '13.204.249.68'
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

        stage('building a docker image'){
            steps{
                sh '''
                echo "Building Docker Image ----->"
                docker build -t ${IMG_NAME}:latest .
                '''                
            }
        }

        stage('Push Image') {
        steps {
            withCredentials([usernamePassword(
            credentialsId: 'docker-crediantials',
            usernameVariable: 'MY_DOCKER_USER',
            passwordVariable: 'MY_DOCKER_PASS'
            )]) {
            sh '''
                echo "$MY_DOCKER_PASS" | docker login -u "$MY_DOCKER_USER" --password-stdin
                docker push ${IMG_NAME}:latest
            '''
            }
        }
        }

        stage("Deploy to Minikube on EC2") {
        steps {
            withCredentials([sshUserPrivateKey(credentialsId: 'ec2-ssh-key', keyFileVariable: 'SSH_KEY')]) {

            sh """
                scp -i "$SSH_KEY" -o StrictHostKeyChecking=no deployment.yaml service.yml \
                ubuntu@${MINIKUBE_IP}:/home/ubuntu/
            """


            sh """
                ssh -i "$SSH_KEY" -o StrictHostKeyChecking=no ubuntu@${MINIKUBE_IP} '
                kubectl delete -f deployment.yaml --ignore-not-found=true
                kubectl delete -f service.yml --ignore-not-found=true

                kubectl apply -f deployment.yaml
                kubectl apply -f service.yml

                kubectl get pods -o wide
                '
            """
            }
        }
        }

    }
}
