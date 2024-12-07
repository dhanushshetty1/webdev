pipeline {
    agent any  // Use any available agent

    environment {
        // Environment variables can be set here
        GIT_URL = 'https://github.com/dhanushshetty1/webdev.git'
        GIT_BRANCH = 'main'  // Change to the branch you're working with
        GIT_CREDENTIALS = 'github-credentials'  // The Jenkins credentials ID for GitHub
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from the specified repository and branch
                git url: GIT_URL, branch: GIT_BRANCH, credentialsId: GIT_CREDENTIALS
            }
        }

        stage('Build') {
            steps {
                // Build steps can go here (e.g., running npm install, mvn build, etc.)
                echo 'Building project...'
                // Example: Run a shell script or a build tool (e.g., Maven, Gradle)
                sh 'echo "This is the build step"'
            }
        }

        stage('Test') {
            steps {
                // Testing steps can go here (e.g., running tests, linting, etc.)
                echo 'Running tests...'
                // Example: Run tests
                sh 'echo "This is the test step"'
            }
        }

        stage('Deploy') {
            steps {
                // Deployment steps can go here (e.g., deploying to server, cloud, etc.)
                echo 'Deploying application...'
                // Example: Deploy commands
                sh 'echo "This is the deploy step"'
            }
        }
    }

    post {
        // Actions that will run after the pipeline stages
        always {
            echo 'Cleaning up...'
            // Example: Cleanup actions, such as removing temporary files
        }
        success {
            echo 'Build completed successfully!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
