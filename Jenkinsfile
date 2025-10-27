pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/monu-daksh/cicd-jenkins.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                # Stop existing process if any
                pm2 stop next-app || true
                
                # Start Next.js on port 5000
                PORT=5000 pm2 start npm --name "next-app" -- run start

                # Save PM2 state so it restarts after reboot
                pm2 save
                '''
            }
        }
    }
}
