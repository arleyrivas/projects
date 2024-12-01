set compile=%1

if not defined compile set compile=jit

mvn clean install -Dmaven.test.skip=true dependency::tree -e -Dhttps.protocols=TLSv1.2 -Dcompile.method=%compile%
