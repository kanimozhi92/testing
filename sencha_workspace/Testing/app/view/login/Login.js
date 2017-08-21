xt.define('Testing.login.Login',{
	extend        : 'Ext.window.Window',
	alias         : 'widget.login',
	requires      : [
		'Testing.login.LoginController'
	],
	width         : 400,
	height        : 300,
	autoShow      : true,
	closable      : false,	
	resizable     : false,
	draggable     : false,
	title         : 'Welcome to Testin App',
	controller    : 'login',
	initComponent : function(){
		var me = this;

		me.items = me.buildItems();
		me.buttons = me.buildButtons();
		me.callParent(arguments);
	},
	buildItems : function(){
		return [{
			xtype       : 'form',
			bodyPadding : 20,
			items       : [{
				xtype        : 'textfield',
				fieldLabel   : 'Username',
				value        : 'admin',
			},{
				xtype        : 'textfield',
				inputType    : 'password',
				fieldLabel   : 'Password',
				value        : 'admin'
			}]
		}]
	},
	buildRolesStore : function(){
		var store = Ext.create('Ext.data.Store', {
		    fields: [],
		    data : [
		    	{"name":"admin", "value":"admin"}
		    ]
		});

		return store;
	},
	buildButtons : function(){
		return [{
			text    : 'Login',
			handler : 'onClickLogin'
		},{
			text    : 'Reset',
			handler : 'onClickReset'
		}]
	}
});