const url = 'https://ploggingtest.swygbro.com/';

function setShare() {
    var resultImg = document.querySelector('#resultImg');
    var resultAlt = resultImg.firstElementChild.alt;
    const shareTitle = '나의 유형별 쓰줍러 결과';
    const shareDes = infoList[resultAlt].name + infoList[resultAlt].desc;
    const shareImage ='./shareimg/result' + resultAlt + '.png';
    const shareURL = url;
    console.log(shareImage);

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
