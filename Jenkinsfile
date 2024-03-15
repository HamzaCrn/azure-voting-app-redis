@Library('github.com/HamzaCrn/demo-shared-pipeline.git') _

pipeline {
   agent any
   stages {
      stage('Call Library Function with an arguement') {
         steps {
            script {
               helloWorld()
            }
         }
      }
   }
}