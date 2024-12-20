# WHOAMI

https://whoami-mbtitest.vercel.app/

<img width="1406" alt="스크린샷 2024-09-11 오후 3 40 34" src="https://github.com/user-attachments/assets/185839e1-7500-4561-afbb-4b496fa3ab0d">

<img width="1430" alt="스크린샷 2024-09-11 오후 3 41 12" src="https://github.com/user-attachments/assets/c094f908-7943-4e12-8080-f1ab6d7ad2b3">
<img width="1400" alt="스크린샷 2024-09-11 오후 3 41 30" src="https://github.com/user-attachments/assets/cea37617-1cec-48c8-9e78-514d9a294f3c">
<img width="1353" alt="스크린샷 2024-09-12 오후 1 51 15" src="https://github.com/user-attachments/assets/147ee3a4-a577-4b80-bdf5-1490b7fe82af">
<img width="1338" alt="스크린샷 2024-09-12 오후 1 53 06" src="https://github.com/user-attachments/assets/5616aed4-78ef-4131-a38f-d10776ff3d20">

---

## 🌟프로젝트 소개🌟

개인을 알아가는 시간이 부족한 현대, MBTI테스트로 나를 알아보고 타인과 공유하는 사이트

---

## 🚩 프로젝트 개요

- **프로젝트명** &nbsp; :&nbsp;
  **WHOAMI?**
- **진행 기간** &nbsp;: &nbsp;
  **24.09.09 ~ 24.09.11**

## 📚 STACKS

<div align=Left>
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
<img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/styled Components-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
<img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/git actions-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/VSCODE-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
<img src="https://img.shields.io/badge/VERCEL-007ACC?style=for-the-badge&logo=VERCEL&logoColor=white">


</div>

---

## ✨ 기능 설명

##### 1. 메인페이지

- 페이지 소개

##### 2. 로그인& 회원가입

- json-server / axio 를 사용한 로그인 회원가입

##### - 로그인 전 후 Header메뉴 변경

- 로그인 전 : SIGNUP, LOGIN, NEW TEST(클릭 시 LOGIN이동), ALL RESULT
- 로그인 후 : LOGOUT, MYPAGE, NEW TEST, ALL RESULT

##### - 로그인 한 사용자와 하지 않은 사용자의 페이지 접근성 관리

- MYPAGE(profile)
- NEW TEST

##### 3. 마이페이지

- 회원가입시 설정한 이메일 조회
- 닉네임 변경
- 개인 테스트 결과 조회 및 삭제

##### 4. 테스트페이지

- MBTI 항목별 체크 후 제출 시 결과조회 가능

##### 5. 결과페이지

- 모든 유저들의 결과를 조회가능

---

## 💥 Trouble Shooting

##### 문제점&해결방법

1. 공통 컴포넌트 버튼, 인풋 props 정보받기
   tailwindcss를 이번에 처음 사용해보면서 공통 컴포넌트에는 tailwindcss가 적합하지 않다는 생각이 들어 공통으로 사용하는 button, input은 styled-components를 사용해 디자인하게 되었다.
   공통으로 사용되는 부분들이 많지만 부분적으로 달라야 할 부분들이 많아 props로 값들을 받고 props로 받은 값들을 prop로 받은 값이 있을 때와 default값을 같이 넣어주어 디자인했다.

```js
const Button = ({
  type,
  onClick,
  children,
  width,
  border,
  backgroundColor,
  color,
  height,
}) => {
  return (
    <ButtonStyled
      type={type}
      onClick={onClick}
      width={width}
      border={border}
      backgroundColor={backgroundColor}
      color={color}
      height={height}
    >
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  width: ${(props) => props.width || "25%"};
  height: ${(props) => props.height || "25px"};
  font-size: 0.7rem;
  border: ${(props) => props.border || "none"};
  text-align: center;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor || "inherit"};
  color: ${(props) => props.color || "black"};
  cursor: pointer; /* 버튼에 마우스 커서를 손 모양으로 변경 */
`;
```

2. TailwindCss사용
   이번에 처음으로 tailwindcss를 사용하게 됐는데 기존에 사용했던 styledComponent나 css와는 다르게 이름을 정할 필요가 없고
   tailwind.config.js에서 사용자 설정 색상이나 폰트크기, 폰트스타일들을 지정해 간편하게 사용할 수 있는 점에서 편리했다. 하지만 스타일을 많이 주어야할 때 가독성이 떨어지는 느낌이 들었고 이것을 적절히 styled-components와 섞어 쓰는 것이 좋을 것 같다고 느꼈다. 또 tailwind의 문법에 아직 익숙하지 않아 내가 원하는 디자인을 빠른 시간내에 구현하는 게 쉽지 않았지만 명명법을 조금 더 익히면 편리하게 쓸 수 있을 것 같다.
3. 로그인, 회원가입 기능
   axios과 json-server를 사용해 기능 개발을 하게 되었는데 이 과정에서 유저 정보를 zustand에서 유저상태를 관리하는 과정에 문제를 겪었다.
   protected Router를 만들기 위해 user상태를 zustand를 사용해 bearsStore.js를 만들어 user의 기본값을 null로 주고 로그인을 하면 setUser함수로 user의 상태를 변경시켜주었다.
   회원가입을 하고 json-server에 정보가 들어왔는데 로그인이 계속해서 되지 않아 어떤 것 때문인지 알 수 없었는데 localhost를 사용하지않고 moneyful API를 사용해 RESTAPI를 사용하니 해결이 되었다.

```js
const API_URL = "https://moneyfulpublicpolicy.co.kr";

// 회원가입
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

// 로그인
export const login = async (userData) => {
  const { setUser } = useBearsStore.getState();
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    const user = response.data;
    setUser(user); // 로그인 성공 시 user 상태 업데이트
    return user;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};
```
