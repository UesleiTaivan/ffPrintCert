#### setup instructions
0. follow these instructions: https://developer.mozilla.org/en-US/Add-ons/SDK/Tutorials/Installation
1. from the sdk   shell do
  + ``shell> cfx run``
2. now load an ssl/tls enabled page in firefox and you should see details from the cert in your shell

#### example output after loading https://www.google.com
```
console.log: ffcert: 
console.log: ffcert: common name:                  www.google.com
console.log: ffcert: sha 1 fingerprint:       69:70:F0:C0:C2:C9:D3:B9:C9:64:C3:58:E6:F4:74:18:D7:CA:6F:09
console.log: ffcert: issuer common name:       Google Internet Authority G2
console.log: ffcert: root issuer nickname:       Default Trust:Equifax Secure CA
console.log: ffcert: root issuer subject name: OU=Equifax Secure Certificate Authority,O=Equifax,C=US
console.log: ffcert: 
```
