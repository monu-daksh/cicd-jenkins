pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                echo "🔄 Pulling latest code from main branch..."
                git branch: 'main', url: 'https://github.com/monu-daksh/cicd-jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo "📦 Installing dependencies..."
                sh 'npm install'
            }
        }

        stage('Build Application') {
            steps {
                echo "🛠 Building Next.js app..."
                sh 'npm run build'
            }
        }

        stage('Deploy Application') {
            steps {
                echo "🚀 Deploying app with PM2..."
                sh '''
                    pm2 delete nextjs-cicd || true
                    pm2 start npm --name "nextjs-cicd" -- start -- --port 5000
                    pm2 save
                '''
            }
        }
    }

    post {
        success {
            echo "✅ Deployment successful! App running on port 5000"
        }
        failure {
            echo "❌ Deployment failed. Check Jenkins console logs for details."
        }
    }
}
