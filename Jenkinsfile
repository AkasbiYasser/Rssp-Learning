pipeline {
    agent any
    environment {
        ACR_NAME = 'PFSAcr' 
        ACR_URL = "${ACR_NAME}.azurecr.io"
    }
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/AkasbiYasser/Rssp-Learning.git', credentialsId: 'github-token'
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    sh '''
                        echo "Building Docker Images..."
                        docker-compose build
                    '''
                }
            }
        }

        stage('Push Docker Images to ACR') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'acr-token', usernameVariable: 'ACR_USERNAME', passwordVariable: 'ACR_PASSWORD')]) {
                        sh '''
                            docker login ${ACR_URL} -u ${ACR_USERNAME} -p ${ACR_PASSWORD}
 
                            docker push ${ACR_URL}/FrontEnd:latest
                            docker push ${ACR_URL}/Backend:latest
                        '''
                    }
                }
            }
        }

        stage('Deploy to AKS') {
            steps {
                script {
                    withCredentials([file(credentialsId: 'aks-token', variable: 'KUBECONFIG')]) {
                        sh '''
                            echo "Deploying to AKS..."

                            kubectl apply -f manifests/frontend-deployment.yaml --kubeconfig=$KUBECONFIG
                            kubectl apply -f manifests/backend-deployment.yaml --kubeconfig=$KUBECONFIG
                            kubectl apply -f manifests/mongodb-deployment.yaml --kubeconfig=$KUBECONFIG
                          
                        '''
                    }
                }
            }
        }
    }
    post {
        success {
            echo "Pipeline completed successfully!"
        }
        failure {
            echo "Pipeline failed. Check the logs."
        }
    }
}
