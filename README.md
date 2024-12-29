# MyERC20

🔮 ERC20 project for week 6: https://university.alchemy.com/course/ethereum/md/614ba41acd2a86000413f77a
<\br>🗓️ 29th Dec: basic functions finished, updated `deploy.js` for ethers v6
<\br>✨ check my outcome at Sepolia Testnet! https://sepolia.etherscan.io/address/0xeB42E33EeB55f2b2AEa091f0aC042c730dba2750
<\br>⚙️ Workflow on Terminal:
- `cd myERC20`
- `npm install dotenv`
- `npm install --save-dev hardhat`
- `touch .env` and store your:
    - `ALCHEMY_SEPOLIA_URL`: get it from Alchemy API (create here: https://dashboard.alchemy.com/)
    - `SEPOLIA_PRIVATE_KEY`: your private key
    - `ETHERSCAN_KEY`: your etherscan api (create here: https://etherscan.io/myapikey)
- `npx hardhat run scripts/deploy.js --network sepolia`
