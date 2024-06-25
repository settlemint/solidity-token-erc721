import { buildModule } from '@nomicfoundation/hardhat-ignition/modules';

const ExampleERC721Module = buildModule('ExampleERC721Module', (m) => {
  const erc721 = m.contract('ExampleERC721', [
    'ExampleNFT',
    'NFT',
    'ipfs://',
    '0xa5409ec958C83C3f309868babACA7c86DCB077c1',
    '0x813af93e50F0bCD2BAaFfa7E4dD4710adC01dE7d',
  ]);
  return { erc721 };
});

export default ExampleERC721Module;
