import { Link, Route, Routes } from "react-router-dom";
import Footer from "../screens/Footer";
import Header from "../screens/Header";
import PetReg from "./PetReg";
import UserModi from "./UserModi";
import { useState } from "react";

function UserMy() {
    const [userNickname, setUserNickname] = useState('보호자 닉네임');
    
    return (
        <div className="web-container">
            <div className="cd-container bg-white bg-dogs">

                <Header />
                <main className="cd-main dis-center">

                    <section className="section-header">
                        <div className="section-header-container">
                            <span className="section-header-text">마이 페이지</span>
                        </div>
                    </section>

                    {/* 로그인한 보호자의 닉네임이 보입니다 */}
                    <section className="mypage-title-section">
                        <div className="mypage-title-container">
                            <div className="mypage-title-text">안녕하세요! <span className="color-nomal">{userNickname}</span>님!</div>
                        </div>
                    </section>

                    <section className="shop-main-section bg-white">
                        <ul className="nav-ul">

                            <li className="nav-li ">
                                <div>
                                    <i className="fas fa-caret-square-right mypage-arrow"></i><Link to="usermodi">보호자 정보 수정하기</Link>
                                </div>
                                <i className="fas fa-store"></i>
                            </li>

                            <li className="nav-li">
                                <div>
                                    <i className="fas fa-caret-square-right mypage-arrow"></i><Link to="cl-reservation.html">예약 확인하기</Link>
                                </div>
                                <i className="fas fa-store"></i>
                            </li>

                            <li className="nav-li">
                                <div>
                                    <i className="fas fa-caret-square-right mypage-arrow"></i><Link to="petreg">반려동물 등록/수정하기</Link>
                                </div>
                                <i className="fas fa-store"></i>
                            </li>
                        </ul>

                        <Routes>
                            <Route path='petreg' element={<PetReg />} />
                            <Route path='usermodi/:num' element={<UserModi />} />
                        </Routes>
                    </section>
                </main>

                <Footer />

            </div>
        </div>
    );
}

export default UserMy;