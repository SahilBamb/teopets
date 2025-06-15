import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './sidebar.css'
import './banner.css'
import './shop.css'
import './createpet.css'
import './petcentral.css'
import './page.css'
import './bank.css'
import { MdMailOutline,MdOutlinePets } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoChatboxEllipses, IoDiceOutline, IoGameController } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import { PiTelevisionSimpleLight, PiQuestionMarkFill } from "react-icons/pi";
import { FaEgg } from "react-icons/fa6";
import { FaHouseChimney } from "react-icons/fa6";
import { BiSolidLeftArrow } from "react-icons/bi";




function SidebarItem({userName="none", petName="no pets :(", np=0, setCurrentPage, currentPage}) {
  return (
    <>
    <div className="top-sidebar">
      <div className="top-sidebar-info-bar">
        <p className="top-side-bar-info">
          Welcome, <b className="top-side-bar-blue">{userName}</b> | 
          Pet: <b className="top-side-bar-blue">{petName} </b> | 
          NP: <b className="top-side-bar-blue">{np}</b></p>
      </div>
    </div>
    <div className="cover-top-bar-sidebar"></div>
    <div className="sidebar">
    <div className="sidebar-yellow-small-cover"></div>
      <div className="sidebar-logo">
        <div className="sidebar-logo-text">Teopets</div>
      </div>
        <div className="oval">
          <div className="sidebar-item-title" onClick={() => setCurrentPage("createpet")}>
            <FaEgg className="side-bar-icon sidebar-item-title-icon-egg" /> 
            <div className="sidebar-item-title-text clickable-item create-pet-title">
              <div className="sidebar-item-title-text-create-pet">Create </div>
              <div className="sidebar-item-title-subtext">a Pet</div>
            </div>
          </div>
        </div>
        <div className="oval">
          <div className="sidebar-item-title clickable-item" onClick={() => setCurrentPage("petcentral")}>
            <div className="sidebar-item-title-text">
              <FaHouseChimney className="sidebar-item-title-icon" />
              Pet</div>
            <div className="sidebar-item-title-subtext">Central</div>
          </div>
        </div>
        <div className="sidebar-item">
          <MdMailOutline className="side-bar-menu-icon"/> neomail</div>
        <div className="sidebar-item">
          <FaGlobeAmericas className="side-bar-menu-icon"/> world</div>
        <div className="sidebar-item">
          <CiStar className="side-bar-menu-icon"/> explore</div>
        <div className="sidebar-item">
        <IoChatboxEllipses className="side-bar-menu-icon"/> chat</div>
        <div className="sidebar-item">
          <IoDiceOutline className="side-bar-menu-icon"/> games</div>
        <div className="sidebar-item">
          <TiShoppingCart className="side-bar-menu-icon"/> shops</div>
        <div className="sidebar-item">
          <PiTelevisionSimpleLight className="side-bar-menu-icon"/> news</div>
        <div className="sidebar-item">
          <PiQuestionMarkFill className="side-bar-menu-icon"/> help</div>
        <div className="sidebar-login">
          <div className="sidebar-item"><BiSolidLeftArrow style={{color: "orange", position: "relative", top: "4px"}}/> login!</div>
          <div className="sidebar-item">logout!</div>
        </div>
        <div className="sidebar-time">
            <div className="sidebar-time-text">{new Date().toLocaleTimeString()} NST</div>
          </div>
          </div>
      
      </>
  )
}

function MainPage() {
  return (
    <>
      <h1 className="main-content-title">Teopets</h1>
      <div className="main-content-description">NeoPetsClassic.Com is the greatest Virtual Pet Site on the Internet. With your help, we intend to build a community of virtual pet owners, and offer cool things such as chat, games, auctions, shops, greetings, and much, much more. Best of all, it's completely FREE!</div>
    </>
  )
}

function Banner({text = "default shop", backgroundColor = "white", border = "5px solid #000"}){
  text = text.replaceAll(" ", ".").toLowerCase()
  return (
    <div className="banner" style={{backgroundColor: backgroundColor, border: border}}>
      <MdOutlinePets className="banner-icon" />
      <MdOutlinePets className="banner-icon-shadow" />
      <div className="banner-title">{text}</div>
      <div className="banner-title-shadow">{text}</div>
    </div>
  )
}

function Item({itemName = "item name", stock = 0, cost = -1}) {
  return (
    <div className="item">
      <div className="item-info">
        <img className="item-image" src="https://www.moderneopets.com/images/items/sroom-fruit-potion.gif"></img>
        <div className="item-name">{itemName}</div>
        <p>{stock} in stock</p>
        <p>Cost : {cost} NP</p>
      </div>
    </div>
  )
}

