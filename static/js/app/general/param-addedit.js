$(function() {
    var code = getQueryString('code');
    var noteConfig = {
        title: '参数值',
        field: 'note',
        required: true
    };
    reqApi({
        code: '807716',
        json: {
            id: code
        },
        sync: true
    }).then(function(data) {
        if (data.ckey == "cswDescription" || data.ckey == 'cswReward' || data.ckey == "cswRule") {
            noteConfig.type = "textarea";
        }
    })

    var fields = [{
        title: '参数键',
        field: 'ckey',
        required: true,
        maxlength: 20
    }, noteConfig, {
        title: '参数说明',
        field: 'cvalue',
        required: true,
        maxlength: 255
    }, {
        title: '备注',
        field: 'remark',
        maxlength: 250
    }];

    buildDetail({
        fields: fields,
        code: code,
        addCode: "807710",
        detailCode: '807716',
        editCode: '807711'
    });
});