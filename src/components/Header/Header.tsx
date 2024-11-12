import { useNavigate } from 'react-router-dom';
import { HeaderWrapper, Logo } from './Header.styles';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <span role="img" className="material-symbols-outlined">
        add_photo_alternate
      </span>
      <Logo role="button" onClick={() => navigate('/')}>
        <h1>Inspire Image</h1>
        <div>Create your own card</div>
      </Logo>
    </HeaderWrapper>
  );
};
