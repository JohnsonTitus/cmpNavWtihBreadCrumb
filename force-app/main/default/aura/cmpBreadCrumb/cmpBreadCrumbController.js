({
    /*
    init: function (cmp, event, helper) {
        var myBreadcrumbs = [
            {label: 'Account', name: 'objectName' },
            {label: 'Record Name', name: 'record' }
        ];
        cmp.set('v.myBreadcrumbs', myBreadcrumbs);
    },
    navigateTo: function (cmp, event, helper) {
        //get the name of the breadcrumb that's clicked
        var src = event.getSource().get('v.name');

        //your custom navigation here
        if(src == "objectName"){
            cmp.set("v.path", "/lightning/o/Account/list");
        } else if(src == "record"){
            cmp.set("v.path", "/lightning/r/Account/0012w00000AFe2LAAT/view");
        }

        
    }
    */
   setNavigationEvent : function(component, event, helper){
 
    var index = event.getParam("navIndexEvent");
    var navbNew = [];
    var navb = component.get("v.FixedBreadcrumbs");
    for(i=0; i<=index; i++){
        navbNew.push(navb[i]);
    }
    component.set("v.itemName",navb[index]);
    component.set("v.Breadcrumbs",navbNew);
    },

    next : function(component, event, helper){
    var navb = component.get("v.FixedBreadcrumbs");
    var navbNew = component.get("v.Breadcrumbs");
    //as it a single item it will return len 1
    var len = navbNew.length;
    //retaining the len it will add the second item
    //as the index begins with 0
    navbNew.push(navb[len]);
    component.set("v.itemName",navb[len]);
    component.set("v.Breadcrumbs",navbNew);
    },

    previous : function(component, event, helper){
        component.set("v.Breadcrumbs",null);
        var navb = component.get("v.FixedBreadcrumbs");
        let navbNew = [];
        navbNew.push(navb[0]);
        component.set("v.itemName",navb[0]);
        component.set("v.Breadcrumbs",navbNew);
        
    }
})
