export const loginData = {
  title: '로그인',
  inputs: [
    {
      id: 1,
      type: 'email',
      placeholder: '아이디 또는 이메일',
      testId: 'email-input',
    },
    {
      id: 2,
      type: 'password',
      placeholder: '비밀번호',
      testId: 'password-input',
    },
  ],
  button: {
    text: '로그인',
    testId: 'signin-button',
  },
  toggle: {
    text: '아직 회원이 아니신가요? 회원가입',
    handleNavigate: '/signup',
  }
}