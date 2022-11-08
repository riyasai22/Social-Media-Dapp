import {useState} from 'react'
import "./App.css";
import { Link,Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";
import Sidebar from "./components/Sidebar";
import Rightbar from "./components/Rightbar";
import {ethers} from "ethers"
import tweetsAbi from './contractsData/tweets.json'
import tweetsAddress from './contractsData/tweets-address.json'
import { Spinner,Button } from 'react-bootstrap'

function App() {
  const [account,setAccount]=useState(null);
  const [loading,setLoading]=useState(true);
  const [contract,setContract]=useState({});

  const web3Handler=async()=>{
    let accounts=await window.ethereum.request({method:'eth_requestAccounts'});
    console.log(accounts)
    setAccount(accounts[0]);

    window.ethereum.on('chainChanged',()=>{
      window.location.reload();
    })
    window.ethereum.on('accountsChanged',async()=>{
      setLoading(true)
      web3Handler()
    })
    const provider=new ethers.providers.Web3Provider(window.ethereum)
    const signer=provider.getSigner()
    
    const loadContract=async(signer)=>{
      const contract=new ethers.Contract(tweetsAddress.address,tweetsAbi,signer);
      setContract(contract)
      setLoading(false);
    }
    loadContract(signer)

  }
  return (
    <div className="page">
      <div className="sideBar">
      {account ? (
                    <Link
                      href={`https://etherscan.io/address/${account}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button nav-button btn-sm mx-4">
                      <Button variant="outline-dark">
                        {account.slice(0, 5) + '...' + account.slice(38, 42)}
                      </Button>
                    </Link>
                  ) : (
                    <>
                    <Button onClick={web3Handler} variant="outline-light">Connect Wallet</Button>
                  </>)}
        <Sidebar />
        
      </div>

      {loading ? (
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
                    <Spinner animation="border" style={{ display: 'flex' }} />
                    <p className='mx-3 my-0'>Awaiting Metamask Connection...</p>
              </div>
      ):(
        <div className="mainWindow">
     
        <Routes>
          <Route path="/" element={<Home account={account} contract={contract}/>} />
          <Route path="/profile" element={<Profile account={account} />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </div>
      )}
      
      <div className="rightBar">
        <Rightbar />
      </div>
    </div>
  );
}

export default App;
