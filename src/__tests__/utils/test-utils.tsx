import React from "react";
import {
  RenderOptions,
  render as tRender,
  renderHook as tRenderHook,
} from "@testing-library/react";
import { IntlProvider } from "react-intl";
import { messages } from "../../i18n";
import ToastProvider from "../../contexts/toast";
import { AuthProvider } from "../../contexts/auth";
import { buildUserTest } from "./buildUserTest";
import { User } from "../../models/User";
import { BrowserRouter } from "react-router-dom";
import "happy-dom"
import "@testing-library/jest-dom"

type renderOptions = Partial<{
  locale: string;
  route: string;
  userProps: Partial<User>;
}> &
  RenderOptions;

function buildWrapper(
  ui: React.ReactElement,
  locale: string,
  userMock: User | undefined,
  route: string
) {
  window.history.pushState({}, "Test page", route);

  return (
    <BrowserRouter>
      <IntlProvider locale={locale} messages={messages}>
        <ToastProvider>
          <AuthProvider userMock={userMock}>{ui}</AuthProvider>
        </ToastProvider>
      </IntlProvider>
    </BrowserRouter>
  );
}

function render(
  ui: React.ReactElement,
  {
    locale = "BR",
    route = "/",
    userProps,
    ...renderOptions
  }: renderOptions = {}
) {
  const userMock = buildUserTest(userProps);

  return {
    ...tRender(buildWrapper(ui, locale, userMock, route), { ...renderOptions }),
    userMock,
  };
}

function renderHook(
  hook: (props?: any) => any,
  { locale = "BR", route = "/", userProps }: renderOptions = {}
) {
  const userMock = buildUserTest(userProps);

  return tRenderHook(hook, {
    wrapper: ({ children }) => buildWrapper(children, locale, userMock, route),
  });
}

// re-export everything
export * from "@testing-library/react";

// override render method
export { render, renderHook };
