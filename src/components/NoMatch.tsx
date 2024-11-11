import { Container, LinkCustom } from './styles';

export const NoMatch = () => {
  return (
    <Container>
      <h2>Nothing to see here!</h2>
      <p>Ups, page is not existing. Go back.</p>
      <p>
        <LinkCustom to="/">Go to the home page</LinkCustom>
      </p>
    </Container>
  );
};
