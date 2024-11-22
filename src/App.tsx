import isPropValid from '@emotion/is-prop-valid';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider as StyledThemeProvider, StyleSheetManager } from 'styled-components';
import { RouterComponent } from './components/RouterComponent';
import { StateProvider } from './components/StateProvider';
import { GlobalStyle, THEME } from './shared/theme';

const queryClient = new QueryClient();
const App = () => {
  return (
    <StateProvider>
      <QueryClientProvider client={queryClient}>
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
          <StyledThemeProvider theme={THEME}>
            <GlobalStyle />
            <RouterComponent />
          </StyledThemeProvider>
        </StyleSheetManager>
      </QueryClientProvider>
    </StateProvider>
  );
};

export default App;

// This implements the default behavior from styled-components v5
function shouldForwardProp(propName: string, target: unknown) {
  if (typeof target === 'string') {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return isPropValid(propName);
  }
  // For other elements, forward all props
  return true;
}
