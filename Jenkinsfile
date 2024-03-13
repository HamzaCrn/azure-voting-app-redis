pipeline {
   agent any

   stages {
stage('Run Tests') {
         steps {
            bat(script: 'pytest ./tests/test_sample.py')
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
   }
}