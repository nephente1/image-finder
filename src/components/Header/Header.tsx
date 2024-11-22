import { useNavigate } from 'react-router-dom';
import { HeaderWrapper, Logo } from './Header.styles';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <div role="img" className="material-symbols-outlined">
        add_photo_alternate
      </div>
      <Logo role="button" onClick={() => navigate('/')}>
        <div>Inspire Image</div>
        <div>Create your own card</div>
      </Logo>
    </HeaderWrapper>
  );
};
