import { QuestionPosition } from "../configs/board";
import { Answer, AnswerKeyValue } from "../types";

export enum QuestionLevel {
  EASY = "EASY",
  NORMAL = "NORMAL",
  MIDDLE = "MIDDLE",
  HARD = "HARD",
  SUPER_HARD = "SUPER_HARD",
}

export type Question = {
  image?: string;
  video?: string;
  question: string;
  answers: Answer[];
  correctAnswer: AnswerKeyValue;
  time?: number;
  explaination?: {
    image?: string;
    content: string;
  };
  level: QuestionLevel;
  position: {
    row: number;
    col: number;
  };
};

export const QuestionData: Question[] = [
  // Q1
  {
    question:
      "Tên ngôi làng cổ của Nhật Bản được cho là nguồn cảm hứng cho bối cảnh trong truyện tranh Doraemon là gì?",
    image: 'images/questions/q1.jpg',
    answers: [
      {
        content: "Làng Takayama",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Làng Shirakawago",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Làng Tottori",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Làng Toyama",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.B,
    level: QuestionLevel.HARD,
    position: QuestionPosition[4],
    explaination: {
      content: `Shirakawa-go là ngôi làng cổ ở tỉnh Gifu, Nhật Bản, nổi tiếng với những ngôi nhà mái tranh dốc đứng theo kiến trúc Gassho-zukuri. Được UNESCO công nhận là Di sản Thế giới từ năm 1995, làng Shirakawa-go mang vẻ đẹp tuyệt vời suốt các mùa: tuyết phủ trắng vào mùa đông, sắc xanh tươi mát vào mùa xuân hè, và lá đỏ rực rỡ vào mùa thu. Đây là biểu tượng của sự hòa hợp giữa con người và thiên nhiên, là điểm đến lý tưởng để trải nghiệm vẻ đẹp truyền thống yên bình của Nhật Bản.`,
      image: 'images/questions/q1_1.jpg'
    }
  },
  // Q2
  {
    question: "Shizuka đang diện đồ để đi lễ hội Bon. Cô bé đã chọn một bộ trang phục truyền thống của nhật bản. Tên gọi của nó là gì?",
    image: "images/questions/q2.jpg",
    answers: [
      {
        content: "Yukata",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Tomesode",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Furisode",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Houmongi",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.C,
    level: QuestionLevel.MIDDLE,
    position: QuestionPosition[7],
  },
  // Q3
  {
    question: `Suneo và Chaien thường rủ Nobita tham gia một môn thể thao rất phổ biến ở Nhật Bản, đến nỗi nó còn được mệnh danh là "vua của các môn thể thao". Đó là môn thể thao nào?`,
    image: "images/questions/q3.jpg",
    answers: [
      {
        content: "Bóng đá",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Bóng bầu dục",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Pickleball",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Bóng chày",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.D,
    level: QuestionLevel.EASY,
    position: QuestionPosition[12],
  },
  // Q4
  {
    question: 
`Cậu nhỏ luôn thích khoe khoang, 
Đồ chơi mới nhất mang sang mọi người. 
Hùa theo "anh lớn" đôi lời, 
Gặp nguy lại núp, khóc rồi cầu xin.
Dù tinh ranh, lắm chuyện phiền, Nhưng cậu chẳng thiếu bạn hiền kề bên.

Cậu nhỏ trong bài thơ này là ai?
`,
    answers: [
      {
        content: "Nobita",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Suneo",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Chaien",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Dekisugi",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.B,
    level: QuestionLevel.EASY,
    position: QuestionPosition[10],
  },
  // Q5
  {
    question: "Nhật Bản nằm ở vị trí nào trên bản đồ thế giới?",
    image: "images/questions/q4.jpg",
    answers: [
      {
        content: "Phía Tây của châu Á",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Phía Nam của châu Á",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Phía Đông của châu Á, gần Thái Bình Dương",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Trung tâm châu Á",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.C,
    level: QuestionLevel.NORMAL,
    position: QuestionPosition[0],
  },
  // Q6
  {
    question: "Ba của Nobita đã bo cho Nobi 1 đồng tiền xu. Đơn vị của đồng xu này là gì?",
    image: 'images/questions/q7.jpg',
    answers: [
      {
        content: "Won",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Yên",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Baht",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Nhân dân tệ",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.B,
    level: QuestionLevel.HARD,
    position: QuestionPosition[5],
  },
  // Q7
  {
    question:
      "Suneo đang ăn một món ăn vô cùng quen thuộc với người Nhật, tên món ăn này là?",
    image: 'images/questions/q8.jpg',
    answers: [
      {
        content: "Nagashi somen",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Ramen",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Bánh trôi nước",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Mì Udon",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.A,
    explaination: {
      content: 'Nagashi somen còn được gọi là bún trôi ống tre =))'
    },
    level: QuestionLevel.MIDDLE,
    position: QuestionPosition[11],
  },
  // Q8
  {
    question: "Món ăn vặt mà các bạn vừa xem video ở trên là gì?",
    video: "images/questions/q9.mp4",
    time: 60,
    answers: [
      {
        content: "Mochi",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Sushi",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Dorayaki",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Takoyaki",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.C,
    explaination: {
      content: 'Dorayaki là bánh rán ngọt truyền thống của Nhật, gồm hai lớp bánh mềm kẹp nhân đậu đỏ. Bánh có vị ngọt dịu, thơm ngon và rất phổ biến. Đây là món ăn yêu thích của Doraemon, gắn liền với hình ảnh cậu mèo máy.'
    },
    level: QuestionLevel.MIDDLE,
    position: QuestionPosition[8],
  },
  // Q9
  {
    question:
      "Trong văn hóa dùng đũa của Nhật Bản, hành động nào sau đây được coi là không phù hợp?",
    video: "images/questions/q10.mp4",
    time: 60,
    answers: [
      {
        content:
          "Không dùng đũa để chỉ trỏ hay chọc vào người khác",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content:
          "Đặt đũa ngang trên bát khi nghỉ tay",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content:
          "Chuyền thức ăn trực tiếp từ đũa này sang đũa khác",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content:
          "Dùng đũa để gắp thức ăn nhẹ nhàng",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.C,
    explaination: {
      content: 'Chuyền thức ăn từ đũa này sang đũa khác bị cấm trong văn hóa Nhật Bản vì nó giống với nghi lễ tang lễ. Hành động này được coi là không tôn trọng, vì vậy người Nhật thường tránh làm trong bữa ăn.'
    },
    level: QuestionLevel.NORMAL,
    position: QuestionPosition[17],
  },
  // Q10
  {
    question:
      'Nobita và Doraemon sử dụng cỗ máy thời gian để tới thăm Sewashi. Nhưng cỗ máy bị hỏng đã dẫn cả hai tới một địa điểm kì lạ. Theo bạn, nobi và dora đã bị đưa đến thời kì nào?',
    image: "images/questions/q11.jpg",
    answers: [
      {
        content: "Nara",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Minh Trị",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Edo",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Jomon",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.C,
    level: QuestionLevel.HARD,
    position: QuestionPosition[15],
  },
  // Q11
  {
    question: "Bản manga Doraemon được viết bằng những bộ chữ cái nào?",
    image: 'images/questions/q12.jpg',
    answers: [
      {
        content: "Furigana và Hangul",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Nihongo và Romaji",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Kana, Latinh, Furigana",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Kanji, hiragana, katakana",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.D,
    level: QuestionLevel.EASY,
    position: QuestionPosition[19],
  },
  // Q12
  {
    question:
`Hội bạn của Nobita đang lên kế hoạch cho một buổi picnic thật vui vẻ. Tuy nhiên, nobita không biết khi nào là thời điểm thích hợp để hoa đào nở rộ.
 Theo bạn, đâu là khoảng thời gian phù hợp để tổ chức picnic:
`,
    image: 'images/questions/q13.jpg',
    answers: [
      {
        content: "Từ tháng 12-tháng 2",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Từ tháng 3-tháng 5",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Từ tháng 7-tháng 9",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Từ tháng 9-tháng 11",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.B,
    level: QuestionLevel.HARD,
    position: QuestionPosition[16],
  },
  // Q13
  {
    question: "Nhóm bạn của Nôbita đang thi xem ai là người có thể quỳ gối trên chiếc tatami lâu nhất. Ở Nhật bản, đây là kiểu ngồi truyền thống của người Nhật Bản và thể hiện đức tính…?",
    image: 'images/questions/q14.jpg',
    answers: [
      {
        content: "Cần cù, chịu khó",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Cố gắng, nỗ lực",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Nhẫn nại, kiên trì",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Lịch sự, phép tắc",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.C,
    level: QuestionLevel.EASY,
    position: QuestionPosition[2],
  },
  // Q14
  {
    question:
      'Tên "Doraemon" được ghép bởi 2 từ dora và emon. Vậy chúng có ý nghĩa gì?',
    image: "images/questions/q15.jpg",
    answers: [
      {
        content:
          '"Dora" từ "dora" trong tiếng Nhật có nghĩa là "mèo máy", còn "Emon" là phần mở rộng của tên người.',
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content:
          '"Dora" từ "nora neko" (mèo hoang), và "Emon" là cách gọi cổ, có nghĩa là "con mèo đi lạc".',
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content:
          '"Dora" là từ viết tắt của "dorama" (phim truyền hình), còn "Emon" là một từ để chỉ loài động vật kỳ lạ.',
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content:
          '"Dora" là từ "mèo", và "Emon" ám chỉ "người đến từ tương lai"',
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.B,
    level: QuestionLevel.HARD,
    position: QuestionPosition[1],
  },
  // Q15
  {
    question: "Đây là trò chơi thẻ bài nổi tiếng ở xứ sở hoa anh đào. Bạn có biết tên của trò chơi này là gì không?",
    image: "images/questions/q16.jpg",
    answers: [
      {
        content: "Yugioh",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Cloud",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Poker",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Karuta",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.D,
    explaination: {
      content: 'Karuta – Trò chơi thẻ bài truyền thống của Nhật Bản, thường được chơi vào dịp năm mới, liên quan đến việc đọc thơ và tìm thẻ tương ứng.'
    },
    level: QuestionLevel.HARD,
    position: QuestionPosition[14],
  },
  // Q16
  {
    question: "Một trận đấu cờ đã nổ ra giữa Nôbita và suneo, với Nôbita là quân trắng còn suneo là quân đen. Đây là cờ gì?",
    image: "images/questions/q18.jpg",
    answers: [
      {
        content: "Cờ tướng",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Ô ăn quan",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Cờ vây",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Cờ trắng đen",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.C,
    level: QuestionLevel.EASY,
    position: QuestionPosition[6],
  },
  // Q17
  {
    question: "Đây là một loại hình nghệ thuật ở Nhật Bản. Tên gọi của nó là gì?",
    image: "images/questions/q19.jpg",
    answers: [
      {
        content: "Ikebana",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Kabuki",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Hanami",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Shodo",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.A,
    explaination: {
      content: 
`
      Ikebana – Nghệ thuật cắm hoa truyền thống Nhật Bản, thể hiện sự hài hòa giữa con người và thiên nhiên.
      Kabuki – Kịch truyền thống với diễn viên hóa trang cầu kỳ.
      Hanami – Hoạt động ngắm hoa anh đào.
      Shodo – Nghệ thuật viết thư pháp bằng bút lông.
`
    },
    level: QuestionLevel.HARD,
    position: QuestionPosition[18],
  },
  // Q18
  {
        question:
      "Lần đầu tiên Doraemon xuất hiện, chú có màu gì?",
    answers: [
      {
        content: "Xanh dương",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Trắng",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Vàng",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Đỏ",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.C,
    explaination: {
      image: 'images/questions/q6_1.jpg',
      content: ' Sau khi bị chuột cắn mất tai và bạn gái chia tay, Doraemon quá buồn rầu và đã leo lên đỉnh một ngọn tháp, cậu uống một lọ thuốc có chữ "Nỗi buồn" khiến màu sơn của mình chuyển từ vàng sang xanh.'
    },
    level: QuestionLevel.EASY,
    position: QuestionPosition[13],
  },
  // Q19
  {
    question:
      "Nơi nào trong Doraemon thường xuyên là bối cảnh cho các cuộc phiêu lưu và hành động kỳ thú của các nhân vật?",
    answers: [
      {
        content: "Khu rừng sâu",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Công viên gần nhà Nobita",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Khu phố đông đúc ở Tokyo",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Nhà của Shizuka",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.B,
    level: QuestionLevel.MIDDLE,
    position: QuestionPosition[9],
  },
  // Q20
  {
    question:
      "Nhà của Nobita trong Doraemon có một số đặc điểm nổi bật mang đậm dấu ấn văn hóa Nhật Bản. Nhà của cậu thuộc kiểu nhà nào trong xã hội Nhật Bản?",
      image: "images/questions/q20.jpg",
    answers: [
      {
        content: "Nhà có không gian mở, với phòng tatami và cửa sliding kiểu Nhật",
        value: AnswerKeyValue.A,
        key: "A",
      },
      {
        content: "Nhà có các phòng riêng biệt, được thiết kế theo phong cách phương Tây",
        value: AnswerKeyValue.B,
        key: "B",
      },
      {
        content: "Nhà được xây dựng theo kiểu kiến trúc hiện đại, đầy đủ công nghệ cao",
        value: AnswerKeyValue.C,
        key: "C",
      },
      {
        content: "Nhà có không gian tối giản, chủ yếu là phòng khách rộng rãi",
        value: AnswerKeyValue.D,
        key: "D",
      },
    ],
    correctAnswer: AnswerKeyValue.A,
    level: QuestionLevel.EASY,
    position: QuestionPosition[3],
  },
];
