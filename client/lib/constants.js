import ProfileImageMinterContractAbi from './ProfileImageNfts.json'

export const contractABI = ProfileImageMinterContractAbi.abi
export const contractAddress = process.env.CONTRACT_ADDRESS

export const customStyles = {
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '',
    padding: 0,
    border: 'none',
  },
  overlay: {
    backgroundColor: '#334250a7',
  },
}
