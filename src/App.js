import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { primaryColor, darkPrimary } from "./styles/colors";
// import Header from './components/Header/Header'
import Header from "./components/Layout/Header/Header";
import BlogView from "./components/BlogView/BlogView";
import NotFound from "./components/NotFound/NotFound";
// import Home from './components/Home/Home'
import Home from "./pages/Home/Home";
import Alert from "./components/Alert/Alert";
// import store, { persistor } from "./store"
import Theme from "./components/Theme/Theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SnackbarProvider } from "notistack";
import Notifier from "./components/Notifier/Notifier";
import store from "./redux/store";

// const theme = createMuiTheme({
// 	palette: {
// 		primary: {
// 			main: primaryColor,
// 		},
// 	},
// })

function App() {
	return (
		<>
			<Provider store={store}>
				<Theme>
					<>
						<CssBaseline />
						<SnackbarProvider>
							<Notifier />
							<Router>
								<Header />
								{/* <Alert /> */}
								<Switch>
									<Route exact path="/" component={Home} />
									{/* <Route exact path='/blog-view' component={BlogView} /> */}
									<Route component={NotFound} />
								</Switch>
							</Router>
						</SnackbarProvider>
					</>

					{/* <PersistGate loading={null} persistor={persistor}> */}

					{/* </PersistGate> */}
				</Theme>
			</Provider>
		</>
	);
}

export default App;
