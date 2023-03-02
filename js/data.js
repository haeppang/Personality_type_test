/*
INFP,0
INTP,1
ENFP,2
ENTP,3
INFJ,4
INTJ,5
ENFJ,6
ENTJ,7
*/

const qnaList = [
  {
    q: 'Q. 1 ',
    qlist : '나는 쓰줍할 때 사람들과 함께하는 것을 좋아한다',
    a: [
      { answer: '그렇다', type: [2, 3, 6, 7] },
      { answer: '그렇지 않다', type: [0, 1, 4, 5] }
    ]
  },
  {
    q: 'Q. 2',
    qlist : '나는 쓰줍할 때 텐션 높게 사람들을 쓰레기가 많은 곳으로 이끈다.',
    a: [
      { answer: '그렇다', type: [2, 3, 6, 7] },
      { answer: '그렇지 않다', type: [0, 1, 4, 5] },
     
    ]
  },
  {
    q: 'Q. 3 ',
    qlist : '나는 쓰줍할 때 인스타그램에 업로드 해 나의 쓰줍하는 모습을 널리널리 퍼뜨린다.',
    a: [
      { answer: '그렇다', type: [2, 3, 6, 7] },
      { answer: '그렇지 않다', type: [0, 1, 4, 5] },
      
    ]
  },
  {
    q: 'Q. 4 ',
    qlist : '길거리 보다는 산, 바다와 같은 곳에서 쓰줍 하고 싶다.',
    a: [
      { answer: '그렇다', type: [] },
      { answer: '그렇지 않다', type: [] },
    ]
  },
  {
    q: 'Q. 5',
    qlist : '길거리에 쓰레기를 보면 "이 쓰레기는 어디서 왔을까"에 대한 생각을 한다.',
    a: [
      { answer: '그렇다', type: [] },
      { answer: '그렇지 않다', type: [] },
      
    ]
  },

  {
    q: 'Q. 6 ',
    qlist : '내가 한 쓰줍으로 모든 생물들이 행복해지길 바란다.',
    a: [
      { answer: '그렇다', type: [0, 2, 4, 6] },
      { answer: '그렇지 않다', type: [1, 3, 5, 7] },
    ]
  },
  {
    q: 'Q. 7 ',
    qlist : '내가 한 쓰줍이 다른 사람들에게 선한 영향력으로 다가갔으면 좋겠다.',
    a: [
      { answer: '그렇다', type: [0, 2, 4, 6] },
      { answer: '그렇지 않다', type: [1, 3, 5, 7] },
    ]
  },
  {
    q: 'Q. 8 ',
    qlist : '쓰줍하는 동안 길에 쓰레기를 버리는 사람이 보이면 마음의 상처를 받을 것 같다.',
    a: [
      { answer: '그렇다', type: [0, 2, 4, 6] },
      { answer: '그렇지 않다', type: [1, 3, 5, 7] },
    ]
  },
  {
    q: 'Q. 9 ',
    qlist : '쓰줍 전, 장갑 OK, 집게 OK, 쓰봉 OK 준비는 미리미리 하는 게 당연하다.',
    a: [
      { answer: '그렇다', type: [4, 5, 6, 7] },
      { answer: '그렇지 않다', type: [0, 1, 2, 3] },
    ]
  },
  {
    q: 'Q. 10 ',
    qlist : '나는 쓰줍을 할 때 미리 사람들이 어떤 식으로 하는지 둘러보고 간다.',
    a: [
      { answer: '그렇다', type: [4, 5, 6, 7] },
      { answer: '그렇지 않다', type: [0, 1, 2, 3] },

    ]
  },
  {
    q: 'Q. 11 ',
    qlist : '나는 쓰줍을 하기 전 준비물은 딱히 필요없고 세상 모든 곳이 쓰줍 장소이다.',
    a: [
      { answer: '그렇다', type: [0, 1, 2, 3] },
      { answer: '그렇지 않다', type: [4, 5, 6, 7] },
      
    ]
  }

]


const infoList = [
  {
    name: '나도 남도 세상을 좋아지게 만드는 친절한 쓰줍러', // infp/isfp
    desc: '#쓰줍에진심 #배려의아이콘 #나와우리세계모두가하나'
  },
  {
    name: '쓰줍도 알잘딲깔센! 수줍은 스마트 쓰줍러', // intp/istp
    desc: '#알잘딱깔센대명사 #일잘러 #수줍지만할건다함 #스마트'
  },
  {
    name: '쓰줍러와 쓰레기 모두 내품에 모아모아 댕댕이 쓰줍러',  // enfp/esfp
    desc: '#인간댕댕이 #사랑이넘침 #인싸쓰줍러 #미루지만할땐함'
  },
  {
    name: '새로운 쓰줍 장소 프로 탐색 쓰줍러', // entp/estp
    desc: '#프로탐색러 #도전을즐김 #근거있는쓰줍 #배웅을즐김'
  },
  {
    name: '내가 좋아하는 장소와 사람은 소중한 쓰줍러',  // infj/isfj
    desc: '#더불어사는세상 #내장소내사람 #통찰력과영감 #헌신그리고인내심'
  },
  {
    name: '계획적이고 철저한 책임감 뿜뿜 쓰줍러', // intj/istj
    desc: '#쓰레기레이더망 #이골목저골목완료 #독립적인쓰줍러 #계획대로되고있어'
  },
  {
    name: '함께해요 쓰줍! 사람과 환경러버 헌신 쓰줍러', // enfj/esfj
    desc: '#혼자보단함께 #헌신 #지구야미안해사랑해'
  },
  {
    name: '이론도 실전도 궁금한게 너무 많은 리더 쓰줍러', // entj/estj
    desc: '#쓰줍도그냥할수없지 #무한서치 #쓰줍도할겸운동은겸사겸사'
  }
]
