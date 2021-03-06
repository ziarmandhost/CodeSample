import React, { FC } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesList from "./RoutesList";
import { NotFound } from "./RoutesWithError";

// Flexible router, all routes info can be easily edited, all routes info stored in ./RoutesList.ts
export const RouterConfig = function () {
  return (
    <BrowserRouter>
      <Routes>
        {Object.keys(RoutesList).map((route, index) => {
          const RouteComponent: FC = RoutesList[route];
          return (
            <Route path={route} key={index} element={<RouteComponent />} />
          );
        })}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
