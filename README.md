<p align="center">
  <img src="https://github.com/settlemint/solidity-token-erc721/blob/main/OG_Solidity.jpg" align="center" alt="logo" />
  <p align="center">
    ✨ <a href="https://settlemint.com">https://settlemint.com</a> ✨
    <br/>
    Build your own blockchain usecase with ease.
  </p>
</p>
<br/>
<p align="center">
<a href="https://github.com/settlemint/solidity-token-erc721/actions?query=branch%3Amain"><img src="https://github.com/settlemint/solidity-token-erc721/actions/workflows/solidity.yml/badge.svg?event=push&branch=main" alt="CI status" /></a>
<a href="https://fsl.software" rel="nofollow"><img src="https://img.shields.io/npm/l/@settlemint/solidity-token-erc721" alt="License"></a>
<a href="https://www.npmjs.com/package/@settlemint/solidity-token-erc721" rel="nofollow"><img src="https://img.shields.io/npm/dw/@settlemint/solidity-token-erc721" alt="npm"></a>
<a href="https://github.com/settlemint/solidity-token-erc721" rel="nofollow"><img src="https://img.shields.io/github/stars/settlemint/solidity-token-erc721" alt="stars"></a>
</p>

<div align="center">
  <a href="https://console.settlemint.com/documentation/">Documentation</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://discord.com/invite/Mt5yqFrey9">Discord</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://www.npmjs.com/package/@settlemint/solidity-token-erc721">NPM</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://github.com/settlemint/solidity-token-erc721/issues">Issues</a>
  <br />
</div>

## Get Started

This repository provides a feature-rich ERC721 token contract, suitable for a wide range of NFT applications. You can either:

- **Launch this smart contract set directly in SettleMint**: Under the `Smart Contract Sets` section. This will automatically link the contract to your blockchain node and use the private keys stored in the platform.
  
  For detailed instructions on deploying smart contracts using SettleMint, refer to this [deployment guide](https://console.settlemint.com/documentation/docs/using-platform/add_smart_contract_sets/deploying_a_contract/).

- **Integrate it into your own project**:
  - Bootstrap a new project using Forge:
    ```shell
    forge init my-project --template settlemint/solidity-token-erc721
    ```
  - Or, add it as a dependency to your existing project using npm:
    ```shell
    npm install @settlemint/solidity-token-erc721
    ```

### Deploy Contracts & Run Tasks in your Integrated IDE

Using SettleMint’s Integrated IDE, you can easily run tasks like compiling, testing, and deploying your contracts. Here’s how to get started:

1. Open the Tasks panel by pressing `Cmd + Shift + P` (Mac) or `Ctrl + Shift + P` (Windows/Linux) or by selecting it from the left menu.
2. Select the desired task from the list. Available tasks include:

   - **Foundry - Compile**: Compiles the Foundry contracts.
   - **Hardhat - Compile**: Compiles the Hardhat contracts.
   - **Foundry - Test**: Runs tests using Foundry.
   - **Hardhat - Test**: Runs tests using Hardhat.
   - **Foundry - Start Network**: Starts a local Ethereum network using Foundry.
   - **Hardhat - Start Network**: Starts a local Ethereum network using Hardhat.
   - **Hardhat - Deploy to Local Network**: Deploys contracts to a local network.
   - **Hardhat - Deploy to Platform Network**: Deploys contracts to the specified platform network.
   - **The Graph - Build & Deploy**: Builds and deploys the subgraph.

Alternatively, you can use the IDE terminal to deploy your contract using common commands from [Hardhat](https://hardhat.org/ignition/docs/guides/deploy) or [Foundry](https://book.getfoundry.sh/forge/deploying).

### Learn More about Foundry and Hardhat

To fully leverage the capabilities of Foundry and Hardhat, you can explore our comprehensive documentation [here](https://console.settlemint.com/documentation/docs/using-platform/add_smart_contract_sets/smart_contracts/).

## ERC721 Contract Features

This repository includes a comprehensive ERC721 token contract with advanced features, built on OpenZeppelin and custom extensions:

- **Mintable**: Allows the contract owner to mint new tokens, including batch minting.
- **Burnable**: Token holders can permanently destroy their tokens.
- **Pausable**: The contract owner can pause and resume token transfers, as well as minting operations.
- **Whitelist**: Supports a whitelist for pre-approved addresses during the minting process, secured with Merkle proofs.
- **Freezable**: The contract owner can freeze the token URIs, making them immutable.
- **Royalty Support**: Implements ERC2981 for royalty payments, with a default royalty rate.
- **Gasless Listings**: Integrates with OpenSea for gasless transactions.
- **Reentrancy Guard**: Protects against reentrancy attacks during token sales.

### Key Functions

- **`pause()` / `unpause()`**: Pauses or resumes all token transfers and minting operations.
- **`mint(address account, uint256 id, uint256 amount, bytes memory data)`**: Mints new tokens, with support for batch operations.
- **`burn(uint256 tokenId)`**: Burns a specified token, removing it permanently from circulation.
- **`setWhitelistMerkleRoot(bytes32 whitelistMerkleRoot_)`**: Sets the Merkle root for the whitelist.
- **`startPublicSale()`**: Opens the public sale, disabling the whitelist.
- **`publicMint(uint256 count)`**: Mints tokens during the public sale, with constraints on the number of tokens per transaction.
- **`withdraw()`**: Transfers the contract balance to the designated wallet.

### OpenZeppelin Libraries and Custom Extensions Utilized

This contract utilizes the following OpenZeppelin libraries and custom extensions:

- **ERC721**: A robust implementation of the ERC721 non-fungible token standard.
- **ERC721Enumerable**: Extends ERC721 to provide enumeration of all tokens.
- **ERC721Burnable**: Adds burn functionality to ERC721 tokens.
- **ERC721Pausable**: Allows pausing and unpausing of token transfers and minting.
- **ERC721Royalty**: Supports ERC2981 standard for royalty payments.
- **Ownable**: Provides ownership management, allowing restricted access to certain functions.
- **ReentrancyGuard**: Prevents reentrancy attacks during token transactions.
- **ERC721Batch**: Custom extension enabling batch transfers of tokens.
- **ERC721Freezable**: Custom extension allowing token URIs to be frozen, making them immutable.
- **ERC721MintPausable**: Custom extension to pause and unpause minting operations.
- **ERC721OpenSeaGassLess**: Custom extension enabling gasless listings on OpenSea.
- **ERC721Whitelist**: Custom extension for managing a whitelist using Merkle proofs.

## Documentation

- Additional documentation can be found in the [docs folder](./docs).
- [SettleMint Documentation](https://console.settlemint.com/documentation/docs/using-platform/integrated-development-environment/)
- [Foundry Documentation](https://book.getfoundry.sh/)
- [Hardhat Documentation](https://hardhat.org/hardhat-runner/docs/getting-started)
