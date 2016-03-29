var env = (function(){

	var o = {};
	o.availableInstances = ['DEV', 'CI', 'SIT', 'PREPROD'];
	o.instance = {
		'DEV':{
			type: 'local',
			baseUrl: 'scripts/app/mock/json/'
		},
		'CI':{
			type: 'local',
			baseUrl: 'scripts/app/mock/json/'	
		},
		'SIT':{
			type: 'local',
			baseUrl: 'scripts/app/mock/json/'
		},
		'PREPROD':{
			type: 'local',
			baseUrl: 'scripts/app/mock/json/'	
		}
	};

	o.currentInstance = 'DEV';
	o.getCurrentInstance = function(){
		return o.instance[o.currentInstance];
	};

	o.getInstance = function(instanceString){
		if(typeof instanceString === 'string'){
			if(o.availableInstances.indexOf(instanceString.toUpperCase()) !== -1){
				return o.instance[o.availableInstances[instanceString]];
			}
		}
	};

	o.setInstance = function(instanceString, instance){
		if(typeof instanceString === 'string'){
			if(o.availableInstances.indexOf(instanceString.toUpperCase()) !== -1){
				o.currentInstance = instanceString.toUpperCase();
				for(var key in instance){
					o.instance[instanceString].key = instance[key];
				}
			}
		}
	};

	o.getBaseUrlPath = function(){
		return o.instance[o.currentInstance].baseUrl;
	};

	o.getInstanceType = function () {
		return o.instance[o.currentInstance].type;
	};

	return {
		getCurrentInstance: o.getCurrentInstance,
		getInstance: o.getInstance,
		getBaseUrlPath: o.getBaseUrlPath,
		getInstanceType: o.getInstanceType,
		setInstance: o.setInstance
	};
})();