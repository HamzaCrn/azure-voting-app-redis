pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
         stage('Run Tests') {
         steps {
            sh(script: 'pytest ./tests/test_sample.py')
         }
          stage('Goodbye') {
            steps {
                echo 'Goodbye World'
            }
        }
           stage('Ok') {
            steps {
                sleep 5
                echo 'Ok'
            }
        }
    }
}
