## Welcome to my discord bot template
![background](https://i.imgur.com/iMf3JVO.png)
Wrote in [Discord.js V13](https://discordjs.guide), contains slash commands, select menus, and more.

__**Default Commands**__  

![coolcommand](https://i.imgur.com/ogJIU0d.png)    
![button](https://i.imgur.com/Efk6S8D.png)    
![select](https://i.imgur.com/mRS8jyg.png)    

In this guide: 
- [How to use](https://github.com/ARR4NN/Discord-Bot-Template#how-to-use)
- [Getting started](https://github.com/ARR4NN/Discord-Bot-Template#getting-started)
- [Register Slash Commands](https://github.com/ARR4NN/Discord-Bot-Template#register-slash-commands)
- [Un-register Slash Commands](https://github.com/ARR4NN/Discord-Bot-Template#un-registering-slash-commands)
- [Hosting](https://github.com/ARR4NN/Discord-Bot-Template#hosting-the-bot)

## How to use
1) Click `Use this template`.
2) Give your new repo a name.
3) Click the `Code` button and copy link. Should look like `https://github.com/YOURNAME/REPONAME.git`.
4) Open a new folder on your pc, in the terminal run `git pull https://github.com/YOURNAME/REPONAME.git .`, don't for the `.` at the end of the pull to pull the code correctly.
5) Get coding!

## Getting started
1) Rename `.env.example` to `.env`
2) Add your:
- Bot token [Link](https://discord.com/developers)
- Client Id 
- Guild Id
- Status Type (Status Types =  PLAYING , WATCHING , STREAMING , LISTENING , COMPETING , CUSTOM)
- Status

```yml
How to create a bot: https://discordjs.guide/preparations/setting-up-a-bot-application.html#your-token
```  
## Register Slash Commands
> Ensure you have set the clientId and guildId in the config!
1) Run `node reg.js`
By default it will register all commands to the guild id provided in the config.
If you want to register commands globally, run `node reg.js --global`.

## Un-register Slash Commands

To clear guild commands run `node reg.js --clearguild`
To clear global commands run `node reg.js --clearglobal`


## Hosting
1) Rename `config.json.example` to `config.json`
```json
{
    "TOKEN":"Your Bot Token",
    "clientId":"Bot Client ID",
    "guildId":"Guild ID for slash commands",
    "statusType":"PLAYING",
    "status":"Hello"
}
```
2) Add your:
- Bot token [Link](https://discord.com/developers)
- Client Id 
- Guild Id
- Status Type (Status Types =  PLAYING , WATCHING , STREAMING , LISTENING , COMPETING , CUSTOM)
- Status
3) Upload the config or input the values on your hosting.

> WARNING never push any config files (.env , config.json) to any code storage systems example github. Even if the repo is private! 

Need any help let me know **ARR4NN#0340**
