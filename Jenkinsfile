pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
             sh(script: 'pytest ./tests/test_sample.py')
                
            }
                 post {
            success {
               echo "Tests passed! :)"
            }
            failure {
               echo "Tests failed :("
            }
                 }
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
