export const loginData = {
  title: 'TODAY\'S TO DO',
  inputs: {
    email: {
      id: 1,
      type: 'text',
      placeholder: '아이디 또는 이메일',
      testId: 'email-input',
    },
    password: {
      id: 2,
      type: 'password',
      placeholder: '비밀번호',
      testId: 'password-input',
    },
  },
  button: {
    text: '로그인',
    testId: 'signin-button',
  },
  toggle: {
    text: '아직 회원이 아니신가요? 회원가입',
    handleNavigate: '/signup',
  }
}