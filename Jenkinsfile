pipeline {
   agent any

   stages {

      stage('Run Tests') {
         steps {
            sh(script: 'pytest ./tests/test_sample.py')
         }
       stage('Hello') {
            steps {
                echo 'Hello World'
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
}
