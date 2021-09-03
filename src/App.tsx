import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { theme } from './styles/theme';
import { Routes } from './routes';
import { SidebarProvider } from './hooks/useSidebar';
import { queryClient } from './services/queryClient';
import { makeServer } from './services/mirage';

makeServer();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <SidebarProvider>
            <Routes />
          </SidebarProvider>
        </ChakraProvider>

        <ReactQueryDevtools />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
