const url = 'https://ploggingtest.swygbro.com/';

function setShare() {
    var resultImg = document.querySelector('#resultImg');
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = '유형별 쓰줍러 결과';
    const shareDes = infoList[resultAlt].name;
    const shareImage = url + 'resultimg/result' + resultAlt + '.jpg';
    const shareURL = url;

    Kakao.Link.sendDefault({
        objectType: 'feed',
        content: {
            title: shareTitle,
            description: shareDes,
            imageUrl: shareImage,
            link: {
                mobileWebUrl: shareURL,
                webUrl: shareURL
            },
        },

        buttons: [
            {
                title: '나도 참여하기',
                link: {
                    mobileWebUrl: shareURL,
                    webUrl: shareURL,
                },
            },
        ]
    });
}
