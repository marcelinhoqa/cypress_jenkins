pipeline {
  agent {
    docker {
      image 'cypress/base:10'
    }
  }
  stages {
    stage("Build"){
      steps {
        sh 'npm ci'
        sh 'npm run cy:verify'
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
