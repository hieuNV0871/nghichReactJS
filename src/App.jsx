import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { publicRoutes } from "./routes";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <div className="App">
          <Routes>
            {publicRoutes.map((route, index) => {
              const Page = route.component;
              let Layout = DefaultLayout;

              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }

              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
