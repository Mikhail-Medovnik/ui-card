import { MantineProvider } from '@mantine/core';
import { theme, resolver } from './theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MantineProvider theme={theme} cssVariablesResolver={resolver}>
      {children}
    </MantineProvider>
  );
}
