import { Link } from "react-router-dom";
import Footer from "../screens/Footer";
import Swal from "sweetalert2";
import { useEffect,useState   } from "react";
import { useDispatch } from "react-redux";

function UserLogin() {



    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [isautoLogin, setIsAutoLogin] = useState(false);

    const onChangeId = (e) => {
        setId(e.target.value);
        console.log('id  : ' + id);

    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
        console.log('password  : ' + password);
    }

//session 저장? 쿠기저장? 
    const handleAutoLogin =(e)=>{
        //자동로그인 토글 초기상태 true
        const toggle = document.querySelector('.fa-check-circle');
        
        if(toggle.classList.contains('active')){
            setIsAutoLogin(true);
            toggle.classList.remove('active');
            toggle.style.color = '#ccc';
            console.log('자동로그인 해제' +isautoLogin);
        }else{
            setIsAutoLogin(false);
            toggle.classList.add('active');
            toggle.style.color = 'black';
            console.log('자동로그인 설정' +isautoLogin);
        }
    }

    const submit = (e) => {
        e.preventDefault();
        const loginInfo = {
            id: id,
            password: password,
            isautoLogin: isautoLogin
        }

        console.log(loginInfo);
        // axios.post('http://localhost:8090/user/login', loginInfo)
        //     .then((res) => {
        //         console.log(res);
        //         console.log(res.data);
        //         if (res.data === 1) {
        //             Swal.fire({
        //                 icon: 'success',
        //                 title: '로그인 성공',
        //                 text: '로그인에 성공하셨습니다.',
        //                 confirmButtonText: '확인'
        //             }).then((result) => {
        //                 if (result.isConfirmed) {
        //                     window.location.href = "/main";
        //                 }
        //             })
        //         } else {
        //             Swal.fire({
        //                 icon: 'error',
        //                 title: '로그인 실패',
        //                 text: '아이디 또는 비밀번호를 확인해주세요.',
        //                 confirmButtonText: '확인'
        //             })
        //         }
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
    }

    return (
        <>
            {/** 보호자 로그인 페이지 */}
            <div className="web-container">
                <div className="cd-container bg-white bg-dogs">
                    <main className="cd-main">

                        <section className="main-logo">
                            <img src="/img/logo/logo_color.png" alt="댕냥꽁냥 로고" />
                            <span className="main-logo-text">보호자 로그인</span>
                        </section>

                        <section className="form-section">
                            <form action="#" method="post" className="form-css">
                                <div className="form-container">
                                    <div className="input-container">

                                        {/** 보호자 로그인 
                                         * id : 보호자 ID
                                         * password : 보호자 패스워드
                                         */}

                                        {/** 보호자 ID */}
                                        <input type="text" id="id" name="id" placeholder="댕냥꽁냥 아이디" className="input-text" onChange={onChangeId} />

                                        {/** 보호자 비밀번호 */}
                                        <input type="password" id="password" name="password" placeholder="비밀번호" className="input-text" onChange={onChangePassword} />

                                        {/** 자동로그인, 회원가입 , 계정찾기, 비밀번호 찾기 */}
                                        <div className="login-tools">
                                            <span onClick={handleAutoLogin}><i className="fas fa-check-circle active"></i> 자동 로그인</span>
                                            <div>
                                                <span className="logintool-text"><Link to="/userjoin">회원가입</Link></span>
                                                <span className="logintool-text"><Link to="/findid">계정찾기</Link></span>
                                                <span className="logintool-text"><Link to="/findpassword">비밀번호 찾기</Link></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="button-container">
                                        {/** Submit BTN */}
                                        <button type="submit" className="main-btn btn-text magin-t-1"><a href="cl-main.html" className="btn-text" >로그인</a></button>
                                        {/** 카카오 로그인 */}
                                        <div className="main-btn kakao-login-btn"><i className="fas fa-comment"></i>카카오톡 로그인</div>
                                    </div>

                                </div>
                            </form>
                        </section>

                    </main>

                    <Footer />
                </div>
            </div>
        </>
    );
}

export default UserLogin;
