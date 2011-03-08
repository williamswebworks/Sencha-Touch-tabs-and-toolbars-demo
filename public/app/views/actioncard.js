(function() {

    topbar = new Ext.Toolbar({
        title: 'Top toolbar',
        dock: 'top',
        items: [
            {
                text: 'back',
                ui: 'back'
            },
            { xtype: 'spacer' },
            {
                text: 'edit',
                ui: 'action'
            }
        ]
    });

    options = new Ext.Toolbar({
        dock: 'top',
        items: [
            {
                xtype: 'segmentedbutton',
                items: [
                    { text: 'one' },
                    { text: 'two' },
                    { text: 'three' },
                ]
            }
        ]
    });

    textButtonShapes = new Ext.Toolbar({
        dock: 'bottom',
        items: [
            { text: 'back',     ui: 'back' },
            { text: 'normal',   ui: 'normal' },
            { text: 'small',    ui: 'small' },
            { text: 'round',    ui: 'round' },
            { text: 'forward',  ui: 'forward' },
        ]
    });

    textButtonColors = new Ext.Toolbar({
        dock: 'bottom',
        items: [
            { text: 'action',   ui: 'action' },
            { text: 'normal',   ui: 'normal' },
            { text: 'confirm',  ui: 'confirm' },
            { text: 'decline',  ui: 'decline' },
        ]
    });

    mixedTextButtons = new Ext.Toolbar({
        dock: 'bottom',
        items: [
            { text: 'action',   ui: 'action-round' },
            { text: 'action',   ui: 'action-small' },
            { text: 'confirm',  ui: 'confirm-round' },
            { text: 'confirm',  ui: 'confirm-small' },
            { text: 'decline',  ui: 'decline-round' },
            { text: 'decline',  ui: 'decline-small' },
        ]
    });

    imageButtons = new Ext.Toolbar({
        dock: 'bottom',
        items: [
            { iconCls: 'search',  iconMask: true },
            { iconCls: 'search',  iconMask: true,  ui: 'action' },
            { iconCls: 'search',  iconMask: true,  ui: 'confirm' },
            { iconCls: 'search',  iconMask: true,  ui: 'decline' },
            { iconCls: 'search',  iconMask: true,  ui: 'plain' },
        ]
    });

    ToolbarDemo.views.Actioncard = Ext.extend(Ext.Panel, {
        title: "action",
        iconCls: "action",
        dockedItems: [
            topbar,
            options,
            textButtonShapes,
            textButtonColors,
            mixedTextButtons,
            imageButtons
        ]
    });

})();
