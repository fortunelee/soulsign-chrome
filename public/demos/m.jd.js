// ==UserScript==
// @name              京东APP签到+翻牌
// @namespace         https://github.com/inu1255/soulsign-chrome
// @version           1.0.2
// @author            inu1255
// @loginURL          https://passport.jd.com/new/login.aspx
// @updateURL         https://gitee.com/inu1255/soulsign-chrome/raw/master/public/demos/m.jd.js
// @expire            900e3
// @domain            api.m.jd.com
// @domain            passport.jd.com
// @param             name 账号
// @param             pwd 密码
// ==/UserScript==

exports.run = async function(param) {
    var { data } = await axios.get('https://api.m.jd.com/client.action?functionId=signBeanStart&body=%7B%7D&client=ld&clientVersion=1.0.0');
    var { data } = await axios.get('https://api.m.jd.com/client.action?functionId=getCardResult&body=%7B%22index%22%3A1%7D&client=ld&clientVersion=1.0.0');
    if (data.code == 0) return data.errorMessage || '签到成功';
    throw data.errorMessage;
};

exports.check = async function(param) {
    var { data } = await axios.get('https://passport.jd.com/loginservice.aspx?method=Login&callback=jsonpLogin', {
        headers: {
            'Referer': 'https://www.jd.com/'
        }
    });
    if (/Unick/.test(data)) {
        return true;
    }
    if (!param.pwd || !param.name) return false;
    // TODO: 使用 param.name,param.pwd 登录
};