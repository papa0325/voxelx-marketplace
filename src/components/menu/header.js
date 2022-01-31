import React, { useEffect, useState } from "react";
import Breakpoint, { BreakpointProvider, setDefaultBreakpoints } from "react-socks";
//import { header } from 'react-bootstrap';
import { Link } from '@reach/router';
import useOnclickOutside from "react-cool-onclickoutside";


setDefaultBreakpoints([
  { xs: 0 },
  { l: 1199 },
  { xl: 1200 }
]);

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        className: isCurrent ? 'active' : 'non-active',
      };
    }}
  />
);

const Header = function({ className }) {

    const [openMenu, setOpenMenu] = React.useState(false);
    const [openMenu1, setOpenMenu1] = React.useState(false);
    const [openMenu2, setOpenMenu2] = React.useState(false);
    const [openMenu3, setOpenMenu3] = React.useState(false);
    const handleBtnClick = () => {
      setOpenMenu(!openMenu);
    };
    const handleBtnClick1 = () => {
      setOpenMenu1(!openMenu1);
    };
    const handleBtnClick2 = () => {
      setOpenMenu2(!openMenu2);
    };
    const handleBtnClick3 = () => {
      setOpenMenu3(!openMenu3);
    };
    const closeMenu = () => {
      setOpenMenu(false);
    };
    const closeMenu1 = () => {
      setOpenMenu1(false);
    };
    const closeMenu2 = () => {
      setOpenMenu2(false);
    };
    const closeMenu3 = () => {
      setOpenMenu3(false);
    };

    const ref = useOnclickOutside(() => {
      closeMenu();
    });
    const ref1 = useOnclickOutside(() => {
      closeMenu1();
    });
    const ref2 = useOnclickOutside(() => {
      closeMenu2();
    });
    const ref3 = useOnclickOutside(() => {
      closeMenu3();
    });


    const [showmenu, btn_icon] = useState(false);
    const [showpop, btn_icon_pop] = useState(false);
    const [shownot, btn_icon_not] = useState(false);
    const closePop = () => {
      btn_icon_pop(false);
    };
    const closeNot = () => {
      btn_icon_not(false);
    };
    const refpop = useOnclickOutside(() => {
      closePop();
    });
    const refpopnot = useOnclickOutside(() => {
      closeNot();
    });

    useEffect(() => {
      const header = document.getElementById("myHeader");
      const totop = document.getElementById("scroll-to-top");
      const sticky = header.offsetTop;
      const scrollCallBack = window.addEventListener("scroll", () => {
        btn_icon(false);
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
          totop.classList.add("show");

        } else {
          header.classList.remove("sticky");
          totop.classList.remove("show");
        } if (window.pageYOffset > sticky) {
          closeMenu();
        }
      });
      return () => {
        window.removeEventListener("scroll", scrollCallBack);
      };
    }, []);

  const [account, setAccount] = useState('')

  const connectWallet = async () => {
      try {
        const account = await window.ethereum.enable();
        setAccount(account[0]);
      } catch (err) {
        console.log(err);
      }
    }

  return (
    <header className={`navbar white ${className}`} id="myHeader">
     <div className='container'>
       <div className='row w-100-nav'>
          <div className='logo px-0'>
              <div className='navbar-title navbar-item'>
                <NavLink to="/">
                  <img
                      src="/img/logo.png" width={250}
                      className="img-fluid d-block"
                      alt="#"
                  />
                </NavLink>
              </div>
          </div>

          <div className='search'>
            <input id="quick_search" className="xs-hide" name="quick_search" placeholder="search art here..." type="text" />
          </div>

          <BreakpointProvider>
            <Breakpoint xl>
              <div className='menu'>
                <div className='navbar-item'>
                  <div ref={ref1}>
                    <div className="dropdown-custom btn" onMouseEnter={handleBtnClick1} onMouseLeave={closeMenu1}><span className='lines'></span>
                      <NavLink to="/explore">Explore</NavLink>
                    </div>
                  </div>
                </div>
                <div className='navbar-item'>
                  <div ref={ref2}>
                    <div className="dropdown-custom dropdown-toggle btn" onMouseEnter={handleBtnClick2} onMouseLeave={closeMenu2}>Stats
                      <span className='lines'></span>
                      {openMenu2 && (
                        <div className='item-dropdown'>
                          <div className="dropdown" onClick={closeMenu2}>
                            <NavLink to="/activity">Activity</NavLink>
                            <NavLink to="/ranking">Rankings</NavLink>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className='navbar-item'>
                  <div ref={ref1}>
                    <div className="dropdown-custom btn" onMouseEnter={handleBtnClick1} onMouseLeave={closeMenu1}>Resource<span className='lines'></span></div>
                  </div>
                </div>
                <div className='navbar-item'>
                  <div ref={ref3}>
                    <div className="dropdown-custom btn" onMouseEnter={handleBtnClick3} onMouseLeave={closeMenu3}>Create<span className='lines'></span>
                    </div>
                  </div>
                </div>
              </div>
            </Breakpoint>
          </BreakpointProvider>

          <div className='mainside'>
            <div className='connect-wal'>
              {
                !account ? <a onClick={connectWallet} className="btn-main lead">Connect wallet</a>
                  : <a onClick={connectWallet} className="btn-main lead">{ account.substr(0,5) + '...' + account.substr(-4)}</a>
              }
            </div>
          </div>
      </div>

        <button className="nav-icon" onClick={() => btn_icon(!showmenu)}>
          <div className="menu-line white"></div>
          <div className="menu-line1 white"></div>
          <div className="menu-line2 white"></div>
        </button>

      </div>
    </header>
    );
}
export default Header;