function Shop({shopname = "Royal Potionery", shopkeeper="default"}) {
  const shopkeeperImage = shopkeeper==="default" ? "https://www.moderneopets.com/images/shopkeepers/83.gif" : ""
  const items = [
    {itemName : "Steaming Skeem Potion", stock : 1, Cost : 40905},
    {itemName : "Jittery Jipple Pear Potion", stock : 1, Cost : 40905},
    {itemName : "Steaming Skeem Potion", stock : 1, Cost : 40905},
    {itemName : "Steaming Skeem Potion", stock : 1, Cost : 40905},
  ]
  return (
    <>
    <Banner text={shopname} backgroundColor="green"/>
    <div className="shop">
      <div className="shop-title-breadcrumb">
        <div className="shop-title">{shopname}</div>
      </div>
      <img className="shopkeeper" src={shopkeeperImage}></img>
      <div className="shop-title">{shopname}</div>
      <p className="shop-description">If you need a little something special, why not look at our extensive range of potions. We have something for everyone.</p>
      <hr class="line"></hr>
      <div className="shop-items">
        {items.map((i, index) => (
          <Item itemName={i.itemName} stock={i.stock} cost={i.cost}/>
        ))}
      </div>
      <hr class="line"></hr>
    </div>
    </>
  )
}

function CreateAPet() {

  const possiblePets = ["Acara", "Aisha", "Blumaroo", "Bori", "Bruce", "Buzz", "Chia", "Dirego", "Elephante", "Eyrie",
    "Flotsam", "Gelert", "Gnorbu", "Grarrl", "Ixi", "JubJub", "Kacheek", "Kau", "Korbat", "Kougra", "Kyrii", "Lenny", "Lupe"
  ]
  return (
    <>
    <Banner text="create a pet" backgroundColor='#8e8e00'/>
    <div className="create-pet">
      <p className="create-pet-description">Step 1 - Choose your pet's species! Click on the picture for more information about each species. Remember that creating a pet will earn you 50 Neopoints! You can have up to 24 Neopets normally, and even more with a little magic! If you are just starting out, it may be best for you to choose one.</p>
      <div className="create-pet-container">
      {possiblePets.map((i, index) => (
        <div className="create-pet-box">
          <img src={`https://www.moderneopets.com/images/pets/small_happy/${i.toLowerCase()}_blue.gif`}></img>
          <p key={index}>{i}</p>
          <input type="checkbox"></input>
        </div>
        ))}

      </div>
    </div>
    </>
  )
}

function PetCentral(){

  const petCentralLinks = [
    "inventory","market","gallery","auctions","wishlist","shopwizard","battledome","market map","soup kitchen","shopping","price changes", "bank", "trading post", "money tree", "safety deposit box", "your neohome"
  ]
  return (
    <>
    <Banner text="Pet Central" backgroundColor='#89c758'/>
    <div className="pet-central-nav">
      <div className="pet-central-links">
      {/* {Array.from({ length: 16 }).map((_, index) => ( 
            <div className="pet-central-link-inventory" onClick={() => {console.log("Going to inventory!")}}></div>))} */}
          {petCentralLinks.map((_, index) => ( 
            <div className="pet-central-link-inventory" onClick={() => {console.log(_)}}></div>))}
        </div>
      <img src="./public/shop_toolbar.gif"></img>
    </div>
    </>
  )
}

