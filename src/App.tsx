import '@fontsource/roboto';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@mantine/core/styles.css';
import { ThemeProvider } from './themeProvider';
import { Router } from './Router';

export default function App() {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
