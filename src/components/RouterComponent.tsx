import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GenerateCard } from '../pages/GenerateCard';
import { MainPage } from '../pages/MainPage';
import { NoMatch } from './NoMatch';
import { PageView } from './PageView';

export const RouterComponent = () => {
  return (
    <BrowserRouter
      future={{
        v7_relativeSplatPath: true,
        v7_startTransition: true,
      }}
    >
      <Routes>
        <Route element={<PageView />}>
          <Route path="/" element={<MainPage />} />
          <Route path="generate" element={<GenerateCard />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
