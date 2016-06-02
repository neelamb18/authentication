// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'      : '283198848687068', // your App ID
        'clientSecret'  : '43c4780b56fd2988cb0dd3a5d2f98d08', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'nksil2On4DHj7nwrSrEFz4ZnP',
        'consumerSecret'    : 'reWBP2UXp1S7pm3tazbVNrDgDpdp4zhCQm3Xi7a8gydJ4AzeKO',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '98669258441-b73hh0rf8sstf8753g8qr5m1ui5bo4tb.apps.googleusercontent.com',
        'clientSecret'  : 'a10udfy8e_DAY2L0YEoBwycB',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }

};