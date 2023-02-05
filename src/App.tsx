import { IntlProvider } from "react-intl";
import { AuthProvider } from "./contexts/auth";
import ToastProvider from "./contexts/toast";
import { messages } from "./i18n";
import Routes from "./routes";
import GlobalStyle from "./styles/GlobalStyle";
import { LoaderProvider } from "./contexts/loader";

function App() {
  GlobalStyle();

  return (
    <IntlProvider locale="pt-BR" defaultLocale="en" messages={messages}>
      <ToastProvider>
        <LoaderProvider>
          <AuthProvider>
            <Routes />
          </AuthProvider>
        </LoaderProvider>
      </ToastProvider>
    </IntlProvider>
  );
}

export default App;
