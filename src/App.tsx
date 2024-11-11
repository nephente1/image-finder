import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { RouterComponent } from './components/RouterComponent';
import { StateProvider } from './components/StateProvider';
import { GlobalStyle, THEME } from './shared/theme';

const queryClient = new QueryClient();
const App = () => {
  return (
    <StateProvider>
      <QueryClientProvider client={queryClient}>
        <StyledThemeProvider theme={THEME}>
          <GlobalStyle />
          <RouterComponent />
        </StyledThemeProvider>
      </QueryClientProvider>
    </StateProvider>
  );
};

export default App;
