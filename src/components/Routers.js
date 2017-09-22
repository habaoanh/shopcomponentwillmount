import React from 'react';
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation';
import Cart from './Shop/Cart/Cart';
import Home from './Shop/Home/Home';
import ProductDetail from './Shop/Home/ProductDetail';
import ListProduct from './Shop/Home/ListProduct';
import Contact from './Shop/Contact/Contact';
import Gioithieu from './Shop/Contact/Gioithieu';
import Search from './Shop/Search/Search';
import Menu from './Shop/Menu/Menu';

import Authentication from './Shop/Authentication/Authentication';
import Changeinfo from './Shop/Changeinfo/Changeinfo';
import OrderHistory from './Shop/OrderHistory/OrderHistory';

export const HomeStack = StackNavigator({
	Manhinh_Home: {
		screen: Home,
		navigationOptions:
		{
			header: null,
			title: 'Wearing a Dress'
		}
	},
	
	Manhinh_ListProduct: {
		screen: ListProduct,
		navigationOptions: {
			title: 'cac loai San Pham',
			header: null,
		}
	},

	Manhinh_ProductDetail: {
		screen: ProductDetail,
		navigationOptions: {
			title: 'Shop Chi Tiết',
			header: null,
		}
	}

});

export const CartStack = StackNavigator({
	Manhinh_Cart: {
		screen: Cart,
		navigationOptions: {
			title: 'Mua Sam',
			header: null
		}
	},
	
});


export const ContactStack = StackNavigator({
	Manhinh_Map: {
		screen: Contact,
		navigationOptions: {
			title: 'Lien He',
			header: null
		}
	},

	Manhinh_Gioithieu: {
		screen: Gioithieu,
		navigationOptions: {
			title: 'Gioi Thieu Ve App',
			header: null,
		}
	},
});

export const Tabs = TabNavigator({
	Home: {
		screen: HomeStack,
		navigationOptions: {
			tabBarLabel: 'HOME'
		}
	},
	Cart: {
		screen: CartStack,
		navigationOptions: {
			tabBarLabel: 'CART'
		}
	},
	Searchbar: {
		screen: Search,
		navigationOptions: {
			tabBarLabel: 'SEARCH'
		}
	},
	Contactbar: {
		screen: ContactStack,
		navigationOptions: {
			tabBarLabel: 'CONTACT'
		}
	},
},
	{
		tabBarPosition: 'bottom',
		swipeEnabled: true,
		tabBarOptions: {
			style: {
				backgroundColor: '#dddddd'
			},
			inactiveTintColor: 'green',
			activeTintColor: 'red'
		}
	});

export const SideMenu = DrawerNavigator({
	Tabbar: {
		screen: Tabs
	},
	Authentication: {
		screen: Authentication
	},
	Changeinfo: {
		screen: Changeinfo
	},
	OrderHistory: {
		screen: OrderHistory
	},

},
	{
		//drawerWidth: 300,
		drawerPosition: 'left',
		contentComponent: props => <Menu {...props} />
	}
);
