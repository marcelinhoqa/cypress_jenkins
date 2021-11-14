pipeline {
  agent {
    docker {
      image "node:14-alpine"
    }
  }
  stages {
    stage("Build"){
      steps {

        sh "apk upgrade --update"
        sh "apk update"
        sh 'npm ci'
        sh 'npm run cy:verify'
        sh "pwd"
      }
    }
    stage("Test"){
      steps {
        sh "npm run cypress-regression-pack-junit"
      }
      post {    //mesmo que falhe o teste ou não o método post envia 
        always { // always vai enviar SEMPRE
          junit "cypress/results/junit/results.xml"  // plugin junit já vem por padrão no jenkins, esse comando ele lé a pasta log e publica o resultado no jenkins
        }
      }
    }
  }
}
