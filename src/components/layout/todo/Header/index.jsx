import { useNavigate } from 'react-router-dom';
import { Styled } from './style';

const Header = () => {
  const navigator = useNavigate();
  const onLogout = () => {
    localStorage.removeItem('access_token');
    navigator('/');
    alert('로그아웃 되었습니다.');
  };

  return (
    <Styled.Container>
      <Styled.Title>To Do List</Styled.Title>
      <Styled.Button onClick={onLogout}>로그아웃</Styled.Button>
    </Styled.Container>
  );
};

export default Header;