function Bank({userInfo, setUserInfo}) {
  const [withdrawAmount, setWithdrawAmount] = useState(0);
  const [depositAmount, setDepositAmount] = useState(0);
  // const [interest, setInterest] = useState(userInfo.bankAmount * Math.pow(1 + userInfo.bankAccount.interest / 365, 365) - userInfo.bankAmount)

  // useEffect(() => {
  //   setInterest(userInfo.bankAccount.bankAmount * Math.pow(1 + userInfo.bankAccount.interest / 365, 365) - userInfo.bankAccount.bankAmount);
  // }, [userInfo.bankAmount]); // 👈 dependency array

  const handleDepositAll = () => {
    setUserInfo({...userInfo, bankAmount: userInfo.bankAmount + userInfo.neopoints, neopoints: 0})
  }

  const handleWithdrawAll = () => {
    setUserInfo({...userInfo, neopoints: userInfo.neopoints + userInfo.bankAmount, bankAmount: 0})
  }

  const handleDeposit = () => {
    setUserInfo({...userInfo, bankAmount: userInfo.bankAmount + depositAmount, neopoints: userInfo.neopoints - depositAmount})
  }

  const handleWithdraw = () => {
    setUserInfo({...userInfo, neopoints: userInfo.neopoints + withdrawAmount, bankAmount: userInfo.bankAmount - withdrawAmount})
  }

  const handleCollectInterest = () => {
    const interest = Math.round(userInfo.bankAmount * userInfo.bankAccount.interest/365)
    setUserInfo({
      ...userInfo, 
      bankAmount: userInfo.bankAmount + interest,
      bankAccount: {
        ...userInfo.bankAccount,
        lastCollectedInterest: new Date().toLocaleDateString()
      }
    })
  }

  return (
    <>
    <Banner text={"national neopian"} backgroundColor='#502950'/>
    <div className="bank page-font">
      <div className="text-center">
        <img src="https://www.moderneopets.com/images/shopkeepers/bankmanager.gif"></img>
        <h1 className="page-font">The National Neopian</h1>
        <p>It's great to see you again. What can I do for you today?</p>
      </div>
      <div className="bank-details">
        <p><strong>Account Type :</strong> {userInfo.bankAccount.name}</p>
        <p><strong>Current Balance :</strong> {userInfo.bankAmount} NP</p>
        <p><strong>Interest Rate :</strong> {userInfo.bankAccount.interest*100}% per year.</p>
        <p><strong>Yearly Interest :</strong> {Math.round(userInfo.bankAmount * userInfo.bankAccount.interest)} NP</p>
      </div>
      <p>This interest rate means that you will gain <strong>{Math.round(userInfo.bankAmount * userInfo.bankAccount.interest/365)} NP</strong> per day (it's rounded up)!
      You will have to claim this yourself by clicking the Collect Interest button below.</p>
      <h1 className="page-font">Deposit Neopoints</h1>
      <div className="bank-deposit-input-overview text-center">
        <div className="bank-input-top bank-deposit-input">
          <strong>Amount in NP</strong>
          <input 
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
          className="bank-deposit-amount"></input>
        </div>
        <div className="bank-input bank-deposit-input-bottom bank-deposit-input">
          <button className="deposit" onClick={handleDeposit}>Deposit</button>
          <button className="deposit" onClick={handleDepositAll}>Deposit All</button>
        </div>
      </div>
      <hr class="line"></hr>
      <h1 className="page-font">Withdraw Neopoints</h1>
      <div className="bank-deposit-input text-center">
        <div className="bank-input-top bank-deposit-input">
          <strong>Amount in NP</strong>
          <input
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
          className="bank-withdraw-amount"></input>
        </div>
        <div className="bank-input bank-deposit-input-bottom bank-deposit-input">
          <button className="withdraw" onClick={handleWithdraw}>Withdraw</button>
          <button className="withdraw" onClick={handleWithdrawAll}>Withdraw All</button>
        </div>
      </div>
      <hr class="line"></hr>

      <div className="bank-collect-interest">
        <strong>Collect Interest</strong>
        <p>Note: The interest you collect is added directly to your bank account, not the NP you're holding!</p>

        <div className="collect-interest-container text-center">
          {userInfo.bankAccount.lastCollectedInterest !== new Date().toLocaleDateString() ?
           <button className="text-center collect-interest" onClick={handleCollectInterest}>Collect Interest</button> :
           <strong>You've already claimed your interest for today!</strong>}
        </div>
      </div>
      <hr class="line"></hr>

      <div className="bank-upgrade-account">
        <strong>Upgrade Your Account</strong>
        <p>If you wish to upgrade your account to the next level, then you must meet the minimum balanced required by the account.</p>
        <p>Please select the type of account, meet the minimum additional deposit, and then click the Change Account button below.</p>
        <div className="bank-input-upgrade">

            {/* <div>
              <strong>New Account Type</strong>
              <select name="account_type">
              <option value="">Select Type</option>																																																																																																																																			<option value="12">Millionaire Platinum (min 1,000,000 NP)</option>
                <option value="13">Millionaire Double Platinum (min 2,000,000 NP)</option>
                <option value="14">Millionaire Mega-Platinum (min 5,000,000 NP)</option>
                <option value="15">Neopian Mega-Riches (min 7,500,000 NP)</option>
                <option value="16">Ultimate Riches (min 10,000,000 NP)</option>
                <option value="17">Intergalactic Riches (min 100,000,000 NP)</option>
                <option value="18">Billionaire (min 1,000,000,000 NP)</option>
              </select>
            </div> */}
        </div>
      </div>
      
    </div>
    </>
  )
}

function App() {
  // Navigation state
  const [currentPage, setCurrentPage] = useState('');

  const [userInfo, setUserInfo] = useState({
    userName: "hydrokid",
    bankAmount: 0,
    bankAccount: {
      name : "Millionaire Platinum",
      interest : .105,
      bankAmount: 0,
      lastCollectedInterest: 0
    },
    pets: [{
      petSpecies: "krawk",
      petName: "gatorboi"
    }],
    neopoints: 1868250
  })

  // Function to render the current page
  const renderCurrentPage = () => {
    switch(currentPage) {
      case 'petcentral':
        return <PetCentral />;
      case 'bank':
        return <Bank userInfo={userInfo} setUserInfo={setUserInfo} />;
      case 'shop':
        return <Shop />;
      case 'createpet':
        return <CreateAPet setUserInfo={setUserInfo} />;
      default:
        return <MainPage />;
    }
  };

  return (
    <>
      <SidebarItem 
        userName={userInfo.userName} 
        petName={userInfo.pets[0].petName} 
        np={userInfo.neopoints}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <div className="main-content">
        {renderCurrentPage()}
      </div>
    </>
  )
}

export default App
