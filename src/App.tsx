import React, { FC } from 'react';
import {QueryClient, QueryClientProvider} from 'react-query'
import SideBar from './components/SideBar';

const App:FC = () =>{

  const queryClient = new QueryClient()
  return (
     <QueryClientProvider client={queryClient}>
       <SideBar/>
     </QueryClientProvider>
  );
}

export default App;
