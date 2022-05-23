import { Component } from "react";
{
  /* import Page404 from "../pages/page404/Page404"; */
}
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // Gửi thông tin error lên server để dev nhận thông tin fix bug
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <h1>OPPS SOMETHING WENT WRONG</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
