import React from "react";
import { RenderOptions, render as tRender } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import { messages } from "../../i18n";
import { BrowserRouter } from "react-router-dom";
import ToastProvider from "../../contexts/toast";
import { AuthProvider } from "../../contexts/auth";
import { buildUserTest } from "./buildUserTest";
import { User } from "../../models/User";


type renderOptions = Partial<{
  locale: string;
  route: string,
  userProps: Partial<User>,
}> & RenderOptions

function render(
  ui: React.ReactElement,
  { 
    locale = "BR", 
    route = "/", 
    userProps,
    ...renderOptions
  }: renderOptions = {}
) {
  window.history.pushState({}, "Test page", route);
  const userMock = buildUserTest(userProps);

  function build() {
    return (
      <IntlProvider locale={locale} messages={messages}>
        <ToastProvider>
          <AuthProvider userMock={userMock}>
            {ui}
          </AuthProvider>
        </ToastProvider>
      </IntlProvider>
    );
  }

  return {
    ...tRender(build(), { wrapper: BrowserRouter, ...renderOptions}),
    user: userMock
  };
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render };
