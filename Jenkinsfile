pipeline {
  agent any
  stages {
    stage('prepare env') {
      steps {
        sh 'npm install'
      }
    }
    stage('code check') {
      steps {
        sh 'sonar-scanner -Dsonar.projectKey=jail-3.x_web -Dsonar.sources=./src -Dsonar.host.url=http://192.168.1.78:9000 -Dsonar.login=8cb76237e8e524b5a4779985b1a341edf723458d'
      }
    }
    stage('mail') {
      steps {
        emailext(subject: '$DEFAULT_SUBJECT', body: '$DEFAULT_CONTENT', attachLog: true, compressLog: true, postsendScript: '$DEFAULT_POSTSEND_SCRIPT', presendScript: '$DEFAULT_PRESEND_SCRIPT', to: 'liulu@uinnova.com duyongfeng@uinnova.com', from: '1225784999@qq.com')
      }
    }
    stage('gen stats') {
      steps {
        sh '''mkdir ./gitstats
gitstats ./ ./gitstats
cp -rf ./gitstats/* /data/wwwroot/default/jail_new/'''
      }
    }
  }
  environment {
    JAVA_HOME = '/disk1/workspace/jdk1.8.0_171'
    M2_HOME = '/disk1/workspace/apache-maven-3.5.4'
    SCANNER_HOME = '/disk1/workspace/sonar-scanner-3.3.0.1492-linux'
    NODE_HOME = '/disk1/workspace/node-v8.10.0-linux-x64'
    PATH = '/disk1/workspace/apache-maven-3.5.4/bin:/disk1/workspace/sonar-scanner-3.3.0.1492-linux/bin:/disk1/workspace/node-v8.10.0-linux-x64/bin:/disk1/workspace/jdk1.8.0_171/bin:/usr/local/nginx/sbin:/sbin:/sbin:/sbin:/sbin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin'
  }
}