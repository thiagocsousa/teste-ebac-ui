pipeline {
    agent any

    stages {
        stage('Clonar o repositorio Web') {
            steps {
                git branch: 'main', url: 'https://github.com/thiagocsousa/teste-ebac-ui.git'
            }
        }
        stage('Instalar dependências') {
            steps {
                bat 'npm install'
            }
        }
        
        stage('Execução dos testes') {
            steps {
                bat 'npm run cy:run'
            }
        }
    }
}