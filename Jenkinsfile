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
                    docker.withRegistry('https://your-docker-registry-url', 'your-docker-credentials-id') {
                        docker.image('qdubs/geewallet-api:latest').push('latest')
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    kubernetesDeploy(
                        kubeconfigId: 'your-kubeconfig-credentials-id',
                        configs: 'your-kubernetes-yaml-directory/*.yaml'
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
