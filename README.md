# ActionHero setup

Open iTerm2 or terminal, or visual studio console

if you haven't already, Install NVM, to install recent version of node.js
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash`

Then add this to bottom of your .bash_profile file in your home directory
```
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
```

Then install the stable version of node.js:
`nvm i stable`



Then, copy and paste:
```
cd /var/www
git clone https://github.com/rayie/college_app
cd college_app 
```



## Install modules
`npm install`

## To Run:

`npm start`

