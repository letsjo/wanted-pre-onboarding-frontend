export const joinData = {
  title: '회원가입',
  inputs: {
    email: {
      id: 1,
      type: 'text',
      placeholder: '이메일',
      testId: 'email-input',
    },
    password: {
      id: 2,
      type: 'password',
      placeholder: '비밀번호',
      testId: 'password-input',
      autoComplete: 'off',
    },
  },
  buttonData: {
    text: '가입하기',
    testId: 'signup-button',
  },
  toggleData: {
    text: '이미 회원이신가요? 로그인',
    handleNavigate: '/signin',
  }
}