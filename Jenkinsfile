pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build('qdubs/geewallet-api:latest')
                }
            }
        }

        stage('Push Docker Image to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('DOCKER-REGISTRY-URL', 'DOCKER-CRED-ID') {
                        docker.image('qdubs/geewallet-api:latest').push('latest')
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    kubernetesDeploy(
                        kubeconfigId: 'KUBE-CRED-ID',
                        configs: 'kubernetes/*.yaml'
                    )
                }
            }
        }
    }

    triggers {
        githubPush()
    }

    environment {
        GITHUB_PAYLOAD = readFile('.git/GitHubPayload')
    }
}
