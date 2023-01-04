import { Component, ErrorInfo, ReactNode } from "react";
import { IntlContext } from "react-intl";
import { Flex } from "../base/Utils";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component<React.PropsWithChildren> {
  state = { hasError: false };
  
  static contextType = IntlContext;
  declare context: React.ContextType<typeof IntlContext>

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("ErrorBoundary catch following error: ", error, errorInfo);
  }

  render(): ReactNode {
    const { formatMessage } = this.context;

    if (this.state.hasError) {
      return (
        <Flex
          css={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            height: "50vh",
            gap: "$6"
          }}
        >
          <h2>Ops!</h2>
          <h3>{formatMessage({ id: "messages.somethingWentWrong" })}</h3>
          <Link to={"/"}>{formatMessage({ id: "messages.clickHereGoBackHomePage" })}</Link>
        </Flex>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary
