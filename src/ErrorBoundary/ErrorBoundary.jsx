import { Component } from "react";

class ErrorBoundary extends Component{
    constructor(props){
        super(props);
        this.state = {hasError: false, error: null, errorInfo: null}
    }

    static getDerivedStateFromError(error){
        // Update state so the next render shows the fallback UI
        return { hasError : true}
    }

    componentDidCatch(error, errorInfo){
     // You can log the error to an error reporting service
     console.error("Error caught by ErrorBoundary:", error, errorInfo);
     this.setState({error, errorInfo})
    }

    render(){
         if(this.state.hasError){
                // You can render any custom fallback UI
            return(
                <div>
                <h1>Something went wrong!</h1>
                <details style={{whiteSpace: "pre-wrap"}}>
                  {this.state.hasError && this.state.error.toString()}
                  <br/>
                  {this.state.errorInfo?.componentStack}
                </details>
                </div>
            )
         }
         return this.props.children;
    }
}

export default ErrorBoundary;

// class ErrorBoundary extends Component {
//     constructor(props) {
//       super(props); // Ensures `props` is initialized
//       this.state = { hasError: false };
//     }
  
//     static getDerivedStateFromError(error) {
//       return { hasError: true };
//     }
  
//     componentDidCatch(error, errorInfo) {
//       console.error("Error caught by ErrorBoundary:", error, errorInfo);
//     }
  
//     render() {
//       if (this.state.hasError) {
//         // return <h1>Something went wrong.</h1>;
//         return(
//                             <div>
//                             <h1>Something went wrong!</h1>
//                             <details style={{whiteSpace: "pre-wrap"}}>
//                               {this.state.error && this.state.error.toString()}
//                               <br/>
//                               {this.state.errorInfo?.componentStack}
//                             </details>
//                             </div>
//                         )
//       }
//       return this.props.children;
//     }
//   }
  
