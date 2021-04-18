import './styles/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { primaryColor, darkPrimary } from './styles/colors'
import Header from './components/Header/Header'
import BlogView from './components/BlogView/BlogView'
import NotFound from './components/NotFound/NotFound'
// import Home from './components/Home/Home'
import Home from './pages/Home/Home'
import Alert from './components/Alert/Alert'
// import store, { persistor } from "./store";

import store from './redux/store'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: primaryColor,
		},
		secondary: {
			main: darkPrimary,
		},
	},
})

function App() {
	return (
		<Provider store={store}>
			{/* <PersistGate loading={null} persistor={persistor}> */}
			<Router>
				<ThemeProvider theme={theme}>
					<Header />
					{/* <Alert /> */}
					<Switch>
						<Route exact path='/' component={Home} />
						{/* <Route exact path='/blog-view' component={BlogView} /> */}
						<Route component={NotFound} />
					</Switch>
				</ThemeProvider>
			</Router>
			{/* </PersistGate> */}
		</Provider>
	)
}

export default App
